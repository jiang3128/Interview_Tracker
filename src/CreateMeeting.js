import React from 'react';
import './css/CreateMeeting.css';

export function CreateMeeting(){
    return(
        <form>
            <div>
                <p>Candidate:</p>
                <select>
                    <option>Jiang Zhu</option>
                    <option>Dai Jun Feng</option>
                </select>
                <p>Participant</p>
                <select>
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
                <div id="login-button">Submit</div>
            </div>
        </form>
    );
}