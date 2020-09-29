import React from 'react';

export function Header() {
    return (
        <div className="Header_Info">
            <a>Jay </a>
            <a> logout</a>
        </div>
    );
}
export function SiderLeft() {
    return (
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

export function TrackerContainerShortInfo(props) {
    const date = props.date;
    return (
        <div className="Container_Info"> 
            {/* <span className="date">{date.day}</span> */}
            {/* <span className="location">Davies Center</span> */}
            <span className="location">{date.name}</span>
        </div>
    );
}
export function Name() {
    return (
        <div className="Name_Info">
            <p className="name">Welcome</p>
            <p className="name_2">Jay</p>
        </div>
    );
}

export function Login() {
    return (
        <section>
            <section class ="row justify-content-center">
            <img src="interview_tracker.png" alt="Interview_Tracker Image" />
            </section>
            <section class ="row justify-content-center">
            <p class="topic">Smart Faculty Interview Meeting Tracker</p>
            </section>
            <section class="row justify-content-center">
            {/* <img src="interview_tracker.png" alt="Interview_Tracker Image"/>
            <p class="topic">Smart Faculty Interview Meeting Tracker</p> */}
                <form class="form-container">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" class="form-text text-muted">Enter Your Email Here</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-outline-primary btn-block">Submit</button>
                </form>
            </section>
        </section>
    )
}