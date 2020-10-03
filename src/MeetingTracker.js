import React from 'react';
import './MeetingTracker.css';

export function MeetingTracker(props){
    var info = props.info;
    return(
        <div className="Container_Info">
            <p>{parseTime(info.time)}</p>
            <p>{info.room}, {info.location}</p>
        </div>
    );
}

function parseTime(time){
    var result=time.substring(5,7)+'/'+time.substring(8,10)+'/'+time.substring(0,4)+'\xa0\xa0\xa0\xa0\xa0'+time.substring(11,19);
    return result;
}
