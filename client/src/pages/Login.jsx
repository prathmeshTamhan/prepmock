import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import image from "../images/feature_1.png";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import "../pagescss/signinlogin.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      window.location.href = "/ChooseInterview";
    } else {
      alert("Please check your username and password");
    }
  }

  return (
    <div className="container">
		<Navbar/>
		<div className="login-child">
		<h1>Lets Begin</h1>
		<h5>Start your Interview preparation journey with us!</h5>
	<span>	<img src={image} alt="vector" id="image" ></img></span>
		
	  </div>
      <div className="login-section">
        <h1>Login</h1>
        <form onSubmit={loginUser}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <br />
		  <Button variant="contained"  type="submit" value="Login" >Log in</Button>
        </form>
		<h6>Don't have an account?  <Link href="#" color="inherit">
        {'Sign Up'}
      </Link></h6>
      </div>
    </div>
  );
}

export default Login;
