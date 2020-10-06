import React,{useEffect} from 'react';
import './css/App.css';
import {MeetingTracker} from'./MeetingTracker.js';
import {SideBar} from './SideBar.js';
import {Login} from './Login.js';
import {useDispatch,useSelector} from 'react-redux';
import {findAllMeetings} from './actions.js';

const pages=["","My Meetings","My Files","My Account"];


function App() {
  const dispatch=useDispatch();
  const meetings=useSelector(state=>state.meetings);
  const currentPage=useSelector(state=>state.currentPage);
  const username=useSelector(state=>state.user.uname);

  useEffect(()=>{
    dispatch(findAllMeetings());
  },[dispatch]);

  return (
    <section>
      <Login/>
    <div id="meeting_tracker_root">
      <div className="Header_Info">
        <p>Welcome! {username}</p>
        {(currentPage!==0)&&<div>Logout</div>}
      </div>
      <SideBar/>
      <div id="main">
        <div id="title">{pages[currentPage]}</div>
        {(currentPage===0)&&<Login/>}
        {(currentPage===1)&&meetings.map(meeting=><MeetingTracker key={meeting.mid} info={meeting}/>)}
      </div>
    </div>
    </section>
  );

}

export default App;
