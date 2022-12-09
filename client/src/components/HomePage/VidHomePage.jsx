import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import  '../HomePage/vidHomepage.css';
import VidHeader from '../UI/Header/VidHeader';
import vectormeet from '../../images/vectormeet.jpg';
import shortid from "shortid";
import { useNavigate } from "react-router-dom";
import{
  faVideo,
  faKeyboard,
}from "@fortawesome/free-solid-svg-icons"

function VidHomePage() {
  
  const navigate = useNavigate();
  
  const startCall = () => {
    const uid = shortid.generate();
    navigate(`/${uid}#init`);
  };


  return (
    
    <div className='home-page'>
      <VidHeader/>
      <div className='body'>
        <div className='left-side'>
          <div className='content'>
            <h1>Click below to join Meet</h1>
            <div className='action-btn'>
              <button className='btn green' onClick={startCall}>
                <FontAwesomeIcon className="icon-block" icon ={faVideo}/>
                New Meeting
              </button>
            
            <div className='input-block'>
              <div className='input-section'>
                <FontAwesomeIcon className="icon-block" icon={faKeyboard}/>
                <input placeholder='Enter a code or link'/>
              </div>
              <button className='btn no bg'>Join</button>
            </div>
          </div>
          </div>
        </div>
        <div className='right-side'>
          <div className='content'>
            <img src={vectormeet} alt="vector"/>
            
          </div>
        </div>
      </div>

    </div>
    
  )
}


export default VidHomePage;