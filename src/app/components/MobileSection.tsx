"use client"

import React, {useRef} from "react";
import Hero from "./Hero/Hero";
import HorizontalTicker from "./HorizontalTicker/HorizontalTicker";
import Experiences from "./Experiences/Experiences";
import Contact from "./Contact/Contact";
import AboutMe from "./AboutMe/AboutMe";

function MobileSection() {
  const aboutMeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col overflow-y-scroll overflow-x-hidden">
      <section className="w-[100vw] h-auto"  id='accueil'>
        <Hero />
      </section>
      <HorizontalTicker type="xp" />
      
      <section className="w-[100vw]  h-auto" id='experiences'>
        <Experiences/>
      </section>
      <HorizontalTicker type="aboutMe"/>
      <section className="w-[100vw]  h-auto" id='aboutMe' ref={aboutMeRef}>
        <AboutMe  aboutMeRef={aboutMeRef}/>
      </section>
      <section className="w-[100vw]  h-auto" id='contact'>
        <Contact/>
      </section>
      
      
    </div>
  );
}

export default MobileSection;
