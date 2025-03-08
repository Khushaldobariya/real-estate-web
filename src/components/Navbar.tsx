
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Props{
  isHome: boolean;
}

const Navbar = ({isHome}:Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  return (

    <motion.nav
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className={`fixed w-full top-0 px-5 py-3 transition-all duration-300 z-10 ${
      header ? "bg-white shadow-lg" : "bg-transparent"
    }`}
  >
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo */}
      <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  className="text-xl font-bold italic"
>
  <img
    src={
      isHome
        ? header
          ? "/assets/images/footerLogo.png"
          : "/assets/images/logo.png"
        : "/assets/images/footerLogo.png"
    }
    alt="Logo"
    className="w-auto h-auto"
    loading="eager" // Ensures faster loading
  />
</motion.div>


      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-lg font-medium">
        {["HOME", "COMMERCIAL","ABOUT",  "RESIDENTIAL", "CONTACT US"].map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={`/${item.toLowerCase().replace(" ", "")}`}
              className="text-black hover:underline ease-in-out transition-all delay-200"
            >
              {item}
            </Link> 
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={28} />
      </button>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="md:hidden flex flex-col items-center space-y-4 mt-4 text-lg font-medium bg-white p-4 rounded-md shadow-lg"
      >
        {["HOME", "COMMERCIAL", "RESIDENTIAL", "CONTACT US"].map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={`/${item.toLowerCase().replace(" ", "")}`}
              className="text-black"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    )}
  </motion.nav>
  );
};

export default Navbar;
