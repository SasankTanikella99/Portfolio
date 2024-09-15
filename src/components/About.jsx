import React from 'react';
import Aboutimg from "../assets/projects/about1.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-300 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About Me
        
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity:0, x: -100}}
        transition={{duration:0.5}}
        className="w-full lg:w-2/5">
          <div className="flex justify-center lg:justify-end">
            <img 
              className="rounded-3xl w-4/5 lg:w-full max-w-md object-cover shadow-lg" 
              src={Aboutimg} 
              alt="about" 
            />
          </div>
        </motion.div>
        <motion.div
        whileInView={{opacity:1, x: 0}}
        initial={{opacity:0, x: 100}}
        transition={{duration:0.5}}
        className="w-full lg:w-3/5">
          <div className="flex justify-center lg:justify-start">
            <p className="text-lg leading-relaxed max-w-2xl">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;