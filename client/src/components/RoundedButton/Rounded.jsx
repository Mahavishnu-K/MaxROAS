import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Magnetic from '../Magnetic/Magnetic.jsx';

export default function Rounded({children, backgroundColor="#000000", className="", ...attributes}) {

  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;

  useEffect( () => {
    timeline.current = gsap.timeline({paused: true})
    timeline.current
      .to(circle.current, {top: "-25%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
      .to(circle.current, {top: "-150%", width: "125%", duration: 0.25}, "exit")
  }, [])
  
  const manageMouseEnter = () => {
    if(timeoutId) clearTimeout(timeoutId)
    timeline.current.tweenFromTo('enter', 'exit');
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout( () => {
      timeline.current.play();
    }, 300)
  }

  return (
    <Magnetic>
      <div 
        className={`roundedButton group ${className}`} 
        style={{overflow: "hidden"}} 
        onMouseEnter={() => {manageMouseEnter()}} 
        onMouseLeave={() => {manageMouseLeave()}} 
        {...attributes}
      >
         <span className="relative z-10 flex items-center justify-center">
            {children}
        </span>

        <div ref={circle} style={{backgroundColor}} className="circle"></div>
        
        <style>{`
            .roundedButton {
                border-radius: 3em;
                border: 1px solid #ccc;
                cursor: pointer;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 15px 60px;
                color: black;
            }

            .roundedButton span, 
            .roundedButton svg {
                transition: all 0.4s linear;
            }
            
            /* Targeting the paragraph tag inside */
            .roundedButton p {
                position: relative;
                z-index: 1;
                transition: color 0.4s linear;
            }

            /* Hover effect */
            .roundedButton:hover p, 
            .roundedButton:hover span,
            .roundedButton:hover svg {
                color: white;
            }
            .circle {
                width: 100%;
                height: 150%;
                position: absolute;
                border-radius: 50%;
                top: 100%;
                z-index: 0;
                left: 50%;
                transform: translateX(-50%);
                pointer-events: none;
            }

            /* Media Queries */
            @media (max-width: 390px) {
                .roundedButton { padding: 10px 30px; }
            }

            @media (min-width: 391px) and (max-width: 480px) {
                .roundedButton { padding: 12px 40px; }
            }

            @media (min-width: 481px) and (max-width: 540px) {
                .roundedButton { padding: 14px 50px; }
            }

            @media (min-width: 541px) and (max-width: 780px) {
                .roundedButton { padding: 15px 55px; }
            }

            @media (min-width: 781px) and (max-width: 834px) {
                .roundedButton { padding: 15px 60px; }
            }

            @media (min-width: 835px) and (max-width: 1024px) {
                .roundedButton { padding: 15px 65px; }
            }

            @media (min-width: 1025px) and (max-width: 1280px) {
                .roundedButton { padding: 15px 70px; }
            }

            @media (min-width: 1281px) {
                .roundedButton { padding: 15px 75px; }
            }
        `}</style>
      </div>
    </Magnetic>
  )
}