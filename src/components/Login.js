import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const gotoHome =()=>{
    navigate('/Home');
  }
  return (
    <div className="Container">
      <div className="form">
        <h1 className="heading">Sign In</h1>
        <div className="loginContainer">
          <p className="title">New user ?</p>
          <a href="#" className="link">
            create an account
          </a>
        </div>
        <div className="inputwraper">
          <input type="text" className="inputs" placeholder="username/email" />
          <input type="text" className="inputs" placeholder="Password" />
          <label>
            <input type="checkbox" className="checkbox" />
            Keep me signed in
          </label>
          <button type="submit" className="submitbtn" onClick={gotoHome}>
            Submit
          </button>
          <p className="text">Or Sign In With </p>
        </div>
      </div>
      <div className="banner">
        <img className="bannerimg" src={require("../images/lock.jpg")} />
      </div>
    </div>
  );
}

export default Login;
