import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="bg-[#212121] text-white p-4 border-t border-[#cfcfcf1a]">
         <div className="container flex justify-evenly text-center">
            <p className="my-4">Copyright © {currentYear} <a href="https://prashantmangayak.com.np" className="text-accent">Prashant M. Gayak</a> &nbsp;|&nbsp; All rights reserved.</p>
            <div className="flex gap-6 items-center">
               <a href="https://www.facebook.com/prashant.mangayak" className="hover:text-accent">
                  <FaFacebookF />
               </a>
               <a href="https://twitter.com/PrashantMangay1" className="hover:text-accent">
                  <FaXTwitter />
               </a>
               <a href="https://www.linkedin.com/in/prashant-mangayak-7b5a3a1b3/" className="hover:text-accent">
                  <FaLinkedinIn />
               </a>
            </div>
         </div>
      </footer>
   );
}

export default Footer