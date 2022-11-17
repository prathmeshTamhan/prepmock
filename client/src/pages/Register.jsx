import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
// import { useNavigate } from 'react-router-dom'
import Button from "@mui/material/Button";
import image from "../images/feature_1.png";
import "../pagescss/signinlogin.css";

// import EmailIcon from '@mui/icons-material/Email';
function Register() {
  // const history = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");

  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        college,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      // history.push('/login')
    }
  }

  return (
    <div className="container">
		<Navbar/>
		<div className="register-child">
		<h1>PREPMOCK</h1>
		<h5>Start your Interview preparation journey with us!</h5>
	<span>	<img src={image} alt="'vector'" id="image" ></img></span>
		
	  </div>
      <div className="register-section">
        <h1>Registration</h1>
        <form onSubmit={registerUser}>
		
          <input
            value={ name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder= "Name"
			
          /> 
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            type="text"
            placeholder="College/University Name"
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <br />
          <Button variant="contained"  type="submit" value="Register" >Register</Button>
		  {/* <input type="submit" value="Register" /> */}
        </form>
      </div>
	  
    </div>
  );
}

export default Register;
