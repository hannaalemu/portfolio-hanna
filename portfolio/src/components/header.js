import React, { useEffect, useRef } from 'react';
import {TweenMax, Power3} from "gsap";

function Header() {
    let one=useRef(null)
    let two=useRef(null)
    let three=useRef(null)

    useEffect(()=> {
        TweenMax.from(one, 5, {opacity: 0, x:40, ease:Power3.easeOut})
        TweenMax.from(two, 5, {opacity: 0, x:100, ease:Power3.easeOut, delay: .2})
        TweenMax.from(three, 5, {opacity: 0, x:160, ease:Power3.easeOut, delay: .4})

    }, {})

        return (
            <>
            <div className="header">
                <div className="headerContent">
                <h1 ref={el => one = el}>Innovate.</h1>
                <h1 ref={el => two =el}>Improve.</h1>
                <h1 ref={el => three =el}>Inspire.</h1>

                </div>
            </div>
            </>
        )
    
}

export default Header;

