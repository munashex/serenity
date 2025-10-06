import { HiMiniBars3 as Menubar } from "react-icons/hi2"; 
import { IoCloseOutline as Close } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => setOpenNav(!openNav);

  return (
    <div className="p-2 px-4 lg:px-16 md:mt-2">
      <div
        className={`flex items-center justify-between ${
          openNav
            ? "shadow-sm rounded-xl animate-fade-down shadow-[#8d6959] px-2 py-3"
            : ""
        }`}
      >
        <Link to="/">
          <img
            src="/Log.svg"
            alt="serenity-Logo"
            className="w-44 md:w-53"
          />
        </Link>

        <button
          onClick={toggleNav}
          className="outline-none md:order-last cursor-pointer lg:hidden"
        >
          {openNav ? <Close size={38} /> : <Menubar size={38} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-7 text-lg">
          <Link
            to="/"
            className="relative text-[#5c453a] hover:text-[#8d6959] transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[#8d6959] hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="relative text-[#5c453a] hover:text-[#8d6959] transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[#8d6959] hover:after:w-full after:transition-all after:duration-300"
          >
            Services
          </Link>
          <Link
            to="/blog"
            className="relative text-[#5c453a] hover:text-[#8d6959] transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[#8d6959] hover:after:w-full after:transition-all after:duration-300"
          >
            Blog
          </Link>
        </div>

        <a href="mailto:munashemugondaa@gamil.com"  className="hidden lg:flex default-btn">
          Book an appointment
        </a>
      </div>

      {/* Mobile Nav */}
      {openNav ? (
        <div className="flex flex-col min-h-screen animate-fade-down shadow-lg shadow-[#8d6959] p-5 lg:hidden mt-7 items-center gap-y-3 text-lg">
          <a
           href="mailto:munashemugondaa@gamil.com"
            className="relative text-[#5c453a] hover:text-[#8d6959] transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[#8d6959] hover:after:w-full after:transition-all after:duration-300"
          >
            Book an appointment
          </a>
          <Link
            onClick={toggleNav}
            to="/"
            className="relative text-[#5c453a] hover:text-[#8d6959] transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[#8d6959] hover:after:w-full after:transition-all after:duration-300"
          >
            Home Page
          </Link>
          <Link
            onClick={toggleNav}
            to="/services"
            className="relative text-[#5c453a] hover:text-[#8d6959] transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[#8d6959] hover:after:w-full after:transition-all after:duration-300"
          >
            Services
          </Link>
          <Link
            onClick={toggleNav}
            to="/blog"
            className="relative text-[#5c453a] hover:text-[#8d6959] transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[#8d6959] hover:after:w-full after:transition-all after:duration-300"
          >
            Blog
          </Link>

          <a
            href="mailto:munashemugondaa@gamil.com"
            className="relative mt-5 hover:scale-95 transition delay-200 duration-500"
          >
            <img
              src="/navbarImage.avif"
              className="rounded-xl md:w-1/2 md:mx-auto"
            />
            <div className="absolute bottom-8 right-0 left-0 bg-black/20 w-fit mx-auto p-3 px-5 rounded-xl text-white space-y-1">
              <h1 className="text-center font-bold">
                Need help with counselling?
              </h1>
              <h1 className="text-center">Book your free meeting today</h1>
            </div>
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
