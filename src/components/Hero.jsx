import React from "react";
import GithubIcon from "../assets/icons/github-icon.png";
import LinkedinIcon from "../assets/icons/linkedin-icon.png";
import XIcon from "../assets/icons/x-icon.png";
import DirectDonwloadIcon from "../assets/icons/direct-download.png";
import HeroImage from "../assets/images/hero-image.png";
import CV from "../assets/files/CV of Prashant Man Gayak.pdf";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20 ">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <div>
          <div className="flex gap-5 mb-6 mt-12 md:mt-0">
            <a
              href="https://www.linkedin.com/in/prashant-gayak-927a67195/"
              style={{ width: "30px", background: "transparent" }}
              target="_blank"
              rel="noopener noreferrer"
              className="bw-on-hover"
            >
              <img src={LinkedinIcon} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/prashantmgk/"
              style={{ width: "30px", background: "transparent" }}
              target="_blank"
              rel="noopener noreferrer"
              className="bw-on-hover"
            >
              <img src={GithubIcon} alt="Github" />
            </a>
            <a
              href="https://x.com/prashantmgk/"
              style={{ width: "30px", background: "transparent" }}
              target="_blank"
              rel="noopener noreferrer"
              className="bw-on-hover"
            >
              <img src={XIcon} alt="Twitter" className="rounded-md" />
            </a>
          </div>
          <h1 class="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start">
            <span class="relative ">Prashant Man Gayak,</span>
            <span class="whitespace-nowrap relative ">
              <span class=" relative whitespace-nowrap">
                <span class="absolute bg-neutral-content -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
                <span class="relative text-neutral text-opacity-0 bg-transparent">
                  Web
                </span>
              </span>
              <span class="mr-3 sm:mr-4 md:mr-5 ml-4">developer</span>
            </span>
          </h1>
        </div>
        <p className="text-lg lg:text-xl text-neutral-content my-5 md:my-0">
          I bring websites to life as a web developer. I translate designs into
          user-friendly interfaces. My focus is on creating intuitive web
          experiences.
        </p>
        <div class="space-y-4">
          <a
            href={CV}
            download="CV of Prashant Man Gayak.pdf"
            className="btn btn-primary group btn-wide bw-on-hover my-5 md:my-0"
            title="Download My CV"
          >
            <img
              src={DirectDonwloadIcon}
              alt="Download CV"
              style={{ width: "20px", background: "transparent" }}
            />{" "}
            Download CV
          </a>
          <p class="text-sm md:text-base flex justify-center items-center gap-2 pb-20 md:pb-0">
            <span className="text-muted">
              Reach out to me on{" "}
              <span className="text-accent">social media</span> for quick
              response.
            </span>
          </p>
        </div>
      </div>
      <div className="hidden md:flex flex-col gap-6 items-center justify-center">
        <img src={HeroImage} alt="Hero" />
        {/* <h1 className='text-4xl font-extrabold text-primary'>🚀</h1> */}
      </div>
    </section>
  );
};

export default Hero;
