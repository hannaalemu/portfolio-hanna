import React , { Component } from 'react';
import data from '../myData';

class About extends Component {
    state={ }
    render() {
        return (
            <div className='about'>
                <div className='aboutContent'>
                <h1>
                    About
                </h1>
                <p>
                    {data.aboutText }
                </p>
                </div>
                
                { data.showAboutImage ? <img src={data.aboutImage } alt='about image'></img> : null }
            </div>
        );
    }
}

export default About;