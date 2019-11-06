import React, { Component } from 'react';
import Project from './project';
import data from '../myData';

class Work extends Component {
    state={ }
    render() {
        return (
            <>
            <div className='work'>
            <h1 className='heading'>Work</h1>
            <div className="workContent">
                {data.projects.map((project) => (
                    <Project key={project.id}
                        title = {project.title}
                        details = {project.details}
                        imageSrc = {project.imageSrc}
                        gitHubUrl={project.gitHubUrl}
                        deployedUrl={project.deployedUrl}
                    ></Project>
                ))}
            </div>
            </div>
            </>
        );
    }
}

export default Work;