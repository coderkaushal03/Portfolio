import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { SiC, SiCplusplus, SiJavascript } from 'react-icons/si';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', Icon: SiC, color: '#A8B9CC' },
      { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
      { name: 'Java', Icon: FaJava, color: '#ED8B00' },
      { name: 'Python', Icon: FaPython, color: '#3776AB' },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', Icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS', Icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React', Icon: FaReact, color: '#61DAFB' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
      { name: 'VS Code', Icon: VscVscode, color: '#007ACC' },
      { name: 'GitHub', Icon: FaGithub, color: '#ffffff' },
    ],
  }
];

// Combine all skills and duplicate to fill the 3D sphere nicely
const allSkillsBase = skillCategories.flatMap(c => c.skills);
const allSkills = [...allSkillsBase, ...allSkillsBase]; // 22 items

const IconSphere = () => {
  const group = useRef();
  
  // Custom continuous 3-axis rotation of the sphere
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      group.current.rotation.z = state.clock.getElapsedTime() * 0.05;
    }
  });

  // Calculate Fibonacci sphere distribution
  const count = allSkills.length;
  const radius = 2.2;

  return (
    <group ref={group}>
      {allSkills.map((skill, i) => {
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        return (
          <mesh key={`${skill.name}-${i}`} position={[x, y, z]}>
            {/* transform maps it to 3d space, sprite guarantees facing camera */}
            <Html transform sprite>
              <div 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#111]/80 backdrop-blur-md border border-white/10 flex items-center justify-center hover:scale-125 transition-transform duration-300 cursor-grab relative group"
                style={{ boxShadow: `0 0 15px ${skill.color}30` }}
              >
                <skill.Icon size={22} style={{ color: skill.color }} className="group-hover:drop-shadow-[0_0_8px_currentColor]" />
                {/* Tooltip on hover directly in 3D space! */}
                <div className="absolute -top-8 bg-black/90 text-white text-[10px] font-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/20 whitespace-nowrap">
                  {skill.name}
                </div>
              </div>
            </Html>
          </mesh>
        );
      })}
    </group>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 min-h-screen relative z-10 flex flex-col justify-center bg-gradient-to-b from-[#020202] to-[#050505]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 flex items-center"
        >
          <span className="text-neon-blue mr-4">02.</span> Skills & Arsenal
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32 items-center">
          
          {/* Left Column - 3D Interactive Tag Cloud */}
          <div className="flex-1 w-full h-[400px] md:h-[500px] relative flex justify-center items-center cursor-grab active:cursor-grabbing">
             <div className="absolute inset-0 bg-neon-purple/5 blur-[80px] rounded-full pointer-events-none" />
             <Canvas camera={{ position: [0, 0, 9], fov: 50 }} className="z-10">
               <ambientLight intensity={0.5} />
               <IconSphere />
               <OrbitControls enableZoom={false} enablePan={false} />
             </Canvas>
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] items-center text-neon-blue/50 font-mono tracking-widest hidden md:flex pointer-events-none">
                [ DRAG TO ROTATE SCENE ]
             </div>
          </div>

          {/* Right Column - Icons List */}
          <div className="flex-1 flex flex-col gap-12 w-full z-20">
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex items-center mb-6">
                   <h3 className="text-2xl font-bold tracking-tight text-white">{category.title}</h3>
                   <div className="h-[1px] bg-white/10 flex-1 ml-6" />
                </div>
                
                <div className="flex flex-wrap gap-4 md:gap-6">
                  {category.skills.map(skill => (
                    <motion.div 
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -5, boxShadow: `0 0 25px ${skill.color}40`, borderColor: `${skill.color}60` }}
                      className="flex flex-col items-center justify-center p-3 w-[100px] h-[100px] bg-[#0a0a0a] border border-white/5 rounded-2xl transition-all duration-300 group pointer-events-auto"
                      title={skill.name}
                    >
                      <skill.Icon size={38} style={{ color: skill.color }} className="mb-3 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-300" />
                      <span className="text-[10px] uppercase tracking-widest font-semibold font-sans text-gray-500 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
