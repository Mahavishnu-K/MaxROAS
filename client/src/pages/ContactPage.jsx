// src/pages/ContactPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from "gsap"; // Import GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Contact from '../pages/Contact.jsx'; 
import Scale from '../components/TextParallax/Scale.jsx';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); 

    // 1. Initialize Lenis
    const lenis = new Lenis({ 
      smooth: true, 
      lerp: 0.1, // Lower lerp = smoother, heavy feel. 0.1 is standard.
      duration: 1.5, 
    });

    // 2. CRITICAL: Connect Lenis to ScrollTrigger
    // This tells ScrollTrigger to update every time Lenis scrolls
    lenis.on('scroll', ScrollTrigger.update);

    // 3. Use GSAP Ticker to drive Lenis
    // This ensures GSAP animations and Lenis scroll happen in the exact same frame
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // 4. Disable lag smoothing in GSAP to prevent jumps during heavy loads
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Cleanup
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  // Handle Navbar clicks on the contact page
  // Instead of scrolling, we navigate back to Home
  const handleNavClick = () => {
    navigate('/');
  };

  // Mock refs to prevent Navbar errors, but point actions to navigate home
  const mockRefs = {
    heroRef: { current: null },
    servicesRef: { current: null },
    specialRef: { current: null },
    customerRef: { current: null },
    growthRef: { current: null }
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Reusing Navbar: We override scrollToSection to go Home instead */}
      <Navbar 
        scrollToSection={handleNavClick} 
        refs={mockRefs}
      />
      
        <Contact />
        <Scale />
      <Footer />
    </div>
  );
};

export default ContactPage;