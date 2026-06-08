import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import TechIcon from './TechIcon';

export default function SkillsSection({ selectedTech, onSelectTech }) {
  const [sortBy, setSortBy] = useState('category'); // 'category' | 'alpha' | 'level'

  // Category mapping for grouping and ordering
  const categories = {
    langage: { label: "Langages de programmation", order: 1 },
    framework: { label: "Frameworks & Bibliothèques", order: 2 },
    devops: { label: "Infrastructure & DevOps", order: 3 }
  };

  // Helper to render the skill dots indicator
  function renderLevelDots(level) {
    const dots = [];
    const maxDots = 5;
    for (let i = 1; i <= maxDots; i++) {
      const isFilled = i <= Math.floor(level);
      const isHalf = !isFilled && i - 0.5 <= level;
      
      dots.push(
        <span 
          key={i} 
          className={`level-dot ${isFilled ? 'filled' : isHalf ? 'half' : ''}`}
        />
      );
    }
    return <div className="skill-level-dots">{dots}</div>;
  }

  // Render a single skill card
  function renderSkillCard(skill) {
    const isActive = selectedTech === skill.id;
    return (
      <div 
        key={skill.id} 
        className={`skill-card ${isActive ? 'active' : ''}`}
        onClick={() => onSelectTech(isActive ? null : skill.id)}
        role="button"
        tabIndex={0}
        aria-pressed={isActive}
        title={`Cliquer pour filtrer les projets par ${skill.name}`}
      >
        <div className="skill-icon-wrap">
          <TechIcon id={skill.id} size={28} />
        </div>
        <div className="skill-info">
          <div className="skill-header">
            <h4>{skill.name}</h4>
            <span className="skill-tag">{skill.levelLabel}</span>
          </div>
          <p className="skill-desc">{skill.desc}</p>
          <div className="skill-footer">
            {renderLevelDots(skill.level)}
          </div>
        </div>
      </div>
    );
  }

  // Handle sorting and grouping logic
  let content = null;

  if (sortBy === 'category') {
    // Group skills by category
    const grouped = {};
    Object.keys(categories).forEach(cat => {
      grouped[cat] = SKILLS.filter(s => s.category === cat);
    });

    content = (
      <div className="skills-grouped">
        {Object.keys(categories)
          .sort((a, b) => categories[a].order - categories[b].order)
          .map(catKey => {
            const cat = categories[catKey];
            const catSkills = grouped[catKey];
            if (!catSkills || catSkills.length === 0) return null;

            return (
              <div key={catKey} className="skill-category-group">
                <h3 className="skill-group-title">{cat.label}</h3>
                <div className="skills-grid">
                  {catSkills.map(renderSkillCard)}
                </div>
              </div>
            );
          })}
      </div>
    );
  } else {
    // Single list, sorted alphabetically or by level
    const sortedSkills = [...SKILLS].sort((a, b) => {
      if (sortBy === 'alpha') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'level') {
        return b.level - a.level || a.name.localeCompare(b.name); // level desc, then alpha asc
      }
      return 0;
    });

    content = (
      <div className="skills-grid unified">
        {sortedSkills.map(renderSkillCard)}
      </div>
    );
  }

  return (
    <section className="section" id="skills">
      <div className="section-head">
        <div className="kicker">Compétences techniques</div>
        <h2>Langages, frameworks & outils</h2>
        <p>
          Voici les technologies et langages de programmation que je pratique. 
          <strong> Cliquez sur l'un d'eux </strong> pour filtrer les projets correspondants ci-dessous.
        </p>
      </div>

      <div className="skills-controls">
        <div className="sort-label">Trier par :</div>
        <div className="sort-buttons">
          <button 
            className={`sort-btn ${sortBy === 'category' ? 'active' : ''}`}
            onClick={() => setSortBy('category')}
          >
            Catégorie
          </button>
          <button 
            className={`sort-btn ${sortBy === 'alpha' ? 'active' : ''}`}
            onClick={() => setSortBy('alpha')}
          >
            Alphabétique (A-Z)
          </button>
          <button 
            className={`sort-btn ${sortBy === 'level' ? 'active' : ''}`}
            onClick={() => setSortBy('level')}
          >
            Niveau de maîtrise
          </button>
        </div>
      </div>

      {content}
    </section>
  );
}
