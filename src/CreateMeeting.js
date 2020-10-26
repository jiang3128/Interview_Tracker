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
                <p id>Candidate:</p>
                <select id = "candidate">
                    <option id >Jiang Zhu</option>
                    <option id >Dai Jun Feng</option>
                </select>
                {/* not sure how this work */}
                {/* {candidate.map(memory => <Memory key = {memory.candidate}/>)} */}
                <p>Participant</p>
                <select>
                    <option>First</option>
                    <option>Dr.Tan</option>
                    <option>Dr.Heidi</option>
                    <option>Dr.Rakib</option>
                </select>
                <select>
                    <option>Second(if any)</option>
                    <option>Dr.Tan</option>
                    <option>Dr.Heidi</option>
                    <option>Dr.Rakib</option>
                </select>
                <select>
                    <option>Third(if any)</option>
                    <option>Dr.Tan</option>
                    <option>Dr.Heidi</option>
                    <option>Dr.Rakib</option>
                </select>
                <p>Meeting Start Time:</p>
                <input type = 'time'/>
                <input type = 'date'/>
                <p>Meeting End Time:</p>
                <input type = 'time'/>
                <input type = 'date'/>
                <p>Room</p>
                <select>
                    <option>Davies Center 101</option>
                    <option>Davies Center 102</option>
                    <option>Davies Center 103</option>
                </select>
                <p>Feedback/Comments</p>
                <textarea/>
                <br/>
                <div id="login-button" onClick = {()=>submit_meeting()}>Submit</div>
            </div>
        </form>
    );
        //new
    function submit_meeting(){
        dispatch(startAddingRequest(document.setElementById('candidate').value));
    }
}