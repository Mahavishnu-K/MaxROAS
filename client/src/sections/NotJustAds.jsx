import React from "react";
import { ArrowRight } from "lucide-react"; // Ensure lucide-react is installed
import { useNavigate } from "react-router-dom";

const NotJustAds = () => {
  const navigate = useNavigate();

  const features = [
    "Proven Ad Frameworks",
    "Deep product understanding",
    "Audience-first thinking",
  ];

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center py-24 overflow-hidden">
      
      {/* Top Gradient Fade (Vignette Effect) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-400 to-transparent pointer-events-none opacity-70"></div>

      {/* --- MAIN CONTENT --- */}
      <div className="container select-none mx-auto px-4 flex flex-col items-center z-10">
        
        {/* 1. Illustration Area */}
        <div className="relative w-full max-w-5xl h-full flex justify-center items-center mb-6 2xl:mb-10">
            
            {/* Center Image */}
            <img 
                src="/notjustads.png" 
                alt="Not Just Ads" 
                className="w-48 md:w-52 2xl:w-64 h-auto object-contain z-10"
            />

            {/* Decorative Sparkles (Absolute Positioned) */}
            
            {/* Left Big Stars */}
            <img 
                src="/sparklepair.png" 
                alt="Sparkles" 
                className="absolute left-[2%] md:left-[1%] top-[35%] -translate-y-1/2 w-20 md:w-28 h-auto opacity-80"
            />
            
            {/* Right Big Stars */}
            <img 
                src="/sparklepair2.png" 
                alt="Sparkles" 
                className="absolute right-[2%] md:right-[1%] top-[110%] -translate-y-1/2 w-20 md:w-28 h-auto opacity-80"
            />

            {/* Small Scattered Sparkles */}
            {/* Left */}
            <img src="/tinystar.png" className="absolute left-[10%] -bottom-32 w-6 h-auto" />
            <img src="/tinystar.png" className="absolute left-[25%] top-0 w-4 h-auto" />
            <img src="/tinystar.png" className="absolute left-[30%] top-[80%] w-4 h-auto" />
            
            {/* Right */}
            <img src="/tinystar.png" className="absolute right-[25%] bottom-0 w-6 h-auto" />
            <img src="/tinystar.png" className="absolute right-[12%] top-15 w-4 h-auto" />
            <img src="/tinystar.png" className="absolute right-[22%] top-10 w-4 h-auto" />

        </div>

        {/* 2. Typography */}
        <div className="text-center relative">
            <h2 
                className="text-5xl md:text-6xl 2xl:text-7xl font-black text-black tracking-tight mb-3"
                style={{ fontFamily: "'Slussen Expanded Black', sans-serif" }}
            >
                Not Just Ads!
            </h2>
            
            <p className="text-lg md:text-xl font-medium text-black mb-2">
                Ads Made With Max ROAS will be
            </p>

            {/* Skewed Tag */}
            <div className="flex justify-center">
                <div className="bg-black text-white text-lg font-bold px-6 py-1 -rotate-6 rounded-sm shadow-lg">
                    ADS++
                </div>
            </div>
        </div>

        {/* 3. Bottom Pills / Buttons */}
        <div className="mt-16 w-full flex flex-wrap justify-center gap-4 md:gap-4 xl:gap-6">
            
            {/* Feature Pills */}
            {features.map((item, index) => (
                <div 
                    key={index}
                    className="border-2 border-black rounded-full px-6 xl:px-8 py-3 bg-white/50 backdrop-blur-sm text-black font-semibold text-sm md:text-base hover:bg-gray-50 transition-colors cursor-default"
                >
                    {item}
                </div>
            ))}

            {/* About Us Button */}
            <button 
                onClick={() => navigate('/about-us')}
                className="group border-2 border-black rounded-full px-6 xl:px-8 py-3 bg-gray-100 text-black font-semibold text-sm md:text-base flex items-center gap-2 hover:bg-black hover:text-white transition-all duration-300"
            >
                About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

        </div>

      </div>

      {/* Bottom Gradient Fade (Vignette Effect) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-400 to-transparent pointer-events-none opacity-70"></div>

    </section>
  );
};

export default NotJustAds;