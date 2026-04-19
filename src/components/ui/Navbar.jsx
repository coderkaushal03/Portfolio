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
    <nav className="fixed w-full z-50 top-0 left-0 px-6 py-4 backdrop-blur-md bg-[#050505]/60 border-b border-white/10">
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
          className="text-2xl font-bold tracking-tighter cursor-pointer hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all z-[1000]"
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
          className="md:hidden text-white z-[1000] focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X size={28} className="text-neon-purple drop-shadow-[0_0_8px_#b026ff]" />
          ) : (
            <Menu size={28} className="text-white hover:text-neon-blue transition-colors" />
          )}
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-[999] bg-[#050505]/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6"
            >
              {/* Background Glows for Menu */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-[100px]" />

              <ul className="flex flex-col gap-10 text-center relative z-10">
                {links.map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index + 0.1 }}
                  >
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-black uppercase tracking-[0.2em] text-white hover:text-neon-blue transition-all duration-300 hover:scale-110 block relative group"
                    >
                      <span className="relative z-10">{link}</span>
                      <span className="absolute left-1/2 -bottom-2 w-0 h-[2px] bg-neon-blue group-hover:w-full group-hover:left-0 transition-all duration-300 shadow-[0_0_8px_#00f0ff]" />
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              {/* Decorative side accents */}
              <div className="absolute top-20 left-6 w-[1px] h-32 bg-gradient-to-b from-neon-blue to-transparent" />
              <div className="absolute bottom-20 right-6 w-[1px] h-32 bg-gradient-to-t from-neon-purple to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
