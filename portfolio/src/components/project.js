import React, { Component } from 'react';
import { Link } from "react-scroll";


class Project extends Component {
    state={ }
    render() {
        return (
            <div className='project'>
                    <img src={this.props.imageSrc} alt={this.props.title}></img>
                    <h2>{this.props.title}</h2>

                    <span>{this.props.details}</span>

                <div className="projectLinks">
                            <a href={`${this.props.gitHubUrl}`} target="_blank"> Github</a>
                    <a href={`${this.props.deployedUrl}`} target="_blank" >Deployment</a>

                </div>
            </div>
        );
    }
}

export default Project;