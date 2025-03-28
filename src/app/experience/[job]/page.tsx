"use client";
import { notFound } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import "./job.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import { use } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import { IoDownloadOutline } from "react-icons/io5";

import Sudalys1 from "../../../../public/SudalysImg/t1.png";
import Sudalys2 from "../../../../public/SudalysImg/t2.jpg";
import Sudalys3 from "../../../../public/SudalysImg/t3.jpeg";
import Sudalys4 from "../../../../public/SudalysImg/t4.png";
import Sudalys5 from "../../../../public/SudalysImg/t5.png";
import Sudalys6 from "../../../../public/SudalysImg/t6.png";
import Sudalys7 from "../../../../public/SudalysImg/t7.png";
import Sudalys8 from "../../../../public/SudalysImg/t8.png";
import Sudalys9 from "../../../../public/SudalysImg/t9.jpg";
import Sudalys10 from "../../../../public/SudalysImg/t10.png";
import Sudalys11 from "../../../../public/SudalysImg/t11.jpg";


import Angova1 from"../../../../public/AngovaImg/t1.gif";
import Angova2 from"../../../../public/AngovaImg/t2.png";
import Angova3 from"../../../../public/AngovaImg/t3.png";
import Angova4 from"../../../../public/AngovaImg/t4.png";
import Angova5 from"../../../../public/AngovaImg/t5.gif";
import Angova6 from"../../../../public/AngovaImg/t6.jpg";
import Angova7 from"../../../../public/AngovaImg/t7.png";
import Angova8 from"../../../../public/AngovaImg/t8.png";
import Angova9 from"../../../../public/AngovaImg/t9.png";
import Angova10 from"../../../../public/AngovaImg/t10.png";
import Angova11 from"../../../../public/AngovaImg/t11.png";

import H2n1 from"../../../../public/H2NImg/t1Test.png";
import H2n2 from"../../../../public/H2NImg/t2.jpg";
import H2n3 from"../../../../public/H2NImg/t3.jpeg";
import H2n4 from"../../../../public/H2NImg/t4.jpg";
import H2n5 from"../../../../public/H2NImg/t5.png";
import H2n6 from"../../../../public/H2NImg/t6.jpg";
import H2n7 from"../../../../public/H2NImg/t7.jpg";
import H2n8 from"../../../../public/H2NImg/t8.jpg";
import H2n9 from"../../../../public/H2NImg/t9.jpg";
import H2n10 from"../../../../public/H2NImg/t10.jpg";
import H2n11 from"../../../../public/H2NImg/t11.png";



type Experience = {
    title: string;
    link: string;
    nameLink: string;
    company: string;
    location: string;
    date: string;
    description: string;
    technologies: string[];
    images: StaticImageData[]; // Si vous utilisez Next.js avec des images importées comme StaticImageData
};

const experiences: { [key: number]: Experience } = {  1: {
    title: "Développeur FullStack",
    link:"https://sudalys.fr/",
    nameLink:"sudalys.fr",
    company: "Sudalys Technologies",
    location: "Vergèze, France",
    date: "Janvier 2022 à Août 2024",
    description: `
    
        - Développement back-end en PHP (Symfony) et front-end en Twig / CSS pour un logiciel SIG SaaS.<br/>
        - Conception et développement en autonomie d’une application mobile SIG avec Flutter.<br/>
        - Gestion de la base de données SQL/SQLite de l’application mobile.<br/>
        - Création d’une API RESTful (Symfony, API Platform).<br/>
        - Mise en place d’une méthodologie Agile et prototypage UX/UI avec Figma.<br/>
        - Analyse des besoins, rédaction de documents techniques et de guides d’utilisation.`,
    technologies: ["PHP (Symfony/Twig)", "Flutter (Dart)", "Java", "JavaScript","API Platform", "RESTful", "CSS", "SQL", "SQLite", "PostgreSQL","Spatialite","PostGIS", "Leaflet", "Git", "Linux (Ubuntu)"],
    images: [Sudalys1,Sudalys2,Sudalys3,Sudalys4,Sudalys5,Sudalys6,Sudalys7,Sudalys8,Sudalys9,Sudalys10,Sudalys11]
},
  2: {
    title: "Développeur Full-Stack",
    link:"https://h2n-auto.fr/",
    nameLink:"h2n-auto.fr",
    company: "H2N Automobile",
    location: "Le Crès, France",
    date: "Mi-décembre 2024 à Mi-janvier 2025",
    description: `
    - Création d’un nouveau logo de l’entreprise (Canva) <br/>
    - Développement et déploiement d’un site vitrine. <br/>
    - Protoypage avec Figma.`,
    technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind"],
    images: [H2n1,H2n9,H2n7,H2n2,H2n4,H2n8,H2n5,H2n6,H2n10,H2n11,H2n3]
  },
  3: {
    title: "Fondateur & Développeur Full-Stack",
    link:"https://angova.eu/",
    nameLink:"angova.eu",
    company: "Angova",
    location: "Full Remote",
    date: "2023 à 2024",
    description: `
    - Conception et développement d'une plateforme e-learning en JavaScript avec React et Node.js.<br/>
    - Gestion d’une équipe de 8 développeurs étudiants en méthodologie Agile (Scrum).<br/>
    - Mise en place de Docker et CI/CD (GitHub Actions) pour automatiser les déploiements.<br/>
    - Prospection et démonstration auprès d’entreprises.`,
    technologies: ["React", "Next.js", "Node.js", "Docker", "Github Actions (CI/CD)", "TypeScript", "JavaScript", "Tailwind", "NoSQL", "MongoDB"],
    images: [Angova1,Angova7,Angova11,Angova4,Angova9,Angova2,Angova6,Angova10,Angova3,Angova5,Angova8]

  }
};

export default function JobPage({ params }: { params: Promise<{ job: string }> }) {
    const { job } = use(params);
    const jobId = parseInt(job, 10); 
    

  // Vérifier si l'expérience existe sinon rediriger vers 404
  if (isNaN(jobId) || !experiences[jobId]) {
    notFound();
  }
  const handleDownload = () => {
    if (typeof window !== "undefined") {
    const link = document.createElement("a");
    link.href = "/Lettre_Recommandation.pdf"; // Chemin relatif vers le fichier dans public
    link.download = "Lettre_Recommandation.pdf"; // Nom du fichier lors du téléchargement
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }
};
  
  const experience = experiences[jobId];
  useEffect(() => {
    if (typeof window !== "undefined") {
        const hero = {
            section: document.querySelector(".section"),
            cards: document.querySelectorAll(".section_bg_card"),
        };

        const init = () => {
            // Masquer et définir les styles des cartes initialement
            hero.cards.forEach((card, index) => {
            gsap.set(card, {
                zIndex: -index,
                clipPath: "inset(100% round 4px)",
                opacity: 0, // Masquer les cartes
                visibility: "hidden", // Les rendre invisibles
            });
            });
        
            // Ajuster les profondeurs pour certaines cartes
            gsap.set([hero.cards[3], hero.cards[4]], { z: -2, zIndex: -15 });
            gsap.set([hero.cards[5], hero.cards[7], hero.cards[8], hero.cards[10]], {
            z: -10,
            zIndex: -10,
            });
            gsap.set([hero.cards[6], hero.cards[9]], { z: -10, zIndex: -5 });
        };
        
        const moveCards = (event: MouseEvent | TouchEvent) => {
            
            let x: number, y: number;
            if ("touches" in event) {
                x = event.touches[0].clientX;
                y = event.touches[0].clientY;
            } else {
                x = event.clientX;
                y = event.clientY;
            }
        const strenght = 8;
        const xPos = (x / window.innerWidth - 0.5) * 2;
        const yPos = (y / window.innerHeight - 0.5) * 2;

        gsap.to(hero.cards, {
            duration: 0.64,
            rotationY: xPos * strenght,
            rotateX: -yPos * strenght,

            stagger: 0.08,
        })
        };

        const onHover = (event: { target: gsap.TweenTarget; type: string; }) => {
        gsap.to(event.target,{
            duration: 1.2,
            z: event.type === "mouseenter" ? 40 : 0,
            ease: 'expo.out',
        })
        };

        const introAnimation = () => {
            const tl = gsap.timeline({defaults: {duration: 1.5, ease:'power4.inOut'} });
            // Animation pour révéler les cartes
            tl.to(hero.cards, {
                z: 0, // Amener les cartes à la profondeur correcte
                clipPath: "inset(10% round 4px)", // Modifier leur clipPath
                opacity: 1, // Les rendre visibles
                visibility: "visible", // Supprimer `hidden`
                stagger: {
                each: 0.08, // Décalage progressif
                grid: "auto",
                from: "center",
                },
            });
            tl.call(()=> {
                hero.cards.forEach((card)=> {
                    card.addEventListener("mouseenter",onHover);
                    card.addEventListener("mouseleave",onHover);

                });
                // @ts-expect-error je ne sais pas
                hero.section?.addEventListener('mousemove',moveCards)
                // @ts-expect-error je ne sais pas
                hero.section?.addEventListener('touchmove',moveCards)

            })
        };

        // Initialise les comportements
        init();
    
        introAnimation();
    }
    
  }, []);
  const handleOpenLink = () => {
    if (typeof window !== "undefined") {
      window.open(experience.link, "_blank");
    }
  };
  

  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden'>
        <main className='app w-[100%] h-[100%]'>
        <div className='section'>
            <div className="section_wrapper">
                <div className="section_info">
                    <div className="section_info_item w-[10%] lg:w-[60%] justify-between p-[16px] lg:p-0">
                        <span 
                            className="cursor-pointer z-200" 
                            onClick={() =>{
                                if (typeof window !== "undefined" ) {
                                    const baseUrl = window.location.origin; 
                                    window.location.href = `${baseUrl}/`;
                                }
                            } }
                        >
                            <GrLinkPrevious size={28} />
                        </span>
                        <span className="hidden lg:block text-[10px] michroma-text font-light">[ Survolez pour interagir avec les cartes ]</span>
                    </div>
                    <div className="section_info_item w-[90%] lg:w-[50%]  overflow-y-scroll pt-[55px]  px-[30px]  lg:px-0">
                        <h1 className="michroma-text font-semibold text-[30px] mb-1">{experience.title}</h1>
                        <p className="text-[15px] font-extralight mb-[20px] lg:mb-4 ">{experience.date}</p>
                        {experience.company === "Sudalys Technologies" ? (
                        <div className="flex flex-col lg:flex-row items-start lg:items-center text-[17px] michroma-text mb-[10px] lg:mb-5 text-[#85EA26]">
                            <div>{experience.company}</div>
                            <div className="flex ml-2 mt-[7px] lg:mt-0 items-center h-[40px]">
                            <span className="text-white hidden lg:block"> |</span>
                            <p className="text-white manrope-text text-[15px] font-light italic ml-2 mt-1">
                                Ils me recommandent !
                            </p>
                            <IoDownloadOutline size={25} className="text-white mt-[-5px] ml-[8px] cursor-pointer"   onClick={handleDownload} />
                            </div>
                        </div>
                        ) : (
                        <p className="text-[17px] michroma-text  mb-[10px] lg:mb-5 text-[#85EA26]">{experience.company}</p>
                        )}
                        <h2 className="michroma-text underline text-[15px] mb-[5px] lg:mb-3">Lieu du poste :</h2>
                        <p className="font-extralight text-[15px] mb-[10px] lg:mb-3">{experience.location}</p>
                        <h2 className="michroma-text underline text-[15px]  mb-[5px] lg:mb-3">Description du poste :</h2>
                        <p className="font-extralight text-[15px] mb-[10px] lg:mb-3" dangerouslySetInnerHTML={{ __html: experience.description }}></p>

                        <h2 className="michroma-text underline text-[15px] mb-[5px] lg:mb-1">Technologies utilisées :</h2>
                        <ul
                            className={`font-extralight list-none text-[15px] lg:text-[16px] mb-[15px] lg:mb-0 ${
                                experience.technologies.length > 6 ? "grid grid-cols-2 gap-x-4" : ""
                            }`}
                            >
                            {experience.technologies.map((tech, index) => (
                                <li key={index}>- {tech}</li>
                            ))}
                        </ul>
                     
                            <>
                                <h2 className="block lg:hidden michroma-text underline text-[15px] mb-[5px] ">Lien :</h2>
                                <p className="block lg:hidden font-extralight text-[15px] mb-[12vh]  "><a href={experience.link} target="_blank" rel="noopener noreferrer" className="underline cursor-pointer">{experience.nameLink}</a> &#8599;</p>
                            </>
                        
                        
                    </div>
                </div>
                
                <div className="section_bg hidden lg:block">
                    <div
                    className="section_bg_card relative group cursor-pointer"
                    onClick={handleOpenLink}
                    >
                    {/* Image */}
                    <div className="section_bg_card_content">
                        <Image
                        src={experience.images[0]}
                        alt=""
                        className="section_bg_card_image"
                        />
                    </div>

                   
                       
                        {/* Overlay noir semi-transparent */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>

                        {/* Texte centré */}
                        <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                            {experience.nameLink} &#8599;
                        </span>
                        
                    
                    </div>          
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={experience.images[9]} alt='' className='section_bg_card_image'/>
                        </div>
                    </div>
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={experience.images[5]} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={experience.images[1]} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={experience.images[10]} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>

                    {/* Left Side  */}
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={experience.images[7]} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={experience.images[6]} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={experience.images[8]} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>

                    {/* Right Side  */}
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={experience.images[3]} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={experience.images[4]} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={experience.images[2]} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </main>
    </div>
  
  );
}
