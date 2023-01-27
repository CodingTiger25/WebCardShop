import {json, Link} from "react-router-dom";
import * as React from "react";
import axios, {head, post} from 'axios';
import {useState} from "react";
import styled, {css} from "styled-components";



function Login(){

    const [email, setTheEmail]=useState("");
    const [password, setThePassword] = useState("");

    const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
    }

    const login = async (e)=> {
        e.preventDefault();
        const formData = new FormData();

        await axios({
            method:'POST',
            url: 'http://localhost:8080/token',
            data: JSON.stringify({email,password}),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                withCredentials: true,
            }
        }).then(res => sessionStorage.setItem('Bearer',res.data));

        window.location.replace('http://localhost:3000/');
    }

    const MainPage = styled(Link)`
    text-decoration: underline;
      color: black;
      padding: 5px;
      margin: 4px;
      font-size: 1rem;
      position: relative;
      top:30px;
      left: 3px;
    
    `;

    const Register  = styled(Link)`
      text-decoration: underline;
      color: darkorange;
      padding: 5px;
      margin: 4px;
      font-size: 1rem;
      position: relative;
      top:90px;
      right: 170px;
      left: 40px;
    `;

    const Email = styled.label`
        padding: 10px;
        margin: 10px;
    `;

    const Password = styled.section`
        padding: 10px;
        margin: 10px;
        position: relative;
        left: 3px;
    `;

    const SignIn= styled.section`
        padding: 10px;
        margin: 10px;
        position: relative;
        left: 10px;
    `;


    return(
        <div>
            <h1>
                Sign in
            </h1>

            <form onSubmit={login} action={"/token"} method={"POST"}>

                    <label>Email address:
                        <input type={"text"} onChange={(e) => setTheEmail(e.target.value)}/>
                    </label>
                <div>
                    <label>Password:
                        <input type={"text"} onChange={(e) => setThePassword(e.target.value)}/>
                    </label>

                </div>
                <SignIn>
                <div>
                    <button type = "submit"> SIGN IN</button>
                </div>
                </SignIn>
            </form>
            <MainPage to={'/main'}>Go back to main page</MainPage>
            <Register to ={'/register'}>No account? Sign up</Register>
        </div>
    )

}

export default Login;