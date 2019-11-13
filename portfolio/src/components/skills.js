import React, { Component } from 'react';
import { TimelineMax, TweenMax, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.controller = new ScrollMagic.Controller();
      }

      componentDidMount() {
        new ScrollMagic.Scene({
          triggerElement: "#scrollStarts",
          duration: 400, // scroll distance
          offset: 200 // start this scene after scrolling for 50px
        })
          .setTween(".backend", {
            scale: 0.5,
          })
          .setPin(".backend") // pins the element for the the scene's duration
          .addTo(this.controller); // assign the scene to the controller
      }
      
      render() {
        return (
            <>
            <div className="skills" id="scrollStarts">

                <h1> Skills</h1>
                
                 <div className="backend" >
                        <ul>
                            <li>NodeJs</li>
                            <li>REST APIs</li>
                            <li>Git</li>
                            <li>Jest</li>
                        </ul>
                    </div>

                    <div className="frontend" >
                        <ul>
                            <li>React JS</li>
                            <li>HTML, CSS & SASS</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>

                    <div className="tools" >
                        <ul>
                            <li>MongoDB</li>
                            <li>PostgresSQL</li>
                            <li>SCRUM and Agile</li>
                        </ul>
                    </div>
                </div>

            </>

        )
        }
    
}

export default Skills;
