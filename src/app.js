import React from 'react';
import './css/app.css';
import {MeetingTracker} from './meeting-tracker.js';
import {SideBar} from './side-bar.js';
import {Login} from './login.js';
import {CreateMeeting} from './create-meeting.js';
import {CreateAccount} from './create-account.js';
import {MyFile} from './my-file.js';
import {MyAccount} from './my-account.js';
import {useDispatch, useSelector} from 'react-redux';
import {userLogout} from './actions.js';

const pages = ["", "My Meetings", "My Files", "My Account", "Create Meeting", "Create Account"];

function App() {
    const dispatch = useDispatch();
    const meetings = useSelector(state => state.meetings);
    const currentPage = useSelector(state => state.currentPage);
    const username = useSelector(state => state.user.uname);

  return (
    <div id="meeting_tracker_root">
      <div className="Header_Info">
        <p>Welcome! {username}</p>
        {(currentPage!==0)&&<div onClick={() => {window.print()}}>Print</div>}
        {(currentPage!==0)&&<div onClick={()=>logout()}>Logout</div>}
      </div>
      <SideBar/>
      <div id="main">
        <div id="title">{pages[currentPage]}</div>
        {(currentPage===0)&&<Login/>}
        {(currentPage===1)&&meetings.map(meeting=><MeetingTracker key={meeting.mid} info={meeting}/>)}
        {(currentPage===2)&&<MyFile/>}
        {(currentPage===3)&&<MyAccount/>}
        {(currentPage===4)&&<CreateMeeting/>}
        {(currentPage===5)&&<CreateAccount/>}
      </div>
    </div>
  );

  function logout(){
    dispatch(userLogout());
  }
}

export default App;