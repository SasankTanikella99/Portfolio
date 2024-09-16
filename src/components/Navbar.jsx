import React from 'react';
import { motion } from 'framer-motion';

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RxResume } from "react-icons/rx";

const iconVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
      type: 'spring',
      stiffness: 300,
    },
  },
};

const IconLink = ({ href, icon: Icon, ariaLabel }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    variants={iconVariants}
    whileHover="hover"
  >
    <Icon className="text-3xl hover:text-green-500 transition-colors duration-300" />
  </motion.a>
);

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
      </div>
      <div className="flex items-center justify-center gap-6">
        <IconLink 
          href="https://sasanktanikella99.github.io/resume/index.pdf"
          icon={RxResume}
          ariaLabel="Resume"
        />
        <IconLink 
          href="https://www.linkedin.com/in/sasank-tanikella/"
          icon={FaLinkedin}
          ariaLabel="LinkedIn"
        />
        <IconLink 
          href="https://github.com/SasankTanikella99"
          icon={FaGithub}
          ariaLabel="GitHub"
        />
        <IconLink 
          href="https://x.com/shashanktanikel"
          icon={FaXTwitter}
          ariaLabel="Twitter"
        />
      </div>
    </nav>
  );
};

export default Navbar;