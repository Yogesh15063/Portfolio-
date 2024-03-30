import React from 'react';
import { motion } from 'framer-motion';

const SkillItem = ({ skill }) => {
  const { name, percentage, enabled } = skill;

  // Check if the skill is enabled
  if (!enabled) {
    return null;
  }

  return (
    <div className="mb-4">
      <div className='flex justify-between'>
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <span className="ml-2 text-white">{percentage}%</span>
      </div>
      <div className="relative h-2 bg-gray-900 rounded">
        <motion.div
          className="absolute top-0 left-0 h-2 bg-white rounded "
          style={{ width: `${percentage}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export const SkillsSection = ({ id, skills }) => {
  // Check if skills is not an array or undefined
  if (!Array.isArray(skills)) {
    return null;
  }

  return (
    <>
      <h2 id={id} className="text-3xl text-white mt-5 font-bold mb-4 text-center">Skills</h2>
      <motion.section
        className="py-20 flex items-center justify-center flex-wrap" // Added flex-col class for column layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-90 h-90 rounded bg-gray-900 flex justify-center items-center relative overflow-hidden">
              {skills.map((skill, index) => (
                <motion.img
                  key={index}
                  src={skill.image.url}
                  alt={skill.name}
                  className="absolute"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: 20 + Math.random() * 40,
                    height: 20 + Math.random() * 40,
                  }}
                  animate={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
              ))}
            </div>
            <div className="text-white col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6"> {/* Changed grid-cols based on screen size */}
                {skills.map(skill => (
                  <SkillItem key={skill._id} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <div className='w-full h-px bg-white'></div>
    </>
  );
};
