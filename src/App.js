import React,{useEffect} from 'react';
import './css/App.css';
import {MeetingTracker} from'./MeetingTracker.js';
import {SideBar} from './SideBar.js';
import {Login} from './Login.js';
import {CreateMeeting} from './CreateMeeting.js';
import {useDispatch,useSelector} from 'react-redux';
import {findAllMeetings,userLogout} from './actions.js';

const pages=["","My Meetings","My Files","My Account","Create Meeting"];

function App() {
  const dispatch=useDispatch();
  const meetings=useSelector(state=>state.meetings);
  const currentPage=useSelector(state=>state.currentPage);
  const username=useSelector(state=>state.user.uname);

  useEffect(()=>{
    dispatch(findAllMeetings());
  },[dispatch]);

  return (
    <div id="meeting_tracker_root">
      <div className="Header_Info">
        <p>Welcome! {username}</p>
        {(currentPage!==0)&&<div onClick={()=>logout()}>Logout</div>}
      </div>
      <SideBar/>
      <div id="main">
        <div id="title">{pages[currentPage]}</div>
        {(currentPage===0)&&<Login/>}
        {(currentPage===1)&&meetings.map(meeting=><MeetingTracker key={meeting.mid} info={meeting}/>)}
        {(currentPage===2)}
        {(currentPage===3)}
        {(currentPage===4)&&<CreateMeeting/>}
      </div>
    </div>
  );

  function logout(){
    dispatch(userLogout());
  }
}

export default App;