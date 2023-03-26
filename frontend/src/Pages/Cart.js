import {Form, Link} from "react-router-dom";
import * as React from "react";
import {useEffect, useState} from "react";
import axios, {Axios} from "axios";
import styled, {css} from "styled-components";


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
                <MagicName>{d.name}</MagicName>
                <MagicSize src={`../images/${d.image}`}/>
                <p>AMOUNT: {d.quantity}</p>
                <p>Price: ${d.price}.00</p>
                <script>{grand += (d.quantity * d.price)}</script>
                <DeleteButton onClick={() => deleteItem(d.id)}>REMOVE</DeleteButton>
            </div>
        ))
    }

    return(

        <div>

            <Link to={'/main'}>Return to Main</Link>
            <h1>This is the cart page!!!</h1>
            {displayCart(list)}

            <p>Grand total: ${grand}.00</p>




        </div>
    )
}



export default Cart;