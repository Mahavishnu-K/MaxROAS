// src/pages/Home.jsx
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger' 

import Hero from '../sections/Hero.jsx'
import Services from '../sections/Service.jsx'
import Special from '../sections/Special.jsx'
import Customer from '../sections/Customer.jsx'
import Growth from '../sections/Growth.jsx'
import WorkProcess from '../sections/WorkProcess.jsx'
import Comparison from '../sections/Comparison.jsx'
import NotJustAds from '../sections/NotJustAds.jsx'
import Convince from '../sections/Convince.jsx'

import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import TextParallax from '../components/TextParallax/TextParallax.jsx'

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const specialRef = useRef(null);
  const customerRef = useRef(null);
  const growthRef = useRef(null);
  const processRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.8,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    
    // Cleanup
    return () => {
        lenis.destroy();
    }
  },[]);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-hidden">
        <Navbar 
          scrollToSection={scrollToSection}
          refs={{ heroRef, servicesRef, specialRef, customerRef, growthRef, processRef }}
        />

        <section ref={heroRef}><Hero /></section>
        <section ref={servicesRef}><Services /></section>
        <section><NotJustAds /></section>
        <section ref={specialRef}><Special /></section>
        <TextParallax />
        <section ref={customerRef}><Customer /></section>
        <section ref={growthRef}><Growth /></section>
        <section ref={processRef}><WorkProcess /></section>
        <section ><Comparison /></section>
        <section><Convince /></section>
        <Footer />
    </div>
  )
}

export default Home;