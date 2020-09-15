import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {TrackerContainerShortInfo} from'./tracker_container.js';
import {Header} from './tracker_container.js'
import {SiderLeft} from './tracker_container.js'
import {SiderRight} from './tracker_container.js'

function App() {
  return (
    <div id="meeting_tracker_root">
      <Header/>
      <SiderLeft/>
      <SiderRight/>
      <TrackerContainerShortInfo/>
    </div>
  );
}

export default App;
