import React from "react";
import Button from "@mui/material/Button";
function FeatureBox(props) {
  return (
    <div className="a-Box">
      <div className="a-b-img">
        <img src={props.image} />
      </div>
      <div className="s-b-text">
        <h2>{props.title}</h2>
        <Button variant="contained">Start</Button>
      </div>
    </div>
  );
}

export default FeatureBox;
