import { Link} from "react-router-dom";
import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import styled, {css} from "styled-components";


//Style components

const NavBackground = styled.section`

    padding: 3rem;
    background: ${props => props.background};
`;

const MainBackground = styled.main`
  
  background-color: blanchedalmond;  
  text-align: left;
  justify-content: left;
  border: 1px solid #000;
  width: 3600px;
  height: 2000px;
  display: block;
`;

const LoginLink = styled(Link)`
    color: azure;
    text-decoration: none;
    text-align: right;
    justify-content: right;
    padding: 10px;
    display: block;
    font-size: 2rem;
`;

const CartLink = styled(Link)`
    color: azure;
    text-decoration: none;
    position: relative;
    right: 35px;
    text-align: right;
    display: block;
    font-size: 2rem;
`;

const CardLink = styled(Link)`
    color: darkred;
    text-decoration: none;
    font-size: 3rem;
    display: block;
`;



function Main(){

    //console.log("This is the jwt: " + sessionStorage.getItem('Bearer'));
    const [user, setUser] = useState(null);

    let token = sessionStorage.getItem('Bearer');

    let signin = false;

    if(user === null){
        signin = false;
    }
    else{
        signin = true;
    }

    useEffect(() => {
        axios.get('http://localhost:8080/main', {headers: {
                "Authorization": `Bearer ${token}`
            }}).then(res => {
            setUser(res.data)
            //console.log(res.data);
        });

    }, [])

    sessionStorage.setItem('userName', user);
    console.log("This is the user from session: " + sessionStorage.getItem('userName'))

    return(


                <nav>
                    <NavBackground background = "cornflowerblue">
                        {!signin && <LoginLink to={'/login'}>Login</LoginLink>}
                        {signin && <p>{user}</p>}
                        <CartLink to={'/cart'}>Cart</CartLink>
                    </NavBackground>


                    <div>
                        <MainBackground>
                            <CardLink to={'/magic'}>Magic: The Gathering</CardLink>
                            <CardLink to={'/yugioh'}>Yu-Gi-Oh</CardLink>
                        </MainBackground>
                    </div>

                </nav>
    )
}

export default Main;