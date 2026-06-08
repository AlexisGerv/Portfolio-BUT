import React, { useState } from 'react';
import { COMPETENCES, PROJECTS, RECAP, SKILLS } from './data/portfolioData';
import Project from './components/Project';
import SkillsSection from './components/SkillsSection';

export default function App() {
  const [filter, setFilter] = useState(null);
  const [selectedTech, setSelectedTech] = useState(null);

  const activeTechObj = selectedTech ? SKILLS.find(s => s.id === selectedTech) : null;

  return (
    <React.Fragment>
      <header className="nav">
        <div className="wrap nav-inner">
          <div className="brand">Alexis Gervaud <span>· Portfolio MMI</span></div>
          <nav className="nav-links">
            <a href="#skills">Langages & Outils</a>
            <a href="#projets">Projets</a>
            <a href="#competences">Compétences</a>
            <a href="#recap">Récapitulatif AC</a>
          </nav>
        </div>
      </header>

      <div className="hero-banner">
        <img src="assets/theme1.jpg" alt="Paysage alpin" loading="eager" />
      </div>
      <main className="wrap">
        <section className="hero">
          <div className="eyebrow">BUT MMI · DWDI · 2025-2026</div>
          <h1>Je code, je déploie,<br /><em>je teste ce qui casse.</em></h1>
          <p className="lede">Je suis Alexis Gervaud, étudiant en développement web à l'IUT de Dijon. Ce qui m'intéresse, c'est la chaîne complète : écrire le code, le mettre en ligne, et comprendre comment on pourrait s'y introduire.</p>
          <p className="lede">En deux ans, j'ai développé un logiciel industriel livré en production pour un vrai client, construit mon propre serveur à la maison, et commencé à apprendre à trouver les failles de ce que je construis. La curiosité et la rigueur sont les deux choses qui me font avancer sur chacun de ces projets.</p>
          <p className="lede small">Ce portfolio présente six projets. Pour chacun, vous trouverez le contexte, ce que j'ai fait concrètement, et ce que j'en retiens honnêtement.</p>
          <div className="meta-row">
            <span className="pill"><b>Stage</b> · CT Concept — .NET / Blazor</span>
            <span className="pill"><b>SAÉ 3.03</b> · Dashboard Dataviz</span>
            <span className="pill"><b>6</b> projets · stage, SAÉ, projet perso</span>
            <span className="pill"><b>Cap</b> · Master Informatique</span>
          </div>
          <a href="#skills" className="scroll-hint" aria-label="Voir les compétences">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </section>

        <SkillsSection 
          selectedTech={selectedTech} 
          onSelectTech={function (techId) {
            setSelectedTech(techId);
            if (techId !== null) {
              setFilter(null); // Reset competence filter when filtering by technology
            }
          }} 
        />

        <section className="section" id="projets">
          <div className="section-head">
            <div className="kicker">Les projets</div>
            <h2>Six projets, une trajectoire</h2>
            <p>Filtrez par compétence pour voir quels projets la démontrent, ou cliquez une carte pour déplier son aperçu interactif et son analyse complète.</p>
          </div>

          <div className="filters" id="competences">
            <button className={"chip " + (filter === null && selectedTech === null ? "active" : "")} onClick={function () { setFilter(null); setSelectedTech(null); }}>Tous les projets</button>
            {Object.keys(COMPETENCES).map(function (key) {
              const c = COMPETENCES[key];
              return (
                <button key={c.key} className={"chip " + (filter === c.key ? "active" : "")} onClick={function () { setFilter(c.key); setSelectedTech(null); }}>
                  <span className="dot" style={{ background: c.color }}></span>{c.label}
                </button>
              );
            })}
          </div>

          {filter && <p style={{ marginTop: "-20px", marginBottom: "24px", color: "var(--muted)", fontSize: "14.5px" }}>{COMPETENCES[filter].ctx}</p>}
          
          {activeTechObj && (
            <div className="active-filter-banner">
              Filtré par technologie : <span className="tech-banner-name">{activeTechObj.name}</span>
              <button className="clear-filter-btn" onClick={function () { setSelectedTech(null); }} aria-label="Supprimer le filtre">
                ✕
              </button>
            </div>
          )}

          {PROJECTS.map(function (p, i) { return <Project key={p.id} p={p} idx={i} filter={filter} selectedTech={selectedTech} />; })}
        </section>

        <section className="section" id="recap">
          <div className="section-head">
            <div className="kicker">Synthèse</div>
            <h2>Tableau récapitulatif : AC → projets</h2>
            <p>« Pour vérifier que je maîtrise un apprentissage critique, quel(s) projet(s) lire ? » Voici la réponse, organisée selon les cinq grandes compétences du référentiel.</p>
          </div>
          {RECAP.map(function (block) {
            const co = COMPETENCES[block.comp];
            return (
              <div className="comp-block" key={block.comp}>
                <h3><span className="sq" style={{ background: co.color }}></span>{co.label}</h3>
                <p className="ctx">{co.ctx}</p>
                <div className="tbl">
                  <table>
                    <thead><tr><th>Apprentissage critique</th><th>Projets justificatifs (preuves)</th></tr></thead>
                    <tbody>
                      {block.rows.map(function (r, i) {
                        return (
                          <tr key={i}>
                            <td className="ac-cell">{r[0]}<small>{r[1]}</small></td>
                            <td className="proof" dangerouslySetInnerHTML={{ __html: r[2] }}></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <footer>
        <div className="wrap fgrid">
          <div><b>Alexis Gervaud</b> — Portfolio de compétences BUT MMI<br />Parcours Développement Web et Dispositifs Interactifs · 2025-2026</div>
          <div>6 projets · 5 compétences · 26 apprentissages critiques<br /><span className="mono">alexisgerv@gmail.com</span></div>
        </div>
      </footer>
    </React.Fragment>
  );
}
