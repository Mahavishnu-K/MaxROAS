import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Magnetic from '../Magnetic/Magnetic.jsx';

export default function Rounded({children, backgroundColor="#000000", className="", ...attributes}) {

  const circle = useRef(null);
  const timeline = useRef(null);
  let timeoutId = null;
  // Ref to track if device is touch-based
  const isTouchDevice = useRef(false);

  useEffect(() => {
    // 1. Detect if it is a touch device (Mobile/Tablet)
    isTouchDevice.current = window.matchMedia("(pointer: coarse)").matches;

    // 2. Setup GSAP Timeline
    timeline.current = gsap.timeline({paused: true})
    timeline.current
      .to(circle.current, {top: "-25%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
      .to(circle.current, {top: "-150%", width: "125%", duration: 0.25}, "exit")
  }, [])

  const manageMouseEnter = () => {
    // If mobile, don't use hover logic
    if (isTouchDevice.current) return;
    
    if(timeoutId) clearTimeout(timeoutId)
    timeline.current.tweenFromTo('enter', 'exit');
  }

  const manageMouseLeave = () => {
    // If mobile, don't use hover logic
    if (isTouchDevice.current) return;

    timeoutId = setTimeout( () => {
      timeline.current.play();
    }, 300)
  }

  // New function specifically for Mobile Tap/Click
  const manageMobileClick = () => {
    if (!isTouchDevice.current) return; // Ignore on desktop (let hover handle it)

    // Clear any existing timeouts
    if(timeoutId) clearTimeout(timeoutId);

    // 1. Play the "Fill" animation immediately
    timeline.current.tweenFromTo('enter', 'exit');

    // 2. Automatically play the "Unfill" animation after a short delay
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  }

  return (
    <Magnetic>
      <div
        className={`roundedButton group ${className}`}
        style={{overflow: "hidden"}}
        onMouseEnter={() => {manageMouseEnter()}}
        onMouseLeave={() => {manageMouseLeave()}}
        onClick={() => {manageMobileClick()}} // Added Click Handler
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
            
            .roundedButton p {
                position: relative;
                z-index: 1;
                transition: color 0.4s linear;
            }

            /* Desktop Hover Effect Only */
            @media (hover: hover) {
                .roundedButton:hover p, 
                .roundedButton:hover span,
                .roundedButton:hover svg {
                    color: white;
                }
            }
            
            /* Mobile Click State (simulated via active or JS class if needed, 
               but the circle animation handles the background) */
            .roundedButton:active p,
            .roundedButton:active span,
            .roundedButton:active svg {
                 color: white;
                 transition-delay: 0.1s; /* smooth blend with circle */
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
            @media (max-width: 390px) { .roundedButton { padding: 10px 30px; } }
            @media (min-width: 391px) and (max-width: 480px) { .roundedButton { padding: 12px 40px; } }
            @media (min-width: 481px) and (max-width: 540px) { .roundedButton { padding: 14px 50px; } }
            @media (min-width: 541px) and (max-width: 780px) { .roundedButton { padding: 15px 55px; } }
            @media (min-width: 781px) and (max-width: 834px) { .roundedButton { padding: 15px 60px; } }
            @media (min-width: 835px) and (max-width: 1024px) { .roundedButton { padding: 15px 65px; } }
            @media (min-width: 1025px) and (max-width: 1280px) { .roundedButton { padding: 15px 70px; } }
            @media (min-width: 1281px) { .roundedButton { padding: 15px 75px; } }
        `}</style>
      </div>
    </Magnetic>
  )
}