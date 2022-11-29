import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import  '../HomePage/vidHomepage.css';
import VidHeader from '../UI/Header/VidHeader';
import vectormeet from '../../images/vectormeet.jpg';

import{
  faVideo,
  faKeyboard,
}from "@fortawesome/free-solid-svg-icons"
import CallPage from '../CallPages/CallPage';
function VidHomePage() {
  return (
    
    <div className='home-page'>
      <VidHeader/>
      <div className='body'>
        <div className='left-side'>
          <div className='content'>
            <h1>Click below to join Meet</h1>
            <div className='action-btn'>
              <button className='btn green' >
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
            <img src={vectormeet} alt="vector image"/>
            
          </div>
        </div>
      </div>

    </div>
    
  )
}


export default VidHomePage;