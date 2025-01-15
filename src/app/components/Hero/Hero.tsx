import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { ParticlesContainer } from '../ParticulesContainer/ParticulesContainer';

function Hero() {
  return (
    <div>
      <ParticlesContainer/>
      <header className="hero_header ml-4 lg:ml-[11rem] pb-5 lg:pb-[15rem] relative">
      
        <h1>FULLSTACK</h1>
        <h2 className="ml-4 lg:ml-[3rem]">WEB DEVELOPER</h2>

       
      </header>
      
       <div className="absolute bottom-4 left-4 lg:left-[4rem] flex text-[16px] space-x-8 font-extralight">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondTextColor transition duration-200">
            LINKEDIN
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondTextColor transition duration-200">
            GITHUB
          </a>
        </div>

       
        <div className="hidden absolute bottom-4 right-8 font-normal lg:flex items-center space-x-2 text-[14px] michroma-text">
          <span className='mr-3'>Scroll to begin your journey</span>
          <span className="animate-bounceHorizontal"> <BsArrowRight className='w-[1.4rem] h-[1.2rem]'/></span> 
        </div>
    </div>
  );
}

export default Hero;
