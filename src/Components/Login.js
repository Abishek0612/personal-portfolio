import React from "react";
import './Login.css';
import img from '../Images/background-image-pg.jpg';


function Login(props){
    
    return(
        <div className="content">
            <img className="bg-img" src={img} alt="background" /> 
             <div className="main-page">
                 <h1 className="account-page">Login page</h1>
                <div className="login-page">    
                     <div className="username">
                    <label className="user-u" htmlFor="username" >Username</label>
                    <input id="username" type='text' placeholder= "Username"/>
                </div>
                <div className="password">
                    <label className="pass-p" htmlFor="password">Password</label>
                    <input id="password" type='password' placeholder= "Password"/>
                </div>
            </div>
                <div className="login-btn">
                <button  className="btn btn-primary" onClick={props.onLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;