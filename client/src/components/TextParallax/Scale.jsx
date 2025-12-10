import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scale = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const textElement = textRef.current;
      
      // 1. TEXT SCROLL ANIMATION (Existing logic)
      const getScrollAmount = () => {
        let textWidth = textElement.scrollWidth;
        let windowWidth = window.innerWidth;
        return -(textWidth - windowWidth);
      };

      gsap.to(textElement, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      // Added 'perspective-[1000px]' to enable 3D depth perception
      className="relative h-screen w-full bg-white overflow-hidden flex items-center perspective-[1000px]"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div 
            className="w-full h-full"
            style={{
                backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                backgroundSize: '4rem 4rem'
            }}
        ></div>
      </div>


      {/* The Big Sliding Text */}
      <div className="relative z-10 w-full pointer-events-none">
        <h1 
          ref={textRef}
          className="font-black whitespace-nowrap leading-none will-change-transform"
          style={{
            fontFamily: "'Slussen Expanded Black', sans-serif", 
            fontSize: "clamp(8rem, 20vw, 25rem)", 
            paddingRight: "5vw" 
          }}
        >
          GET READY TO SCALE!
        </h1>
      </div>
      
    </section>
  );
};

export default Scale;