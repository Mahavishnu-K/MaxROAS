import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Rounded from "../components/RoundedButton/Rounded";

const Customer = () => {
    const testimonials = [
        {
            id: 1,
            text: "I can't believe this, I'm in shock! Whose idea was this flash sale? This was the best decision ever. Having you guys onboard is the bestest decision ever!",
            author: "Deepti",
            highlight: "Best decision ever"
        },
        {
            id: 2,
            text: "We were thrilled to see orders pouring in like never before! It is a testament to your strategic approach that has not only driven revenue but has also positively changed the brand’s outlook towards marketing.",
            author: "E-Commerce Partner",
            highlight: "Orders pouring in"
        },
        {
            id: 3,
            text: "As we celebrate the 100k Milestone, I want to extend my sincere gratitude for your invaluable contribution to our brand's success. Thank you for being an essential part of our journey.",
            author: "Founder",
            highlight: "100k Milestone"
        },
        {
            id: 4,
            text: "Thank you so much Avinash. I'm happy that we achieved very good sales this month. Happy to work with you guys!",
            author: "Client",
            highlight: "Very good sales"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const contentRef = useRef(null);
    const quoteRef = useRef(null);

    // Animation when index changes
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate text content fade up
            gsap.fromTo(contentRef.current, 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
            );
            
            // Subtle pop effect on the quote icon
            gsap.fromTo(quoteRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
            );
        });

        return () => ctx.revert();
    }, [activeIndex]);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <section className="bg-white text-black min-h-screen flex items-center py-24 2xl:py-32 relative z-10 overflow-hidden">
            <div className="container mx-auto px-12 md:px-24 2xl:px-7 max-w-[1400px]">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 2xl:gap-24 items-start">
                    
                    {/* LEFT SIDE: Static Header & Navigation */}
                    <div className="flex flex-col justify-start md:justify-between md:h-[400px] md:space-y-8 lg:space-y-0">
                        <div>
                            <h2 className="text-4xl md:text-6xl 2xl:text-7xl font-bold leading-tight tracking-tight mb-2 md:mb-6">
                                From our <br />
                                <span className="opacity-100">community.</span>
                            </h2>
                            <p className="text-base md:text-xl text-gray-600 max-w-md">
                                Here’s what our partners had to say about their growth journey with MaxROAS.
                            </p>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex gap-4 pt-8 lg:pt-0">
                             <Rounded 
                                backgroundColor="#000000" 
                                className="!p-0 w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center"
                                onClick={handlePrev}
                                aria-label="Previous testimonial"
                            >
                                {/* SVG needs stroke='currentColor' to react to the hover change */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-[7px] transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                </svg>
                            </Rounded>

                            {/* Next Button */}
                            <Rounded 
                                backgroundColor="#000000" 
                                className="!p-0 w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center"
                                onClick={handleNext}
                                aria-label="Next testimonial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-[7px] transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </Rounded>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Dynamic Content */}
                    <div className="relative flex flex-col justify-center max-h-[400px] h-full">
                        {/* Quote Icon */}
                        <div ref={quoteRef} className="text-gray-500 text-5xl md:text-7xl 2xl:text-8xl font-serif leading-none md:mb-4 2xl:mb-6">
                            “
                        </div>

                        <div ref={contentRef}>
                            {/* Testimonial Text */}
                            <p className="text-lg md:text-3xl 2xl:text-4xl font-medium leading-snug mb-10 text-gray-900">
                                {testimonials[activeIndex].text}
                                <span className="text-gray-500">”</span>
                            </p>

                            {/* Author Block */}
                            <div className="flex items-center gap-4">
                                {/* Generated Avatar based on Name */}
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-200">
                                    <img 
                                        src={`https://ui-avatars.com/api/?name=${testimonials[activeIndex].author}&background=0d2538&color=fff`} 
                                        alt={testimonials[activeIndex].author}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold text-black">
                                        {testimonials[activeIndex].author}
                                    </h4>
                                    <p className="text-sm md:text-base text-gray-500 font-medium">
                                        {testimonials[activeIndex].highlight}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Customer;