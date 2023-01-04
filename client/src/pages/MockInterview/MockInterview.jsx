// import React from 'react'
// import {ReactMediaRecorder, useReactMediaRecorder} from 'react-media-recorder'
// import "../pagescss/Mockinterview.css"
// function MockInterview() {
//     const{status,startRecording,stopRecording,mediaBlobUrl} = useReactMediaRecorder({ video:true})
//   return (
//     <div id='mockinterview'>
//           <p>{status}</p>
//           <button onClick={startRecording}>Skip</button>
//           <button onClick={stopRecording}>Next</button>
//           <video src={mediaBlobUrl} controls autoPlay loop />
//         </div>

//   )
// }

// // export default MockInterview
import React, { useState, useEffect } from "react";
import { Badge } from "antd";
import Button from "@mui/material/Button";
import { useReactMediaRecorder } from "react-media-recorder";
import Text from "antd/lib/typography/Text";
import './MockInterview.css'
import { useRef } from "react";
import axios from 'axios'
import * as ReactDOM from 'react-dom/client';
import QueDiv from "../../components/QueDiv/QueDiv";

export default function MockInterview({ screen, audio, video, downloadRecordingPath, downloadRecordingType, emailToSupport }) {

  const [recordingNumber, setRecordingNumber] = useState(0);
  const [queBank, setQueBank] = useState([]);
  const [CurrentQueBank, setCurrentQueBank] = useState([]);
  const [subject, setSubject] = useState();
  const [diff, setDiff] = useState();
  const queContainer = useRef()
  const nextBtn = useRef()
  const [seconds, setSeconds] = useState(0);

  function starttimer() {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }
  async function startVideo() {

    navigator.getUserMedia = navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    if (navigator.getUserMedia) {
      navigator.getUserMedia({ audio: true, video: { width: 1280, height: 720 } },
        (stream) => {
          const video = document.querySelector('video');
          video.srcObject = stream;
          video.onloadedmetadata = (e) => {
            video.play();
          };
        },
        (err) => {
          console.error(`The following error occurred: ${err.name}`);
        }
      );
    } else {
      console.log("getUserMedia not supported");
    }

  }


  useEffect(() => {

    startVideo();

    let subject = (window.location.href).split('&')[1].split('=')[1];
    let diff = null 

    if (subject !== "HR") {
       diff = (window.location.href).split('&')[2].split('=')[1];
      setDiff(diff)
    }
    setSubject(subject)


    var data = JSON.stringify({
      "subject": subject,
      "difficultyLevel":  diff === null ? diff :  diff.charAt(0).toUpperCase() + diff.slice(1)
    });

    var config = {
      method: 'post',
      url: 'http://localhost:1337/que/getRandomQue',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setQueBank(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });


  }, [])

  useEffect(() => {
    renderQueComp()
  }, [queBank])



  const renderQueComp = async () => {

    if( queBank.length < 1 ){
      document.getElementById('nextBtn').innerHTML = 'Submit'
      
    }else{
      document.getElementById('nextBtn').innerHTML = 'Next'
    }

    let arr = CurrentQueBank
    let ele = queBank.pop()
    let compArr = []

    arr.push(ele)

    arr.forEach((que) => {
      try {
        compArr.push(<QueDiv que={que.que} />)
      } catch (e) { }
    })


    const root = ReactDOM.createRoot(queContainer.current)
    root.render(
      compArr
    )

  }



  const sendMail = (mail, recordingNumber, mediaBlobUrl) => {

    var data = JSON.stringify({
      "mail": mail,
      "recNo": recordingNumber,
      "media": mediaBlobUrl
    });

    var config = {
      method: 'post',
      url: 'http://localhost:1337/mail/sendMail',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        if (response.status === 200) {
          alert('Email Sent')
        }
      })
      .catch(function (error) {
        console.log(error);
      });


  }

  const RecordView = () => {

    const {
      status,
      startRecording: startRecord,
      stopRecording: stopRecord,
      mediaBlobUrl,
    } = useReactMediaRecorder({
      screen: true,
      audio: true,
      video: true,
      downloadRecordingPath: true,
      downloadRecordingType: true,
      emailToSupport: true,
    });

    const startRecording = () => {
      starttimer()
      return startRecord();
    };

    const stopRecording = () => {
      const currentTimeSatmp = new Date().getTime();
      setRecordingNumber(currentTimeSatmp);
      return stopRecord();
    };

    const viewRecording = () => {
      window.open(mediaBlobUrl, "_blank").focus();
    };

    const downloadRecording = () => {

      const pathName = `${downloadRecordingPath}_${recordingNumber}.${downloadRecordingType}`;

      try {
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        
          window.navigator.msSaveOrOpenBlob(mediaBlobUrl, pathName);
        } else {
        
          const link = document.createElement("a");
          console.log(mediaBlobUrl)
          link.href = mediaBlobUrl;
          link.download = pathName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } catch (err) {
        console.error(err);
      }
    };

    const mailRecording = () => {
      sendMail(emailToSupport, recordingNumber, mediaBlobUrl)
    };

    return (
      <div>

        <div>Seconds: {seconds}</div>
        {status && status !== "stopped" && (
          <Text>Screen Recording Status: <span className="videoStatus"> {status && status.toUpperCase()} </span> </Text>
        )}
        {status && status === "recording" && (
          <Badge
            className="screen-recording-badge"
            color="#faad14"
            status="processing"
            offset={[2, 0]}
            style={{
              marginLeft: "5px",
            }}
          />
        )}


        {status && status !== "recording" && (
          <Button
            size="small"
            variant="contained"
            onClick={startRecording}
            type="primary"
            icon="play-circle"
            className="margin-left-sm"
            ghost
          >
            {mediaBlobUrl ? "Record again" : "Record your Problem"}
          </Button>
        )}

        {status && status === "recording" && (
          <Button
            size="small"
            variant="contained"
            onClick={stopRecording}
            type="danger"
            icon="stop"
            className="margin-left-sm"
            ghost
          >
            Stop Recording
          </Button>
        )}

        {mediaBlobUrl && status && status === "stopped" && (
          <Button
            size="small"
            variant="contained"
            onClick={viewRecording}
            type="primary"
            icon="picture"
            className="viewRecording margin-left-sm"
          >
            View
          </Button>
        )}
        {downloadRecordingType &&
          mediaBlobUrl &&
          status &&
          status === "stopped" && (
            <Button
              size="small"
              variant="contained"
              onClick={downloadRecording}
              type="primary"
              icon="download"
              className="downloadRecording margin-left-sm"
            >
              Download
            </Button>
          )}

        {emailToSupport && mediaBlobUrl && status && status === "stopped" && (
          <Button
            size="small"
            onClick={mailRecording}
            type="primary"
            icon="mail"
            className="mailRecording margin-left-sm"
          >
            Email To Support
          </Button>
        )}
      </div>
    );
  };

  return (
    <>


      <div className="Scren-Record-Wrapper" style={{ padding: "5px 20px" }}>

        <div className="videoRecorder border">
          <video id="video" autoPlay muted width="720" height="200"> </video>
          {RecordView()}

          <button id='nextBtn' onClick={(e) => { e.target.innerHTML === 'Submit' ? window.location.href = '/feedback' :  renderQueComp() }} >Next</button>
        </div>

        <div className="questionContainer border" ref={queContainer} ></div>
      </div>
    </>
  );
};

