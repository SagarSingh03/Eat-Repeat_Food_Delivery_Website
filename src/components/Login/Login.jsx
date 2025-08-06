import React, { useState } from 'react'
import './Login.css';

import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png'
import Navbar from '../Navbar/Navbar';

const Login = () => {

  const [action, setAction] = useState("Login");

  return (
    <div className="Login-page">
    <div className='Login'>
      <Navbar/>
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? <div></div> : <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name"  required/>
        </div>}
      </div>

      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" placeholder="Email Id" required/>
          <input type="email" />
        </div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={password_icon} alt="" placeholder="Password" required/>
          <input type="password" />
        </div>
      </div>
      {action === "Sign up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here! </span></div>}
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign up") }}>Sign Up</div>
        <div className={action === "Sign up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login;
