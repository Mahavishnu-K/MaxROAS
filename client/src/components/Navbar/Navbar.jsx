import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { MdOutlineArrowForward } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

// 1. CSS
const styles = `
  .nav-item {
    position: relative;
    text-decoration: none;
    padding: 4px 8px;
    transition: color 0.3s ease;
  }

  .nav-item::before,
  .nav-item::after {
    content: "";
    position: absolute;
    display: block;
    border: 0 solid transparent;
    width: 0;
    height: 0;
    transition: all 0.3s ease;
  }

  /* Top Left Bracket */
  .nav-item::after {
    top: 0;
    left: 0;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
  }

  /* Bottom Right Bracket */
  .nav-item::before {
    bottom: 0;
    right: 0;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
  }

  .nav-item:hover::before,
  .nav-item:hover::after,
  .nav-item.active::before,
  .nav-item.active::after {
    width: 10px;
    height: 10px;
    border-color: #374151;
  }
  
  .burger-line {
    display: block; width: 24px; height: 2px; background-color: black; border-radius: 2px;
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
`;

// 2. Reusable Nav Item
const NavItem = ({ label, isActive, onClick, isMobile = false }) => (
  <p
    onClick={onClick}
    className={`cursor-pointer select-none transition-colors duration-300
      ${isMobile 
        ? `text-2xl font-light py-4 ${isActive ? "text-black font-semibold" : "text-gray-700"}` 
        : `nav-item text-[15px] 2xl:text-lg ${isActive ? "active font-medium text-black" : "text-gray-600 hover:text-black"}`
      }
    `}
  >
    {label}
  </p>
);

// 3. Desktop Navbar
// FIX: Removed 'refs' from props here. We only pass the label up.
const DesktopNavbar = ({ currentActive, handleNavClick }) => {
  const forwardRef = useRef(null);
  const btnRef = useRef(null);
  const navigate = useNavigate();

  const onEnter = () => {
    const tl = gsap.timeline();
    tl.to(btnRef.current, {
      borderRadius: "12px",
      duration: 2,
      ease: "power2.out",
      overwrite: "auto",
    }, "-=1.4").to(forwardRef.current, {
      rotate: -45,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    }, "-=0.2");
  };

  const onLeave = () => {
    const tl = gsap.timeline();
    tl.to(btnRef.current, {
      borderRadius: "9999px",
      duration: 2,
      ease: "power2.out",
      overwrite: "auto",
    }).to(forwardRef.current, {
      rotate: 0,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    }, "<");
  };

  // Nav List configuration
  const navLinks = ["Who are we", "Clients", "Service", "Work", "Growth", "About us"];

  return (
    <>
      <div className="hidden flex-col gap-0 justify-center items-center md:flex-row md:items-center md:flex w-full text-base text-black">
        <div className="flex gap-6 xl:gap-10 items-center">
          {navLinks.map((item) => (
             <NavItem 
                key={item}
                label={item} 
                isActive={currentActive === item} 
                onClick={() => handleNavClick(item)} // FIX: Just pass the label
              />
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <button
          ref={btnRef}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          onClick={() => navigate("/contact")}
          className="border-none flex items-center gap-3 2xl:gap-5 bg-black text-white px-4 py-2 2xl:px-5 2xl:py-3 rounded-full whitespace-nowrap relative overflow-hidden"
          style={{ willChange: "border-radius, transform" }}
        >
          <p className="text-lg 2xl:text-[22px]">CONTACT</p>
          <div className="relative w-[35px] h-[35px]">
            <MdOutlineArrowForward
              ref={forwardRef}
              className="absolute mt-1 2xl:mt-0 text-[28px] 2xl:text-[35px]"
              style={{ willChange: "transform" }}
            />
          </div>
        </button>
      </div>
    </>
  );
};

// 4. Mobile Navbar
const MobileNavbar = ({ currentActive, handleNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // FIX: Added cleanup function to restore scroll if component unmounts
  useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; }
  }, [isOpen]);

  const onLinkClick = (label) => {
    setIsOpen(false);
    handleNavClick(label); // FIX: Just pass label
  };

  const navLinks = ["Who are we", "Clients", "Service", "Work", "Growth", "About us"];

  return (
    <div className="md:hidden flex items-start z-50">
      
      {/* Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex flex-col justify-center items-center w-10 h-10 gap-[6px] focus:outline-none relative z-50"
      >
        <span className={`burger-line origin-center ${isOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
        <span className={`burger-line origin-center ${isOpen ? "-rotate-45 -translate-y-[0px]" : ""}`} />
      </button>

      {/* Full Screen Overlay */}
      <div 
        className={`fixed top-0 right-0 w-full h-screen bg-white z-40 pl-10 flex flex-col items-start justify-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
          ${isOpen ? "translate-x-[35%]" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col text-start gap-1">
          {navLinks.map((item) => (
             <NavItem 
               key={item} isMobile 
               label={item} 
               isActive={currentActive === item} 
               onClick={() => onLinkClick(item)} 
             />
          ))}
          
          <button
             onClick={() => { setIsOpen(false); navigate("/contact"); }}
             className="mt-8 bg-black text-white px-8 py-3 rounded-full text-xl"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

// 5. Main Component
const Navbar = ({ scrollToSection, refs, activeSection }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentActive, setCurrentActive] = useState("");

  useEffect(() => {
    if (location.pathname === "/about-us") {
      setCurrentActive("About us");
    } else {
      setCurrentActive(activeSection);
    }
  }, [activeSection, location.pathname]);

  // FIX: handleNavClick now uses 'refs' from props, instead of expecting arguments
  const handleNavClick = (label) => {
    setCurrentActive(label);

    if (label === "About us") {
      navigate("/about-us");
      return;
    }
    
    // Safety check if refs exist
    if (!refs) return;

    const refMap = {
      "Who are we": refs.heroRef,
      "Clients": refs.specialRef,
      "Service": refs.servicesRef,
      //"Community": refs.customerRef,
      "Work": refs.processRef,
      "Growth": refs.growthRef,
    };

    const targetRef = refMap[label];

    if (location.pathname !== "/") {
      navigate("/");
      // Short delay to allow Home component to mount
      setTimeout(() => {
         if(scrollToSection && targetRef) scrollToSection(targetRef);
      }, 100); 
    } else if (scrollToSection && targetRef) {
      scrollToSection(targetRef);
    }
  };

  return (
    <>
      <style>{styles}</style>
      <header className="w-full py-2 md:py-3 text-sm fixed z-50 flex flex-wrap md:justify-start md:flex-nowrap top-0 left-0">
        <nav className="container mx-auto px-5 md:px-7 max-w-full">
          
          <div className="flex items-center justify-between bg-white h-[4.2rem] laptop:h-[5rem] rounded-2xl w-full px-5 md:px-3 py-2 shadow-[0_0_20px_rgba(0,0,0,0.25)] relative z-50">
            
            {/* Logo */}
            <div className="flex ml-0 md:ml-5 pb-1 items-center justify-between h-full flex-shrink-0 z-50">
              <div 
                className="flex flex-col leading-none justify-center text-black cursor-pointer"
                onClick={() => { navigate("/"); window.scrollTo(0,0); }}
              >
                <div className="text-xl xl:text-2xl font-normal">Max</div>
                <div className="text-2xl xl:text-3xl font-bold leading-[0.6] xl:leading-[0.6]">ROAS</div>
              </div>
            </div>

            <DesktopNavbar 
              currentActive={currentActive} 
              handleNavClick={handleNavClick} 
            />

            <MobileNavbar
              currentActive={currentActive} 
              handleNavClick={handleNavClick} 
            />

          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;