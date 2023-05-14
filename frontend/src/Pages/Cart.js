import {Link} from "react-router-dom";
import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import {CartPage, CartList, Amount, Cost,
    CardName,RemoveButton, Line, GrandTotal, Total
} from "../Styles/Cart.styled";


const MagicCard = styled.section`
    display: inline-grid;
    padding: .4rem;
    margin: 1rem;
    border: 4px solid black;
`;
const MagicSize = styled.img`
    height: 12rem;
    width:  12rem;
`;
const MagicName = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 2rem;
`;

const DeleteButton = styled.button`
  color: black;
  size: 4rem;
`;


function Cart(){

    const [list, setList]= useState([]);
    const [total, setTotal] = useState(0);
    const [user, setUser] = useState(() => sessionStorage.getItem('userName'));

    let grand = 0;


    function deleteItem (itemId) {
        axios.delete(`http://localhost:8080/cart/${itemId}`)
            .then(
                res => {
                    alert("Deleted");
                    window.location.reload();
                    console.log("deleted");
                }
            )
    }

    useEffect( () => {
        axios.get(`http://localhost:3000/cart`, {
            params: {
                name: user
            }
        }).then(
            res => {
                const result = res.data;
                setList(result);
                console.log(result);
            }
        )
    }, [])



    function displayCart(Items)
    {
        let items = Array.from(Items);
        return items.map((d) => (
            <div key ={d._id}>

                <MagicSize src={`../images/${d.image}`}/>
                <CardName><MagicName>{d.name}</MagicName></CardName>

                <Amount><p>AMOUNT: {d.quantity}</p></Amount>
                <Cost><p>Price: ${d.price}.00</p></Cost>
                <script>{grand += (d.quantity * d.price)}</script>
                <RemoveButton><DeleteButton onClick={() => deleteItem(d.id)}>
                    REMOVE</DeleteButton></RemoveButton>
                <Line></Line>
            </div>
        ))
    }

    return(

        <CartPage>

            <Link to={'/main'}>Return to Main</Link>
            <h1>Shopping Cart</h1>

            <CartList>
                {displayCart(list)}
            </CartList>






            <GrandTotal>
                <p>Grand total: </p>
                <Total>${grand}.00</Total>
            </GrandTotal>


        </CartPage>
    )
}



export default Cart;