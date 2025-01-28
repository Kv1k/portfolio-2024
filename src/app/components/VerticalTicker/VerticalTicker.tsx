"use client";

import React, { useEffect, useRef, useState } from "react";
import "./verticalTicker.css";

function VerticalTicker({ type }) {
  const sliderRef = useRef(null);
  const [animationDuration, setAnimationDuration] = useState("0s");

  useEffect(() => {
    const calculateAnimationDuration = () => {
      if (sliderRef.current) {
        const lineHeight = sliderRef.current.querySelector("li").clientHeight;
        const itemCount = sliderRef.current.children.length;
        const totalHeight = lineHeight * itemCount;
        const time = totalHeight / 400; // 400px/sec
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
          <li key={index} className="mt-[1rem]">
            KAMILNACHAT <span className="text-[#85EA26] mt-[1rem]"> EXPERIENCES </span>
          </li>
        ))
      : Array.from({ length: 25 }).map((_, index) => (
          <li key={index} className="mt-[1rem]">
            EN SAVOIR PLUS
          </li>
        ));

  return (
    <div
      className={`marquee-wrap border-x-2 border-white flex ${
        type === "aboutMe" ? " w-[46px]" : " w-[76px]"
      }`}
    >
      {/* Premier <ul>, toujours présent */}
      <ul
        className="slider"
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
          className="slider2"
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

export default VerticalTicker;
