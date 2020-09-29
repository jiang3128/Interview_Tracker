import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {TrackerContainerShortInfo} from'./tracker_container.js';
import {Header} from './tracker_container.js'
import {SiderLeft} from './tracker_container.js'
import {Name} from './tracker_container.js'
import {Login} from './tracker_container.js'


function App() {
  return (
    
    <div>
      <Login/>
      {/* <div id="meeting_tracker_root">
      <Header/>
      <SiderLeft/> 
      <Name/>
      <TrackerContainerShortInfo date={{day:"15October,2020",name:"Past Meetings"}}/>
      <TrackerContainerShortInfo date={{day:"19November,2020",name:"Current Meeting"}}/>
      <TrackerContainerShortInfo date={{day:"19November,2020",name:"Future Meetings"}}/> */}
      </div>

    // </div>
  );
}

export default App;
