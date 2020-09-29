import React from 'react';
import './SideBar.css';
import logo from './images/logo.jpg'

const candidateButtons=["My Meetings","My Account"];
export function SideBar(props){
    var userType=props.type;
    return(
        <div className="sider">
            <div className="logo-container">
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                </div>
            </div>
            <h1>Smart Faculty Interview Meeting Tracker</h1>
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