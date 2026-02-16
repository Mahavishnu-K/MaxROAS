import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button/Button.jsx";
import ScrollArrow from "../components/Button/ScrollArrow.jsx";
import HeroCard from "../components/Hero/Card.jsx";
import Particles from "@/components/Background/Particles.jsx";

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

        // 2. Subtext & Guarantee Reveal
        tl.to([".hero-subtext", ".hero-card-container", ".hero-btn"], {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.8,
            ease: "power3.out",
        });

        tl.to(".scroll-arrow", {
            y: 0,
            duration: 1,
            ease: "power4.out",
        });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative mx-auto pt-20 w-full min-h-screen bg-white text-black flex items-center justify-center pb-20 overflow-hidden"
    >
        {/* PARTICLES BACKGROUND */}
        <div className="hidden md:block absolute inset-0 z-0 w-full h-full pointer-events-none">
          <Particles
            // Dark colors because background is white
            particleColors={['#000000', '#808080', '#d4d4d4']}
            particleCount={200} 
            particleSpread={15} // Spread them out more
            speed={0.15} // Slow drift
            particleBaseSize={100}
            moveParticlesOnHover={true}
            //particleHoverFactor={1} // Subtle mouse interaction
            alphaParticles={true} // Soft edges
            disableRotation={false}
            // CRITICAL FOR PERFORMANCE:
            // Forces standard resolution even on 4k/Retina screens to prevent lag
            pixelRatio={1} 
          />
      </div>

      <div className="container mx-auto px-10 2xl:px-0 max-w-[1400px] relative z-10 flex items-center justify-center gap-12">
        
        {/* RIGHT: DETAILS & CTA */}
        <div className="w-full flex flex-col text-center items-center justify-center gap-8 [@media(max-height:600px)]:gap-5 lg:pb-6 [@media(max-height:600px)]:pb-0">
            
            {/* Description */}
            <p className="hero-subtext opacity-0 translate-y-[100%] text-[26px] md:text-4xl 2xl:text-5xl 2xl:leading-[1.45] [@media(max-height:600px)]:leading-[1.45] [@media(max-height:600px)]:text-[34px]">
                We help brands scale 2x revenue on top of what they're <br className="hidden md:block" /> already making; all within just 30 days.
            </p>

            <div className="hero-card-container opacity-0 translate-y-10 w-full flex justify-center">
                <HeroCard />
            </div>

            {/* CTA Button */}
            <div className="hero-btn opacity-0 translate-y-[100%] pt-1">
                <Button text="Scale My Brand" shadowStatus='true' />
            </div>

        </div>
      </div>

      {/* FOOTER OF HERO (Social Proof / Decor) */}
      <div ref={footerRef} className="absolute bottom-14 md:bottom-5 left-0 w-full px-3 md:px-8 flex justify-between items-end pointer-events-none">
        {/* Left: Copyright */}
        <h2 className="scroll-arrow translate-y-10 text-xs md:text-base font-semibold uppercase">
            <span>©</span> {new Date().getFullYear()} <br className="md:hidden" /> MAX ROAS
        </h2>

        {/* Center: Animated Arrow */}
        <div className="scroll-arrow translate-y-20 absolute left-[50%] md:left-1/2 bottom-0 -translate-x-1/2 pb-2">
            <ScrollArrow />
        </div>

        {/* Right: Scroll Text */}
        <span className="scroll-arrow translate-y-10 text-xs md:text-base font-semibold text-right uppercase md:block">
            Scroll <br className="md:hidden" /> to explore
        </span>
      </div>

    </section>
  );
};

export default Hero;