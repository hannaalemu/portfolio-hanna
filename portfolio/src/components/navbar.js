import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class NavBar extends Component {
    state = {  }
    scrollToTop = () => {
        scroll.scrollToTop();
    };    
    render() {
        return (
            <>
            <div className="navBar">
        <nav className="navBar">
            <ul>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="homw"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                >Home</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Projects</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</Link></li>
                <li><a
                    className='link'
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    href='https://drive.google.com/file/d/1kWsyPn97Vl5AC35UQsjhdpZX1RvqkURn/view?usp=sharing' target="_blank" rel="noopener noreferrer"
                >Resume</a></li>
            </ul>
        </nav> 
            </div>
            </>
        );
    }
}

export default NavBar;