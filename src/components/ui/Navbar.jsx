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

        {/* Mobile Menu Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[75%] max-w-sm bg-[#0a0a0a]/95 backdrop-blur-xl border-l border-white/10 p-12 flex flex-col gap-10 z-50 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] md:hidden"
            >
              <div className="flex flex-col gap-8 mt-12">
                {links.map((link, index) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + 0.1 * index }}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold tracking-tighter hover:text-neon-blue transition-colors flex items-center gap-4"
                  >
                    <span className="text-xs text-gray-500 font-mono">0{index + 1}.</span>
                    {link}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-white/5">
                <p className="text-gray-500 text-xs font-mono tracking-widest uppercase mb-4">Let's Connect</p>
                <div className="flex gap-4">
                  <div className="w-8 h-[1px] bg-neon-blue self-center"></div>
                  <span className="text-[10px] text-white/50 tracking-[0.2em]">AVAILABLE FOR HIRE</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay Backdrop */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] md:hidden"
            />
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
