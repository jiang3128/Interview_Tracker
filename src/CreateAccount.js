import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {createAccount} from './actions.js'
import './css/CreateAccount.css';

export function CreateAccount(){

    return(
        <form>
            <div id = "CreateAccount">
                <p>User Name:</p>
                <div className="input">
                    <input type = "text"></input>
                </div>
                <p>Email Address:</p>
                <div className="input">
                    <input id = "email" type="text"></input>
                </div>
                <p>User Type:</p>
                <div className="input">
                    <select>
                        <option>SuperAdmin</option>
                        <option>Admin</option>
                        <option>Meeting Creator</option>
                        <option>Candidate</option>
                    </select>
                </div>
                <div id="submit-button" onClick = {()=>submitMeeting()}>Submit</div>
            </div>
        </form>
    );
}

function submitMeeting(){

    alert('Create Account Success!');
}