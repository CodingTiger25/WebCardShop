import {Form, Link} from "react-router-dom";
import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
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
    const [user, setUser] = useState(() => sessionStorage.getItem('userName'));

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
                <DeleteButton>REMOVE</DeleteButton>
            </div>
        ))
    }

    return(

        <div>

            <Link to={'/main'}>Return to Main</Link>
            <h1>This is the cart page!!!</h1>
            {displayCart(list)}




        </div>
    )
}



export default Cart;