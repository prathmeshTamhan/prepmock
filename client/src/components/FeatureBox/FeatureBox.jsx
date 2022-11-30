import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { setIsLogged } from '../../States/action-creators/index'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { acitionCreators } from '../../States/index'
import { useNavigate } from 'react-router-dom'

function FeatureBox(props) {

  const dispatch = useDispatch()
  const { setIsLogged } = bindActionCreators(acitionCreators, dispatch)
  const navigate = useNavigate()

  const user = useSelector(state => state.User)

  function verifyLogin() {

    if( !user.isAuthenticated ){
      navigate('login')
    }
    else{
      navigate('chooseInterview')
    }

  }
  
  return (
    <div className="a-Box">

        <img className="a-b-img" src={props.image} />

      <div className="s-b-text">
        <h2>{props.title}</h2>
        <Button variant="contained" onClick={() => verifyLogin()}> Start </Button>
      </div>

    </div>
  );
}

export default FeatureBox;
