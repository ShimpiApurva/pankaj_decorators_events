import Button from '@mui/material/Button';
import React from 'react';
import img from './Images/img1.png';
import img2 from './Images/20.jpg';
import img3 from './Images/30.jpg';
import img4 from './Images/14.jpg';
import img5 from './Images/5.jpg';
import img6 from './Images/img1.jpeg';
import img7 from './Images/img2.png';
import img8 from './Images/22.jpg';

import "./Review.css";
// import { Button } from 'bootstrap';
function Review(){
    return(
        <>
        <div className='container-first'>
             <img src={img}></img>
             <div className='Top-Heading'>
             <h2 >
                Get An Unforgettable<br></br> Event <br></br>Experience<br></br> With Us
             </h2>
             <Button variant='contained'>read More</Button>
             </div>
             
        </div>
        
        <div className='container-sec'>
            <div>
                <h2>Some Of Our Events</h2>
            </div>
            <div className='gallery'>
            <img src={img2}></img>
            <img src={img3}></img>
            <img src={img4}></img>
            <img src={img5}></img>
            <img src={img6}></img>
            </div>
        </div>
        <hr></hr>
        <div className='container-third'>
            <div className='img1'>
            <img src={img7}></img>
            </div>
            <div className='img2'>
            <img src={img8}></img>
            </div>
        </div>
        </>
    )
}
export default Review;