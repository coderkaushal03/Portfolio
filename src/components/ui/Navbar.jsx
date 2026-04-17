import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['About', 'Skills', 'Projects', 'Contact'];

  // Prevent background scrolling when mobile menu is open
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
          className="text-2xl font-bold tracking-tighter cursor-pointer hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all z-[60]"
        >
          <span className="text-neon-blue">&lt;</span>
          Kaushal
          <span className="text-neon-blue">/&gt;</span>
        </motion.a>
        
        {/* Desktop Links */}
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

        {/* Mobile Menu Button - Optimized Toggle */}
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-neon-blue transition-colors z-[101]"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </motion.button>

        {/* Mobile Menu Overlay - Solid Background & High Z-Index */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[#050505] flex flex-col items-center justify-center z-[100] md:hidden"
            >
              <div className="flex flex-col items-center gap-12 mt-[-5rem]">
                {links.map((link, index) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    onClick={() => setIsOpen(false)}
                    className="group flex flex-col items-center"
                  >
                    <span className="text-xs text-neon-blue font-mono mb-2 tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                    <span className="text-5xl font-bold tracking-tighter text-white group-hover:text-neon-purple transition-all group-hover:scale-105">
                      {link}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Mobile Menu Footer Branding */}
              <div className="absolute bottom-16 flex flex-col items-center gap-4">
                <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <p className="text-gray-500 text-[10px] font-mono tracking-[0.4em] uppercase">Poornima University | CSE</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
