import React, {useState} from 'react'
import logo from '../images/logo.png'
function Navbar() {
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
    <div>
        <nav className='{nav ? nav active : nav}'>
            <a href='#' className='logo'>
                <img src={logo} alt=''/>
            </a>
            <input type='checkbox' className='menu-btn' id='mebu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'>
                </span>
            </label>
            <ul>
                <li><a href='#' className='active'>Home</a></li>
                <li><a href='#'>Plans</a></li>
                <li><a href='#'>Contact Us</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar