import React from 'react';
import './css/SideBar.css';
import logo from './images/logo.png'
import {useSelector,useDispatch} from 'react-redux';
import {changePage,findMeetingsByUserId} from './actions.js';

const myFiles={key:2,value:"My Files"};
const myAccount={key:3,value:"My Account"};
const createMeeting={key:4,value:"Create Meeting"};
const createAccount={key:5,value:"Create Account"};
const candidateButtons=[myFiles,myAccount];
const participantButtons=[myAccount];
const meetingCreatorButons=[createMeeting,myAccount];
const adminButtons=[createMeeting,createAccount,myAccount];

export function SideBar(){
    const userType=useSelector(state=>state.user.type);
    const id=useSelector(state=>state.user.uid);
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
                <div key={1} onClick={()=>{skip(1);dispatch(findMeetingsByUserId(id))}}>My Meeting</div>
                {candidateButtons.map(button=><div key={button.key} onClick={()=>skip(button.key)}>{button.value}</div>)}
            </div>
            );
        else if(userType===4)
            return(
            <div className="buttonBar">
                <div key={1} onClick={()=>{skip(1);dispatch(findMeetingsByUserId(id))}}>My Meeting</div>
                {participantButtons.map(button=><div key={button.key} onClick={()=>skip(button.key)}>{button.value}</div>)}
            </div>
            );
        else if(userType===3)
            return(
            <div className="buttonBar">
                <div key={1} onClick={()=>{skip(1);dispatch(findMeetingsByUserId(id))}}>My Meeting</div>
                {meetingCreatorButons.map(button=><div key={button.key} onClick={()=>skip(button.key)}>{button.value}</div>)}
            </div>
            );
        else if(userType===2||userType===1||userType===0)
            return(
            <div className="buttonBar">
                <div key={1} onClick={()=>{skip(1);dispatch(findMeetingsByUserId(id))}}>My Meeting</div>
                {adminButtons.map(button=><div key={button.key} onClick={()=>skip(button.key)}>{button.value}</div>)}
            </div>
            );
    }
    function skip(page){
        dispatch(changePage(page));
    }
}
