import "./About.css";
import img from './img6.jpg';
import img1 from './about.jpg';
import img2 from './img1.jpg';
import React from "react";



function About() {
    return (
        <>
            <div className="about">
                <div className="img">
                    <img src={img}></img>
                </div>
                <div className="content">
                    <h2>About Us</h2>
                    <p>
                        <span>Welcome to Pankaj Decorators and Caterers,
                            your premier choice for event management and decoration services.</span> With a rich history of crafting unforgettable moments, we take pride in creating magical experiences for weddings, indoor and outdoor events, and much more.
                    </p>
                    <p>
                        Over the years, we have had the privilege of being part of numerous joyous occasions. <span>From elegant décor to exquisite catering, we strive for perfection in every aspect of your event, ensuring that it reflects your style and personality.</span>
                    </p>
                    <p>
                        At Pankaj Decorators and Caterers, we believe in turning ordinary events into extraordinary memories. <span>Let us be a part of your special day and turn it into a celebration that will be cherished for a lifetime.</span>
                    </p>
                </div>

            </div>
            <div className="sec-content">
                <img src={img1}></img>
            </div>
            <div className="third-content">
                <div className="box">
                    <div>
                        <h2 className="first">20<sup>+</sup></h2>
                    </div>
                    <div>
                        <h2 className="sec">
                        <span>Years of</span> Experience
                        </h2>
                    </div>
                </div>
                <div className="box">
                <div>
                        <h2 className="first">500<sup>+</sup></h2>
                    </div>
                    <div>
                        <h2 className="sec">
                        <span>Happy</span>  Clients
                        </h2>
                    </div>
                </div>
                <div className="box">
                <div>
                        <h2 className="first">700<sup>+</sup></h2>
                    </div>
                    <div>
                        <h2 className="sec">
                            <span>Succesfull</span>Events
                        </h2>
                    </div>
                </div>
                <div className="box">
                <div>
                        <h2 className="first">50<sup>+</sup></h2>
                    </div>
                    <div>
                        <h2 className="sec">
                        <span>Events</span> In Work
                        </h2>
                    </div>
                </div>
            </div>
            <div className="forth-content">
                <div className="Manage-service">
                <div className="service">
                    <div><h2>Event Planning And Coordination</h2></div>
                    <div><h2>Decoration Serivce</h2></div>
                    
                </div>
                <div className="service">
                    <div><h2>Venue Selection and Management</h2></div>
                    <div><h2>Logistics And Rentals</h2></div>
                </div>
                <div className="service">
                    <div className="one"><h2>Audio-Video Setup</h2></div>
                    <div className="one"><h2>Catering Service</h2></div>
                </div>
                </div>
                
                <div>
                    <img src={img2}></img>
                </div>
            </div>
        </>
    )
}
export default About;