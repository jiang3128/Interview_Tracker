import React from 'react';
import './css/SideBar.css';
import logo from './images/logo.png'
import {useSelector,useDispatch} from 'react-redux';
import {changePage} from './actions.js';

const myMeeting={key:1,value:"My Meeting"};
const myFiles={key:2,value:"My Files"};
const myAccount={key:3,value:"My Account"};
const createMeeting={key:4,value:"Create Meeting"};
const createAccount={key:5,value:"Create Account"};
const candidateButtons=[myMeeting,myFiles,myAccount];
const participantButtons=[myMeeting,myAccount];
const meetingCreatorButons=[myMeeting,createMeeting,myAccount];
const adminButtons=[myMeeting,createMeeting,createAccount,myAccount];

export function SideBar(){
    const userType=useSelector(state=>state.user.type);
    const dispatch=useDispatch();

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
    function button(userType){
        if(userType===5)
            return(
            <div className="buttonBar">
                {candidateButtons.map(button=><div key={button.key} onClick={()=>skip(button.key)}>{button.value}</div>)}
            </div>
            );
        else if(userType===4)
            return(
            <div className="buttonBar">
                {participantButtons.map(button=><div key={button.key} onClick={()=>skip(button.key)}>{button.value}</div>)}
            </div>
            );
        else if(userType===3)
            return(
            <div className="buttonBar">
                {meetingCreatorButons.map(button=><div key={button.key} onClick={()=>skip(button.key)}>{button.value}</div>)}
            </div>
            );
        else if(userType===2||userType===1||userType===0)
            return(
            <div className="buttonBar">
                {adminButtons.map(button=><div key={button.key} onClick={()=>skip(button.key)}>{button.value}</div>)}
            </div>
            );
    }
    function skip(page){
        console.log(page);
        dispatch(changePage(page));
    }
}
