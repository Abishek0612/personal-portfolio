import React from "react";

function Login(props){
    
    return(
        <div className="main-page">
            <h1 className="account-page">Login page</h1>
            <div className="login-page">    
                <div className="user-pass">
                    <label htmlFor="username" >Username</label>
                    <input id="username" type='text' placeholder= "Username"/>
                </div>
                <div className="user-pass">
                    <label htmlFor="password">Password</label>
                    <input id="password" type='password' placeholder= "Password"/>
                </div>
            </div>
                <div className="login-btn">
                <button  className="btn btn-primary" onClick={props.onLogin}>Login</button>
                </div>
            </div>
    )
}

export default Login;