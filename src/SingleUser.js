import React from 'react';
import './css/SingleUser.css';

export function SingleUser(props){
    var user=props.user;
    return (
        <div className="single-user">
            <h5>{user.uname}</h5>
            <p>E-mail: {user.email}</p>
            <p>Phone Number: {user.phoneNumber}</p>
        </div>
    );
}