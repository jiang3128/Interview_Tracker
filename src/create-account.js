import React from 'react';
import './css/create-account.css';

export function CreateAccount(){

    var userName='';
    var emailAddress='';
    var password='';
    var userType=-1;
    
    return(
        <form>
            <div id = "CreateAccount">
                <p>User Name:</p>
                <div className="input">
                    <input type = "text" onChange={event=>setUserName(event)}></input>
                </div>
                <p>Email Address:</p>
                <div className="input">
                    <input id = "create-email" type="text" onChange={event=>setUEmailAddress(event)}></input>
                </div>
                <p>Password:</p>
                <div className="input">
                    <input id = "create-password" type="text" onChange={event=>setPassword(event)}></input>
                </div>
                <p>User Type:</p>
                <div className="input">
                    <select onChange = {event=>setUserType(event)}>
                        <option value = {-1}></option>
                        <option value={0}>Super Administrator</option>
                        <option value={1}>Department Administrator</option>
                        <option value={2}>Administrator</option>
                        <option value={3}>Meeting Creator</option>
                        <option value={4}>Participant</option>
                        <option value={5}>Candidate</option>
                    </select>
                </div>
                <div id="submit-button" onClick = {()=>submitMeeting()}>Submit</div>
            </div>
        </form>
    );

    function setUserName(event){
        userName=event.target.value;
    }

    function setUEmailAddress(event){
        emailAddress=event.target.value;
    }

    function setPassword(event){
        password=event.target.value;
    }

    function setUserType(event){
        userType=event.target.value;
        console.log(userType);
    }

    function submitMeeting(){
        if(userName===''){
            alert('Please enter a user name');
        } else if(emailAddress===''){
            alert('Please enter an e-mail');
        }else if(password===''){
            alert('Please enter a passwaord');
        } else if(userType<0){
            alert('Please choose a user type');
        } else {
            console.log(userType);
            alert('Create Account Success!');
        }
    }
}

