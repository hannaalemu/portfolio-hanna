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

               <h2>Hi, I'm Hanna. Nice to meet you!</h2>

                <img src={data.aboutImage } alt='about'></img>
               
                </div>
                <p>
                    {data.abouttext }
                </p>
                

            </div>
        );
    }
}

export default About;