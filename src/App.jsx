import React from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/navbar';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-blue-900 antialiased">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default App;