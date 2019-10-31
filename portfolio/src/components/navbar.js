import React, { Component } from 'react';
import { Link } from 'react-scroll';

class NavBar extends Component {
    state= {}
    render() {
        return (
            <div className="navBar">

                    <p><Link classname='link'> Home</Link></p>
                    <p><Link classname='link'> About</Link></p>
                    <p><Link classname='link'> Work</Link></p>
                    <p><Link classname='link'> Contact</Link></p>
                
            </div>
        );
    }
}

export default NavBar;