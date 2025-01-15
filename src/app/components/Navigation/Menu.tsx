"use client"

import React, {useState, useRef, useEffect} from 'react';
import Link from 'next/link';
import "./menu.css";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react"

gsap.registerPlugin(useGSAP);


const menuLinks = [
  { path: "/", label: "Home"},
  { path: "/work", label: "Work"},
  { path: "/about", label: "About"},
  { path: "/contact", label: "Contact"}
];


const Menu = () => {
  const container = useRef();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   
  }
  
  useGSAP(()=>{
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
    })}, 
    { scope: container}
  )

  useEffect(() => {
    if(isMenuOpen){
      tl.current.play();
    }else{
      tl.current.reverse();
    }
  }, [isMenuOpen])

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
                <p>&#x2715;</p>
              </div>
          </div>
          <div className="menu-overlay-bar  w-[80%] flex flex-col justify-between">

            <div className="menu-close w-full flex justify-end" onClick={toggleMenu}>
              <p>Close</p>
            </div>
            <div className="menu-copy mt-[50px]">
              <div className="menu-links">
                {menuLinks.map((link,index)=>(
                  <div className="menu-link-item" key={index}>
                    <div className="menu-link-item-holder" onClick={toggleMenu}>
                      <Link href={link.path} className='menu-link'>
                        {link.label}
                      </Link>
                    </div>
                  </div>
                ))}
              </div> 
              
            
            </div>
          
            <div className="menu-info flex justify-between text-[14px] md:text-[15px]">
             
              <div className="menu-info-col  text-black">
                <a>LinkedIn &#8599;</a>
                <a>GitHub &#8599;</a>
              </div>
              <div className="menu-info-col">
                <p>kamil.nachat@hotmail.com</p>
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
