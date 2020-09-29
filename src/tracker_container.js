import React from 'react';

export function Header(){
    return(
        <div className="Header_Info">
            <a>Jay </a>
            <a> logout</a>
        </div>
    );
}
export function SiderLeft(){
    return(
        <div className="Sider_Left">
            <h3>Smart Faculty Interview Meeting Tracker</h3>
            <br></br>
            <p>Create Meeting</p>
            <p>Past Meeting</p>
            <p>Current Meeting</p>
            <p>Future Meeting</p>
            <p>My Account</p>
            <p>FAQ</p>
        </div>
    );
}
// export function SiderRight(){
//     return(
//         <div className="Sider_Right">
//         </div>
//     );
// }
export function TrackerContainerShortInfo(props){
    const date = props.date;
    return(
        <div className="Container_Info">
            {/* <span className="date">{date.day}</span> */}
            {/* <span className="location">Davies Center</span> */}
            <span className="location">{date.name}</span>
        </div>
    );
}
export function Name(){
    return(
        <div className="Name_Info">
            <p className ="name">Welcome</p>
            <p className = "name_2">Jay</p>
        </div>
    );
}
