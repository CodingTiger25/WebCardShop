import * as React from "react";
import {Form, json, Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import styled, {css} from "styled-components";

//Styled Components
const NavBar = styled.section`
  background: cornflowerblue;
  height: 8rem;
`;

const MainPage = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  color: beige;
  padding: 3px;
  border: 4px solid black;
  background-color: blue;
`;

const MagicSize = styled.img`
  height: 35%;
  width:  35%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Cart = styled.section`
  height: 170px;
  width: 170px;
  border: 5px solid black ;
  justify-content: right;
  position: relative;
  top: 300px;
  right: 140px;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
`;

const CartButton = styled.section`
  position: relative;
  display: inline-block;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
`;

const Subtract = styled.button`
  size: 50px;
  width: 20px;
  font-size: 19px;
  font-weight: bold;
  position: relative;
  top: 40px;
  float: left;
`;

const Add = styled.button`
  size: 40px;
  font-size: 19px;
  font-weight: bold;
  justify-content: right;
  float: right;
`;

const Amount = styled.p`
  size: 40px;
  font-size: 19px;
  font-weight: bold;
  height: 5px;
  position: relative;
  top: 20px;
  right:15px;
  text-align: center;
`;

const AddCart = styled.button`
  size: 200px;
  margin: 3rem;
  font-weight: bold;

`;

const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    text-decoration: underline;
    color: black;
    
`;



function YugiohView(){

    const {id} = useParams();
    const [card, SetCard] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [cartAmount,setCartAmount] = useState(0);
    const [cartQuantity, setCardQuantity] = useState(0);
    //let token = sessionStorage.getItem('Bearer');
    let userName = sessionStorage.getItem('userName');
    //const [userName, setUserName] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:3000/yugiohview/${id}`).then(
            res => {
                const result = res.data;
                SetCard(result);
                //console.log(result);
            }
        )

        axios.get(`http://localhost:8080/cartamount`, {
            params: {
                name: userName
            }
        }).then(
            res => {
                const result = res.data;
                setCartAmount(result);
                //console.log(result);
            }
        )
    },[])




    //console.log(`Amount of cards in cart is: ${cartAmount}`)
    const subtract = () => {
        setQuantity(Math.max(quantity - 1, 0));
    }

    const add = () => {
        setQuantity(quantity + 1);
    }

    const addToCart = async (e) => {


        e.preventDefault();

        if(userName === null)
        {
            alert("Please Log in")
        }
        else{

            let card_id = Number(id);
            let cust_name = userName;
            let name = card.name;
            let image = card.image;
            let items = quantity;
            let price = card.price;

            let field = JSON.stringify({card_id, cust_name, quantity, name, image,price})
            let cart_field = JSON.stringify({items,cust_name})

            await axios({
                method: "POST",
                url: "http://localhost:8080/cart",
                data: field,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",
                    withCredentials: true
                }

            }).then(console.log(`id: ${id}, name: ${userName}, 
             amount: ${quantity}, and card name: ${card.name}, with price: ${price}`))

            await axios({
                method:"PUT",
                url:"http://localhost:8080/cartamounts",
                data: cart_field,
                headers:{
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",
                    withCredentials: true
                }
            })
            //console.log(cart_field);
            alert(`${card.name} has been added to cart`)
        }
    }

    //console.log(card);
    return(
        <div>
            <NavBar>
                <MainPage to={'/main'}>Main page</MainPage>
            </NavBar>
            <Cart>

                <Subtract onClick={subtract}>-</Subtract>


                <Amount>
                    {quantity}
                </Amount>

                <div>
                    <Add onClick={add}>+</Add>
                </div>

                <div>
                    <AddCart onClick={addToCart}>Add to cart</AddCart>
                </div>
            </Cart>

            <div>
                <Title>{card.name}</Title>
                <MagicSize src={`../images/${card.image}`}/>
            </div>

        </div>
    )

}

export default YugiohView;