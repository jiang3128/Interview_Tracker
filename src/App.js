import React,{useEffect} from 'react';
import './App.css';
import {TrackerContainer} from'./TrackerContainer.js';
import {SideBar} from './SideBar.js';
import {CandidateView} from './candidate_view';

import {Login} from './LogIn.js';
import {useDispatch,useSelector} from 'react-redux';
import {findAllMeetings} from './actions.js';


function App() {
  const dispatch=useDispatch();
  const meetings=useSelector(state=>state.meetings);

  useEffect(()=>{
    dispatch(findAllMeetings());
  },[dispatch]);

  return (
    <section>
      <Login/>
    <div id="meeting_tracker_root">
      <CandidateView/>
    </div>
    </section>
  );
}

export default App;
