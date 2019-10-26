import React, { Component } from 'react';
import { Link } from 'react-scroll';

class NavBar extends Component {
    state= {}
    render() {
        return (
            <nav>
                <ul>
                    <li><Link classname='link'> Home</Link></li>
                    <li><Link classname='link'> About</Link></li>
                    <li><Link classname='link'> Work</Link></li>
                    <li><Link classname='link'> Contact</Link></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;