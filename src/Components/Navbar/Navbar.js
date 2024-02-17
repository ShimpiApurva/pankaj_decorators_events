import { Component } from "react";
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import logo from './Pankaj Decorators-logos_white1.png';
import Button from '@mui/material/Button';
// import Button from '@mui/material/Button';
// import Button from 'react-bootstrap/Button';

class Navbar extends Component {
    state = { clicked: false };
    handleClicked = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
                <nav>
                    <img src={logo} alt="Not yet" />
                    <div>
                        <ul id="navbar" className={this.state.clicked ? "#navabr active" : "#navbar"}>
                            <li>
                                <NavLink to="/" exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/events">Events</NavLink>
                            </li>
                            <li>
                                <NavLink to="/services">Services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/review">Review</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            {/* <li>
                            <Button variant="contained" className="myButton">
                            <NavLink to="/contact">Contact Us</NavLink>
                        </Button>
                            </li> */}
                            <div>
                    <Button variant="contained" className="myButton">
                            <NavLink to="/contact">Contact Us</NavLink>
                        </Button>
                        {/* <Button variant="primary">Contact Us</Button> */}
                    </div>
                        </ul>
                        
                    </div>
                    
                    
                    <div id="mobile" onClick={this.handleClicked}>
                        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav>
            </>
        )
    }
}
export default Navbar;