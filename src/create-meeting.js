import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createMeeting, findCandiate, findLocation, findParticipant} from './actions';
import './css/create-meeting.css';

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
    
    var candidate="";
    var participant1="";
    var participant2="";
    var participant3="";
    var location=-1;
    var startDate='';
    var endDate='';
    var startTime='';
    var endTime='';

    return(
        <form>
            <div id = "CreateMeeting">
                <p>Candidate:</p>
                <div className="input">
                    <select onChange={event=>setCandidate(event)}>
                        <option value={""}></option>
                        {candidates.map(candidate=><option key={candidate.uid} value={candidate.uid+" "+candidate.email}>{candidate.uname}</option>)}
                    </select>
                </div>
                <p>Participant:</p>
                <div className="input">
                    <select onChange={event=>setParticipant1(event)}>
                        <option value={""}></option>
                        {participants.map(participant=><option key={participant.uid} value={participant.uid+" "+participant.email}>{participant.uname}</option>)}
                    </select>
                </div>
                <div className="input">
                    <select onChange={event=>setParticipant2(event)}>
                        <option value={""}></option>
                        {participants.map(participant=><option key={participant.uid} value={participant.uid+" "+participant.email}>{participant.uname}</option>)}
                    </select>
                </div>
                <div className="input">
                    <select onChange={event=>setParticipant3(event)}>
                        <option value={""}></option>
                        {participants.map(participant=><option key={participant.uid} value={participant.uid+" "+participant.email}>{participant.uname}</option>)}
                    </select>
                </div>
                <p>Start Time:</p>
                <div className="input">
                    <input type = 'time' onChange={event=>setStartTime(event)}/>
                    <input type = 'date' onChange={event=>setStartDate(event)}/>
                </div>
                <p>End Time:</p>
                <div className="input">
                    <input type = 'time' onChange={event=>setEndTime(event)}/>
                    <input type = 'date' onChange={event=>setEndDate(event)}/>
                </div>
                <p>Location</p>
                <div className="input">
                    <select onChange={event=>setLocation(event)}>
                        <option value={-1}></option>
                        {locations.map(location=><option key={location.lid} value={location.lid}>{location.address}, {location.city}</option>)}
                    </select>
                </div>
                <div id="submit-button" onClick = {()=>submitMeeting()}>Submit</div>
            </div>
        </form>
    );
    
    function setCandidate(event){
        candidate=event.target.value;
    }

    function setParticipant1(event){
        participant1=event.target.value;
    }

    function setParticipant2(event){
        participant2=event.target.value;
    }

    function setParticipant3(event){
        participant3=event.target.value;
    }

    function setLocation(event){
        location=event.target.value;
    }

    function setStartDate(event){
        startDate=event.target.value;
    }

    function setEndDate(event){
        endDate=event.target.value;
    }

    function setStartTime(event){
        startTime=event.target.value;
    }

    function setEndTime(event){
        endTime=event.target.value;
    }

    function submitMeeting(){
        if(candidate===""){
            alert('Please choose a candidate.');
        }
        else if(participant1===""&&participant2===""&participant3===""){
            alert('Please choose at least one participant.');
        }
        else if(location<0){
            alert('Please choose a location.');
        }
        else if(startDate===''||startTime===''||endDate===''||endTime===''){
            alert('Please set proper date and time.');
        }
        else{
            var start=new Date(startDate+' '+startTime);
            var end=new Date(endDate+' '+endTime);
            if(start>=end){
                alert('Please set proper date and time.');
            }
            else{
                var userList=[];
                if(participant1!=="")
                    userList.push(participant1);
                if(participant2!==""&&participant2!==participant1)
                    userList.push(participant2);
                if(participant3!==""&&participant3!==participant1&&participant3!==participant2)
                    userList.push(participant3);
                userList.push(candidate);
                userList=userList.map(user=>{
                    var obj=user.split(" ");
                    return {
                        uid:parseInt(obj[0]),
                        email:obj[1]
                    };
                });
                start.setMinutes(start.getMinutes() - start.getTimezoneOffset());
                end.setMinutes(end.getMinutes() - end.getTimezoneOffset());
                createMeeting(userList,start.toJSON().substr(0, 19).replace(/T/,' '),
                end.toJSON().substr(0, 19).replace(/T/,' '),parseInt(location));
                alert('Create Meeting Success!');
            }
        }
    }
}