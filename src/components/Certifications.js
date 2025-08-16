// src/components/Certifications.js
 
import { FaCertificate, FaUniversity, FaRobot, FaBrain } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certificationsData = [
    {
      id: 1,
      title: 'Machine Learning Specialization',
      provider: 'Stanford Online via Coursera',
      instructor: 'Andrew Ng',
      date: 'Completed 2024',
      icon: <FaBrain />,
      skills: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks', 'TensorFlow', 'Python'],
      description: 'Mastered supervised and unsupervised learning, neural networks, and model optimization using Python and TensorFlow, applying predictive modeling to real-world datasets.',
      credentialUrl: 'https://coursera.org/share/8628062e830a7499f4c71d5aa5ae4854', // Add your actual credential URL
      featured: true
    },
    {
      id: 2,
      title: 'Generative AI with Large Language Models',
      provider: 'DeepLearning.AI and AWS via Coursera',
      instructor: 'DeepLearning.AI Team',
      date: 'Completed 2024',
      icon: <FaRobot />,
      skills: ['LLM Lifecycle', 'Transformer Architecture', 'Fine-tuning', 'RLHF', 'AWS'],
      description: 'Gained expertise in LLM lifecycle, transformer architecture, fine-tuning, and deployment using Python, TensorFlow, and AWS tools, with hands-on labs in prompt engineering and RLHF.',
      credentialUrl: 'https://coursera.org/share/3bdf318810ee4b34df804fd951df4622', // Add your actual credential URL
      featured: true
    }
  ];

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Continuous learning and skill development in cutting-edge technologies
        </p>

        <div className="certifications-grid">
          {certificationsData.map((cert) => (
            <div key={cert.id} className={`certification-card ${cert.featured ? 'featured' : ''}`}>
              <div className="cert-header">
                <div className="cert-icon">
                  {cert.icon}
                </div>
                <div className="cert-badge">
                  <FaCertificate />
                </div>
              </div>

              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-provider">
                  <FaUniversity className="provider-icon" />
                  <span>{cert.provider}</span>
                </div>
                {cert.instructor && (
                  <div className="cert-instructor">
                    Taught by: <strong>{cert.instructor}</strong>
                  </div>
                )}
                <div className="cert-date">{cert.date}</div>
                
                <p className="cert-description">{cert.description}</p>
                
                <div className="cert-skills">
                  <h4>Skills Gained:</h4>
                  <div className="skills-tags">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="cert-actions">
                  <a href={cert.credentialUrl} className="cert-link" target="_blank" rel="noopener noreferrer">
                    <FaCertificate /> View Credential
                  </a>
                </div>
              </div>

              {cert.featured && (
                <div className="featured-indicator">
                  <span>Featured</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="certifications-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Hours of Learning</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">New Skills</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;