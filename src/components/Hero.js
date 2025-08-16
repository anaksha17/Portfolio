// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = 'assets/resume/AnakshaJanki_Resume.pdf'; // Path to your resume file
    link.download = 'AnakshaJanki_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name fade-in-up">
              Hi, I'm <span className="highlight">Anaksha Janki</span>
            </h1>
            <h2 className="hero-role fade-in-up">
              Computer Science Student & AI Full Stack Developer
            </h2>
            <p className="hero-description fade-in-up">
              Dynamic CS undergraduate specializing in AI-integrated web applications using Next.js, MongoDB, and advanced APIs. Passionate about developing innovative AI solutions that bridge technology and human-centered design.
            </p>
            <div className="hero-buttons fade-in-up">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
            <div className="social-links fade-in-up">
              <a href="https://github.com/anaksha17" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/anaksha-janki-a9360b253/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:anakshajanki@gmail.com">
                <FaEnvelope />
              </a>
              <button onClick={handleResumeDownload} className="resume-download-btn" title="Download Resume">
                <FaDownload />
              </button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={scrollToAbout}>
          <FaArrowDown />
        </div>
      </div>
    </section>
  );
};

export default Hero;