import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['About', 'Skills', 'Projects', 'Contact'];

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
          className="text-2xl font-bold tracking-tighter cursor-pointer hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all"
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

        {/* Mobile Menu Button */}
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-neon-blue transition-colors z-[60]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#050505]/98 backdrop-blur-2xl flex flex-col items-center justify-center z-[100] md:hidden"
            >
              {/* Close Button Inside Menu */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white p-2 hover:text-neon-blue transition-colors"
                aria-label="Close Menu"
              >
                <X size={32} />
              </button>

              <div className="flex flex-col items-center gap-10">
                {links.map((link, index) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => setIsOpen(false)}
                    className="group flex flex-col items-center"
                  >
                    <span className="text-xs text-neon-blue font-mono mb-2 tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                    <span className="text-5xl font-bold tracking-tighter text-white group-hover:text-neon-purple transition-all group-hover:scale-110">
                      {link}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div className="absolute bottom-12 flex flex-col items-center gap-4">
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <p className="text-gray-500 text-[10px] font-mono tracking-[0.3em] uppercase">Built by Kaushal</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
