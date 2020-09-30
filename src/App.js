import React,{useEffect} from 'react';
import './App.css';
import {TrackerContainer} from'./TrackerContainer.js';
import {SideBar} from './SideBar.js';
import {useDispatch,useSelector} from 'react-redux';
import {findAllMeetings} from './actions.js';

function App() {
  const dispatch=useDispatch();
  const meetings=useSelector(state=>state.meetings);

  useEffect(()=>{
    dispatch(findAllMeetings());
  },[dispatch]);

  return (
    <div id="meeting_tracker_root">
      <div className="Header_Info">
        <p>Welcome! Jay</p>
        <div>Logout</div>
      </div>
      <SideBar/>
      <div id="main">
        <div id="title">My Meetings</div>
        {meetings.map(meetings=><TrackerContainer key={meetings.mid} info={{time:meetings.startTime,room:meetings.room,location:meetings.location}}/>)}
      </div>
    </div>
  );
}

export default App;
