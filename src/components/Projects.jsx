import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='border-b border-neutral-300 pb-4'>
      <h1 className='my-20 text-center text-4xl'>Projects</h1>
      <div>
        {PROJECTS.map((proj, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div 
              className='w-full lg:w-1/4'
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={proj.image} 
                width={150} 
                height={150} 
                alt={proj.title} 
                className='mb-6 rounded'
              />
            </motion.div>
            <motion.div 
              className='w-full max-w-xl lg:w-3/4'
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h6 className='mb-2 font-semibold'>{proj.title}</h6>
              <p className='mb-4 text-neutral-800'>{proj.description}</p>
              {proj.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className='mr-2 rounded bg-neutral-300 px-2 py-1 text-sm font-medium text-purple-800'
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;