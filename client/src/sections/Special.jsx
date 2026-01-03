import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

// Images
import FitMom from '../assets/FitMom.png';
import MorenaLabel from '../assets/MorenaLabel.png';
import Mouri from '../assets/Mouri.png';
import MuchLove from '../assets/MuchLove.png';
import Radoss from '../assets/Radoss.webp';
import Trayee from '../assets/Trayee.png';

import instagram from '/platform/instagram.png';
import youtube from '/platform/youtube.png';
import googlesites from '/platform/google.png';
import facebook from '/platform/facebook.png';
import shopify from '/platform/shopify.png';

const Special = () => {
    // Ref for the container to scope GSAP selectors
    const sliderRef = useRef(null);

    const clients = [
        { name: "FitMom", src: FitMom },
        { name: "MorenaLabel", src: MorenaLabel },
        { name: "Mouri", src: Mouri },
        { name: "MuchLove", src: MuchLove },
        { name: "Radoss", src: Radoss },
        { name: "Trayee", src: Trayee },
    ];

    const socialPlatforms = [
        { name: "Instagram", src: instagram },
        { name: "YouTube", src: youtube },
        { name: "Google Sites", src: googlesites },
        { name: "Facebook", src: facebook },
        { name: "Shopify", src: shopify },
    ];

    useLayoutEffect(() => {
        // Create a GSAP context for easy cleanup in React
        let ctx = gsap.context(() => {
            
            // The Logic:
            // We animate both lists (class "marquee-part") simultaneously.
            // By moving them -100% along the X-axis, List 1 moves off-screen,
            // and List 2 moves exactly into List 1's previous position.
            // Then it loops instantly.
            const tween = gsap.to(".marquee-part", {
                xPercent: -100,
                repeat: -1,
                duration: 20, // Adjust speed here (higher = slower)
                ease: "linear",
            });

            // Optional: Pause on hover for better user experience
            const container = sliderRef.current;
            // container.addEventListener("mouseenter", () => tween.pause());
            // container.addEventListener("mouseleave", () => tween.play());

        }, sliderRef); // Scope to this component

        return () => ctx.revert(); // Cleanup on unmount
    }, []);

    return (
        <section className="mx-auto md:pt-24 2xl:pt-28 bg-white relative z-0 max-h-screen overflow-hidden">
            <div className="container mx-auto max-w-full relative z-20 pb-20">
                <div className="p-5 md:p-5 w-full">
                    <h1 className="md:text-5xl 2xl:text-6xl flex justify-center mb-4">Our Fortune Clients</h1>
                    <p className="text-xl flex justify-center text-black text-center max-w-2xl mx-auto mb-10 2xl:mb-16">
                        We are fortunate to work with the below brands for a long time and learning a lot of experience and insights!
                    </p>

                    {/* --- GSAP MARQUEE SLIDER --- */}
                    <div 
                        ref={sliderRef}
                        className="flex overflow-hidden relative w-full cursor-pointer"
                        style={{
                            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
                        }}
                    >
                        {/* List 1 */}
                        <div className="flex marquee-part whitespace-nowrap">
                            {clients.map((client, index) => (
                                <div key={index} className="mx-10 md:mx-16 w-32 2xl:w-48 flex items-center justify-center shrink-0">
                                    <img 
                                        src={client.src} 
                                        alt={client.name} 
                                        className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" 
                                    />
                                </div>
                            ))}
                        </div>

                        {/* List 2 (Duplicate for seamless loop) */}
                        <div className="flex marquee-part whitespace-nowrap">
                            {clients.map((client, index) => (
                                <div key={`dup-${index}`} className="mx-10 md:mx-16 w-32 2xl:w-48 flex items-center justify-center shrink-0">
                                    <img 
                                        src={client.src} 
                                        alt={client.name} 
                                        className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* --- END SLIDER --- */}
                    <div className="pt-8 2xl:pt-10">
                        <h1 className="text-4xl flex justify-center mt-5">Platforms We Work On</h1>
                        <div className="flex gap-10 justify-center mt-6 2xl:mt-10">
                            {socialPlatforms.map((platform, index) => (
                                <div key={index} className="mx-5 w-48 2xl:w-56 flex items-center justify-center">
                                    <img src={platform.src} alt={platform.name} className="transition-all duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Special;