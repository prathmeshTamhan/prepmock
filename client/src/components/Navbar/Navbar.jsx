import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

import { setIsLogged } from '../../States/action-creators/index'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { acitionCreators } from '../../States/index'
import { useNavigate } from 'react-router-dom'


function Navbar() {

    const dispatch = useDispatch()
    const { setIsLogged } = bindActionCreators(acitionCreators, dispatch)
    const navigate = useNavigate()

    const user = useSelector(state=>state.User)

    const[nav,setnav]= useState(false);
    const changeBachground=()=>{
        if(window.scrollY >= 1000){
            setnav(true);
        }else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBachground);



  return (
        <nav className='{nav ? nav active : nav} border'>
            <a href='#' className='logo'>
                <img src={logo} alt=''/>
            </a>
            <input type='checkbox' className='menu-btn' id='mebu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'>
                </span>
            </label>
            <ul>
                <li onClick={()=>{window.scroll({ top: 0, left: 0, behavior: 'smooth' });}}><Link to='/' className='active'>Home</Link></li>
                <li  ><a onClick={()=>{window.scroll({ top: window.innerHeight*2, left: 0, behavior: 'smooth' });}} >Plans</a></li>
                <li onClick={()=>{window.scroll({ top: window.innerHeight*3, left: 0, behavior: 'smooth' });}} ><a >Contact Us</a></li>
                <li  >{ !user.isAuthenticated ? <Link to='/login' > Login </Link> : <Link to='/login' onClick={()=>{       setIsLogged({isAuthenticated:false , accessToken : ""})}}> Logout </Link>}</li>
            </ul>
        </nav>
  )
}

export default Navbar