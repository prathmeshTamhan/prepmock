import React from 'react'
import './CallPage.css';
import CallPageHeader from '../UI/CallPageHeader/CallPageHeader';
import CallPageFooter from '../UI/CallPageFooter/CallPageFooter';
import MeetingInfo from '../UI/MeetingInfo/MeetingInfo';
import Messenger from '../UI/Messenger/Messenger';
function CallPage() {
  return (
    <div className='callpage-container'>
      <video className='video-container'src='' controls></video>
      <CallPageHeader/>
      <CallPageFooter/>
      <MeetingInfo/>
      <Messenger/>
    </div>
  )
}

export default CallPage;