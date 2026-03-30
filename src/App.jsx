import React from 'react';
import Scene from './components/canvas/Scene';
import Navbar from './components/ui/Navbar';
import Hero from './components/ui/Hero';
import About from './components/ui/About';
import Skills from './components/ui/Skills';
import Projects from './components/ui/Projects';
import Contact from './components/ui/Contact';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-neon-blue selection:text-black">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
