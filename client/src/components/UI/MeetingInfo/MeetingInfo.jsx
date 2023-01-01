import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faTimes,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./MeetingInfo.css";

const MeetingInfo = ({setMeetInfoPopup, url}) => {

  var email= {}
  var loc = {}
  return (
    <div className="meeting-info-block">
      <div className="meeting-header">
        <h3>Your meeting's ready</h3>
        <FontAwesomeIcon
          className="icon"
          icon={faTimes}
          onClick={() =>{
            setMeetInfoPopup(false);
          }

          }
        />
      </div>

      <button className="add-people-btn" onClick={() =>{
        email = prompt("Enter Users Email Address", "example@gmail.com");
        loc  = "mailto:" + email + "?subject=Link for VC&cc=bhargavigawande05@gmail.com&body=Hello, This is your link for Virtual meet: "+ url;
        document.getElementById('emailbtn').setAttribute("href", loc);

      }}>


        <FontAwesomeIcon className="icon" icon={faUser} />
        Add Others
      </button>

      <a href="#" className="btn" id="emailbtn"><FontAwesomeIcon
          className="mailicon"
          icon={faEnvelope}
        /></a>

      <p className="info-text">
        Or share this meeting link with others you want in the meeting
      </p>
      <div className="meet-link">
        <span>{url}</span>
        <FontAwesomeIcon
          className="icon"
          icon={faCopy}
          onClick={() => navigator.clipboard.writeText(url)}
        />
      </div>
    </div>
  );
};

export default MeetingInfo;