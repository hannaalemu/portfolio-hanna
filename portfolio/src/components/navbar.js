import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import pdf from '../resume.pdf';

class NavBar extends Component {
    state = {  }
    scrollToTop = () => {
        scroll.scrollToTop();
    };    
    render() {
        return (
            <>
            <div className="navBar">
        <nav>
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
                    href={pdf} target="_blank" rel="noopener noreferrer"
                >Resume</a></li>
            </ul>
        </nav> 
            </div>
            </>
        );
    }
}

export default NavBar;