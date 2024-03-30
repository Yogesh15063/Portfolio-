import React from 'react';
import { motion } from 'framer-motion';

export const ServicesSection = ({ services }) => {
  const filteredServices = services && services.filter((service) => service.enabled);

  return (
    <>
      <section className="py-16 font-poppins">
        <div className="container p-2 mx-auto">
          <h2 className="text-3xl text-white font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices &&
              filteredServices.map((service) => (
                <motion.div
                  key={service.id} 
                  className=" text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <div className="flex items-center justify-start mb-4">
                    <motion.img
                      src={service.image.url} // Replace with actual image URL
                      alt={service.name}
                      className="w-12 h-12 mr-2 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, transition: { duration: 0.5 } }}
                    />
                    <motion.h3
                      className="text-xl font-semibold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 0.2 } }}
                    >
                      {service.name}
                    </motion.h3>
                  </div>
                  <motion.p
                    className="text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.4 } }}
                  >
                    {service.desc}
                  </motion.p>
                  <motion.p
                    className="mt-4 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.6 } }}
                  >
                    Charges: ${service.charge}
                  </motion.p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
      <div className="w-full h-px bg-white"></div>
    </>
  );
};

export default ServicesSection;
