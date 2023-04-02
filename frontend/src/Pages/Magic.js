import * as React from "react";
import {Form, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import styled, {css} from "styled-components";


//Style components
const Title = styled.h1`
  
    text-align: center;
    font-size: 3rem;
    text-decoration: underline;
    color: coral;
`;

const Background = styled.body`

    background-size: 100%;
    background-color: burlywood;
    margin: 0;
    padding: 0;
    height: 100vh;
    

`;

const MagicCard = styled.section`
    display: inline-grid;
    padding: .4rem;
    margin: 1rem;
    border: 4px solid black;
`;
const MagicSize = styled.img`
    height: 26rem;
    width:  23rem;
`;
const MagicName = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 2rem;
`;

const PriceCondition = styled.p`
    color: black;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    width: 150px;
    padding: 1rem;
    margin: 1rem;
    display: inline-block;
`;
// End of styled components

function Magic(){

const [cardList, setCardList] = useState([]);
const [cartQuantity, setCartQuantity] = useState(0);

    const [list, setList]= useState([]);
    const [total, setTotal] = useState(0);
    const [user, setUser] = useState(() => sessionStorage.getItem('userName'));

    let userName;
    let token = sessionStorage.getItem('Bearer');

const url = 'http://localhost:8080/magic';

//Retrieves the list of cards in the database and, if any the users list of cards in their cart.
useEffect(() => {
    axios.get(url).then(res => {
        const items = res.data;
        setCardList(items);
        console.log(items);
    })

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

    axios.get('http://localhost:8080/main', {headers: {
            "Authorization": `Bearer ${token}`
        }}).then(res => {
        userName = res.data;
    });

}, [])

    //Signin check for a current user
    let signin = false;
    if(userName === null){
        signin = false;
    }
    else{
        signin = true;
    }


    //Displays item quantity in a users cart
    function addTotal(listAmount)
    {
        let cards = Array.from(listAmount);
        let amount = 0;
       for(let q in cards){

           amount+= cards[q]["quantity"];

    }
    return amount;

    }

    //Displays the cards in this category of the store
    function displayCards(List)
    {
        let cards = Array.from(List);
        return cards.map((d) => (
            <MagicCard>
            <div key={d._id}>
                <h2><MagicName to={`/cardview/${d.id}`}>{d.name} </MagicName></h2>
                <div>

                    <MagicSize src ={`/images/${d.image}`}/>

                </div>
                <PriceCondition>Price: ${d.price}.00</PriceCondition>
                <PriceCondition>Condition: {d.condition}</PriceCondition>
            </div>
            </MagicCard>
        ))
    }


    return(
        <Background>
            <div>
                <div>
                    <Link to={'/main'}>Back to Main Page</Link>
                </div>
                <Title>Magic: The Gathering</Title>

                <div>
                    {displayCards(cardList)}
                </div>
                <div>
                    <h2>Cart</h2>
                    {!signin && <p> Items ()</p>}
                    {signin && <p>Items: {addTotal(list)}</p>}
                </div>


            </div>
        </Background>
    )

}

export default Magic;