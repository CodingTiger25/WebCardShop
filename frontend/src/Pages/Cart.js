import {Form, Link} from "react-router-dom";
import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";





function Cart(){

    const [list, setList]= useState([]);
    const [user, setUser] = useState(() => sessionStorage.getItem('userName'));




        //setUser(sessionStorage.getItem('userName'))
        /*let token = sessionStorage.getItem('Bearer');
        axios.get('http://localhost:8080/main', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            setUser(res.data);
            console.log("The user: " + user);
        });*/

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
                <h3>{d.name}</h3>
                <img src={`../images/${d.image}`}/>
                <p>AMOUNT: {d.quantity}</p>
                <Link to={'/main'}>Return to Main</Link>

            </div>
        ))
    }

    return(

        <div>
            <h1>This is the cart page!!!</h1>
            {displayCart(list)}
        </div>
    )
}



export default Cart;