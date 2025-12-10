import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const ScrollArrow = () => {
  const arrowRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 5 second delay between bounces
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

      // Ensure transform origin is center so it squashes evenly
      gsap.set(arrowRef.current, { transformOrigin: "center center", y: 0 });

      tl
      // 1. ANTICIPATION: Crouch/Squash slightly before jumping
      .to(arrowRef.current, {
        scaleY: 0.8,
        scaleX: 1.2,
        duration: 0.2,
        ease: "power1.out"
      })

      // 2. JUMP: Shoot UP + Stretch (Wings fold back)
      .to(arrowRef.current, {
        y: -20,         // Go UP
        scaleY: 1.2,    // Stretch vertically
        scaleX: 0.85,   // Thin horizontally
        duration: 0.4,
        ease: "power2.out" // Decelerate at the top
      })

      // 3. FALL: Accelerate back DOWN to Base
      .to(arrowRef.current, {
        y: 0,           // Return to BASE
        scaleY: 1.25,   // Stay stretched due to speed
        scaleX: 0.85,
        duration: 0.25,
        ease: "power3.in" // Accelerate into the floor
      })

      // 4. IMPACT: Landing on Base + Heavy Squash (Wings flap out)
      .to(arrowRef.current, {
        scaleY: 0.6,    // Squash down
        scaleX: 1.35,   // Spread out
        duration: 0.1,  // Instant impact
        ease: "none"
      })

      // 5. RECOIL: Spring back to normal shape (Buttery wobble)
      .to(arrowRef.current, {
        scaleY: 1,
        scaleX: 1,
        duration: 1,
        ease: "elastic.out(1.5, 0.4)" 
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <StyledWrapper ref={containerRef}>
      <div className="arrow-box">
        <svg 
          ref={arrowRef}
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M4 9L12 17L20 9" 
            stroke="black" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .arrow-box {
    width: 30px; 
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Important: allows the svg to overflow slightly during the squash animation */
    overflow: visible; 
  }

  svg {
    width: 100%;
    height: 100%;
    display: block;
    /* Ensures transforms happen from the visual center */
    transform-box: fill-box;
    transform-origin: center;
  }
`;

export default ScrollArrow;