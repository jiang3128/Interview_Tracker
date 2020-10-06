import React from 'react';
import './css/Login.css';

export function Login() {
    const Submit = (dispatch) =>{
        return{
            Submit: dispatch
        }
    }
    return (
        <section class ="border rounded">
            <section class ="row justify-content-center position-relative bg-secondary">
            <img src="interview_tracker.png" alt="Interview_Tracker Image" />
            </section>
            <section class ="row justify-content-center bg-warning">
            <p class="topic">Smart Faculty Interview Meeting Tracker</p>
            </section>
            <section class="row justify-content-center bg-warning">
            {/* <img src="interview_tracker.png" alt="Interview_Tracker Image"/>
            <p class="topic">Smart Faculty Interview Meeting Tracker</p> */}
                <form class="form-container">
                    <div class="form-group">
                        <label for="exampleInputEmail1">User ID</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" class="form-text text-muted">Enter Your User ID</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    {/* onclick={() => dispatch({type: 'Submit'} */}
                    <button type="submit" class="btn btn-outline-primary btn-block" href="index.html">Submit</button>
                </form>
            </section>
        </section>
    )
}
