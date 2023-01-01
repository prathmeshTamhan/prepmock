import React from 'react'
import logo from '../../../images/logo.png';
import "./VidHeader.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{
    faQuestionCircle,
    faExclamationCircle,
    faCog,
}from "@fortawesome/free-solid-svg-icons";
function VidHeader() {
  return (

    <div className="header">
    <div className="logo">
        
      <img src={logo} />
    </div>
  </div>

      
  )
}

export default VidHeader;