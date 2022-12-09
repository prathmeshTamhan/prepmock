import React from 'react'
import './CallPage.css';
import CallPageHeader from '../UI/CallPageHeader/CallPageHeader';
import CallPageFooter from '../UI/CallPageFooter/CallPageFooter';
import MeetingInfo from '../UI/MeetingInfo/MeetingInfo';
import Messenger from '../UI/Messenger/Messenger';
import Alert from "../UI/Alert/Alert";
import MessageListReducer from "../../reducers/MessageListReducer";
import {useParams} from "react-router-dom";
import {useState} from 'react';
import {useEffect, useReducer} from 'react';
import { useNavigate } from "react-router-dom";
import Peer from 'simple-peer';
import {getRequest, postRequest} from './../../utils/apiRequests';
import {BASE_URL, GET_CALL_ID, SAVE_CALL_ID} from './../../utils/apiEndpoints';
import io from "socket.io-client";


const initialState = [];
let peer = null;
const socket = io.connect('http://localhost:4000');

function CallPage() {

let {id} = useParams();
console.log(id);
const isAdmin = window.location.hash === "#init" ? true : false;
const url = `${window.location.origin}${window.location.pathname}`;
console.log(url)
let alertTimeout = null;
console.log(isAdmin, url);
const history = useNavigate();

const [messageList, messageListReducer] = useReducer(
  MessageListReducer,
  initialState
);


const [streamObj, setStreamObj] = useState();
const [screenCastStream, setScreenCastStream] = useState();
const [meetInfoPopup, setMeetInfoPopup] = useState(false);
const [isPresenting, setIsPresenting] = useState(false);
const [isMessenger, setIsMessenger] = useState(false);
const [messageAlert, setMessageAlert] = useState({});
const [isAudio, setIsAudio] = useState(true);

useEffect(() => {
  if (isAdmin) {
    setMeetInfoPopup(true);
  }
  initWebRTC();
    socket.on("code", (data) => {
      console.log("data url" + data)
      if (data.url === url) {
        peer.signal(data.code);
      }
    });
  
  }, []);

  const getRecieverCode = async () => {
    const response = await getRequest(`${BASE_URL}${GET_CALL_ID}/${id}`);
    if (response.code) {
      peer.signal(response.code);
    }
  };


  const initWebRTC = () => {
    navigator.mediaDevices.getUserMedia({
      video: true, audio: true,
    })
    .then((stream) => {
      setStreamObj(stream);
      
      peer = new Peer({
        initiator: isAdmin,
        trickle: false,
        stream: stream,
      });


      if(!isAdmin){
        getRecieverCode();
      }

      peer.on('signal', async(data) => {
        if(isAdmin){
          let payload = {
            id,
            signalData: data,
          };
          await postRequest(`${BASE_URL}${SAVE_CALL_ID}`, payload);
        }else{
          socket.emit("code", { code: data, url }, (cbData) => {
            console.log("code sent");
          });
        }
      });

      peer.on('connect' , () => {
        console.log("peer connected")
        // wait for 'connect' event before using the data channel
      });

      peer.on("data", (data) => {
        clearTimeout(alertTimeout);
        messageListReducer({
          type: "addMessage",
          payload: {
            user: "other",
            msg: data.toString(),
            time: Date.now(),
          },
        });

        setMessageAlert({
          alert: true,
          isPopup: true,
          payload: {
            user: "other",
            msg: data.toString(),
          },
        });

        alertTimeout = setTimeout(() => {
          setMessageAlert({
            ...messageAlert,
            isPopup: false,
            payload: {},
          });
        }, 10000);
      });

      peer.on("stream", (stream) => {
          // got remote video stream, now let's show it in a video tag
          let video = document.querySelector("video");

          if ("srcObject" in this.video) {
            this.video.srcObject = stream;
          } else {
            this.video.src = window.URL.createObjectURL(stream); // for older browsers
          }

          video.play();
        });
    })
    .catch((e)=> { 
      console.log(e);
    });
  };
  const sendMsg = (msg) => {
    peer.send(msg);
    messageListReducer({
      type: "addMessage",
      payload: {
        user: "you",
        msg: msg,
        time: Date.now(),
      },
    });
  };

  const screenShare = () => {
    navigator.mediaDevices
      .getDisplayMedia({ cursor: true })
      .then((screenStream) => {
        peer.replaceTrack(
          streamObj.getVideoTracks()[0],
          screenStream.getVideoTracks()[0],
          streamObj
        );
        setScreenCastStream(screenStream);
        screenStream.getTracks()[0].onended = () => {
          peer.replaceTrack(
            screenStream.getVideoTracks()[0],
            streamObj.getVideoTracks()[0],
            streamObj
          );
        };
        setIsPresenting(true);
      });
  };

  const stopScreenShare = () => {
    screenCastStream.getVideoTracks().forEach(function (track) {
      track.stop();
    });
    peer.replaceTrack(
      screenCastStream.getVideoTracks()[0],
      streamObj.getVideoTracks()[0],
      streamObj
    );
    setIsPresenting(false);
  };

  const toggleAudio = (value) => {
    streamObj.getAudioTracks()[0].enabled = value;
    setIsAudio(value);
  };

  const disconnectCall = () => {
    peer.destroy();
    history.push("/");
    window.location.reload();
  };




  return (
    <div className='callpage-container'>
      <video className='video-container'src='' controls></video>
      <CallPageHeader
        isMessenger={isMessenger}
        setIsMessenger={setIsMessenger}
        messageAlert={messageAlert}
        setMessageAlert={setMessageAlert}
      />
      <CallPageFooter
        isPresenting={isPresenting}
        stopScreenShare={stopScreenShare}
        screenShare={screenShare}
        isAudio={isAudio}
        toggleAudio={toggleAudio}
        disconnectCall={disconnectCall}
      />

      {isAdmin && meetInfoPopup && <MeetingInfo setMeetInfoPopup = {setMeetInfoPopup} url={url} />}
      {/* <MeetingInfo /> */}

       {isMessenger ? (
        <Messenger
          setIsMessenger={setIsMessenger}
          sendMsg={sendMsg}
          messageList={messageList}
        />
      ) : (
        messageAlert.isPopup && <Alert messageAlert={messageAlert} />
      )}
    </div>
  )
}

export default CallPage;