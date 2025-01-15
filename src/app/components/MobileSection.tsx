import React from "react";
import Hero from "./Hero/Hero";
import HorizontalTicker from "./HorizontalTicker/HorizontalTicker";

function MobileSection() {
  return (
    <div className="flex flex-col overflow-y-scroll">
      <section className="w-[100vw]">
        <Hero />
      </section>
      <HorizontalTicker type="xp" />
      <section className="w-[100vw]">
        <Hero />
      </section>
    </div>
  );
}

export default MobileSection;
