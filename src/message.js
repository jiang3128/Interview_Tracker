import React from 'react';
import './css/message.css';

export function Message(){
    return(
        <div className="message">
            <div className="message-user">Somebody</div>
            <div className="message-time">2020-12-30 10:30:00</div>
            <div className="message-body">12316156161616351651651616516163516165</div>
        </div>
    );
}