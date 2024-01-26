import { Component } from "react";
import "./Navbar.css";
import logo from './Pankaj Decorators-logos_white1.png';
class Navbar extends Component{
    state={clicked:false};
    handleClicked=()=>{
        this.setState({clicked : !this.state.clicked})
    }
    render(){
    return(
        <>
        <nav>
            <img src={logo} alt="Not yet" />
        <div>
            <ul id="navbar" className={this.state.clicked ? "#navabr active" : "#navbar"}>
                <li><a href='index.html'>Stage</a></li>
                <li><a href='index.html'>Events</a></li>
                <li><a href='index.html'>Services</a></li>
                <li><a href='index.html'>About Us</a></li>
                <li><a href='index.html'>Contact</a></li>
            </ul>
        </div>
        <div id="mobile" onClick={this.handleClicked}>
            <i id="bar" className={this.state.clicked ? 'fas fa-times': 'fas fa-bars' }></i>
        </div>
        </nav>
        </>
    )
}
}
export default Navbar;