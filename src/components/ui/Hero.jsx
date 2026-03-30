import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto flex items-center px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-left z-10"
        >
          <p className="text-neon-blue font-mono mb-2 uppercase tracking-wide">Hi, I am</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Kaushal Kumar <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Sharma
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-6">
            B.Tech CSE Student | Full Stack Learner | DSA Enthusiast
          </h2>
          <p className="max-w-xl text-gray-400 text-lg mb-10 leading-relaxed font-light">
            I build modern, fast, and interactive web experiences. Exploring the boundaries of 3D and frontend engineering.
          </p>

          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 240, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-transparent border border-neon-blue text-neon-blue rounded-md font-medium uppercase tracking-wider transition-all hover:bg-neon-blue/10"
          >
            Explore My Work
          </motion.a>
        </motion.div>
        
        {/* Placeholder for exactly where the 3D model would align visually */}
        <div className="flex-1 hidden md:block" />
        
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-50"
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-mono">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
