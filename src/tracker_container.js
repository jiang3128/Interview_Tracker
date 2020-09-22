import React from 'react';

export function Header(){
    return(
        <div className="Header_Info">
            <header className="Header">Smart Faculty Interview Meeting Tracker</header>
        </div>
    );
}
export function SiderLeft(){
    return(
        <div className="Sider_Left">
        </div>
    );
}
export function SiderRight(){
    return(
        <div className="Sider_Right">
        </div>
    );
}
export function TrackerContainerShortInfo(props){
    const date = props.date;
    return(
        <div className="Container_Info">
            <span className="date">{date.day}</span>
            <span className="location">Davies Center</span>
            <span className="name">{date.name}</span>
        </div>
    );
}