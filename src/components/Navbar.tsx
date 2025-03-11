

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { NavLinks } from "../utils/consents.ts";

interface Props {
  isHome: boolean;
}

const Navbar = ({ isHome }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const [dropdown, setDropdown] = useState<null | number>(null);
  const [mobileDropdown, setMobileDropdown] = useState<null | number>(null);

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  const scrollHeader = () => {
    setHeader(window.scrollY >= 20);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 px-5 py-3 transition-all duration-300 z-10 ${
        header ? "bg-black/40 shadow-lg" : "bg-transparent"
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
            loading="eager"
          />
        </motion.div>

        {/* Desktop Navigation (UNCHANGED) */}
        <ul className="hidden md:flex space-x-6 text-xl font-medium">
          {NavLinks.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => setDropdown(index)}
              onMouseLeave={() => setDropdown(null)}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={item.path || "#"}
                  className={` capitalize ${
                    !item.subLink
                      ? "text-black hover:text-pink-400"
                      : "text-black"
                  } ${
                    !header
                      ? "text-black"
                      : "hover:text-pink-400 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white"
                  }  hover:underline ease-in-out transition-all delay-200`}
                >
                  {item.title}
                </Link>
              </motion.div>

              {/* Dropdown */}
              {item.subLink && (
                <AnimatePresence>
                  {dropdown === index && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2"
                    >
                      {item.subLink.map((sub, subIndex) => (
                        <motion.li
                          key={subIndex}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            to={sub.path}
                            className="block px-4 py-2 text-black hover:text-pink-400 hover:bg-gray-100 rounded-md"
                          >
                            {sub.title}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden flex flex-col items-center space-y-4 mt-4 text-lg font-medium bg-white p-4 rounded-md shadow-lg"
          >
            {NavLinks.map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <div className="w-full flex flex-col items-center">
                  <button
                    className="text-black w-full text-left py-2"
                    onClick={() => {
                      if (item.subLink) {
                        setMobileDropdown(mobileDropdown === index ? null : index);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    {item.title}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.subLink && mobileDropdown === index && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="w-full bg-gray-100 rounded-md shadow-md p-2"
                    >
                      {item.subLink.map((sub, subIndex) => (
                        <motion.li key={subIndex} whileHover={{ scale: 1.05 }}>
                          <Link
                            to={sub.path}
                            className="block px-4 py-2 text-black hover:text-pink-400 hover:bg-gray-200 rounded-md"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.title}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

