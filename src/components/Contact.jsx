import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is being submitted

    emailjs.send(
      'service_b8af3qq', // Replace with your EmailJS service ID
      'template_amtxolb', // Replace with your EmailJS template ID
      formData,
      'R2j75C4Z2PR6hW-o7' // Replace with your EmailJS user ID
    )
    .then((response) => {
      setLoading(false); // Stop loading
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });

      // Clear status message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    })
    .catch((err) => {
      setLoading(false); // Stop loading
      setStatus('Failed to send message. Please try again.');

      // Clear error message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <div className="mt-8 max-w-lg mx-auto">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded text-black"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded text-black"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded text-black"
              rows="5"
              required
            />

            <motion.button
              type="submit"
              className="bg-teal-500 px-6 py-3 rounded-full text-white"
              whileHover={{ scale: 1.1 }}
              disabled={loading} // Disable button when loading
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>

          {/* Status message */}
          {status && <p className="mt-4 text-center">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
