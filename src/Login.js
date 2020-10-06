import React from 'react';
import './css/Login.css';
import {useDispatch,useSelector} from 'react-redux';
import logo from './images/logo.png';
import {findUser} from './actions.js';

export function Login(){
    const dispatch=useDispatch();
    const loginError=useSelector(state=>state.loginError);
    return(
        <div id="login">
            <div id="login-header">
                <img src={logo} alt="Logo"/>
            </div>
            <p>E-mail:</p>
            <input id="email" type="text"/>
            <p>Password:</p>
            <input id="password" type="password"/>
            <div id="login-error">{loginError&&error()}</div>
            <div id="login-button" onClick={login}>Login</div>
        </div>
    );
    function error(){
        return "Invaild e-mail or password!";
    }
    
    function login(){
        dispatch(findUser(document.getElementById('email').value,document.getElementById('password').value));
    }
}