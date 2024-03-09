import React from 'react'
import SendMessage from '../assets/icons/send-message.png'
import HeroImage from '../assets/icons/hero-image.webp'

const Hero = () => {
  return (
    <section className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20'>
      <div className='flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start'>
      <h1 class="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start"><span class="relative ">Prashant Man Gayak,</span><span class="whitespace-nowrap relative "><span class=" relative whitespace-nowrap"><span class="absolute bg-neutral-content -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span><span class="relative text-neutral text-opacity-0 bg-transparent">Front End</span></span><span class="mr-3 sm:mr-4 md:mr-5 ml-4">developer</span></span></h1>
        <p className='text-lg lg:text-xl text-neutral-content'>I bring websites to life as a front-end developer. I translate designs into user-friendly interfaces. My focus is on creating intuitive web experiences.</p>
        <button className="btn btn-primary group btn-wide" title="Send Me Message"><img src={SendMessage} alt="Send Message" style={{ width: '22px', background: 'transparent' }} /> Send Mail</button>
      </div>
      <div className='flex flex-col gap-6 items-center justify-center'>
        <img src={HeroImage} alt='Hero'/>
        {/* <h1 className='text-4xl font-extrabold text-primary'>🚀</h1> */}
      </div>
    </section>
  )
}

export default Hero