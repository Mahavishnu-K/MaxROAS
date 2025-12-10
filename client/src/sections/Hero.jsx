import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button/Button.jsx";
import ScrollArrow from "../components/Button/ScrollArrow.jsx";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        
        gsap.to(footerRef.current, {
            y: "100%", // Move down by 100% of its height
            opacity: 0, // Fade out slightly
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top", // Start exactly when scroll begins
                end: "20% top",   // Finish hiding quickly (after 20% scroll)
                scrub: true,      // Link animation to scrollbar
            }
        });

        const tl = gsap.timeline();
        // 1. Title Reveal (Word by Word)
        tl.to(".hero-word", {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out",
        });

        // 2. Subtext & Guarantee Reveal
        tl.to([".hero-subtext", ".hero-btn"], {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
        }, "-=0.5");

        tl.to(".scroll-arrow", {
            y: 0,
            duration: 1,
            ease: "power4.out",
        }, "+=0.5");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="mx-auto pt-20 w-full min-h-screen bg-white text-black flex flex-col justify-center pb-20 overflow-hidden"
    >

      <div className="container mx-auto px-10 2xl:px-0 max-w-[1400px] relative z-10 flex flex-col lg:flex-row gap-12 items-end">
        
        {/* LEFT: MASSIVE HEADLINE */}
        <div className="w-full lg:flex-[2] min-w-0">
            <h1 
                ref={titleRef}
                className="leading-[0.85] md:pb-14 2xl:pb-8 font-black text-black tracking-tighter"
                style={{ fontFamily: "'Slussen Expanded Black', sans-serif" }}
            >
                {/* Custom Split for Animation */}
                <div className="overflow-hidden">
                    <span className="hero-word block translate-y-[110%] opacity-0 text-[13vw] md:text-[6.5rem] 2xl:text-[7.5rem]">
                        WE 
                    </span>
                    <span className="hero-word block translate-y-[110%] opacity-0 text-[13vw] md:text-[6.5rem] 2xl:text-[7.5rem]">SCALE</span>
                </div>
                <div className="overflow-hidden">
                    <span className="hero-word block translate-y-[110%] opacity-0 text-[12vw] md:text-[6.5rem] 2xl:text-[7.5rem]">
                        REVENUE.
                    </span>
                    <span className="hero-word  block translate-y-[110%] opacity-0 text-[5vw] md:text-[3.5rem] 2xl:text-[4.2rem] mt-2 lg:mt-1">
                        EVERY
                    </span>
                    <span className="hero-word block translate-y-[110%] opacity-0 text-[5vw] md:text-[3.5rem] 2xl:text-[4.2rem] mt-2 lg:mt-1">
                        SINGLE DAY.
                    </span>
                </div>  
                <div className="hero-word block translate-y-[110%] opacity-0 text-2xl uppercase overflow-hidden mt-4">
                    <span>No excuses. No fluff. Just results.</span>
                </div>
            </h1>
        </div>

        {/* RIGHT: DETAILS & CTA */}
        <div className="w-full lg:flex-1 flex flex-col gap-8 lg:pb-6">
            
            {/* Description */}
            <p className="hero-subtext opacity-0 translate-y-10 text-lg  md:text-2xl 2xl:text-3xl leading-relaxed">
                Max ROAS creates the brand infrastructure for exponential growth. We build the revenue engine that drives your business expansion.<br/> Smart Ads. Predictable results. Long-term stability.
            </p>

            <div>
                <h3 className="hero-subtext opacity-0 translate-y-10 font-bold text-lg uppercase flex items-center">
                    The 30-Day Promise
                </h3>
                <p className="hero-subtext opacity-0 translate-y-10 text-xl">
                    We generate additional revenue on top of your baseline within 30 days. <br/>
                    <span className="block font-semibold mt-1">
                        If we don’t deliver, you don’t pay.
                    </span>
                </p>
            </div>
            {/* CTA Button */}
            <div className="hero-btn opacity-0 translate-y-10 pt-4">
                <Button text="Start Scaling Now" />
            </div>

        </div>

      </div>

      {/* FOOTER OF HERO (Social Proof / Decor) */}
      <div ref={footerRef} className="absolute bottom-5 left-0 w-full px-6 md:px-8 flex justify-between items-end pointer-events-none">
        {/* Left: Copyright */}
        <h2 className="scroll-arrow translate-y-10 text-sm md:text-base font-semibold uppercase">
            <span>©</span> {new Date().getFullYear()} MAX ROAS
        </h2>

        {/* Center: Animated Arrow */}
        <div className="scroll-arrow translate-y-20 absolute left-1/2 bottom-0 -translate-x-1/2 pb-2">
            <ScrollArrow />
        </div>

        {/* Right: Scroll Text */}
        <span className="scroll-arrow translate-y-10 text-sm md:text-base font-semibold uppercase md:block">
            Scroll to explore
        </span>
      </div>

    </section>
  );
};

export default Hero;