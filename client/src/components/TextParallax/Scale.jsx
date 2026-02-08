import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scale = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  
  useLayoutEffect(() => {
    // 1. Create a MatchMedia instance
    let mm = gsap.matchMedia();

    // 2. Define the animation ONLY for Desktop (min-width: 768px)
    mm.add("(min-width: 768px)", () => {
      
      const textElement = textRef.current;
      
      // Safety check: if element is hidden/null, don't animate
      if (!textElement) return;

      gsap.to(textElement, {
        x: () => -(textElement.scrollWidth - window.innerWidth + 50),
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
    });

    // Font loading fix (kept from your original code)
    const timer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 500);

    // Cleanup function
    return () => {
        mm.revert(); // This kills the animation and ScrollTrigger when unmounting
        clearTimeout(timer);
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[80px] md:h-screen w-full bg-black overflow-hidden flex items-center justify-center md:justify-start md:perspective-[1000px]"
    >
      {/* Background Grid Pattern */}
      <div className="hidden md:block absolute inset-0 z-0 opacity-70 pointer-events-none">
        <div 
            className="w-full h-full"
            style={{
                backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                backgroundSize: '4rem 4rem'
            }}
        ></div>
      </div>

      <div className="md:hidden absolute inset-0 z-0 opacity-95 pointer-events-none">
        <div 
            className="w-full h-full"
            style={{
                backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                backgroundSize: '1rem 1rem'
            }}
        ></div>
      </div>
      
      {/* MOBILE VIEW: Static Text (No Ref, No Animation) */}
      <div className="md:hidden relative z-10 w-full pointer-events-none flex justify-center items-center">
        <h1 className="text-white font-black whitespace-nowrap leading-none text-center" 
            style={{
              fontFamily: "'Slussen Expanded Black', sans-serif", 
              fontSize: "clamp(1rem, 6vw, 2rem)", // Adjusted for better mobile look
            }}
        >
          GET READY TO SCALE!          
        </h1>
      </div>

      {/* DESKTOP VIEW: Animated Text (Has Ref) */}
      <div className="hidden md:block relative z-10 w-full pointer-events-none">
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