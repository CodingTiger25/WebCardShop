import * as React from "react";
import {Form, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import styled, {css} from "styled-components";

function Yugioh()
{
    return (
        <div>
            <p>Hello from yugioh</p>
            <Link to={'/main'}>Back to main</Link>
        </div>

    )
}

export default Yugioh;