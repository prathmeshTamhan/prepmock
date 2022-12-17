import React from "react";
import Button from "@mui/material/Button";
import "../pagescss/Start.css";
import { useEffect, useState } from "react";

function Start() {

  const [subject, setSubject] = useState()

  const sub = {
    CN: "Computer Networks",
    OS: "Opertaing System",
    DBMS: "Database Managment System",
  }

  useEffect(() => {
    let subject = (window.location.href).split('&')[1].split('=')[1];
    setSubject(sub[subject])
  }, [])


  return (
    <div id="start-container">
      <h1 id="start-heading">{subject}</h1>
      <h3>_________________</h3>
      <h1 className="please-start">Please click below to continue the test</h1>
      <Button variant="contained" id="start-button" onClick={()=>{ window.location.href = `/mockinterview?${(window.location.href).split('?')[1]}` }} >
        START
      </Button>
    </div>
  );
}

export default Start;
