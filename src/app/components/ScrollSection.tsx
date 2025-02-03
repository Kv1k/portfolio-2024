"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Hero from './Hero/Hero';
import VerticalTicker from './VerticalTicker/VerticalTicker';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Image from "next/image"
import SudalysImg from "../../../public/sudalys.png"
import AngovaImg from "../../../public/auto-ecole.jpg"
import H2NImg from "../../../public/h2n.jpg"
import BeLoungeImg from "../../../public/belounge.png"
import { useLocoScroll } from '../context/LocoScrollProvider';

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  const {  setScrollContRef, scrollContainerRef, locoScroll } = useLocoScroll();

  // Utiliser useEffect pour affecter les références
  useEffect(() => {
    setScrollContRef(document.querySelector(".scroll-container"));

  }, [setScrollContRef]);

    const animWrapRef = useRef(null);
    const animWrap2Ref = useRef(null);

  useEffect(() => {
    
    if (!locoScroll || !animWrapRef.current || !animWrap2Ref.current) return;
   
    // Synchroniser ScrollTrigger avec LocomotiveScroll
    locoScroll.on("scroll", ScrollTrigger.update);

    // Setup de ScrollTrigger pour gérer le défilement horizontal
    ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
      scrollLeft(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.x;
      },
      getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: scrollContainerRef.current.style.transform ? "transform" : "fixed"
    });

    // Configuration des valeurs par défaut pour ScrollTrigger
    ScrollTrigger.defaults({
      scroller: scrollContainerRef.current
    });


    // Animation horizontale pour l'élément anim-wrap
    const fakeVertical = gsap.to(animWrapRef.current, {
      scrollTrigger: {
        trigger: '.vertical',
        start: 'left left',
        end: `+=${animWrapRef.current.scrollHeight+120}`,
        pin: true,
        pinSpacing: true,
        scrub: true,
        horizontal: true,
        invalidateOnRefresh: true
      },
      y: `-${animWrapRef.current.scrollHeight - window.innerHeight+120}`,
      ease: 'none'
    });

    // Animation horizontale pour l'élément anim-wrap
    const fakeVertical2 = gsap.to(animWrap2Ref.current, {
      scrollTrigger: {
        trigger: '.vertical2',
        start: 'left left',
        end: `+=${animWrap2Ref.current.scrollHeight}`,
        pin: true,
        pinSpacing: true,
        scrub: true,
        horizontal: true,
        invalidateOnRefresh: true
      },
      y: `-${animWrap2Ref.current.scrollHeight - window.innerHeight}`,
      ease: 'none'
    });

    // Animation fakePin pour le pinning simulé
    const fakePin = gsap.to('.fakePin', {
      y: animWrapRef.current.scrollHeight - window.innerHeight+120,
      ease: 'none',
      scrollTrigger: {
        trigger: '.vertical',
        start: 'left left',
        end: `+=${animWrapRef.current.scrollHeight+120}`,
        horizontal: true,
        scrub: true,
        invalidateOnRefresh: true,
       
      }
    });

    // Rafraîchissement de LocomotiveScroll lorsque ScrollTrigger se rafraîchit
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    // Cleanup lorsque le composant est démonté
    return () => {
      ScrollTrigger.kill();
      if (locoScroll) {
        locoScroll.destroy();
      }
    };
  }, [locoScroll, animWrapRef, animWrap2Ref]);

 
  
  return (
    <div className="scroll-container" data-scroll-container>
      <div className="content">
        <section className='w-[100vw]' id='accueil'>
          <Hero/>
        </section>

         <VerticalTicker type="xp"/>

        <section className="vertical mt-[60px] pb-30" id='experiences'>
        
          <div ref={animWrapRef} className="anim-wrap">
            
            <div className="inner-section !h-[64vh]">
              <div className="fakePin w-[100%] h-[75vh] flex flex-col justify-center items-center">
              <div className="michroma-text font-normal text-[27px] stretchLetter">Mes</div>
                <div className="michroma-text font-normal text-[27px] stretchLetter">Expériences</div>
              </div>

              
            </div>
            
            <div className="inner-section !h-[215vh]">
              <div className="relative w-full">
              <div className="flex flex-col justify-start items-end w-full h-[370px] pr-[11rem]">
                <div>
                  <p>SUDALYS</p>
                  <div 
                    className="w-[325px] h-fit transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                    onClick={() => window.location.href = "/experience/1"} 
                  >
                    <Image src={SudalysImg} alt='' className='w-[100%] h-auto' />
                  </div>
                  <div>
                    <p className="michroma-text text-[12px]">Cliquer pour voir</p>
                  </div>
                </div>
              </div>

                <div className="absolute top-[15rem] left-[10rem] flex flex-col justify-start items-start h-[370px]">
                  <div>
                    <p>ANGOVA</p>
                    <div 
                      className="w-[311px] h-fit transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                      onClick={() => window.location.href = "/experience/3"} 
                    >
                      <Image src={AngovaImg} alt='' className='w-[100%] h-auto'/>
                    </div>
                    <div><p className="michroma-text text-[12px]">Cliquer pour voir</p></div>
                  </div>
                </div>
                <div className="absolute top-[50rem] left-[40rem] flex flex-col justify-start items-start  h-[370px] ">
                  <div>
                    <p>H2N AUTOMOBILE</p>
                    <div 
                      className="w-[311px] h-fit transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                      onClick={() => window.location.href = "/experience/2"} 
                    >
                      <Image src={H2NImg} alt='' className='w-[100%] h-auto'/>
                    </div>
                    <div><p className="michroma-text text-[12px]">Cliquer pour voir</p></div>
                  </div>
                </div>
                <div className="absolute top-[85rem]  left-[15rem] flex flex-col justify-start items-start  h-[370px] ">
                  <div className='relative flex flex-col'>
                   <div><p>BE LOUNGE</p></div>
                    <div 
                      className="w-[311px] h-fit max-h-[310px]  transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                      onClick={() => window.location.href = "/experience/4"} 
                    >
                      <Image src={BeLoungeImg} alt='' className='w-[100%] h-auto'/>
                    </div>
                    <div><p className="michroma-text text-[12px]">Cliquer pour voir</p></div>
                  </div>
                </div>
               
              </div>

            </div>
            <div className="inner-section">
             
            </div>
           
          </div>
        </section>
        <VerticalTicker type="aboutMe"/>
      <section className="vertical2 mt-[60px] w-[100vw]" id='aboutMe'>
        
        <div ref={animWrap2Ref} className="anim-wrap">
         <AboutMe/>        
        </div>
      </section>

        <section className='mt-[60px] w-[100vw]'  id='contact' >
         <Contact/>
        </section>
      </div>
    </div>
  );
};

export default ScrollSection;
