// Footer.js

import React from 'react';
import './Footer.css';
import logo from "./Pankaj Decorators-logos_white1.png"
import { Button } from '@mui/material';
const Footer = () => {
  return (
   <div className='footer'>
    <div>
        <img src={logo}></img>
        <p className='addr'>Near Balaji Temple,</p>
        <p className='addr'>Parola,Dist Jalgaon</p>

        <p className='phone'>+91 9096260971</p>
        <p className='phone'>+91 9595779771</p>
    </div>
    <div className='link'>
        <p className='follow'>Follow Us</p>
        
        <Button variant="outlined">Reach out at us</Button>
        
        <div className='icon'>
      <a href="" className="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
    </div>
    <div className='link'>
        <p>Important Links</p>
        <ul>
            <a href='#'>Events</a>
            <a href='#'>Sevices</a>
            <a href='#'>Review</a>
            <a href='#'>About</a>
            <a href='#'>Conact</a>
        </ul>
    </div>
    
    </div>
  )
};

export default Footer;
