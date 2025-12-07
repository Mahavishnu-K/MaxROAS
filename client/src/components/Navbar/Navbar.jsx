import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { MdOutlineArrowOutward, MdOutlineArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navbar = ({ scrollToSection, refs }) => {
  const outRef = useRef(null);
  const forwardRef = useRef(null);
  const btnRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    gsap.set(forwardRef.current, { opacity: 0, rotate: 45, x: 10, y: -10});
  }, []);

  const onEnter = () => {
    gsap.to(outRef.current, {
      opacity: 0,
      rotate: 45,
      x: 10,
      y: -10,
      duration: 0.5,
      ease: "power4.inOut",
    });

    gsap.to(forwardRef.current, {
      opacity: 1,
      rotate: 0,
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power4.inOut",
    });

    gsap.to(btnRef.current, {
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const onLeave = () => {
    gsap.to(outRef.current, {
      opacity: 1,
      rotate: 0,
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power4.inOut",
    });

    gsap.to(forwardRef.current, {
      opacity: 0,
      rotate: -45,
      x: -10,
      y: 10,
      duration: 0.5,
      ease: "power4.inOut",
    });

    gsap.to(btnRef.current, {
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <header className="w-full py-2 md:py-3 text-sm fixed z-40 flex flex-wrap md:justify-start md:flex-nowrap top-0 left-0">
      <nav className="container mx-auto px-7" aria-label="Global">
        
        <div className="md:flex md:items-center md:justify-between bg-white h-[4rem] md:h-[5rem] rounded-2xl w-full px-5 md:px-3 py-2 shadow-xl">

          <div className="flex ml-5 pb-1 items-center justify-between h-full flex-shrink-0">
            <div className="flex flex-col leading-none justify-center text-black">
              <div className="text-2xl font-normal">Max</div>
              <div className="text-3xl font-bold leading-[0.6]">ROAS</div>
            </div>
          </div>

          <div className="flex-col gap-0 justify-center items-center md:flex-row md:items-center hidden md:flex w-full text-base text-black">
            <div className="flex gap-12 text-lg items-center">
              <p className="cursor-pointer hover:text-gray-700" onClick={() => scrollToSection(refs.heroRef)}>Who are we</p>
              <p className="cursor-pointer hover:text-gray-700" onClick={() => scrollToSection(refs.servicesRef) }>What we do</p>
              <p className="cursor-pointer hover:text-gray-700" onClick={() => scrollToSection(refs.specialRef)}>Clients</p>
              <p className="cursor-pointer hover:text-gray-700" onClick={() => scrollToSection(refs.customerRef)}>Community</p>
              <p className="cursor-pointer hover:text-gray-700" onClick={() => scrollToSection(refs.growthRef)}>Growth</p>
            </div>
          </div>

          <div>
            <button
              ref={btnRef}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              onClick={() => navigate("/contact")}
              className="border-none flex items-center gap-5 bg-black text-white px-5 py-3 rounded-xl transition whitespace-nowrap relative overflow-hidden"
            >
              <p className="text-[22px]">CONTACT</p>

              <div className="relative w-[35px] h-[35px]">
                <MdOutlineArrowForward
                  ref={outRef}
                  className="absolute text-[35px]"
                />
                <MdOutlineArrowOutward
                  ref={forwardRef}
                  className="absolute text-[35px]"
                />
              </div>
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
