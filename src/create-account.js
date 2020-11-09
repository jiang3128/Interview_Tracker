import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {findUserType} from './actions.js'
import './css/create-account.css';

export function CreateAccount(){
    const dispatch = useDispatch();
    const userTypes = useSelector(state=>state.userType);
    

    useEffect(()=>{
        dispatch(findUserType());
    },[dispatch]);

    var userName='';
    var emailAddress='';
    var userType=-1;
    
    
    return(
        <form>
            <div id = "CreateAccount">
                <p>User Name:</p>
                <div className="input">
                    {/* not sure how text works  */}
                    <input type = "text" onchange={event=>setUserName(event)}></input>
                </div>
                <p>Email Address:</p>
                <div className="input">
                    <input id = "email" type="text" onchange={event=>setUEmailAddress(event)}></input>
                </div>
                <p>User Type:</p>
                <div className="input">
                    <select onChange = {event=>setUserType(event)}>
                        <option value = {-1}></option>
                        {/* {userTypes.map(userType=><option key={userType.uid} value={userType.uid}>{userType.uname}</option>)} */}
                        {/* <option>SuperAdmin</option>
                        <option>Admin</option>
                        <option>Meeting Creator</option>
                        <option>Candidate</option> */}
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

    function setUserType(event){
        userType=event.target.value;
    }

    function submitMeeting(){
        if(userName===''){
            alert('Please Enter a Name')
        } else if(emailAddress===''){
            alert('please Enter an Email')
        } else if(userType===-1){
            alert('please choose a user type')
        } else {
            var accountList=[];
            if(userName!==''){
                accountList.push(userName);
            }
            if(emailAddress!==''){
                accountList.push(emailAddress);
            }
            if(userType!==-1){
                accountList.push(userType);
            }
            // userList=userList.map(user=>{return{uid:parseInt(user)};});
            // createAccount(userList,start.toJSON().substr(0, 19).replace(/T/,' '),
            // end.toJSON().substr(0, 19).replace(/T/,' '),parseInt(location));
            alert('Create Account Success!');
        }
    }
}

