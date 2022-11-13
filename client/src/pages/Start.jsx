import React from "react";
import Button from "@mui/material/Button";
import image from "../images/background.png";
import "../pagescss/Start.css";
function Start() {
  return (
    <div id="start-container">
      <h1 id="start-heading">Operating Systems</h1>
      <h3>_________________</h3>
      <h1 className="please-start">Please click below to continue the test</h1>
      <Button variant="contained" id="start-button">
        START
      </Button>
    </div>
  );
}

export default Start;
