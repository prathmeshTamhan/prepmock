import React from "react";
import './CallPageHeader.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{
    faUserFriends,
    faCommentAlt,
    faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
// import { formatDate } from "./../../../utils/helpers";
function CallPageHeader(){
    return(
        <div className="frame-header">
            <div className="header-item icon-block">
                <FontAwesomeIcon className="icon" icon={faUserFriends}/>
            </div>
            <div className="header-items icon-block">
        {/* onClick={() => { */}
        {/* setIsMessenger(true); */}
         {/* setMessageAlert({}); */}
        {/* }} */}
      
            <FontAwesomeIcon className="icon-comment" icon={faCommentAlt} />
        {/* {!isMessenger && messageAlert.alert && ( */}
          <span className="alert-circle-icon"></span>
        {/* )} */}
        </div>
    
      <div className="header-items date-block">11.00</div>
      <div className="header-items icon-block">
        <FontAwesomeIcon className="icon profile" icon={faUserCircle} />
      </div>
            
        </div>
    );
}export default CallPageHeader;
