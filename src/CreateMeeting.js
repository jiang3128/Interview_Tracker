import React from 'react';
// import {useDispatch, useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {startAddingRequest} from './actions';
import './css/CreateMeeting.css';

export function CreateMeeting(){
    // const candidate = useSelector(state=>state.candidate);
    const dispatch=useDispatch();
    return(
        <form>
            <div id = "CreateMeeting">
                <div className = "tag-small3">Candidate:</div>
                <select id = "candidate" className = "info-small3">
                    <option id >Jiang Zhu</option>
                    <option id >Dai Jun Feng</option>
                </select>
                {/* not sure how this work */}
                {/* {candidate.map(memory => <Memory key = {memory.candidate}/>)} */}
                <div className = "tag-small3">Participant</div>
                <select className = "info-small3">
                    <option>First</option>
                    <option>Dr.Tan</option>
                    <option>Dr.Heidi</option>
                    <option>Dr.Rakib</option>
                </select>
                <select className = "info-small3">
                    <option>Second(if any)</option>
                    <option>Dr.Tan</option>
                    <option>Dr.Heidi</option>
                    <option>Dr.Rakib</option>
                </select>
                <select className = "info-small3">
                    <option>Third(if any)</option>
                    <option>Dr.Tan</option>
                    <option>Dr.Heidi</option>
                    <option>Dr.Rakib</option>
                </select>
                <div className = "tag-small3">Meeting Start Time:</div>
                <input className = "info-small3" type = 'time'/>
                <input className = "info-small3"    type = 'date'/>
                <div className = "tag-small3">Meeting End Time:</div>
                <input className = "info-small3" type = 'time'/>
                <input className = "info-small3" type = 'date'/>
                <div className = "tag-small3">Room</div>
                <select className = "info-small3">
                    <option>Davies Center 101</option>
                    <option>Davies Center 102</option>
                    <option>Davies Center 103</option>
                </select>
                <div className = "tag-small3">Feedback/Comments</div>
                <textarea className = "info-small4" ></textarea>
                <br/>
                <div className="submitMeeting-button" onClick = {()=>submit_meeting()}>Submit</div>
            </div>
        </form>
    );
        //new
    function submit_meeting(){
        dispatch(startAddingRequest(document.setElementById('candidate').value));
    }
}