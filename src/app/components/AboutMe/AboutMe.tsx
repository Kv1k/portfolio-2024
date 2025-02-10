"use client";

import React, { useEffect, useRef } from 'react'
import { GrReactjs } from "react-icons/gr";
import { FaJs,FaHtml5,FaCss3Alt,FaSymfony, FaPhp,FaNode, FaJava, FaDocker, FaLinux, FaGithub} from "react-icons/fa";
import LogoTwig from "../../../../public/twig-logo.png";
import Spatialite from "../../../../public/spatialite.png"
import { TbFileTypeSql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSqlite, SiGithubactions,SiDart,SiNextdotjs } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import Image from "next/image"
import Moi from "../../../../public/moi2.jpg"
import gsap from "gsap";
interface AboutMeProps {
  aboutMeRef: React.RefObject<HTMLDivElement>;
}

function AboutMe({aboutMeRef} :AboutMeProps) {
  const borderTopRightRef = useRef(null);
  const borderBottomLeftRef = useRef(null);
  const imageRef = useRef(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    tlRef.current = gsap.timeline({ paused: true });
  
    // Suppression de l'opacité 0 au début
    gsap.set([ borderBottomLeftRef.current], { opacity: 1 });
    gsap.set([borderTopRightRef.current], { opacity: 0 });

    tlRef.current
      .to(borderTopRightRef.current, {
        opacity: 1,
        top: "-15px",
        right: "-15px",
        duration: 1.2, // Seulement déplacement
      })
      
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2 },
        "-=0.8"
      );
  
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          tlRef.current?.play();
        } else {
          tlRef.current?.reverse();
        }
      },
      { threshold: 0.6 }
    );
  
    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }
  
    return () => observer.disconnect();
  }, []);
  
  return (
    <>
      <div className="inner-section h-[100vh] md:h-[80vh] lg:h-[98vh] michroma-text">
                 
        <div className='h-[50%]  lg:h-[64%] mt-[5.5rem] lg:mt-0 bg-transparent flex flex-col justify-end items-start pl-[35vw] md:pl-[32vw]'>
        <div  className="relative w-[90%] md:w-[60%] lg:w-[270px] h-fit lg:max-h-[390px] mb-[30px]">
          {/* Image animée */}
          <Image ref={imageRef} src={Moi} alt="Moi" className="w-full h-auto opacity-0  hidden lg:block" />
          <Image  src={Moi} alt="Moi" className="w-[95%] h-auto block lg:hidden" />
          {/* Bordure haut-droit */}
          <div
            ref={borderTopRightRef}
            className="absolute w-10 h-10 border-t-2 border-r-2 border-[#85EA26] hidden lg:block"
          ></div>
          <div
            
            className="absolute w-10 h-10 border-t-2 border-r-2 top-[-15px] right-[-3px] border-[#85EA26] block lg:hidden"
          ></div>


          {/* Bordure bas-gauche */}
          <div
            ref={borderBottomLeftRef}
            className="absolute w-10 h-10 bottom-[-15px] left-[-15px] border-b-2 border-l-2 border-[#85EA26]"
          ></div>
        </div>
        </div>
        <div className='  flex flex-col items-center'>
          <div className="bg-white w-[88vw] lg:w-[92vw] h-[1.2px]"/>
        </div>
      
        <h3 className="absolute mt-[20px] left-[6vw] lg:left-[4vw] p-0 text-[16px]">
          A propos de moi
        </h3>
        
        <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start  w-[100%]  h-[32%] pl-0 lg:pl-[32vw] mt-[22vh] md:mt-[7vh] lg:mt-[25px] '>
        
          <p className='w-[88%] lg:w-[400px] h-[180px] md:h-[95px] text-[11px] whitespace-normal break-words'>
          Salut ! Moi, c’est Kamil, un jeune Montpelliérain qui vient d’obtenir son Master en Architecture Logicielle à Epitech. <br />
          J’ai travaillé pendant presque trois ans en tant que développeur fullstack chez Sudalys, mais j’ai aussi une appétence pour l’UX/UI design. 
          C’est d’ailleurs par le design que j’ai découvert l’informatique !<br /> J’ai un parcours assez atypique que je me ferais une joie de vous raconter lors d’un entretien.
          <br/>
          {/* Je suis vraiment heureux d’avoir découvert l’informatique il y a maintenant cinq ans, car aujourd’hui, c’est clairement une vocation. 
          Ce qui me motive le plus, c’est le côté challengeant de ce domaine et de la curiosité dont il faut faire preuve pour trouver des solutions à la fois adaptées et efficiente.
          Au fil des années, j’ai eu l’occasion de travailler sur des projets professionnels et entrepreneuriaux qui m’ont marqué et dont je suis fier. 
          Ce qui me touche particulièrement, c’est de voir à quel point mes compétences peuvent faciliter la vie des gens, que ce soit dans leur travail ou leur quotidien. */}

          </p>
          <p className='ml-0 mt-8 lg:mt-0 lg:ml-[60px] w-[88%] lg:w-[400px]  h-[180px] text-[11px] whitespace-normal break-words'>
            En-dehors du pro, je suis un passionné et un grand curieux. <br />
            Ce que j’aime par-dessus tout, c’est surfer… <br />
            Pas sur Internet, mais bien sur les vagues ! <br />
            Et quand la mer est plate (souvent en Méditerranée), je pars faire une balade en paddle avec mon chien. <br />
            Je suis aussi passionné par la musique : je produis de la house et j’en mixe.<br />
            De plus, je fais aussi du montage vidéo pour le plaisir, mais ça m’est aussi arrivé d’en faire pour des associations. 
            <br />   
            {/* Vous l’avez compris, je suis un vrai touche-à-tout, avide de découvertes et d’aventures. 
            Peut-être que la prochaine se fera avec vous ? 
            Actuellement, je suis à la recherche d’un CDI en tant que développeur fullstack, prêt à relever de nouveaux défis et à apporter ma passion du code à une équipe motivée. 
            Si mon profil vous intéresse, discutons autour d’un café virtuel ! */}
          </p>
        </div>
        
      </div>
      {/* Skills */}
      <div className="inner-section  h-auto  pb-20 pt-[11rem] michroma-text">
        <div className='  flex flex-col items-center'>
          <div className="bg-white  w-[88vw] lg:w-[92vw] h-[1.2px]"/>
        </div>
      
        <h3 className="mt-[20px] ml-[6vw] lg:ml-[4vw] p-0 text-[16px] ">
          Compétences
        </h3>
        <div className="flex w-full justify-center items-center mt-[45px]">
          <div className="flex w-[85%]  py-8  pl-6 pr-1 lg:px-8 border border-[#85EA26] ">
            <div className='w-[95%] grid grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 items-center justify-center '>
              <div className='flex justify-center items-center flex-col'>
                <GrReactjs size={50}/>
                <p>React</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <SiNextdotjs size={50}/>
                <p>Next.js</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <Image src={LogoTwig} alt='' className='w-[50px]'/>
                <p>Twig</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <FaHtml5 size={50}/>
                <p>HTML</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <FaCss3Alt size={50}/>
                <p>CSS</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <FaJs size={50}/>
                <p>JS</p>
              </div>
            </div>
            
            <h3 className='skill-section text-[20px] text-left stretchLetter font-bold '>Front-end</h3>
          </div>
        </div>
        <div className="flex w-full justify-center items-center mt-[45px]">
          <div className="flex w-[85%]  py-8  pl-6 pr-1 lg:px-8 border border-[#85EA26] ">
            <div className='w-[95%] grid grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 items-center justify-center '>
              <div className='flex justify-center items-center flex-col'>
                <FaSymfony size={50}/>
                <p>Symfony</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <FaPhp size={50}/>
                <p>PHP</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <FaNode size={50}/>
                <p>Node.js</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <FaJs size={50}/>
                <p>JS</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <FaJava size={50}/>
                <p>JAVA</p>
              </div>
              
            </div>
            
            <h3 className='skill-section text-[20px] text-left stretchLetter font-bold '>Back-end</h3>
          </div>
        </div>
        
        <div className="flex w-full justify-center items-center mt-[45px]">
          <div className="flex w-[85%]  py-8  pl-2 pr-1 lg:px-8 border border-[#85EA26] ">
            <div className='w-[95%] grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 items-center justify-center '>
              <div className='flex justify-center items-center flex-col'>
                <TbFileTypeSql size={50}/>
                <p>SQL</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <BiLogoPostgresql size={50}/>
                <p>PostgreSQL</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <SiSqlite size={50}/>
                <p>SQLite</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <Image src={Spatialite} alt='' className='w-[70px]'/>
                <p>Spatialite</p>
              </div>
            
              
            </div>
            
            <h3 className='skill-section text-[20px] text-left stretchLetter font-bold '>Database</h3>
          </div>
        </div>
        <div className="hidden lg:flex w-full justify-center items-center">
          <div className="grid grid-cols-3 gap-8 w-[85%]">
            
            <div className="flex  justify-start items-center mt-[45px] ">
              <div className="flex py-8  px-8 border border-[#85EA26] h-[235px]">
                <div className='grid grid-cols-3 gap-16 '>
                  <div className='flex justify-center items-center flex-col'>
                    <RiFlutterFill size={50}/>
                    <p>Flutter</p>
                  </div>
                  <div className='flex justify-center items-center flex-col'>
                    <SiDart size={50}/>
                    <p>Dart</p>
                  </div>  
                  <div className='flex justify-end items-start'>
                    <h3 className='skill-section text-[19px] text-left stretchLetter font-bold '>Mobile</h3>
                  </div>              
                </div>
                
                
              </div>
            </div>
            <div className="flex  justify-center items-center mt-[45px] ">
              <div className="flex py-8  px-8 border border-[#85EA26] h-[235px]">
                <div className='grid grid-cols-3 gap-16 '>
                  <div className='flex justify-center items-center flex-col'>
                    <FaDocker size={50}/>
                    <p>Docker</p>
                  </div>
                  <div className='flex justify-center items-center flex-col'>
                    <SiGithubactions size={50}/>
                    <p>Github Actions</p>
                  </div>  
                  <div className='flex justify-end items-start'>
                    <h3 className='skill-section text-[19px] text-left stretchLetter font-bold '>DevOps</h3>
                  </div>              
                </div>
                
                
              </div>
            </div>
            <div className="flex  justify-end items-center mt-[45px] ">
              <div className="flex py-8  px-8 border border-[#85EA26] h-[235px]">
                <div className='grid grid-cols-3 gap-16 '>
                  <div className='flex justify-center items-center flex-col'>
                    <FaLinux size={50}/>
                    <p>Linux</p>
                  </div>
                  <div className='flex justify-center items-center flex-col'>
                    <FaGithub size={50}/>
                    <p>Git / Github</p>
                  </div>  
                  <div className='flex justify-end items-start'>
                    <h3 className='skill-section text-[19px] text-left stretchLetter font-bold '>Workflow</h3>
                  </div>              
                </div>
                
                
              </div>
            </div>
          
          </div>
        </div>
        <div className="flex flex-col lg:hidden">
          <div className="flex w-full justify-center items-center mt-[45px]">
            <div className="flex w-[85%]  py-8  pl-2 pr-1  border border-[#85EA26] ">
              <div className='w-[95%] grid grid-cols-2 gap-y-8 gap-x-4 items-center justify-center '>
                <div className='flex justify-center items-center flex-col'>
                  <RiFlutterFill size={50}/>
                  <p>Flutter</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                  <SiDart size={50}/>
                  <p>Dart</p>
                </div>                
              </div>
              
              <h3 className='skill-section text-[20px] text-left stretchLetter font-bold '>Mobile</h3>
            </div>
          </div>

          <div className="flex w-full justify-center items-center mt-[45px]">
            <div className="flex w-[85%]  py-8  pl-2 pr-1  border border-[#85EA26] ">
              <div className='w-[95%] grid grid-cols-2 gap-y-8 gap-x-4 items-center justify-center '>
                <div className='flex justify-center items-center flex-col'>
                  <FaDocker size={50}/>
                  <p>Docker</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                  <SiGithubactions size={50}/>
                  <p>Github Actions</p>
                </div>                
              </div>
              
              <h3 className='skill-section text-[20px] text-left stretchLetter font-bold '>DevOps</h3>
            </div>
          </div>

          <div className="flex w-full justify-center items-center mt-[45px]">
            <div className="flex w-[85%]  py-8  pl-2 pr-1  border border-[#85EA26] ">
              <div className='w-[95%] grid grid-cols-2 gap-y-8 gap-x-4 items-center justify-center '>
                <div className='flex justify-center items-center flex-col'>
                  <FaLinux size={50}/>
                  <p>Linux</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                  <FaGithub size={50}/>
                  <p>Git / Github</p>
                </div>          
              </div>
              
              <h3 className='skill-section text-[20px] text-left stretchLetter font-bold '>Workflow</h3>
            </div>
          </div>
        </div>
        
        
      </div>
    </>
  )
}

export default AboutMe
