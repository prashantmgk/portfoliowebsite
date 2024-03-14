import React from 'react'
import ResponsiveCarousel from './ResponsiveCarousel'
import { Grid } from '@mui/material';

export const data = [
   {
      cover: "https://images6.alphacoders.com/679/thumb-1920-679459.jpg",
      title: "Interstaller",
   },
   {
      cover: "https://images2.alphacoders.com/851/thumb-1920-85182.jpg",
      title: "Inception",
   },
   {
      cover: "https://images6.alphacoders.com/875/thumb-1920-875570.jpg",
      title: "Blade Runner 2049",
   },
   {
      cover: "https://images6.alphacoders.com/114/thumb-1920-1141749.jpg",
      title: "Icon man 3",
   },
   {
      cover: "https://images3.alphacoders.com/948/thumb-1920-948864.jpg",
      title: "Venom",
   },
   {
      cover: "https://images2.alphacoders.com/631/thumb-1920-631095.jpg",
      title: "Steins Gate",
   },
   {
      cover: "https://images4.alphacoders.com/665/thumb-1920-665242.png",
      title: "One Punch Man",
   },
   {
      cover: "https://images2.alphacoders.com/738/thumb-1920-738176.png",
      title: "A Silent Voice",
   },
   {
      cover: "https://images8.alphacoders.com/100/thumb-1920-1005531.jpg",
      title: "Demon Slayer",
   },
   {
      cover: "https://images2.alphacoders.com/582/thumb-1920-582804.png",
      title: "Attack On Titan",
   },
];

const Projects = () => {
  return (
   <section id='projects'>
      <div className='max-w-7xl mx-auto px-8 py-24 lg:py-20'>
         <h2 className='text-accent bg-transparent pb-12 text-start ml-18'>Projects</h2>
         <h3 class="font-bold text-3xl lg:text-5xl tracking-tight mb-20 text-start ml-18 ">Some of My Projects 💻</h3>
         <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} lg={6}>
               <ResponsiveCarousel data={data} />
               <h3 className='font-normal text-3xl lg:text-2xl -tracking-normal my-6 max-w-2xl mx-6 text-start text-accent'>
               [ Web Developer ] 
               </h3>
            </Grid>
            <Grid item xs={12} lg={6}>
               <ResponsiveCarousel data={data} />
               <h3 className='font-normal text-3xl lg:text-2xl -tracking-normal my-6 max-w-2xl mx-6 text-start text-accent'>
               [ Web Developer ] 
               </h3>
            </Grid>
         </Grid>

      </div>
   </section>
   )
}

export default Projects