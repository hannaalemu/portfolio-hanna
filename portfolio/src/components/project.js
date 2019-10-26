import React, { Component } from 'react';

class Project extends Component {
    state={ }
    render() {
        return (
            <div className='project'>
                <a href={this.props.url}>
                    <img src={this.props.imageSrc} alt={this.props.title}></img>
                </a>
                <h2>{this.props.title}</h2>
                <span>{this.props.details}</span>
            </div>
        );
    }
}

export default Project;