import React, { useContext, useRef } from 'react'
import "./login.css"
import { loginCall } from '../../apiCalls';
import {AuthContext} from "../../context/AuthContext"
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
const email = useRef();
const password = useRef();
const {user, isFetching, error ,dispatch} = useContext(AuthContext)

const handleClick  = (e)=>{
  e.preventDefault();
  loginCall({email:email.current.value,password:password.current.value},dispatch)
};
console.log(user);
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
        <form className="loginBox" onSubmit={handleClick}>
            <input placeholder=" Email" type="email" className="loginInput" ref={email}/>
            <input placeholder=" Password" type="password" required minLength="8" className="loginInput" ref={password} />
            <button className="loginButton" type='submit' disabled={isFetching}>{isFetching? <CircularProgress style={{ color: 'white' }} /> : "Log In" }</button>
            <span className="loginFogot">Forgot Password</span>
            <button className="loginRegisterButton">{isFetching? <CircularProgress style={{ color: 'white' }} /> : "Create a New Account"}</button>
        </form>
    </div>
    </div>
      
    </div>
  )
}
