import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import google_icon from '../Assets/google.svg';
import { Link } from 'react-router-dom';
export const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  const handleSwitchAction = () => {
    setAction(prevAction => prevAction === "Login" ? "Sign Up" : "Login");
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div> : (
          <div className="input">
            <img src={user_icon} alt='' />
            <input type='text' placeholder='Name'/>
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt='' />
          <input type='email' placeholder='Email'/>
        </div>
        <div className="input">
          <img src={password_icon} alt='' />
          <input type='password' placeholder='Password'/>
        </div>
        <div className="forgot-password">Forgot Password ?</div>
        <div className="submit-container">
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleSwitchAction}>
            {action === "Login" ? "Sign Up" : "Sign Up"}
          </div>
          
          <Link to='/Home'> 
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleSwitchAction}>
            {action === "Sign Up" ? "Login" : "Login"}
          </div>
          </Link>
        </div>
        <div className="GoogleLogin">or Login with</div>
        <div className="login-with-buttons">
          <button className="google-login-button">
            <img src={google_icon} alt='Google' />
          </button>
        </div>
      </div>
    </div>
  );
};
