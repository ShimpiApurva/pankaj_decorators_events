import img from './img11.jpg';
import img2 from './bevarage.jpg';
import img3 from './plate.jpg';
import img4 from './table.jpg';
import img5 from './img13.jpg';
import img10 from './more.jpeg'
import { FaArrowRight } from "react-icons/fa";
// import img6 from './img1.png';
import img7 from './img2.png';
import "./Services.css";
function services() {
    return (
        <>
            <div>
                <div className="services">
                    <img src={img}></img>
                    <div className='heading'>
                        <h2>Let's Plan <span>Your Event</span></h2>
                    </div>
                </div>
                <div className='forth-container'>
                    <div>
                        <img src={img5}></img>
                    </div>
                    {/* <div>
                        <img src={img6}></img>
                    </div> */}
                    <div>
                        <img src={img7}></img>
                    </div>
                </div>
                <div className='container'>
                    <div className='whyUs'>
                        <h1>Why Us </h1>
                        <h4>FOR ALL YOUR CATERING NEEDS</h4>
                    </div>
                    <div className='reason'>
                        <div className='reason-2'>
                            <h2>Exclusive Design</h2>
                            <h2>Client Focused</h2>
                            <h2>Fresh Ingrediants</h2>
                        </div>
                        <div className='reason-2'>
                            <h2>Diverse Client Base</h2>
                            <h2>Responsible Sourcing</h2>
                            <h2>Fresh Ingrediants</h2>
                        </div>
                    </div>
                </div>
                <div className='third-container'>
                    <div className='whyUs'>
                        <h1>Our Menus </h1>
                        <h4>SELECT FROM THE FOLLOWING MENUS</h4>
                    </div>
                    <div>
                        <div className='menus'>
                            <img src={img2}></img>
                            <img src={img3}></img>
                            <img src={img4}></img>
                        </div>
                    </div>
                </div>
                <div className='main-event'>
                    {/* <img src={img9}></img> */}
                    <div className='whyUs'>
                        <h1>Event Service We Provide </h1>
                        <h4>SELECT FROM THE FOLLOWING MENUS</h4>
                        <div className='container-fifth'>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Birthday Party</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="card-link">Read More <FaArrowRight /> </a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Wedding</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="card-link">Read More <FaArrowRight /> </a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Corporate Event </h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="card-link">Read More <FaArrowRight /></a>
                                </div>
                            </div>
                        </div>
                        <div className='container-fifth'>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Anniversaries</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="card-link">Read More <FaArrowRight /> </a>

                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Private Party</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="card-link">Read More <FaArrowRight /> </a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Private Party</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="card-link">Read More <FaArrowRight /> </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='last-container'>
                    <img src={img10}></img>
                </div>


            </div>
        </>

    )
}
export default services;