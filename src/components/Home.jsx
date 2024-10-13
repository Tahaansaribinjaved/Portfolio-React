
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-800 text-white">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Muhammad Taha</h1>
        <p className="text-xl mt-4">MERN Stack Developer</p>

        <div className="mt-6 space-x-4">
          {/* Download CV Button */}
          <motion.a 
            href="/cv/Enhanced_Resume_Muhammad_Taha.docx" // Change this to the actual CV path
            download
            className="bg-teal-500 px-6 py-3 rounded-full text-white inline-block"
            whileHover={{ scale: 1.1 }}
          >
            Download CV
          </motion.a>

          {/* View Projects Button */}
          <motion.a 
            href="#projects"
            className="bg-gray-700 px-6 py-3 rounded-full text-white inline-block"
            whileHover={{ scale: 1.1 }}
          >
            View My Work
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
