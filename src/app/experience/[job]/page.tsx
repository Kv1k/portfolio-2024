"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
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
import Sudalys5 from "../../../../public/SudalysImg/t5.jpg";
import Sudalys6 from "../../../../public/SudalysImg/t6.png";
import Sudalys7 from "../../../../public/SudalysImg/t7.png";
import Sudalys8 from "../../../../public/SudalysImg/t8.png";
import Sudalys9 from "../../../../public/SudalysImg/t9.jpg";
import Sudalys10 from "../../../../public/SudalysImg/t10.jpeg";
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


import Belounge1 from"../../../../public/beLoungeImg/t1.png";
import Belounge2 from"../../../../public/beLoungeImg/t2.jpg";
import Belounge3 from"../../../../public/beLoungeImg/t3.jpg";
import Belounge4 from"../../../../public/beLoungeImg/t4.jpeg";
import Belounge6 from"../../../../public/beLoungeImg/t6.png";
import Belounge7 from"../../../../public/beLoungeImg/t7.jpeg";
import Belounge9 from"../../../../public/beLoungeImg/t9.jpeg";



const experiences = {
  1: {
    title: "Développeur FullStack",
    link:"https://sudalys.fr/",
    nameLink:"sudalys.fr",
    company: "Sudalys Technologies",
    location: "Vergèze, France",
    date: "De janvier 2022 à août 2024",
    description: `Mon rôle à Sudalys a inclus le développement et la maintenance de fonctionnalités en Symfony dans le logiciel Easy-exploit, aujourd'hui commercialisé.
    Également en charge de la conception et du développement d'une application mobile innovante, j'ai utilisé les technologies Flutter et Symfony.
    J'ai pris en main l'ensemble du processus de développement, allant de l'analyse des besoins métier et de l'élaboration du cahier des charges à la création d'une application Flutter efficace et à la mise en place d'une API Symfony personnalisée.`,
    technologies: ["Symfony", "Twig", "PostgreSQL", "PHP", "JS", "Flutter", "Dart", "JAVA", "Spatialite", "Sqlite", "SQL"],
    images: [Sudalys1,Sudalys2,Sudalys3,Sudalys4,Sudalys5,Sudalys6,Sudalys7,Sudalys8,Sudalys9,Sudalys10,Sudalys11]
},
  2: {
    title: "Développeur Front-end",
    link:"https://h2n-auto.fr/",
    nameLink:"h2n-auto.fr",
    company: "H2N Automobile",
    location: "Full Remote",
    date: "Décembre 2024",
    description: `Réalisation d’une mission freelance incluant la création d’un site vitrine en Next.js, l’optimisation du référencement (SEO) ainsi que la conception du logo et de l’identité graphique de l’entreprise H2N Automobile.`,
    technologies: ["JS", "React", "Next.js"],
    images: [H2n1,H2n9,H2n7,H2n2,H2n4,H2n11,H2n5,H2n6,H2n10,H2n8,H2n3]
  },
  3: {
    title: "Porteur de projet",
    link:"https://angova.eu/",
    nameLink:"angova.eu",
    company: "Angova",
    location: "Full Remote",
    date: "Depuis 2023",
    description: `
    Angova est un projet dont je suis le porteur depuis maintenant presque deux ans et dont la réalisation 
    ainsi que les résultats me tiennent énormément à cœur.<br/>
    Fin 2023, j'ai décidé d'en faire mon projet de fin d'année, ce qui m'a donné l'opportunité de manager une équipe de huit étudiants développeurs.<br/>
    J'ai également eu la chance de collaborer avec des auto-écoles de ma région ainsi qu'un centre de migration à Montpellier.<br/>
    Grâce à sa version bêta, Angova a déjà pu venir en aide à de nombreuses personnes.<br/>
    À travers ce projet, j'ai pu réaliser les maquettes, une pub vidéo, mettre en place la version bêta, et enfin prospecter des entreprises.<br/>
    Ce n'est que le début ! La nouvelle version arrive bientôt  &#128521;`,
    technologies: ["JS", "React", "Next.js", "Symfony", "PHP", "PostgreSQL"],
    images: [Angova1,Angova7,Angova11,Angova4,Angova9,Angova2,Angova6,Angova10,Angova3,Angova5,Angova8]

  },
  4: {
    title: "Intégrateur mail",
    company: "Be Lounge",
    location: "Full Remote",
    date: "Juillet 2021",
    description: `Dans le cadre d'une mission en freelance, j'ai eu l'opportunité de creer la signature mail en XHTML/CSS de l'entreprise Be Lounge.`,
    technologies: ["XHTML", "CSS"],
    images: [Belounge1,Belounge6,Belounge3,Belounge3,Belounge3,Belounge4,Belounge6,Belounge9,Belounge7,Belounge2,Belounge7]

  },
};

export default function JobPage({ params }) {
    const { job } = use(params); 
    const jobId = parseInt(job, 10); 

  // Vérifier si l'expérience existe sinon rediriger vers 404
  if (isNaN(jobId) || !experiences[jobId]) {
    notFound();
  }
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Lettre_Recommandation.pdf"; // Chemin relatif vers le fichier dans public
    link.download = "Lettre_Recommandation.pdf"; // Nom du fichier lors du téléchargement
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const experience = experiences[jobId];
  useEffect(() => {
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
      

    const moveCards = (event: { touches: {
        clientX: any; clientY: any; 
}[]; clientX: any; clientY: any; }) => {
      const x = event.touches ? event.touches[0].clientX : event.clientX;
      const y = event.touches ? event.touches[0].clientY : event.clientY;

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
    <div className='w-[100vw] h-[100vh] flex items-center justify-center '>
        <main className='app w-[100%] h-[100%]'>
        <div className='section'>
            <div className="section_wrapper">
                <div className="section_info">
                    <div className="section_info_item w-[10%] lg:w-[60%] justify-between p-[16px] lg:p-0">
                        <span 
                            className="cursor-pointer z-200" 
                            onClick={() => window.location.href = "http://localhost:3000"}
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
                        {experience.company !== "Be Lounge" && (
                            <>
                                <h2 className="block lg:hidden michroma-text underline text-[15px] mb-[5px] ">Lien :</h2>
                                <p className="block lg:hidden font-extralight text-[15px] mb-[12vh]  "><span className="underline cursor-pointer">{experience.nameLink}</span> &#8599;</p>
                            </>
                        )}
                        
                    </div>
                </div>
                
                <div className="section_bg hidden lg:block">
                    <div
                    className="section_bg_card relative group cursor-pointer"
                    onClick={() =>
                        experience.company !== "Be Lounge" && window.open(experience.link, "_blank")
                    }
                    >
                    {/* Image */}
                    <div className="section_bg_card_content">
                        <Image
                        src={experience.images[0]}
                        alt=""
                        className="section_bg_card_image"
                        />
                    </div>

                    {/* Overlay + Texte uniquement si company !== "Be Lounge" */}
                    {experience.company !== "Be Lounge" && (
                        <>
                        {/* Overlay noir semi-transparent */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>

                        {/* Texte centré */}
                        <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                            {experience.nameLink} &#8599;
                        </span>
                        </>
                    )}
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
