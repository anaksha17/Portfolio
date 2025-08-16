// src/components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
const skillsData = [
  { name: 'Python', level: 90, category: 'Programming' },
  { name: 'JavaScript', level: 88, category: 'Programming' },
  { name: 'C/C++', level: 80, category: 'Programming' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'HTML/CSS', level: 95, category: 'Frontend' },
  { name: 'React', level: 82, category: 'Frontend' },
  { name: 'MongoDB', level: 85, category: 'Database' },
  { name: 'Supabase', level: 80, category: 'Database' },
  { name: 'Flask', level: 80, category: 'Backend' },
  { name: 'RESTful APIs', level: 85, category: 'Backend' },
  { name: 'TensorFlow', level: 75, category: 'AI/ML' },
  { name: 'Scikit-learn', level: 80, category: 'AI/ML' },
  { name: 'Git', level: 90, category: 'Tools' },
  { name: 'Vercel CI/CD', level: 85, category: 'Tools' }
];
 // Update categories:
const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Database', 'AI/ML', 'Tools'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.1}s`
                  }}
                ></div>
              </div>
              <div className="skill-category">{skill.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;