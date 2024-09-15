import React from 'react';
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaJava, FaPython, 
  FaAws, FaDocker, FaJenkins, FaFigma
} from 'react-icons/fa';
import { 
  SiTypescript, SiNestjs,
  SiSpringboot, SiPostgresql, SiMongodb, 
  SiKubernetes
} from 'react-icons/si';

const iconVariants = {
  animate: (i) => ({
    y: [0, -10, 0],
    transition: { 
      duration: 1.5,
      ease: 'easeInOut',
      repeat: Infinity,
      delay: i * 0.1,
    },
  }),
  hover: {
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const TechIcon = ({ Icon, name, color, index }) => (
  <motion.div 
    className="flex flex-col items-center justify-center rounded-2xl border-2 border-neutral-300 p-4 transition-all hover:border-blue-500 hover:shadow-md"
    custom={index}
    variants={iconVariants}
    animate="animate"
    whileHover="hover"
  >
    <Icon className={`text-3xl ${color}`} />
    <span className="mt-2 text-xs text-center">{name}</span>
  </motion.div>
);

const Technologies = () => {
  const techs = [
    { Icon: FaPython, name: 'Python', color: 'text-blue-500' },
    { Icon: FaJava, name: 'Java', color: 'text-red-500' },
    { Icon: SiTypescript, name: 'TypeScript', color: 'text-blue-600' },
    { Icon: FaReact, name: 'ReactJS', color: 'text-cyan-400' },
    { Icon: SiNestjs, name: 'NestJS', color: 'text-red-600' },
    { Icon: FaNodeJs, name: 'NodeJS', color: 'text-green-600' },
    { Icon: SiSpringboot, name: 'Spring Boot', color: 'text-green-500' },
    { Icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-400' },
    { Icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
    { Icon: FaAws, name: 'AWS', color: 'text-orange-500' },
    { Icon: SiKubernetes, name: 'Kubernetes', color: 'text-blue-600' },
    { Icon: FaDocker, name: 'Docker', color: 'text-blue-500' },
  ];

  return (
    <div className="border-b border-neutral-300 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {techs.map((tech, index) => (
          <TechIcon 
            key={index} 
            Icon={tech.Icon} 
            name={tech.name} 
            color={tech.color} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Technologies;