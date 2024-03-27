import React, {useState} from 'react'
const menuItem = [
   {
     id: 1,
     name: 'About',
     link: '#about',
     page: true,
     route: true,
   },
   {
     id: 2,
     name: 'Projects',
     link: '#projects',
   },
   {
     id: 3,
     name: 'Contact',
     link: '#contact',
   },

 ]

const Navbar = () => {
   const [currentlySelected, setCurrentlySelected] = useState(0)

   const handleSelect = (selected) => {
      setCurrentlySelected(selected)
   }


   return (
      <nav className="max-w-74xl mx-auto px-8 py-6 flex justify-between items-center">
         <div className="text-2xl mr-28 ">
            <a href="/" className='gradient-header font-extrabold'>pmg.dev</a>
         </div>
         <div className="hidden md:flex space-x-12 mr-12">
            {menuItem.map((item) => (
               <a href={item.link} className={`hover:text-accent ${currentlySelected === item.id ? 'text-accent':''}`} onClick={
                  () => handleSelect(item.id)
               }>{item.name}</a>
            ))}
         </div>
      </nav>
   )
}

export default Navbar