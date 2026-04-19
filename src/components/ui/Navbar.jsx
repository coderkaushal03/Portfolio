import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['About', 'Skills', 'Projects', 'Contact'];

  // Disable background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed w-full z-[100] top-0 left-0 px-6 py-4 backdrop-blur-md bg-[#050505]/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsOpen(false);
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter cursor-pointer hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all z-[10001]"
          >
            <span className="text-neon-blue">&lt;</span>
            Kaushal
            <span className="text-neon-blue">/&gt;</span>
          </motion.a>
          
          {/* Desktop Menu */}
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
                  className="hover:text-neon-purple transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(176,38,255,0.8)]"
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={toggleMenu}
            className="md:hidden text-white z-[10001] focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X size={28} className="text-neon-purple drop-shadow-[0_0_8px_#b026ff]" />
            ) : (
              <Menu size={28} className="text-white hover:text-neon-blue transition-colors" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Fully Isolated outside of <nav> and flex containers */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[10000] bg-[#050505]/98 backdrop-blur-3xl flex flex-col items-center justify-center p-6 border-none outline-none"
            style={{ margin: 0, padding: 0 }} // Hard reset for isolation
          >
            {/* Background Atmosphere */}
            <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Navigation Links */}
            <ul className="flex flex-col gap-12 text-center relative z-10 w-full">
              {links.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.2, type: "spring", stiffness: 100 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl md:text-6xl font-black uppercase tracking-[0.2em] text-white hover:text-neon-blue transition-all duration-300 block relative group"
                  >
                    <span className="relative z-10">{link}</span>
                    {/* Hover Glow Underline */}
                    <span className="absolute left-1/2 -bottom-2 w-0 h-1 bg-neon-blue group-hover:w-full group-hover:left-0 transition-all duration-300 shadow-[0_0_20px_#00f0ff]" />
                  </a>
                </motion.li>
              ))}
            </ul>
            
            {/* Minimalist Border Accents to give "Isolated Sidebar/Frame" feel */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-neon-blue/20 via-transparent to-neon-purple/20" />
            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-neon-blue/20 via-transparent to-neon-purple/20" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
