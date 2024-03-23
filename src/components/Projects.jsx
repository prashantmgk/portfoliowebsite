import React from 'react'
import ResponsiveCarousel from './ResponsiveCarousel'
import { Grid } from '@mui/material';
import { FaLongArrowAltRight } from "react-icons/fa";

import { BsUnity } from "react-icons/bs";
import { TbBrandCSharp } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

import RealCarParking0 from '../assets/images/real-car-parking/real-car-parking-0.webp';
import RealCarParking1 from '../assets/images/real-car-parking/real-car-parking-1.webp';
import RealCarParking2 from '../assets/images/real-car-parking/real-car-parking-2.webp';
import RealCarParking3 from '../assets/images/real-car-parking/real-car-parking-3.webp';

import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiApollographql } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiChartdotjs } from "react-icons/si";

import HS0 from '../assets/images/hysab-soch/hs0.png';
import HS1 from '../assets/images/hysab-soch/hs1.png';
import HS2 from '../assets/images/hysab-soch/hs2.png';
import HS3 from '../assets/images/hysab-soch/hs3.png';


import DB0 from '../assets/images/diabetes-prediction/db0.png';
import DB1 from '../assets/images/diabetes-prediction/db1.png';
import DB2 from '../assets/images/diabetes-prediction/db2.png';

import TSOP0 from '../assets/images/ticket-sewa-organizer-panel/tsop0.png';
import TSOP1 from '../assets/images/ticket-sewa-organizer-panel/tsop1.png';
import TSOP2 from '../assets/images/ticket-sewa-organizer-panel/tsop2.png';
import TSOP3 from '../assets/images/ticket-sewa-organizer-panel/tsop3.png';
import TSOP4 from '../assets/images/ticket-sewa-organizer-panel/tsop4.png';
import TSOP5 from '../assets/images/ticket-sewa-organizer-panel/tsop5.png';
import TSOP6 from '../assets/images/ticket-sewa-organizer-panel/tsop6.png';


const projectData = [
   {
      title: "Real Car Parking 🚦",
      description: "Real Car Parking is a simple and minimal car parking mobile game with easy-to-use controls. I was very fortunate to be a part of a great dev team at Yarsa Games. I was responsible for building the base prototype and level design. The game was built using Unity and C#. The game has been downloaded over 50K times on the Google Play Store.",
      techStackIcons: [
         <TbBrandCSharp size={28} />,
         <BsUnity size={22} />,
         <FaGithub size={22} />,
      ],
      images: [

         {
            cover: RealCarParking0,
            title: "Real Car Parking 0",
         },
         {
            cover: RealCarParking1,
            title: "Real Car Parking 1",
         },
         {
            cover: RealCarParking2,
            title: "Real Car Parking 2",
         },
         {
            cover: RealCarParking3,
            title: "Real Car Parking 3",
         },
      ],
      link: "https://play.google.com/store/apps/details?id=io.yarsa.games.carparking&hl=en&gl=US"
   },

   {
      title: "Ticket Sewa Organizer Panel 🎫",
      description: "Ticket Sewa Organizer Panel is one of my most recent projects. It is a web portal for event organizers to manage their events. This project was made for Ticket Sewa, an up an coming ticketing platform startup in Nepal. I was responsible for the web development and UI/UX design for the organizer panel and the mobile app. This project really help me expand my knowledge as a frontend developer in both design and development point of view.",
      techStackIcons: [
         <FaReact size={22} />,
         <SiTailwindcss size={22} />,
         <SiMui size={22} />,
         <TbBrandRedux size={22} />,
         <SiChartdotjs size={22} />,
      ],

      images: [
         {
            cover: TSOP0,
            title: "Ticket Sewa Organizer Panel 0",
         },
         {
            cover: TSOP1,
            title: "Ticket Sewa Organizer Panel 1",
         },
         {
            cover: TSOP2,
            title: "Ticket Sewa Organizer Panel 2",
         },
         {
            cover: TSOP3,
            title: "Ticket Sewa Organizer Panel 3",
         },
         {
            cover: TSOP4,
            title: "Ticket Sewa Organizer Panel 4",
         },
         {
            cover: TSOP5,
            title: "Ticket Sewa Organizer Panel 5",
         },
         {
            cover: TSOP6,
            title: "Ticket Sewa Organizer Panel 6",
         },
      ],
      link: "https://organizer.ticketsewa.com.np/"
   },

   {
      title: "Hysab Soch 📊",
      description: "Ticket Sewa Organizer Panel is one of my most recent projects. It is a web portal for event organizers to manage their events. This project was for Ticket Sewa, an upcoming ticketing platform startup in Nepal. I was responsible for the web development and UI/UX design for the organizer panel and the mobile app. This project really helped me expand my knowledge as a frontend developer in both design and development points of view.",
      techStackIcons: [
         <FaReact size={22} />,
         <SiMui size={22} />,
         <SiApollographql size={22} />,
         <GrGraphQl size={22} />,
         <FaNodeJs size={22} />,
         <SiMongodb size={22} />,
      ],

      images: [
         {
            cover: HS0,
            title: "Hysab Soch 0",
         },
         {
            cover: HS1,
            title: "Hysab Soch 1",
         },
         {
            cover: HS2,
            title: "Hysab Soch 2",
         },
         {
            cover: HS3,
            title: "Hysab Soch 3",
         }
      ],
      link: "https://github.com/prashantmgk/bookkeepingwish_client/"
   },

   {
      title: "Diabetes Prediction App 🩺",
      description: "The Diabetes Prediction application was my university project. We were assigned to use AI and Machine Learning to solve a real-world problem. So, I used the a publicly available dataset from Kaggle to train the model. The frontend was built using React and Tailwind CSS, and the backend was built using Django. The model was trained using the Scikit-learn library. The project is open-source and available on GitHub.",
      techStackIcons: [
         <FaReact size={22} />,
         <SiTailwindcss size={22} />,
         <SiDjango size={22} />,
         <SiScikitlearn size={22} />,
         <FaGithub size={22} />,
      ],

      images: [
         {
            cover: DB0,
            title: "Diabetes Prediction App 0",
         },
         {
            cover: DB1,
            title: "Diabetes Prediction App 1",
         },
         {
            cover: DB2,
            title: "Diabetes Prediction App 2",
         },
      ],
      link: "https://github.com/prashantmgk/diabetes_prediction_frontend/"
   },
];


const Projects = () => {
  return (
   <section id='projects'>
      <div className='max-w-7xl mx-auto px-8 py-24 lg:py-20'>
         <h2 className='text-accent bg-transparent pb-12 text-start ml-18'>Projects</h2>
         <h3 class="font-bold text-3xl lg:text-5xl tracking-tight mb-20 text-start ml-18 ">Some of My Projects 💻</h3>

         {/* 
         {eventData.event_description.length > 120
         ? eventData.event_description.slice(0, 200) + "..."
         : eventData.event_description}

         */}

         <Grid container columnSpacing={6} rowSpacing={14} justifyContent="start">

            {projectData.map((project, index) => {
               return (
                  <Grid item xs={12} lg={6} key={index}>
                     <ResponsiveCarousel data={project.images} />
                     <div className=' mx-7'>
                        <h3 className='font-normal text-3xl lg:text-2xl -tracking-normal my-6 max-w-2xl text-start text-accent'>
                           [ {project.title}]
                        </h3>
                        <p className=' leading-7 text-muted tracking-wide text-start'>
                           {project.description}
                        </p>
                        <div className='flex justify-between mt-6'>
                           <span className='hoverGroup cursor-pointer '>
                              <a href={project.link} target='_blank' className='inline-block text-lg hover:text-accent hover:underline' rel="noreferrer">
                                 Learn More 
                              </a>
                              <FaLongArrowAltRight className='inline-block ml-2 arrowIcon hover:text-accent' />
                           </span>
                           <span class="whitespace-nowrap relative mr-4"><span class="absolute bg-[#212121] -left-3 -top-1 -bottom-0 -right-2 -rotate-2"></span>
                              <span class="relative">
                                 <div className='flex justify-normal gap-4'>
                                    {project.techStackIcons}
                                 </div>
                              </span>
                           </span>
                        </div>   
                     </div>
                  </Grid>
               )
            })}
            
         </Grid>
      </div>
   </section>
   )
}

export default Projects