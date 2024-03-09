import React from 'react'

const Navbar = () => {
   return (
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center">
         <div className="text-2xl mr-28 ">
            <a href="/" className='gradient-header font-extrabold'>pmg.dev</a>
         </div>
         <div className="flex space-x-12">
            <a href="/about" >About</a>
            <a href="/projects" >Projects</a>
            <a href="/contact" >Contact</a>
         </div>
      </nav>
   )
}

export default Navbar