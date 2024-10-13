
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnimatePresence>
        {/* Wrapping components with AnimatePresence */}
        <Home />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </AnimatePresence>
    </div>
  );
}

export default App;
