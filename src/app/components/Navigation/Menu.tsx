"use client"

import React, {useState, useRef, useEffect} from 'react';
import Link from 'next/link';
import "./menu.css";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import Image from "next/image";
import Logo from "../../../../public/black-logo.png";
//import { useLenisScroll } from "../../context/LenisScrollProvider";
import "../../globals.css";
import { useLenis } from 'lenis/react';

gsap.registerPlugin(useGSAP);



const menuLinks = [
  { path: "#accueil", label: "Accueil"},
  { path: "#experiences", label: "Experiences"},
  { path: "#aboutMe", label: "A propos"},
  { path: "#contact", label: "Contact"}
];


const Menu = ({ isDesktop }: { isDesktop: boolean }) => {

  const container = useRef<HTMLDivElement | null>(null);  
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const tl = useRef<gsap.core.Timeline | null>(null);

  const lenis = useLenis();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   
  }

  useGSAP(()=>{
    if (typeof window !== "undefined") {

    gsap.set(".menu-link-item-holder", {y: 75});
    tl.current = gsap.timeline({paused: true})
    .to(".menu-overlay", {
      duration:1.25,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut"
    })
    .to(".menu-link-item-holder", {
      y:0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.inOut",
      delay: -0.75
    })}}, 
    { scope: container}
  )
  

  useEffect(() => {
    if (typeof window !== "undefined") {
      if(isMenuOpen && tl.current){
        tl.current.play();
      }else if (!isMenuOpen && tl.current) {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen])

  //const { lenisScroll } = useLenisScroll();

  const handleMenuClick = (path: string) => {
    if (typeof window !== "undefined") {
      if (lenis && isDesktop) {
        if (isDesktop) {
          const targetElement = document.querySelector(path) as HTMLElement;
          if (targetElement) {
           

            lenis.scrollTo(targetElement, { 
              duration: 1, 
            });
          } else {
            console.error(`Élément introuvable pour le chemin : ${path}`);
          }
        }
      } else {
        const targetElement = document.querySelector(path);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          console.error(`Élément introuvable pour le chemin : ${path}`);
        }
      }
      
      setIsMenuOpen(false);
    }
  };
  
 

  return (
    <div className='menu-container' ref={container}>
      <div className="menu-bar bg-[#2B2A2A] h-[63px] border-b border-white text-black ">
        
        <div className="menu-logo">
          <Link href="/" className='michroma-text text-[17px]  !text-white'>kamil<span className='text-[#85EA26]'>nachat</span></Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p className='!text-white'>MENU</p>
        </div>
       
       
        <div className="menu-overlay uppercase flex flex-row ">
          <div className='w-[20%] flex flex-col justify-between'>
            <div className="menu-logo lowercase michroma-text"> <Link href="/">kamilnachat</Link></div>
            <div className="menu-close-icon">
              <Image src={Logo} alt='' className='w-[53px] h-auto' />

            </div>
          </div>
          <div className="menu-overlay-bar  w-[80%] flex flex-col justify-between">

            <div className="menu-close w-full flex justify-end" onClick={toggleMenu}>
              <p>Fermer</p>
            </div>
            <div className="menu-copy mt-[50px]">
              <div className="menu-links">
                {menuLinks.map((link,index)=>(
                  <div className="menu-link-item" key={index}>
                    <div className="menu-link-item-holder" onClick={()=>{handleMenuClick(link.path);}}>
                      <span className="menu-link">{link.label}</span>
                    </div>
                  </div>
                ))}
              </div> 
              
            
            </div>
          
            <div className="menu-info flex justify-between text-[14px] md:text-[15px]">
             
              <div className="menu-info-col  text-black">
                <a href="https://www.linkedin.com/in/kamil-nachat-1a11b31a5/?originalSubdomain=fr" target="_blank" rel="noopener noreferrer">
                  LinkedIn &#8599;
                </a>
                <a href="https://github.com/kv1k" target="_blank" rel="noopener noreferrer">
                  GitHub &#8599;
                </a>
              </div>
              <div className="menu-info-col">
                <p>kamil.nachat@outlook.fr</p>
                <p>07 83 97 19 32</p>
              </div>
            </div>
          </div>
          
         

        </div>
      </div>

    </div>
  )
}

export default Menu
