import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { title, description, image, techStack, githuburl, liveurl } = project;

  return (
    <motion.div
      className="max-w-sm mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-lg p-4 mb-4 font-poppins"
      whileHover={{ scale: 1.05 }}
    >
      <img className="w-full rounded-xl" src={image.url} alt={title} />
      <div className="text-center mt-2">
        <h2 className="text-lg font-semibold mb-1 text-white">{title}</h2>
        <p className="text-gray-300 text-sm mb-2">{description}</p>
        <div className="flex justify-center mb-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full mr-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          {githuburl && (
            <a
              href={githuburl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 border-b border-transparent hover:border-gray-200 transition duration-300"
            >
              GitHub
            </a>
          )}
          {liveurl && (
            <a
              href={liveurl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 border-b border-transparent hover:border-gray-200 transition duration-300"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
