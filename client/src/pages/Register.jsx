import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
// import { useNavigate } from 'react-router-dom'
import Button from "@mui/material/Button";
import image from "../images/feature_1.png";
import "../pagescss/signinlogin.css";
import axios from 'axios'
import { useNavigate } from "react-router";

// import EmailIcon from '@mui/icons-material/Email';
function Register(event) {

  const navigate = useNavigate()

  async function registerUser() {

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const college = document.getElementById('college').value
    const password = document.getElementById('password').value

    var config = {
      method: 'post',
      url: 'http://localhost:1337/auth/register',
      headers: {
        'Content-Type': 'application/json'
      },
      data: { name, email, college, password }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert(response.data.msg)
        navigate('/login')
        
      })
      .catch(function (error) {
        console.log(error);
      });




  }

  return (
    <div className="container">
      <Navbar />
      <div className="register-child">
        <h1>PREPMOCK</h1>
        <h5>Start your Interview preparation journey with us!</h5>
        <span>	<img src={image} alt="'vector'" id="image" ></img></span>

      </div>
      <div className="register-section">
        <h1>Registration</h1>
        <div>
          <input
            id='name'
            defaultValue=""
            type="text"
            placeholder="Name"

          />
          <br />
          <input
            id='email'
            defaultValue=""
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            id='college'
            defaultValue=""
            type="text"
            placeholder="College/University Name"
          />
          <br />
          <input
            id='password'
            defaultValue=""
            type="password"
            placeholder="Password"
          />
          <br />
          <Button variant="contained" type="submit" value="Register" onClick={() => { registerUser() }} >Register</Button>
          {/* <input type="submit" value="Register" /> */}
        </div>
      </div>

    </div>
  );
}

export default Register;
