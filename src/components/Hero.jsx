import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = ({ developerImage, developerName, developerTitle, developerSubtitle }) => {
  return (
    <>
    <div className="hero min-h-screen mt-4 flex items-center justify-center p-10">
      <div className="container mx-auto md:max-w-3xl flex flex-col md:flex-row items-center justify-between">
        {/* Text content */}
        <motion.div
          className="text-white text-center md:text-left mb-6 md:mb-0 font-poppins" // Applied custom font styles using @apply
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center mb-4 tracking-tighter">
            <h1 className="text-6xl font-bold mr-2">
              {developerName}<span className="text-green-400">.</span>
            </h1>
          </div>
          <h2 className="text-4xl mt-3 mb-4">{developerTitle}</h2>
          <p className="mb-4">{developerSubtitle}</p>
        </motion.div>

        {/* Image */}
        <motion.img
          src={developerImage}
          alt="Developer"
          className="w-22 md:w-80 lg:w-90 rounded-full shadow-xl my-12" // Adjusted margin top and bottom (my-12)
          initial={{ x: 100, opacity: 0, scale: 0.5, rotate: 10 }} // Initial position off-screen to the right with scaled down and rotated
          animate={{ x: 0, opacity: 1, scale: 1, rotate: 0 }} // Animate to final position with full opacity, normal scale, and no rotation
          transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }} // Adjust duration, delay, and ease as needed
          whileHover={{ scale: 1.1, rotate: 10 }} // Faster hover animation
          whileTap={{ scale: 0.9 }} // Scale down slightly on tap
          exit={{ opacity: 0, x: 100 }} // Faster exit animation
        />
      </div>
      
    </div>
    <div className='w-full h-px bg-white'></div>
    </>
  );
};



















