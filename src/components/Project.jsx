import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export const Projects = ({id, projectData }) => {
  // Check if projectData is undefined or null
  if (!projectData) {
    return <div>No projects data available</div>;
  }

  // Sort projectData array based on the sequence property in ascending order
  const sortedProjects = projectData.sort((a, b) => a.sequence - b.sequence);

  // State to track the index of the currently visible card
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Function to handle card click and rotate cards
  const handleClick = () => {
    setCurrentCardIndex((currentCardIndex + 1) % sortedProjects.length);
  };

  return (
    <div  id={id}>
    <motion.section
      className="container mx-auto px-6 py-12 overflow-x-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
     
    >
      <h2 className="text-3xl text-white font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 justify-items-center">
        {sortedProjects.map((project, index) => (
          <motion.div
            key={project._id}
            className="relative"
            onClick={handleClick}
            style={{ display: index === currentCardIndex ? 'block' : 'none' }}
            animate={{
              rotateY: index === currentCardIndex ? 0 : 180,
              transition: { duration: 0.5 },
            }}
          >
            <div className="font-poppins"> {/* Apply Poppins font */}
              <ProjectCard project={project} />
            </div>
          </motion.div>
        ))}
        <span className="text-white">CLICK TO SEE MORE</span>
      </div>
    </motion.section>
    <div className='w-full h-px bg-white'></div>
    </div>
  );
};

export default Projects;
