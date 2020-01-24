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

               <h2>Hi, I'm Hanna. Nice to meet you!</h2>
               
                <div className="aboutContent">


                <img src={data.aboutImage } alt='about'></img>
               
                <p>
                    {data.abouttext }
                </p>
                
                </div>
                

            </div>
        );
    }
}

export default About;