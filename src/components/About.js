// src/components/About.js
import { FaGraduationCap, FaCode, FaRocket, FaBriefcase } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { icon: <FaCode />, number: '10+', label: 'Projects' },
    { icon: <FaBriefcase />, number: '2+', label: 'Years Experience' },
    { icon: <FaRocket />, number: '10+', label: 'Technologies' },
    { icon: <FaGraduationCap />, number: '2', label: 'Certifications' }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
             
            <p>
  Dynamic Computer Science undergraduate at FAST National University with comprehensive full-stack development experience, specializing in AI-integrated web applications using Next.js, MongoDB, and advanced APIs including Hugging Face and Gemini 2.5 Flash.
</p>
            </div>
            
           
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <h4>🎓 Education</h4>
                   <p>BS Computer Science - FAST NUCES</p>

                </div>
                <div className="highlight-item">
                  <h4>💼 Focus</h4>
                  <p>AI-Integrated Full Stack Development</p>
                </div>
                <div className="highlight-item">
                  <h4>🏆 Experience</h4>
                    <p>Next Gen Intern at Nexium</p>

                </div>
              </div>
            </div>
          </div>
        

        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;