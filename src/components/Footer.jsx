import React from 'react'

const Footer = () => {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="bg-[#1a1a1a] text-white p-4 border-t border-[#cfcfcf1a]">
         <div className="container text-center max-w-none">
            <p className="my-4">Copyright © {currentYear} <a href="https://prashantmangayak.com.np" className="text-accent">Prashant M. Gayak</a> &nbsp;|&nbsp; All rights reserved.</p>
         </div>
      </footer>
   );
}

export default Footer