import React from 'react';
import './css/MyAccount.css';
import {useSelector} from 'react-redux';

export function MyAccount(){
    const user=useSelector(state=>state.user);

    return(
        <div id="account">
            <div className = "tag">Name:</div>
            <div className="info">{user.uname}</div>
            <div className = "tag">Position:</div>
            <div className="info">{mapUserTpye(user.type)}</div>
            <div className = "tag">Contact Number:</div>
            <div className="info">{user.phoneNumber}</div>  
            <div className = "tag">Email Address:</div>
            <div className="info">{user.email}</div>
        </div>
    );

    function mapUserTpye(type){
        if(type===0)
            return 'Super Administrator';
        if(type===1)
            return 'Department Administrator';
        if(type===2)
            return 'Administrator';
        if(type===3)
            return 'Meeting Creator';
        if(type===4)
            return 'Participant';
        return 'Candidate';
    }
}