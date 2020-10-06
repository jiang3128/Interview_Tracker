import React from 'react';
import './css/SideBar.css';
import logo from './images/logo.png'
import {useSelector} from 'react-redux';

const candidateButtons=["My Meetings","My Files","My Account"];
const participantButtons=["My Meetings","My Account"];
const meetingCreatorButons=["My Meetings","Create Meeting","My Account"];
const adminButtons=["My Meetings","Create Meeting","Create Account","My Account"];

export function SideBar(){
    const userType=useSelector(state=>state.user.type);
    
    return(
        <div className="sider">
            <div className="logo-container">
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                </div>
            </div>
            <h2>Smart<br/>Faculty Interview Meeting Tracker</h2>
            {button(userType)}
        </div>
    );
}
function button(userType){
    var i=0;
    if(userType===5)
        return(
        <div className="buttonBar">
            {candidateButtons.map(button=><div key={i++}>{button}</div>)}
        </div>
        );
    else if(userType===4)
        return(
        <div className="buttonBar">
            {participantButtons.map(button=><div key={i++}>{button}</div>)}
        </div>
        );
    else if(userType===3)
        return(
        <div className="buttonBar">
            {meetingCreatorButons.map(button=><div key={i++}>{button}</div>)}
        </div>
        );
    else if(userType===2||userType===1||userType===0)
        return(
        <div className="buttonBar">
            {adminButtons.map(button=><div key={i++}>{button}</div>)}
        </div>
        );
}