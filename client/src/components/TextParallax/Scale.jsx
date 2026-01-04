import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scale = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const textElement = textRef.current;

      // The animation
      gsap.to(textElement, {
        // FUNCTIONAL VALUE: This is key. 
        // It tells GSAP: "Run this math function every time you refresh"
        x: () => {
            // Safety check
            if (!textElement) return 0;
            // Calculate distance: -(Text Width - Screen Width)
            // Adding a small buffer (50px) ensures the last letter clears the screen edge
            return -(textElement.scrollWidth - window.innerWidth + 50);
        },
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000", 
          pin: true,
          scrub: 1,
          // IMPORTANT: This forces the functional 'x' value to re-run on resize/refresh
          invalidateOnRefresh: true, 
        }
      });
    }, containerRef);

    // FIX FOR FONT LOADING / NAVIGATION ISSUES:
    // 1. Force a refresh after a small delay (handles React router transitions)
    const timer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 500);

    // 2. Force a refresh specifically when fonts finish loading
    // This fixes the issue where the width is calculated before the custom font is applied
    document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
    });

    return () => {
        ctx.revert();
        clearTimeout(timer);
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full bg-black overflow-hidden flex items-center perspective-[1000px]"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div 
            className="w-full h-full"
            style={{
                backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                backgroundSize: '4rem 4rem'
            }}
        ></div>
      </div>

      {/* The Big Sliding Text */}
      <div className="relative z-10 w-full pointer-events-none">
        <h1 
          ref={textRef}
          className="text-white font-black whitespace-nowrap leading-none will-change-transform"
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