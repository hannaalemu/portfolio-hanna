import React , { Component } from 'react';
import data from '../myData';

class About extends Component {
    state={ }
    render() {
        return (
            <div className='about'>
                <h1>
                    About
                </h1>

                <div className="aboutContent">

                <img src={data.aboutImage } alt='about image'></img>
               
                <p>
                    {data.abouttext }
                </p>
                

                </div>
            </div>
        );
    }
}

export default About;