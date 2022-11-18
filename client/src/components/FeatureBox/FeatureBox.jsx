import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function FeatureBox(props) {
  return (
    <div className="a-Box">
      <div className="a-b-img">
        <img src={props.image} />
      </div>
      <div className="s-b-text">
        <h2>{props.title}</h2>
        <Link to='/login' ><Button variant="contained"> Start </Button></Link>
      </div>
    </div>
  );
}

export default FeatureBox;
