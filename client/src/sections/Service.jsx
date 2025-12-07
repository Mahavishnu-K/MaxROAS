import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
    const containerRef = useRef(null);
    const services = [
        "LEAD GENERATION",
        "GROWTH HACKING",
        "SCALING E-COMMERCE",
        "WEB DESIGN & DEVELOPMENT"
    ];

    const rawPhrases  = [
        "Attracting, Not Chasing",
        "Altering Strangers Into Stalkers",
        "Legal Steroids for Business",
        "Business Cheat Codes",
        "Breaking the 'Buy' Button",
        "Emptying the Warehouse",
        "Love at First Scroll",
        "Love at First Pixel"
    ];

    const [randomizedPhrases, setRandomizedPhrases] = useState([]);

    // 1. Randomize Phrases
    useEffect(() => {
        const selected = services.map((_, index) => {
            const baseIndex = index * 2;
            const offset = Math.random() > 0.5 ? 1 : 0;
            return rawPhrases[baseIndex + offset];
        });
        setRandomizedPhrases(selected);
    }, []);

    // 2. Mouse Tracking Logic (Flashlight Effect)
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const xTo = gsap.quickTo(el, "--x", { duration: 0.4, ease: "power3.out" });
        const yTo = gsap.quickTo(el, "--y", { duration: 0.4, ease: "power3.out" });
        const sizeTo = gsap.quickTo(el, "--size", { duration: 0.3, ease: "power2.out" });

        const handleMouseMove = (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            xTo(x);
            yTo(y);

            const topBuffer = 65;
            const bottomBuffer = rect.height - 60;
            const distTop = y - topBuffer;
            const distBottom = bottomBuffer - y;
            const distLeft = x;
            const distRight = rect.width - x;
            const minDist = Math.min(distTop, distBottom, distLeft, distRight);
            const maxRadius = 65; 
            const targetRadius = Math.max(0, Math.min(minDist, maxRadius));

            sizeTo(targetRadius * 2);
        };

        const handleMouseLeave = () => sizeTo(0);

        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);
        
        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    // 3. ENTRANCE ANIMATION LOGIC (Runs Once)
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    once: true,
                }
            });

            // A. Reveal Title
            tl.to(".service-title", { 
                y: 0, 
                opacity: 0.5, 
                duration: 1, 
                ease: "power3.out" 
            });            

            // C. Loop through items and animate them
            services.forEach((_, index) => {
                const wordSelector = `.service-word-${index}`;
                const lineSelector = `.service-line-${index}`;

                tl.to(lineSelector, {
                    scaleX: 1, 
                    duration: 0.4, 
                    ease: "power3.inOut",
                }, "-=0.8")

                .to(wordSelector, {
                    y: "0%", 
                    duration: 0.8,
                    ease: "power4.out",
                    stagger: 0.1
                }, "<0.5");
            });

            tl.to(".service-top-line", { 
                scaleX: 1, 
                duration: 0.8, 
                ease: "power3.inOut" 
            }, "-=0.7");

        }, containerRef);

        return () => ctx.revert();
    }, [services]); 


    // 4. Reusable Content Component
    const ContentList = ({ colorClass, items, isPhrase = false }) => (
        <div className="p-5 md:p-10 w-full flex flex-col justify-center h-full">
            <div>
                {/* TITLE */}
                <div className="overflow-hidden flex justify-end mb-10">
                    <h1 className={`service-title pb-1 text-4xl md:text-6xl font-extralight opacity-0 translate-y-[110%] ${colorClass}`}>
                        { isPhrase ? "The Secret Strategy" : "Services Provided" }
                    </h1>
                </div>

                {/* TOP DIVIDER LINE */}                
                {/* LIST ITEMS */}
                {items.map((item, index) => (
                    <div key={index} className="group relative">

                        <div className={`
                            service-line-${index} 
                            w-full h-[1px] origin-left scale-x-0 
                            ${colorClass === 'text-black' ? 'bg-black opacity-30' : 'bg-white opacity-30'}
                        `}></div>
                        {/* Text Wrapper with Overflow Hidden for the "Rise Up" effect */}
                        <div className="min-h-[120px] lg:min-h-[120px] flex items-center flex-wrap content-center overflow-hidden">
                            {item.split(" ").map((word, i) => (
                                <span key={i} className="relative overflow-hidden inline-flex">
                                    <p 
                                        className={`
                                            service-word-${index}
                                            
                                            translate-y-[110%] will-change-transform
                                            
                                            uppercase ${colorClass}
                                            ${isPhrase 
                                                ? 'text-3xl md:text-5xl lg:text-[4rem] tracking-wide' 
                                                : 'text-5xl md:text-7xl lg:text-[5.2rem]'           
                                            }
                                            
                                            mr-3 md:mr-5
                                        `}
                                    >
                                        {word}
                                    </p>
                                </span>
                            ))}
                        </div>

                        {/* BOTTOM DIVIDER LINE */}
                    </div>
                ))}
                <div className={`service-top-line w-full h-[1px] origin-left scale-x-0 ${colorClass === 'text-black' ? 'bg-black opacity-30' : 'bg-white opacity-30'}`}></div>
            </div>
        </div>
    );

    return (
         <section className="mx-auto pt-20 relative z-0 bg-black min-h-screen">
            <div 
                ref={containerRef}
                className="container mx-auto relative z-20 overflow-hidden"
                style={{ "--x": "0px", "--y": "0px", "--size": "0px" }}
            >
                {/* LAYER 1: Standard Services (White) */}
                <div className="relative bg-transparent pointer-events-none">
                   <ContentList colorClass="text-white" items={services} />
                </div>

                {/* LAYER 2: Randomized Phrases (Black - Reveal) */}
                <div 
                    className="absolute inset-0 bg-white z-10"
                    style={{
                        clipPath: "circle(var(--size) at var(--x) var(--y))",
                        WebkitClipPath: "circle(var(--size) at var(--x) var(--y))",
                        pointerEvents: "none" 
                    }}
                >
                    {randomizedPhrases.length > 0 && (
                        <ContentList colorClass="text-black" items={randomizedPhrases} isPhrase={true}/>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Service;