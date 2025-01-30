import React from 'react'
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

function AboutMe() {
  return (
    <>
      <div className="inner-section h-[100vh] lg:h-[98vh] michroma-text">
                 
        <div className='h-[50%] lg:h-[64%] mt-10 lg:mt-0 bg-transparent flex flex-col justify-end items-start pl-[35vw] md:pl-[45vw]'>
          <div className="w-[90%] md:w-[60%] lg:w-[270px] h-fit lg:max-h-[390px] mb-[30px]" >
            <Image src={Moi} alt='' className='w-[100%] h-auto'/>
          </div>
        </div>
        <div className='  flex flex-col items-center'>
          <div className="bg-white w-[88vw] lg:w-[92vw] h-[1.2px]"/>
        </div>
      
        <h3 className="absolute mt-[20px] left-[6vw] lg:left-[4vw] p-0 text-[16px]">
          À propos de moi
        </h3>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start  w-[100%]  h-[32%] pl-0 lg:pl-[45vw] mt-[13vh] lg:mt-[25px] '>
        
          <p className='w-[88%] lg:w-[323px] h-[180px] text-[12px] whitespace-normal break-words'>
          is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many 
          </p>
          <p className='ml-0 mt-8 lg:mt-0 lg:ml-[60px] w-[88%] lg:w-[323px]  h-[180px] text-[12px] whitespace-normal break-words'>
          is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
          </p>
        </div>
        
      </div>
      {/* Skills */}
      <div className="inner-section  h-auto  py-20 michroma-text">
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
