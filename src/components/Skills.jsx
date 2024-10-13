import React from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { name: "HTML", level: "Expert" },
  { name: "CSS", level: "Expert" },
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" }
];

const Skills = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-16 bg-gray-100" ref={ref}>
      <motion.div 
        className="container mx-auto" 
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate if in view
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl font-bold text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-4 rounded shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p>{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
