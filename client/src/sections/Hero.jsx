import React from "react";
import HeroImg from '../assets/HeroImg.png';

const Hero = () => {
    return (
        <>
            <section className="mx-auto pt-28 relative z-0">
                <div className="container mx-auto px-7 relative z-20">
                    <div className="rounded-2xl bg-white p-5 md:p-10 w-full lg:min-h-[82vh] flex flex-col lg:flex-row justify-between lg:justify-center items-center gap-10">
                        <div className=" flex flex-col gap-12">
                            <h1 className="text-6xl uppercase">Digital Marketing Agency</h1>
                            <p className="text-xl text-black">we specialise in credibility and authenticity. We started this only because we came across many marketing agencies who ruined businesses in the name of ads and marketing, doing it just for the sake of it and to fill their own pockets. So, we stepped in to truly help a brand, and from there it turned into a journey</p>
                        </div>
                        <img src={HeroImg} alt="Hero Max ROAS" className="rounded-xl w-[600px] h-[450px]" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;