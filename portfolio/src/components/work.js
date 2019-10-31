import React, { Component } from 'react';
import Project from './project';
import data from '../myData';

class Work extends Component {
    state={ }
    render() {
        return (
            <>
            <h1 className='heading'>Work</h1>
            <div className='work'>
                {data.projects.map((project) => (
                    <Project key={project.id}
                        title = {project.title}
                        details = {project.details}
                        imageSrc = {project.imageSrc}
                        url={project.url}
                    ></Project>
                ))}
            </div>
            </>
        );
    }
}

export default Work;