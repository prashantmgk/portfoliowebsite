import React from 'react'

const About = () => {
return (
      <section id='about' className='bg-darkerBg'>
          <div className='max-w-7xl mx-auto px-8 py-24 lg:py-20'>
               <h2 className='text-accent bg-transparent pb-12'>About Me</h2>
               <h2 class="font-bold text-3xl lg:text-5xl tracking-tight mb-20 max-w-2xl mx-auto">A Brief Introduction of Me :)</h2>
               <div className='flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start'>
                  <img src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp" alt="" className='rounded-8' style={{width: '40%', height: 'auto', borderRadius: '10px', marginLeft:'20px'}}/>
                  <div> 
                     <h3 className='font-bold text-3xl lg:text-2xl -tracking-normal mb-5 max-w-2xl mx-auto text-start text-accent'>
                        Web Developer <br />
                        based in Pokhara, Nepal 📍
                     </h3>
                     <p className='text-start leading-7 text-muted tracking-wide pr-8'>
                     <span className='bg-indigo-800'>Hey, I'm Prashant </span>👋. I am a web developer with . I am a self-taught developer and have been working in the industry for over 3 years. I am currently looking for new opportunities and would love to work with a team of passionate developers. Feel free to reach out to me if you have any questions or would like to work together. I am always open to new opportunities and would love to hear from you. 😊

                     </p>
                  </div>
               </div>
          </div>
      </section>
)
}

export default About