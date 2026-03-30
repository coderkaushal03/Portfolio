import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-16 min-h-screen flex items-center relative z-10 bg-[#050505]/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center">
            <span className="text-neon-purple mr-4">01.</span> About Me
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
            <p>
              I am a passionate 1st-year B.Tech CSE student with a strong interest in web development and problem-solving using Data Structures and Algorithms.
            </p>
            <p>
              My journey into tech began with a curiosity about how websites work, which quickly evolved into a deep dive into HTML, CSS, JavaScript, and modern frameworks like React. I enjoy building real-world projects and continuously improving my technical skills to create seamless digital experiences.
            </p>
            <p>
              When I'm not coding or studying algorithms, you can find me exploring new technologies, participating in hackathons, or refining my UI/UX design sensibilities.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center w-full relative"
        >
           {/* Custom 3D Generated Avatar completely floating in the dark environment */}
           <motion.img 
             src="/avatar.png" 
             alt="Kaushal 3D Avatar" 
             className="w-72 md:w-80 lg:w-96 rounded-[2.5rem] drop-shadow-[0_0_80px_rgba(0,240,255,0.4)] relative z-10"
             animate={{ y: [-15, 10, -15] }}
             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
           />
           {/* Subtle glow behind the avatar to anchor it */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-purple/20 blur-[100px] rounded-full point-events-none" />
        </motion.div>

      </div>
    </section>
  );
};

export default About;
