import React from 'react';
import './TrackerContainer.css';

export function TrackerContainer(props){
    var info = props.info;
    return(
        <div className="Container_Info">
            <p>{info.time}</p>
            <p>{info.location}</p>
        </div>
    );
}
