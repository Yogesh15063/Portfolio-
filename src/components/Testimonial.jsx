import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials?.length || 1)); // Ensure at least 1 testimonial
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials]);

  const enabledTestimonials = testimonials && testimonials.filter((testimonial) => testimonial.enabled);

  return (
    <>
    <div className="w-96 mx-auto m-4 font-poppins p-3 mb-8">
    <div className='flex justify-center'> <h2 className="text-3xl font-bold text-white mb-4 font-poppins">Testimonials</h2></div> 
      <AnimatePresence initial={false} mode="wait">
        {enabledTestimonials && enabledTestimonials.length > 0 && (
          <motion.div
            key={enabledTestimonials[currentIndex].id}
            className="testimonial-card p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }} // Adjust ease for smoother transition
          >
            <div className="flex items-center bg-gray-800 rounded p-3 justify-between mb-4">
              <img
                src={enabledTestimonials[currentIndex].image && enabledTestimonials[currentIndex].image.url}
                alt={enabledTestimonials[currentIndex].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="text-white">
                <h4 className="text-lg font-semibold">{enabledTestimonials[currentIndex].name}</h4>
                <p className="text-white">{enabledTestimonials[currentIndex].position}</p>
              </div>
            </div>
            <p className="text-white">{enabledTestimonials[currentIndex].review}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    <div className='w-full h-px bg-white'></div>
    </>
  );
};

export default TestimonialSlider;
