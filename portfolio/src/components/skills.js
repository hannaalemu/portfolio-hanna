import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faCss3, faHtml5, faReact, } from '@fortawesome/free-brands-svg-icons';


class Skills extends Component {
    render() {
        return (
            <>
            <div className="skills">
                <h1> Skills</h1>
            <div className="skillsIcons">
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faCss3} />
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faReact} />
                </div>
            </div>

            </>

        )
    }
}

export default Skills;
