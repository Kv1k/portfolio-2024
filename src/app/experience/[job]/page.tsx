"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Moi from "../../../../public/moi2.jpg";
import "./job.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import { use } from "react";
import { GrLinkPrevious } from "react-icons/gr";

const experiences = {
  1: {
    title: "Développeur FullStack",
    company: "Sudalys Technologies",
    location: "Vergèze, France",
    date: "De janvier 2022 à août 2024",
    description: `Mon rôle à Sudalys a inclus le développement et la maintenance de fonctionnalités en Symfony dans le logiciel Easy-exploit, aujourd'hui commercialisé.
    Également en charge de la conception et du développement d'une application mobile innovante, j'ai utilisé les technologies Flutter et Symfony.
    J'ai pris en main l'ensemble du processus de développement, allant de l'analyse des besoins métier et de l'élaboration du cahier des charges à la création d'une application Flutter efficace et à la mise en place d'une API Symfony personnalisée.`,
    technologies: ["Symfony", "Twig", "PostgreSQL", "PHP", "JS", "Flutter", "Dart", "JAVA", "Spatialite", "Sqlite", "SQL"],
  },
  2: {
    title: "Développeur Front-end",
    company: "H2N Automobile",
    location: "Full Remote",
    date: "Décembre 2024",
    description: `Réalisation d’une mission freelance incluant la création d’un site vitrine en Next.js, l’optimisation du référencement (SEO) ainsi que la conception du logo et de l’identité graphique de l’entreprise H2N Automobile.`,
    technologies: ["JS", "React", "Next.js"],
  },
  3: {
    title: "Porteur de projet",
    company: "Angova",
    location: "Full Remote",
    date: "Depuis mai 2023",
    description: `Prospection d'entreprises pour participer à la bêta et mise en place d’une version Beta.`,
    technologies: ["JS", "React", "Next.js", "Symfony", "PHP", "PostgreSQL"],
  },
  4: {
    title: "Intégrateur mail",
    company: "Be Lounge",
    location: "Full Remote",
    date: "Juillet 2021",
    description: `Dans le cadre d'une mission en freelance, j'ai eu l'opportunité de creer la signature mail en XHTML/CSS de l'entreprise Be Lounge.`,
    technologies: ["XHTML", "CSS"],
  },
};

export default function JobPage({ params }) {
    const { job } = use(params); 
    const jobId = parseInt(job, 10); 

  // Vérifier si l'expérience existe sinon rediriger vers 404
  if (isNaN(jobId) || !experiences[jobId]) {
    notFound();
  }

  const experience = experiences[jobId];
  useEffect(() => {
    const hero = {
      section: document.querySelector(".section"),
      cards: document.querySelectorAll(".section_bg_card"),
    };

    const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

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
      

    const moveCards = (event) => {
      const x = event.touches ? event.touches[0].clientX : event.clientX;
      const y = event.touches ? event.touches[0].clientY : event.clientY;

      const strenght = 8;
      let xPos = (x / window.innerWidth - 0.5) * 2,
          yPos = (y / window.innerHeight - 0.5) * 2;

      gsap.to(hero.cards, {
        duration: 0.64,
        rotationY: xPos * strenght,
        rotateX: -yPos * strenght,

        stagger: 0.08,
      })
    };

    const onHover = (event) => {
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
            hero.section?.addEventListener('mousemove',moveCards)
            hero.section?.addEventListener('touchmove',moveCards)

        })
    };

    // Initialise les comportements
    init();
   
    introAnimation();

    
  }, []);

  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
        <main className='app w-[100%] h-[100%]'>
        <div className='section'>
            <div className="section_wrapper">
                <div className="section_info">
                    <div className="section_info_item w-[60%] justify-between">
                        <span 
                            className="cursor-pointer z-200" 
                            onClick={() => window.location.href = "http://localhost:3000"}
                        >
                            <GrLinkPrevious size={28} />
                        </span>
                        <span className="text-[10px] michroma-text font-light">[ Survolez pour interagir avec les cartes ]</span>
                    </div>
                    <div className="section_info_item w-[50%] py-10">
                        <h1 className="michroma-text font-semibold text-[30px] mb-1">{experience.title}</h1>
                        <p className="text-[15px] font-extralight mb-8 ">{experience.date}</p>
                        <p className="text-[17px] michroma-text  mb-4 text-[#85EA26]">
                           {experience.company}
                        </p>
                        <h2 className="michroma-text underline text-[15px] mb-2">Lieu du poste :</h2>
                        <p className="font-extralight text-[15px] mb-3">{experience.location}</p>
                        <h2 className="michroma-text underline text-[15px] mb-2">Description du poste :</h2>
                        <p className="font-extralight text-[15px] mb-3">{experience.description}</p>

                        <h2 className="michroma-text underline text-[15px] mb-1">Technologies utilisées :</h2>
                        <ul className="font-extralight list-none">
                            {experience.technologies.map((tech, index) => (
                                <li key={index}>- {tech}</li>
                            ))}
                        </ul>

                    </div>
                </div>
                <div className="section_bg">
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={Moi} alt='' className='section_bg_card_image'/>
                        </div>
                    </div>
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={Moi} alt='' className='section_bg_card_image'/>
                        </div>
                    </div>
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={Moi} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={Moi} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={Moi} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>

                    {/* Left Side  */}
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={Moi} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={Moi} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={Moi} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>

                    {/* Right Side  */}
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={Moi} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={Moi} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>
                    <div className="section_bg_card">
                        <div className="section_bg_card_content">
                            <Image src={Moi} alt='' className=' section_bg_card_image'/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </main>
    </div>
  
  );
}
