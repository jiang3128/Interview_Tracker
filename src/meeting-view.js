import React from 'react';
import './css/meeting-view.css';
import close from './images/close.png';
import {useDispatch, useSelector} from 'react-redux';
import {changeOption, changeView, findMessage,deleteMeeting} from './actions';
import {SingleUser} from './single-user.js';
import {Message} from './message.js'

export function MeetingView(props) {
    var info = props.info;
    const dispatch = useDispatch();
    const option = useSelector(state => state.currentOption);
    const messages = useSelector(state => state.message);

    return (
        <div className="overlay">
            <div className="button-bar">
                <div className="buttons" onClick={() => optionChange(1)}>Feedback</div>
                <div className="buttons" onClick={() => {optionChange(2);getMessage(info.mid)}}>Messages</div>
                <div className="buttons" onClick={() => optionChange(3)}>People</div>
                <div className="buttons" onClick={() => {window.print()}}>Print</div>
                <div className="buttons" onClick={() => {deleteThis(info.mid)}}>Delete</div>
            </div>
            <div className="view">
                <div className="close">
                    <img src={close} alt="close" onClick={()=>closeView()}/>
                </div>
                <div className="tag-small">Candidate</div>
                <div className="tag-small">Participant</div>
                <div className="info-small">{info.userList.filter(user=>user.type===5).map(user=>user.uname+'\n')}</div>
                <div className="info-small">{info.userList.filter(user=>user.type!==5).map(user=>user.uname+'\n')}</div>
                <div className="tag-small">Starting Time</div>
                <div className="tag-small">Ending Time</div>
                <div className="info-small">{parseTime(info.startTime)}</div>
                <div className="info-small">{parseTime(info.endTime)}</div>
                <div className="tag-big">Location</div>
                <div className="info-big">{info.city+'\n'+info.address}</div>
                <div className="tag-big">Status</div>
                <div className="info-big">{mapStatus(info.status)}</div>
            </div>
            {option!==0&&<div className="option">
                {option===1&&<div className="feedback">
                    <h3>Feedback</h3>
                    <div>{info.feedback}</div>
                </div>}
                {option===2&&<div className="chat">
                    <div className="chat-message">
                        <h3>Message</h3>
                        <div className="chat-body">
                            {messages.map(message=><Message key={message.m_id} message={message}/>)}
                        </div>
                    </div>
                    <textarea className="chat-input"></textarea>
                    <div className="chat-button">Send</div>
                </div>}
                {option===3&&<div className="people">
                    <h3>People</h3>
                    <div className="user-list">
                        {info.userList.map(user=><SingleUser key={user.uid} user={user}/>)}
                    </div>
                </div>}
            </div>}
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
    }
    
    function closeView(){
        dispatch(changeView(0));
    }

    function optionChange(option){
        dispatch(changeOption(option));
    }

    function getMessage(id){
        dispatch(findMessage(id));
    }

    function deleteThis(id){
        dispatch(deleteMeeting(id));
        alert('Delete success');
    }
}