
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Assignment Submission Portal",
    description: "MERN Stack project for managing assignments and grading.",
    github: "https://github.com/Tahaansaribinjaved/Assignment-Submission-Portal"
  },
  {
    title: "30 JavaScript Projects",
    description: "A collection of 30 JavaScript projects showcasing various functionalities.",
    github: "https://github.com/Tahaansaribinjaved/30-JS-Projects"
  },
  {
    title: "Expense Management System",
    description: "A dynamic web application for managing personal expenses.",
    github: "https://github.com/Tahaansaribinjaved/EXPENSE-MANAGMENT-SYSTEM"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white text-black p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-4">{project.description}</p>
              <a 
                href={project.github} 
                className="mt-4 inline-block bg-teal-500 px-4 py-2 rounded text-white"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
