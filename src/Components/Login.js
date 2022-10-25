import { useState, } from "react";
import React from "react";
import './Login.css';
import img from '../Images/background-image-pg.jpg';


function Login(props) {
    const initialValues = { username: '', email: '', password: '' }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const validationResult = validate(formValues);
        setFormErrors(validationResult);
        console.log(validationResult);
        if (Object.keys(validationResult).length === 0) {
            props.onLogin();
        }
    };



    const validate = (values) => {
        const errors = {}
        const regax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        if (!values.username) {
            errors.username = 'username is required!';
        }
        if (!values.email) {
            errors.email = 'email is required!';
        } else if (!regax.test(values.email)) {
            errors.email = 'This is not a valid email format!';
        }
        if (!values.password) {
            errors.password = 'password is required!';
        } else if (values.password.length < 4) {
            errors.password = 'Password must be more then 4 character';
        } else if (!values.password) {
            errors.password = 'password cannot exceed more then 10 character';
        }
        return errors;
    }
    return (
        <div className="main-page">
            {/* <pre>{JSON.stringify(formValues,undefined,2)}</pre> */}
            <img className="bg-img" src={img} alt="background" />

            <form className="content">
                    <p className="para">Username:should not be blank</p>
                    <p className="para">Email:aa@gmail.com</p>
                    <p className="para">Password:more then 4 character</p>
                 <div className="container">
                    <div className="field">
                        <label className="username">Username</label>
                        <input type='text' name='username' placeholder="Username" value={formValues.username} onChange={handleChange} />
                        <p>{formErrors.username}</p>
                    </div>
                    <div className="field">
                        <label className="email">Email</label>
                        <input type='email' name='email' placeholder="Email" value={formValues.email} onChange={handleChange} />
                        <p>{formErrors.email}</p>
                    </div>
                    <div className="field">
                        <label className="password">Password</label>
                        <input type='password' name='password' placeholder="Password" value={formValues.password} onChange={handleChange} />
                        <p>{formErrors.password}</p>
                    </div>
                    <div className="login-btn">
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Login;











































//     return(
//         <div className="content">
//              <div className="main-page">
//                  <h1 className="account-page">Login page</h1>
//                 <div className="login-page">
//                      <div className="username">
//                     <label className="user-u" htmlFor="username" >Username</label>
//                     <input id="username" type='text' placeholder= "Username"/>
//                 </div>
//                 <div className="password">
//                     <label className="pass-p" htmlFor="password">Password</label>
//                     <input id="password" type='password' placeholder= "Password"/>
//                 </div>
//             </div>
//                 <div className="login-btn">
//                 <button  className="btn btn-primary" onClick={props.onLogin}>Login</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login;