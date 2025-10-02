import { HiMiniBars3 as Menubar } from "react-icons/hi2"; 
import { IoCloseOutline as Close } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
const [openNav, setOpenNav] = useState(false) 

const toggleNav = () => setOpenNav(!openNav)

    return (
        <div className="p-2 px-4 lg:px-16 md:mt-2">
         
         <div className="flex items-center justify-between">
            <Link to="/"> 
            <img src="/Log.svg" alt="serenity-Logo"  
            className="w-44 md:w-53"
             />
            </Link> 

            <button onClick={toggleNav} className="outline-none md:order-last cursor-pointer lg:hidden">
                {openNav ? <Close size={38}/> :<Menubar size={38}/>}
            </button>

            <div className="hidden lg:flex space-x-7 text-lg">
             <Link to="/about" className="hover:text-[#8d6959] hover:border-b transition delay-200 duration-300">About</Link>
             <Link to="/services" className="hover:text-[#8d6959] hover:border-b transition delay-200 duration-300">Services</Link> 
             <Link to="/blog" className="hover:text-[#8d6959] hover:border-b transition delay-200 duration-300">Blog</Link>
            </div> 

            <Link to="/appointment" className="default-btn">Book an appointment</Link>
         </div> 

         {/* navlinks on sm & md screens  */}
         {openNav?  
         (
         
            <div className="flex flex-col animate-fade-down shadow-lg p-5 lg:hidden mt-7 items-center gap-y-3 text-lg">
            <Link onClick={toggleNav} to="/appointment" className="hover:text-[#8d6959] hover:border-b transition delay-200 duration-300">Book an appointment</Link>
            <Link onClick={toggleNav} to="/" className="hover:text-[#8d6959] hover:border-b transition delay-200 duration-300">Home Page</Link>
            <Link onClick={toggleNav} to="/services" className="hover:text-[#8d6959] hover:border-b transition delay-200 duration-300">Services</Link> 
            <Link onClick={toggleNav} to="/about" className="hover:text-[#8d6959] hover:border-b transition delay-200 duration-300">About</Link>
            <Link onClick={toggleNav} to="/blog" className="hover:text-[#8d6959] hover:border-b transition delay-200 duration-300">Blog</Link>
           
  
            <Link onClick={toggleNav} to="/appointment" className="relative mt-5 hover:scale-95 transition delay-200 duration-500">
             <img src="/navbarImage.avif" className="rounded-xl md:w-1/2  md:mx-auto"/>
             <div className="absolute bottom-8 right-0 left-0 bg-black/20 w-fit mx-auto p-3 px-5 rounded-xl text-white space-y-1">
              <h1 className="text-center font-bold">Need help with counselling?</h1> 
              <h1 className="text-center">Book your free meeting today</h1>
             </div>
            </Link>
            </div>
         ) 
         : 
         null
         }

        </div>
    )
}

export default Navbar