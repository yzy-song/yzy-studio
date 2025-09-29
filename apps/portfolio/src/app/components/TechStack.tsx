// src/components/TechStack.tsx
import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
    { name: 'React', src: '/stack_icons/react.95819fe9.svg' },
    { name: 'Next.js', src: '/stack_icons/next.4156f49e.svg' },
    { name: 'NestJS', src: '/stack_icons/nest.9990a000.svg' },
    { name: 'Tailwind CSS', src: '/stack_icons/tailwind.f5579b94.svg' },
    { name: 'Vue', src: '/stack_icons/vue.68af69e9.svg' },
    { name: 'TypeScript', src: '/stack_icons/ts.fd86d0ee.svg' },
  { name: 'Git', src: '/stack_icons/git.18e73a3f.svg' },
  { name: 'Shell', src: '/stack_icons/shell.e62d42c5.svg' },
  { name: 'Docker', src: '/stack_icons/docker.3ceb4840.svg' },
//   { name: 'PostgreSQL', src: '/stack_icons/postgresql.svg' },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function TechStack() {
  return (
    <motion.div
      className="w-full max-w-4xl px-4 py-8 z-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h3 className="text-3xl font-semibold mb-8 text-center text-cyan-300">
        Core Technology Stack
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center p-3 transition duration-300 transform"
          >
            <div 
              className="rounded-full shadow-xl flex justify-center items-center"
              style={{
                width: '50px',
                height: '50px',
              }}
            >
                <img 
                    src={tech.src} 
                    alt={`${tech.name} Logo`} 
                    width={50} 
                    height={50} 
                    className="drop-shadow-lg"
                    // 某些图标（如 Next.js）可能需要特殊的 CSS 来适应深色背景
                    style={tech.name === 'Next.js' ? { filter: 'invert(1)' } : {}}
                    />
          
            </div>
            
            <p className="mt-2 text-sm font-medium text-gray-200 text-center">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}