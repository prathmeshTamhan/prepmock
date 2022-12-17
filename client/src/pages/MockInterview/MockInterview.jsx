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
import React, { useState } from "react";
import { Badge } from "antd";
import Button from "@mui/material/Button";
import { useReactMediaRecorder } from "react-media-recorder";
import Text from "antd/lib/typography/Text";
import axios from 'axios'
import './MockInterview.css'

const MockInterview = ({
  screen,
  audio,
  video,
  downloadRecordingPath,
  downloadRecordingType,
  emailToSupport,
}) => {
  const [recordingNumber, setRecordingNumber] = useState(0);


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
          // for IE
          window.navigator.msSaveOrOpenBlob(mediaBlobUrl, pathName);
        } else {
          // for Chrome
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
    <div className="Scren-Record-Wrapper" style={{ padding: "5px 20px" }}>
      <div className="videoRecorder border">{RecordView()}</div>
      <div className="questionContainer border"></div>
    </div>
  );
};
export default MockInterview;
