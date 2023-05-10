import * as React from "react";
import {Form, Link} from "react-router-dom";
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
function Yugioh()
{

    const [cardList, setCardList] = useState([]);

    const url = 'http://localhost:8080/yugioh';

    useEffect(()=> {
        axios.get(url).then(res => {
            const items = res.data;
            setCardList(items);
            console.log(items);
        });
    },[]);

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

    return (
        <div>
            <p>Hello from yugioh</p>
            <Link to={'/main'}>Back to main</Link>

            <div>
                {displayCards(cardList)}
            </div>
        </div>

    )
}

export default Yugioh;