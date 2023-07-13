import styled from "styled-components";
import {Link} from "react-router-dom";


//Style components
export const Title = styled.h1`
  
    text-align: center;
    font-size: 3rem;
    text-decoration: underline;
    color: coral;
    width: 50%
`;

export const Background = styled.body`

    background-size: 100%;
    background-color: burlywood;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const Content = styled.section`
    width: 50%;
`;

export const MagicCard = styled.section`
    display: inline-grid;
    background-color: white;
    padding: .9rem;
    margin: 1rem;
    border: 4px solid black;
`;
export const MagicSize = styled.img`
    height: 26rem;
    width:  23rem;
`;
export const MagicName = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 2rem;
`;

export const PriceCondition = styled.p`
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