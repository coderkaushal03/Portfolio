import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 px-6 py-4 backdrop-blur-md bg-[#050505]/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter cursor-pointer hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all"
        >
          <span className="text-neon-blue">&lt;</span>
          Kaushal
          <span className="text-neon-blue">/&gt;</span>
        </motion.a>
        
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          {links.map((link, index) => (
            <motion.li 
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <a 
                href={`#${link.toLowerCase()}`} 
                className="hover:text-neon-purple transition-colors duration-300"
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:hidden text-white"
        >
          {/* Hamburger icon for mobile */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
