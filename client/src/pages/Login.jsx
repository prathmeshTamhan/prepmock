import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import image from "../images/feature_1.png";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import "../pagescss/signinlogin.css";
import axios from 'axios'
import { setIsLogged } from '../../src/States/action-creators'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { acitionCreators } from '../../src/States/index'
import { useNavigate } from 'react-router-dom'

function Login() {

  const dispatch = useDispatch()
  const { setIsLogged } = bindActionCreators(acitionCreators, dispatch)
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const user = useSelector(state=>state.User)
  // console.log(user)

  async function loginUser() {

    const loginEmail = document.getElementById('login-email').value
    const loginPassword = document.getElementById('login-password').value

    const loginData = { email: loginEmail, password: loginPassword }

    console.log(loginData);

    var config = {
      method: 'post',
      url: 'http://localhost:1337/auth/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: loginData
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setIsLogged(response.data)
        alert("Login Successfull")
        navigate('/chooseDomain')
      })
      .catch(function (error) {
        console.log(error);
      });


    // if (data.user) {
    //   localStorage.setItem("token", data.user);
    //   alert("Login successful");
    //   // setIsLogged(response.data)
    //   window.location.href = "/ChooseInterview";
    // } else {
    //   alert("Please check your username and password");
    // }

  }

  return (
    <div className="container">
      <Navbar />
      <div className="login-child">
        <h1>Lets Begin</h1>
        <h5>Start your Interview preparation journey with us!</h5>
        <span>	<img src={image} alt="vector" id="image" ></img></span>

      </div>
      <div className="login-section">
        <h1>Login</h1>
        <div>
          <input
            id='login-email'
            defaultValue=""
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            id='login-password'
            defaultValue=""
            type="password"
            placeholder="Password"
          />
          <br />
          <Button variant="contained" type="submit" value="Login" onClick={() => { loginUser() }} >Log in</Button>
        </div>
        <h6>Don't have an account?  <Link href="#" color="inherit">
          {'Sign Up'}
        </Link></h6>
      </div>
    </div>
  );
}

export default Login;
