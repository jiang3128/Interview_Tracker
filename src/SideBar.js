import React from 'react';
import './SideBar.css';
import logo from './images/logo.png'
import {useSelector} from 'react-redux';

const candidateButtons=["My Meetings","My Files","My Account"];

export function SideBar(){
    const userType=useSelector(state=>state.userType);
    
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
    if(userType===1)
        return(
        <div className="buttonBar">
            {candidateButtons.map(button=><div key={i++}>{button}</div>)}
        </div>
        );
}