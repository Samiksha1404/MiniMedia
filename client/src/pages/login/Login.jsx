import React from 'react'
import "./login.css"


export default function Login() {
  return (
    <div className='login'>
    <div className="loginWrapper">
    <div className="loginLeft">
<h3 className="loginLogo">MiniMedia</h3>
<span className='loginDesc'>
    Connect with friends and the world around you on Earth.
</span>
    </div>
    <div className="loginRight">
        <div className="loginBox">
            <input placeholder=" Email" type="text" className="loginInput" />
            <input placeholder=" Password" type="text" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginFogot">Forgot Password</span>
            <button className="loginRegisterButton">Create a new Account!</button>
        </div>
    </div>
    </div>
      
    </div>
  )
}
