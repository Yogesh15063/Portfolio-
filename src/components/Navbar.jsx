import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-black z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            to="HeroSection" // Updated to match the id of the section
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-3xl font-bold text-white hover:text-gray-200 transition duration-300 cursor-pointer font-poppins"
            onClick={closeMenu} // Close menu on link click
          >
            Hire Me.
          </Link>
        </motion.div>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={variants}
              whileHover={{ scale: 1.1, color: '#f9fafb' }}
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-lg font-semibold text-white hover:text-gray-200 transition duration-300 cursor-pointer font-poppins"
                onClick={closeMenu} // Close menu on link click
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-200 hover:text-gray-300 focus:outline-none focus:text-gray-300" aria-label="toggle menu">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path fillRule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={variants}
              whileHover={{ scale: 1.1, color: '#f9fafb' }}
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block px-4 py-2 text-lg font-semibold text-white hover:text-gray-200 transition duration-300 cursor-pointer font-poppins"
                onClick={closeMenu} // Close menu on link click
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

export default Navbar;
