// src/pages/Home.js

import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Certifications from '../components/Certifications';


const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      
    </div>
  );
};

export default Home;