import { motion } from 'framer-motion';

const timeline = [
  {
    title: "Matriculation in Science",
    institution: "Bukhshi Polar High School",
    date: "04/2021 - 04/2023",
    description: "Completed matriculation with a focus on science subjects."
  },
  {
    title: "FSc in Computer Science",
    institution: "Govt City College",
    date: "05/2023 - Present",
    description: "Currently studying computer science with a focus on programming and development."
  }
];

const timelineVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3, // Delays each timeline item by 0.3s
    },
  }),
};

const Timeline = () => {
  return (
    <section id="timeline" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education & Experience
        </motion.h2>
        <div className="mt-8">
          {timeline.map((item, index) => (
            <motion.div 
              key={index} 
              className="timeline-item bg-white p-6 my-6 rounded-lg shadow-lg"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={timelineVariant}
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.institution}</p>
              <p className="text-gray-500">{item.date}</p>
              <p className="mt-4">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
