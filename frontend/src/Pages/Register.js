import {Link} from "react-router-dom";
import * as React from "react";

function Register(){

    return(
        <div>
            <h1>Register page</h1>

            <div>
                <label>Email address:
                    <input type="text"/>
                </label>
                <label> Confirm email address:
                    <input type="text"/>
                </label>
            </div>

            <div>
                <label>Password:
                    <input type="text"/>
                </label>
                <label>Confirm Password:
                    <input type="text"/>
                </label>
            </div>

            <Link to={'/login'}>Have an account? Sign in here!</Link>

        </div>





    )

}

export default Register