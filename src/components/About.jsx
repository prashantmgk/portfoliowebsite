import React from "react";
import profileMini from "../assets/images/profile_mini.jpeg";

const About = () => {
  return (
    <section id="about" className="bg-[#212121]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 lg:py-20">
        <h2 className="text-accent bg-transparent pb-12">About Me</h2>
        <h3 class="font-bold text-2xl lg:text-5xl tracking-tight mb-10 md:mb-20 max-w-2xl mx-auto">
          A Brief Introduction of Me :)
        </h3>
        {/* <div className='flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start'>
               <img src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp" alt="" className='rounded-8' style={{width: '40%', height: 'auto', borderRadius: '10px', marginLeft:'20px'}}/>
               <div>  */}

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
          <img
            src={profileMini}
            alt=""
            className="rounded-8 w-11/12 md:w-5/12 ml-0 md:ml-5"
            style={{ height: "auto", borderRadius: "10px" }}
          />
          <div>
            <h3 className="font-bold text-2xl -tracking-normal mb-5 max-w-2xl mx-auto text-center md:text-start text-accent">
              Web Developer <br />
              based in Pokhara, Nepal 📍
            </h3>
            <p className="text-pretty md:text-start leading-7 text-muted tracking-wide md:pr-8">
              <span className="bg-indigo-800">Hey, I'm Prashant </span>👋. I am
              a web developer w/ 2 years of industry experience and a bachelor's
              degree in IT & Software Engineering. I am a self-taught developer
              for the most part and started off making video games. I am
              currently looking for new opportunities and would love to work
              with a team of passionate developers. Feel free to reach out to me
              if you have any questions or would like to work together. <br /> I
              would love to hear from you. 😊
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
