import React from 'react';
import './css/message.css';

export function Message(props){
    const message=props.message;

    return(
        <div className="message">
            <div className="message-user">{message.u_name}</div>
            <div className="message-time">{message.postTime}</div>
            <div className="message-body">{message.m_body}</div>
        </div>
    );
}