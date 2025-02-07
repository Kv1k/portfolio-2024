"use client"
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export function ParticlesContainer() {
    const [init, setInit] = useState(false);
    // this customizes the component tsParticles installation
    useEffect(() => {
        initParticlesEngine(async (engine) => {
          // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
          // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
          // starting from v2 you can add only the features you need reducing the bundle size
          //await loadAll(engine);
          //await loadFull(engine);
          await loadFull(engine);
          //await loadBasic(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);
    
     
      const options = useMemo(
        () => ({
        fullScreen: {enable : false},
        background: {
            color:{
                value: ''
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: {
                enable: true,
                detectRetina: true, 
              },
            },
            modes: {
              push: {
                quantity: 200,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#85EA26",
            },
            links: {
              color: "#85EA26",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 150,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }),
        [],
      );

      if (init) {
        return (
          <Particles
            className="mt-[60px] h-[92%] w-full absolute translate-z-0"
            id="tsparticles"
            options={options}
          />
        );
      }
    
      return <></>;
}
