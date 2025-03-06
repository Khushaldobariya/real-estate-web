// import React from 'react'
// import { useState } from 'react';
// import { Menu } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { twMerge } from 'tailwind-merge'

// interface Props {
//   className?: string;
// }


// const Navbar = ({className}:Props) => {
//     const [isOpen, setIsOpen] = useState(false);
//   return (
//     <nav className={twMerge(`bg-transparent p-4 `, className)}>
//     <div className="container mx-auto flex items-center justify-between">
//       {/* Logo */}
//       <div className="text-xl font-bold italic">
//       <img src={className ? "/assets/images/footerLogo.png" : "/assets/images/logo.png"} alt="Logo" />
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex space-x-6 text-lg font-medium">
//         <li>
//           <Link to="/" className="hover:text-pink-400 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white">HOME</Link>
//         </li>
//         <li>
//           <Link to="/commercial" className="hover:text-pink-400 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white">COMMERCIAL</Link>
//         </li>
//         <li>
//           <Link to="/residential" className="hover:text-pink-400 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white">RESIDENTIAL</Link>
//         </li>
//         <li>
//           <Link to="/contact" className="hover:text-pink-400 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white">CONTACT US</Link>
//         </li>
//       </ul>

//       {/* Mobile Menu Button */}
//       <button
//         className="md:hidden text-white focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <Menu size={28} />
//       </button>
//     </div>

//     {/* Mobile Menu */}
//     {isOpen && (
//       <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 text-lg font-medium bg-white/10 p-4 rounded-md">
//         <li>
//           <Link to="/" className="hover:text-pink-400 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white" onClick={() => setIsOpen(false)}>HOME</Link>
//         </li>
//         <li>
//           <Link to="/commercial" className="hover:text-pink-400 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white " onClick={() => setIsOpen(false)}>COMMERCIAL</Link>
//         </li>
//         <li>
//           <Link to="/residential" className="hover:text-pink-400 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white" onClick={() => setIsOpen(false)}>RESIDENTIAL</Link>
//         </li>
//         <li>
//           <Link to="/contact" className="hover:text-pink-400 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white" onClick={() => setIsOpen(false)}>CONTACT US</Link>
//         </li>
//       </ul>
//     )}
//   </nav>

//   )
// }

// export default Navbar
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
}

const Navbar = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={twMerge(`bg-transparent p-4`, className)}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold italic">
          <img
            src={className ? "/assets/images/footerLogo.png" : "/assets/images/logo.png"}
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          {['HOME', 'COMMERCIAL', 'RESIDENTIAL', 'CONTACT US'].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase().replace(' ', '')}`}
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white 
                           transition-transform ease-in-out duration-300 transform hover:scale-110 
                           hover:from-white hover:to-pink-400"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 text-lg font-medium bg-white/10 p-4 rounded-md">
          {['HOME', 'COMMERCIAL', 'RESIDENTIAL', 'CONTACT US'].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase().replace(' ', '')}`}
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white 
                           transition-transform duration-300 transform hover:scale-110 
                           hover:from-white hover:to-pink-400"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
