import React from 'react'
import {ReactMediaRecorder, useReactMediaRecorder} from 'react-media-recorder'
import "../pagescss/Mockinterview.css"
function MockInterview() {
    const{status,startRecording,stopRecording,mediaBlobUrl} = useReactMediaRecorder({ video:true})
  return (
    <div id='mockinterview'>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <video src={mediaBlobUrl} controls autoPlay loop />
        </div>

  )
}

export default MockInterview