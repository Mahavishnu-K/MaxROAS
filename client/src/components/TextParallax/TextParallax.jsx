import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const TextParallax = () => {
    const containerRef = useRef(null);
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

    // 1. Split the words into two logical rows
    const wordsTop = [
        "Scale", "Impact", "Data", "Insight", "Clarity", 
        "Execution", "Focus", "Creativity"
    ];

    const wordsBottom = [
        "Profit", "Results", "Strategy", "Growth", "Scale", "Maximize", 
        "Performance", "Returns", "Ad Spend", "Growth Engine", "Smart Ads"
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            
            // Configuration for the scroll-linked animation
            const scrollConfig = {
                trigger: containerRef.current,
                start: "top bottom", // Start when top of section hits bottom of viewport
                end: "bottom top",   // End when bottom of section hits top of viewport
                scrub: 1,            // 1 second lag for smooth "butter" feel
            };

            // Row 1: Slide LEFT
            gsap.to(row1Ref.current, {
                xPercent: -40, // Move 20% of its width to the left
                ease: "none",
                scrollTrigger: scrollConfig
            });

            // Row 2: Slide RIGHT
            // We start it naturally offset in CSS, then move it back to 0 or positive
            gsap.fromTo(row2Ref.current, 
                { xPercent: -40 }, // Start position (shifted left)
                { 
                    xPercent: 0,   // End position (shifted right)
                    ease: "none",
                    scrollTrigger: scrollConfig
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Helper to render a row of text multiple times to ensure coverage
    const TextRow = ({ items, directionRef, className }) => (
        <div ref={directionRef} className={`flex whitespace-nowrap ${className}`}>
            {/* Render list 4 times to ensure it covers wide screens and scroll distance */}
            {[...Array(4)].map((_, i) => (
                <div key={i} className="flex">
                    {items.map((word, idx) => (
                        <span key={idx} className="mx-4 md:mx-4 flex items-center">
                            {word}
                            {/* Decorative dot between words */}
                            <span className="ml-4 text-white md:ml-8 w-2 h-2 md:w-3 md:h-3 bg-current rounded-full opacity-30"></span>
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );

    return (
        <>
            <section 
                ref={containerRef} 
                className="py-10 md:py-10 bg-black text-white relative z-10 overflow-hidden w-full"
                style={{ fontFamily: '"Slussen Expanded Black", sans-serif' }}
            >
                {/* Visual fading on edges (optional, looks nice) */}
                <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-black via-transparent to-black opacity-40"></div>

                <div className="flex flex-col gap-1 md:gap-5 scale-110">
                    
                    {/* Row 1 - Slides LEFT */}
                    <TextRow 
                        directionRef={row1Ref} 
                        items={wordsTop}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-transparent stroke-text"
                    />

                    {/* Row 2 - Slides RIGHT */}
                    <TextRow 
                        directionRef={row2Ref} 
                        items={wordsBottom}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white"
                    />
                        
                </div>
            </section>

            {/* Custom CSS for the outline text effect (optional style choice) */}
            <style jsx>{`
                @font-face {
                    font-family: 'Slussen Expanded Black';
                    src: url('/font/Slussen-Expanded-Black.woff2') format('woff2');
                    font-weight: 900;
                    font-style: normal;
                    font-display: swap;
                }
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6);
                    color: transparent;
                }
                @media (min-width: 768px) {
                    .stroke-text {
                        -webkit-text-stroke: 2px rgba(255, 255, 255, 0.6);
                    }
                }
            `}</style>
        </>
    );
};

export default TextParallax;