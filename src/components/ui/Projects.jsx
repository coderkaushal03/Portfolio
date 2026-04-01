import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Smart Canteen System',
    description: 'A web-based food ordering system designed for efficient modern canteen management.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/coderkaushal03/PU-Smart-Canteen.git',
    demo: 'https://pu-smart-canteen.vercel.app/'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive and modern 3D portfolio website to showcase my skills and interactive projects.',
    tech: ['React', 'Tailwind', 'Three.js'],
    github: '#',
    demo: '#'
  },
  {
    title: 'DSA Practice Programs',
    description: 'A comprehensive collection of problem-solving programs focusing on core Data Structures and Algorithms.',
    tech: ['C++', 'Algorithms'],
    github: '#',
    demo: null
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 min-h-screen relative z-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 flex items-center"
        >
          <span className="text-neon-purple mr-4">03.</span> Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Tilt options={{ max: 25, scale: 1.05, speed: 400 }} className="h-full">
                <div className="bg-[#111] border border-white/10 rounded-2xl p-8 flex flex-col h-full hover:border-neon-blue/50 transition-colors duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-400 font-light flex-grow leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-mono text-neon-blue bg-neon-blue/10 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    {project.github && project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Source Code">
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
