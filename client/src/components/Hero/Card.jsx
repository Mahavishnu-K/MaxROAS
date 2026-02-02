import React from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background"; // Adjust path if needed

const HeroCard = () => {
    return (
        <div className="relative w-full md:max-w-4xl xl:max-w-[940px] laptop:max-w-6xl mx-auto rounded-lg overflow-hidden bg-black text-white shadow-2xl border border-neutral-800">
            {/* 
               PERFORMANCE FIX: 
               Increased gap from 10 to 25. 
               This reduces calculation load by ~80% and eliminates lag.
            */}
            <DottedGlowBackground
                className="absolute inset-0 pointer-events-none"
                opacity={1}
                gap={25} 
                radius={2} // Slightly larger dots to compensate for wider gap
                color="#404040" // Dark grey dots
                glowColor="#ffffff" // White glow
                backgroundOpacity={1} // Transparent so bg-black shows through
                speedMin={0.5}
                speedMax={1.5}
            />

            {/* <div className="absolute inset-0 z-0 opacity-1 pointer-events-none">
                <div 
                    className="w-full h-full"
                    style={{
                        backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                        backgroundSize: '2.5rem 2.5rem'
                    }}
                ></div>
            </div> */}

            {/* Content Container - Needs z-10 to sit ON TOP of the canvas */}
            <div className="relative z-10 p-3 md:p-2 xl:p-3 laptop:p-5 flex flex-col items-center justify-center text-center">
                <p className="w-full xl:max-w-4xl laptop:max-w-6xl italic text-lg md:leading-7 md:text-[18px] xl:text-[18px] laptop:text-2xl font-light text-white leading-relaxed">
                    The Max ROAS team creates a stable, scalable revenue engine that drives predictable results and long-term business expansion. We scale brands’ revenue every single day.
                </p>                
            </div>
        </div>
    );
}

export default HeroCard;