import React,{useEffect} from 'react';
import './App.css';
import {MeetingTracker} from'./MeetingTracker.js';
import {SideBar} from './SideBar.js';
import {useDispatch,useSelector} from 'react-redux';
import {findAllMeetings} from './actions.js';
import logo from './images/logo.png'

const pages=["","My Meetings","My Files","My Account"];

function App() {
  const dispatch=useDispatch();
  const meetings=useSelector(state=>state.meetings);
  const currentPage=useSelector(state=>state.currentPage);
  const loginError=useSelector(state=>state.loginError);
  const username=useSelector(state=>state.user.name);

  useEffect(()=>{
    dispatch(findAllMeetings());
  },[dispatch]);

  return (
    <div id="meeting_tracker_root">
      <div className="Header_Info">
        <p>Welcome! {username}</p>
        {(currentPage!==0)&&<div>Logout</div>}
      </div>
      <SideBar/>
      <div id="main">
        <div id="title">{pages[currentPage]}</div>
        {(currentPage===0)&&<div id="login">
          <div id="login-header">
            <img src={logo} alt="Logo"/>
          </div>
          <p>E-mail:</p>
          <input type="text"/>
          <p>Password:</p>
          <input type="password"/>
          <div id="login-error">{loginError&&error()}</div>
          <div id="login-button">Login</div>
        </div>}
        {(currentPage===1)&&meetings.map(meetings=><MeetingTracker key={meetings.mid} info={{time:meetings.startTime,room:meetings.room,location:meetings.location}}/>)}
      </div>
    </div>
  );
}

function error(){
  return "Invaild e-mail or password!";
}

export default App;
