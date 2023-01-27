import {Link} from "react-router-dom";
import styled, {css} from "styled-components";
import * as React from "react";

const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    color: palevioletred;
  
`;

const Wrapper1 = styled.section`
    padding: 4rem;
    background: papayawhip;
`;

const MainLink = styled(Link)`
    text-decoration: none!important;
    color: green;
    font-size: 3rem;
    height: 50vh;
`;

const Wrapper2 = styled.section`
    padding: 35rem;
    background: silver;
    justify-content: center;
    display: block;
`;


function Home(){
    return(
        <div>
            <Wrapper1>
               <Title>
                    <h1>
                        This is the home of the card shop
                    </h1>
                </Title>
            </Wrapper1>


            <Wrapper2>

                    <MainLink to ={'/main'}>Enter the card site</MainLink>

            </Wrapper2>

        </div>
    )
}
export default Home;