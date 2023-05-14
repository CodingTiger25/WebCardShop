import styled from "styled-components";


export const CartPage = styled.div`
    background-color: silver;
    height: 100%;
    `;

export const CartList = styled.div`
    background-color: white;
    width: 30%;
    position: relative;
    left: 7em;
    `;

//Styles for portions of the cart list
export const CardName = styled.div`
  position: relative;
  bottom: 12em;
  left: 12em;
  padding: 5px;
`;

export const RemoveButton = styled.div`
  position: relative;
  bottom: 17em;
  left: 13em;
  padding: 5px;
`;

export const Amount = styled.div`
    position: relative;
    left: 40em;
    bottom: 12em;
    `;

export const Cost = styled.div`
    position: relative;
    left: 40em;
    bottom: 12em;
    `;
export const Line = styled.p`
    background: black;
    height: 2px;
    position: relative;
    bottom: 12em;
`
export const GrandTotal = styled.div`
    background: white;
    position: relative;
    left: 125em;
    top: -50em;
    width: 13em;
    height: 10em;
`;

export const Total = styled.p`
    color: red;
`;
