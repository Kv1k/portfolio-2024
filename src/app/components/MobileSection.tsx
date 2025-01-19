import React from "react";
import Hero from "./Hero/Hero";
import HorizontalTicker from "./HorizontalTicker/HorizontalTicker";
import Experiences from "./Experiences/Experiences";
import Contact from "./Contact/Contact";
import AboutMe from "./AboutMe/AboutMe";

function MobileSection() {
  return (
    <div className="flex flex-col overflow-y-scroll overflow-x-hidden">
      <section className="w-[100vw] h-auto">
        <Hero />
      </section>
      <HorizontalTicker type="xp" />
      
      <section className="w-[100vw]  h-auto">
        <Experiences/>
      </section>
      <HorizontalTicker type="aboutMe"/>
      <section className="w-[100vw]  h-auto">
        <AboutMe/>
      </section>
      <section className="w-[100vw]  h-auto">
        <Contact/>
      </section>
      
      
    </div>
  );
}

export default MobileSection;
