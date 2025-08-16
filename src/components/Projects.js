// src/components/Projects.js

import React, { useState, useRef, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const carouselRef = useRef(null);
  const autoScrollRef = useRef(null);

  const projectsData = [
    {
      id: 1,
      title: 'Mental Health Tracker',
      description: 'Next.js and MongoDB app with n8n workflow automation, Hugging Face API for sentiment analysis, and Gemini 2.5 Flash API for personalized mood suggestions.',
      technologies: ['Next.js', 'MongoDB', 'n8n', 'Hugging Face API', 'Gemini 2.5 Flash'],
      category: 'AI Integration',
      githubUrl: 'https://github.com/anaksha17/Mental_Health_Tracker',
      liveUrl: 'https://drive.google.com/file/d/1Wq1sTs271SBHTwsqNALVtQ17GdYDEgZ0/view?usp=sharing',
      featured: true
    },
    {
      id: 2,
      title: 'Power Ludo AI',
      description: 'Enhanced Ludo game with AI-driven gameplay using minimax algorithm. Features power tiles, dynamic puzzle captures, and AI player achieving 60-70% win rate.',
      technologies: ['Python', 'Tkinter', 'Pygame', 'Minimax Algorithm'],
      category: 'Game Development',
      githubUrl: 'https://github.com/anaksha17/POWERLUDO_AI',
      liveUrl: 'https://youtu.be/MRdxGf7cww0',
      featured: true
    },
    {
      id: 3,
      title: 'Stock Price Prediction',
      description: 'ML system predicting hourly stock prices using Twitter sentiment and PSX data. Achieved 69% accuracy with XGBoost and LSTM models.',
      technologies: ['Python', 'XGBoost', 'LSTM', 'Pandas', 'Scikit-learn'],
      category: 'Machine Learning',
      githubUrl: 'https://github.com/anaksha17/Stck_Price_Prediction',
      liveUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Blog Summariser',
      description: 'Next.js web apps with topic-based retrieval, web scraping, AI summarization, and Urdu translation. Integrated with Supabase/MongoDB.',
      technologies: ['Next.js', 'JavaScript', 'ShadCN UI', 'Supabase'],
      category: 'Web Development',
      githubUrl: 'https://github.com/anaksha17/Blog_Summariser',
      liveUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Digital Art Gallery',
      description: 'Flask-based web application with RESTful APIs and MySQL, enabling real-time auctions and data processing. Led team of 3 developers.',
      technologies: ['Flask', 'MySQL', 'Python', 'RESTful APIs'],
      category: 'Backend Development',
      githubUrl: 'https://github.com/anaksha17/Digital_Art_Gallery',
      liveUrl: '#',
      featured: false
    }
  ];

  const projectsPerView = 3;
  const maxIndex = Math.max(0, projectsData.length - projectsPerView);

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (!isAutoScrollPaused) {
          setCurrentIndex(prevIndex => {
            if (prevIndex >= maxIndex) {
              return 0; // Loop back to start
            }
            return prevIndex + 1;
          });
        }
      }, 4000); // 4 seconds interval
    };

    startAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [maxIndex, isAutoScrollPaused]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    setIsAutoScrollPaused(true);
  };

  const handleMouseLeave = () => {
    setIsAutoScrollPaused(false);
  };

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop to start
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex); // Loop to end
    }
  };

  const getCategoryColor = (category) => {
    // Using your color palette variants
    const colors = {
      'AI Integration': '#0B5269',
      'Game Development': '#978D58',
      'Machine Learning': '#B8A968',
      'Web Development': '#0E6B85',
      'Backend Development': '#85794D'
    };
    return colors[category] || '#978D58';
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects<span className="title-dot"></span></h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills and passion for development
        </p>

        <div 
          className="projects-carousel-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`carousel-pause-indicator ${isAutoScrollPaused ? 'paused' : ''}`}></div>
          
          <button 
            className="carousel-nav-btn carousel-prev"
            onClick={prevSlide}
          >
            <FaChevronLeft />
          </button>

          <div className="projects-carousel-container">
            <div 
              className="projects-slider"
              style={{
                transform: `translateX(-${currentIndex * (100 / projectsPerView)}%)`
              }}
            >
              {projectsData.map((project) => (
                <div key={project.id} className="project-card-modern">
                  <div className="project-card-header">
                    <div className="project-category">
                      <span 
                        className="category-badge"
                        style={{ 
                          backgroundColor: `${getCategoryColor(project.category)}20`,
                          borderColor: `${getCategoryColor(project.category)}40`,
                          color: getCategoryColor(project.category)
                        }}
                      >
                        {project.category}
                      </span>
                      <div className="card-options">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>

                  <div className="project-card-body">
                    <h3 className="project-title-modern">{project.title}</h3>
                    <p className="project-description-modern">{project.description}</p>
                    
                    <div className="project-tech-tags">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="tech-tag-modern">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-tag-more">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                  </div>

                  <div className="project-card-footer">
                    <div className="project-actions-modern">
                      <a href={project.githubUrl} className="action-link" title="View Code">
                        <FaGithub />
                      </a>
                      <a href={project.liveUrl} className="action-link" title="Live Demo">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-nav-btn carousel-next"
            onClick={nextSlide}
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-indicators">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        
        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a href="https://github.com/anaksha17" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <FaGithub /> View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;