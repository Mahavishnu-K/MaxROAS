// src/components/TextParallax/TextParallax.jsx
import React, { useRef, useLayoutEffect, memo } from "react"; // 1. Import memo
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextParallax = () => {
    const containerRef = useRef(null);
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

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
            const scrollConfig = {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            };

            gsap.to(row1Ref.current, {
                xPercent: -40,
                ease: "none",
                scrollTrigger: scrollConfig
            });

            gsap.fromTo(row2Ref.current, 
                { xPercent: -40 },
                { 
                    xPercent: 0,
                    ease: "none",
                    scrollTrigger: scrollConfig
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const TextRow = ({ items, directionRef, className }) => (
        <div ref={directionRef} className={`flex whitespace-nowrap ${className}`}>
            {[...Array(4)].map((_, i) => (
                <div key={i} className="flex">
                    {items.map((word, idx) => (
                        <span key={idx} className="ml-4 md:ml-0 md:mx-6 flex items-center">
                            {word}
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
                className="py-5 md:py-10 bg-black text-white relative z-10 overflow-hidden w-full"
                style={{ fontFamily: '"Slussen Expanded Black", sans-serif' }}
            >
                <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-black via-transparent to-black opacity-40"></div>

                <div className="flex flex-col gap-1 md:gap-5 scale-110">
                    <TextRow 
                        directionRef={row1Ref} 
                        items={wordsTop}
                        className="text-2xl md:text-5xl lg:text-6xl font-bold uppercase text-transparent stroke-text"
                    />
                    <TextRow 
                        directionRef={row2Ref} 
                        items={wordsBottom}
                        className="text-2xl md:text-5xl lg:text-6xl font-bold uppercase text-white"
                    />
                </div>
            </section>
            <style jsx>{`
                @font-face {
                    font-family: 'Slussen Expanded Black';
                    src: url('/font/Slussen-Expanded-Black.woff2') format('woff2');
                    font-weight: 900;
                    font-style: normal;
                    font-display: swap;
                }

                /* 1. Default for Mobile (Thinner stroke) */
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6);
                    color: transparent;
                }

                /* 2. Override for Desktop (Thicker stroke) */
                @media (min-width: 768px) {
                    .stroke-text {
                        -webkit-text-stroke: 2px rgba(255, 255, 255, 0.6);
                    }
                }
            `}</style>
        </>
    );
};

// 2. Export with React.memo
export default memo(TextParallax);