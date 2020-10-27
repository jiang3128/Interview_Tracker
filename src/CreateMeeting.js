import React from 'react';
import {useDispatch} from 'react-redux';
import {startAddingRequest} from './actions';
import './css/CreateMeeting.css';

export function CreateMeeting(){
    const dispatch=useDispatch();
    return(
        <form>
            <div id = "CreateMeeting">
                <p>Candidate:</p>
                <div className="input">
                    <select>
                        <option></option>
                        <option>Jiang Zhu</option>
                        <option>Dai Jun Feng</option>
                    </select>
                </div>
                <p>Participant:</p>
                <div className="input">
                    <select>
                        <option></option>
                        <option>Dr.Tan</option>
                        <option>Dr.Heidi</option>
                        <option>Dr.Rakib</option>
                    </select>
                </div>
                <div className="input">
                    <select>
                        <option></option>
                        <option>Dr.Tan</option>
                        <option>Dr.Heidi</option>
                        <option>Dr.Rakib</option>
                    </select>
                </div>
                <div className="input">
                    <select>
                        <option></option>
                        <option>Dr.Tan</option>
                        <option>Dr.Heidi</option>
                        <option>Dr.Rakib</option>
                    </select>
                </div>
                <p>Meeting Start Time:</p>
                <div className="input">
                    <input type = 'time'/>
                    <input type = 'date'/>
                </div>
                <p>Meeting End Time:</p>
                <div className="input">
                    <input type = 'time'/>
                    <input type = 'date'/>
                </div>
                <p>Room</p>
                <div className="input">
                    <select>
                        <option></option>
                        <option>Davies Center 101</option>
                        <option>Davies Center 102</option>
                        <option>Davies Center 103</option>
                    </select>
                </div>
                <div id="submit-button" onClick = {()=>submitMeeting()}>Submit</div>
            </div>
        </form>
    );
    function submitMeeting(){
    }
}