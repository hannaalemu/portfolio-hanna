import React, { Component } from 'react';
import data from '../myData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faJs } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons';


class Contact extends Component {
    state={ }
    render() {
        return (
            <>
            <div className='contact'>
            <h1>Contact</h1>
                <h2>Reach out to me !</h2>
                <div className="contactIcons">

                <FontAwesomeIcon icon={faEnvelope} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faGithub} />                 
                </div>
                </div>
            </>
        );
    }
}

export default Contact;