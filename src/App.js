import React from 'react';
import './App.css';
import {TrackerContainer} from'./TrackerContainer.js';
import {SideBar} from './SideBar.js';

function App() {
  return (
    <div id="meeting_tracker_root">
      <div className="Header_Info">
        <p>Welcome! Jay</p>
        <div>Logout</div>
      </div>
      <SideBar/>
      <div id="main">
        <div id="title">My Meetings</div>
        <TrackerContainer info={{time:"15 October,2020",location:"Davies Center"}}/>
        <TrackerContainer info={{time:"19 November,2020",location:"Phillips Hall"}}/>
        <TrackerContainer info={{time:"19 November,2020",location:"Centennial Hall"}}/>
      </div>
    </div>
  );
}

export default App;
