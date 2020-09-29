import React from 'react';
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