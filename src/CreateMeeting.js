import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {findCandiate,findParticipant,findLocation} from './actions';
import './css/CreateMeeting.css';

export function CreateMeeting(){
    const dispatch=useDispatch();
    const candidates=useSelector(state=>state.candidate);
    const participants=useSelector(state=>state.participant);
    const locations=useSelector(state=>state.location);

    useEffect(()=>{
        dispatch(findCandiate());
        dispatch(findParticipant());
        dispatch(findLocation());
    },[dispatch]);
    
    return(
        <form>
            <div id = "CreateMeeting">
                <p>Candidate:</p>
                <div className="input">
                    <select>
                        <option></option>
                        {candidates.map(candidate=><option key={candidate.uid}>{candidate.uname}</option>)}
                    </select>
                </div>
                <p>Participant:</p>
                <div className="input">
                    <select>
                        <option></option>
                        {participants.map(participant=><option key={participant.uid}>{participant.uname}</option>)}
                    </select>
                </div>
                <div className="input">
                    <select>
                        <option></option>
                        {participants.map(participant=><option key={participant.uid}>{participant.uname}</option>)}
                    </select>
                </div>
                <div className="input">
                    <select>
                        <option></option>
                        {participants.map(participant=><option key={participant.uid}>{participant.uname}</option>)}
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
                        {locations.map(location=><option key={location.lid}>{location.address}, {location.city}</option>)}
                    </select>
                </div>
                <div id="submit-button" onClick = {()=>submitMeeting()}>Submit</div>
            </div>
        </form>
    );
    function submitMeeting(){
    }
}