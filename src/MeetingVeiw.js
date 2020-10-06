import React from 'react';
import './css/MeetingView.css';
import close from './images/close.png';
import {useDispatch} from 'react-redux';
import { changeView } from './actions';

export function MeetingView(props){
    var info=props.info;
    const dispatch=useDispatch();
    return(
        <div className="overlay">
            <div className="view">
                <div className="tag-small">Candidate</div>
                <div className="tag-small">Participant</div>
                <div className="info-small">{info.userList.filter(user=>user.type!==5).map(user=>user.uname+'\n')}</div>
                <div className="info-small">{info.userList.filter(user=>user.type===5).map(user=>user.uname+'\n')}</div>
                <div className="tag-small">Starting Time</div>
                <div className="tag-small">Ending Time</div>
                <div className="info-small">{parseTime(info.startTime)}</div>
                <div className="info-small">{parseTime(info.endTime)}</div>
                <div className="tag-big">Location</div>
                <div className="info-big">{info.location+'\n'+info.room}</div>
                <div className="tag-big">Status</div>
                <div className="info-big">{mapStatus(info.meetingStatus)}</div>
            </div>
            <img src={close} alt="close" onClick={closeView}/>
        </div>
    );
    function parseTime(time){
        var result=time.substring(5,7)+'.'+time.substring(8,10)+'.'+time.substring(0,4)+'\n'+time.substring(11,19);
        return result;
    }
    
    function mapStatus(status){
        if(status===0){
            return 'Open';
        }
        else if(status===1){
            return 'End';
        }
        else{
            return 'Cancel';
        }
    }
    
    function closeView(){
        dispatch(changeView(0));
    }
}