import React, { Component } from 'react';
import data from '../myData';

class Header extends Component {
    state={ }
    render() {
        return (
            <div className="header">
                <h1>Innovate.Improve.Inspire.</h1>

                <p>{ data.headerTagLine }</p>

            </div>
        )
    }
}

export default Header;