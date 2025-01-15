"use client";

import React, { useEffect, useRef, useState } from "react";
import "./horizontalTicker.css"
function HorizontalTicker({ type }) {
  const sliderRef = useRef(null);
  const [animationDuration, setAnimationDuration] = useState("0s");

  useEffect(() => {
    const calculateAnimationDuration = () => {
      if (sliderRef.current) {
        const itemWidth = sliderRef.current.querySelector("li").clientWidth;
        const itemCount = sliderRef.current.children.length;
        const totalWidth = itemWidth * itemCount;
        const time = totalWidth / 120; // 200px/sec (vitesse ajustable)
        setAnimationDuration(`${time}s`);
      }
    };

    calculateAnimationDuration();
    window.addEventListener("resize", calculateAnimationDuration);

    return () => {
      window.removeEventListener("resize", calculateAnimationDuration);
    };
  }, []);

  // Définir les données en fonction de la prop "type"
  const items =
    type === "xp"
      ? Array.from({ length: 25 }).map((_, index) => (
          <li key={index} className="inline-block pt-[10px] font-semibold text-[18px]">
             KAMILNACHAT <span className="text-[#85EA26] ml-[1rem] "> EXPERIENCES </span>
          </li>
        ))
      : Array.from({ length: 25 }).map((_, index) => (
          <li key={index} className="inline-block pt-[10px] font-semibold text-[18px]">
            KNOW MORE ABOUT ME
          </li>
        ));

  return (
    <div className="marquee-wrap-horizontal border-y-2 border-white flex h-[56px]">
      <ul
              className="slider-horizontal"
              style={{
                animationDuration: animationDuration,
              }}
              ref={sliderRef}
            >
              {items}
              {/* Duplication des éléments uniquement si type = "xp" */}
              {type === "xp" &&
                items.map((item, index) => React.cloneElement(item, { key: `copy-${index}` }))}
            </ul>
      
            {/* Deuxième <ul>, uniquement pour type="xp" */}
            {type === "xp" && (
              <ul
                className="slider2-horizontal"
                style={{
                  animationDuration: animationDuration,
                }}
              >
                {items.map((item, index) => React.cloneElement(item, { key: `slider2-${index}` }))}
              </ul>
            )}
    </div>
  );
}

export default HorizontalTicker;
