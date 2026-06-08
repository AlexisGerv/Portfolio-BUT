import React, { useState } from 'react';
import { COMPETENCES, PROJECTS, RECAP } from './data/portfolioData';
import Project from './components/Project';

export default function App() {
  const [filter, setFilter] = useState(null);

  return (
    <React.Fragment>
      <header className="nav">
        <div className="wrap nav-inner">
          <div className="brand">Alexis Gervaud <span>· Portfolio MMI</span></div>
          <nav className="nav-links">
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
          <div className="eyebrow">BUT MMI · DWeb-DI · 2025-2026</div>
          <h1>Du croquis papier au serveur en production,<br /><em>je conçois et je livre.</em></h1>
          <p className="lede">Je suis Alexis Gervaud, étudiant en parcours Développement Web et Dispositifs Interactifs. En deux ans, je suis passé de l'intégration d'interfaces à la conception d'un logiciel industriel déployé en conditions réelles — en gardant le même fil rouge : comprendre un besoin, le concevoir avec soin, et le faire fonctionner pour de vrai.</p>
          <p className="lede small">Ce portfolio raconte cette progression à travers six missions. Chaque carte déplie son analyse complète et un aperçu interactif de la réalisation ; le tableau final relie chaque AC aux missions qui le prouvent.</p>
          <div className="meta-row">
            <span className="pill"><b>Stage</b> · CT Concept — .NET / Blazor</span>
            <span className="pill"><b>20/20</b> · SAÉ Dataviz</span>
            <span className="pill"><b>6</b> missions · stage, SAÉ, projet perso</span>
            <span className="pill"><b>Cap</b> · Master Informatique</span>
          </div>
          <a href="#projets" className="scroll-hint" aria-label="Voir les projets">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </section>

        <section className="section" id="projets">
          <div className="section-head">
            <div className="kicker">Les missions</div>
            <h2>Six projets, une trajectoire</h2>
            <p>Filtrez par compétence pour voir quelles missions la démontrent, ou cliquez une carte pour déplier son aperçu interactif et son analyse complète.</p>
          </div>

          <div className="filters" id="competences">
            <button className={"chip " + (filter === null ? "active" : "")} onClick={function () { setFilter(null); }}>Toutes les missions</button>
            {Object.keys(COMPETENCES).map(function (key) {
              const c = COMPETENCES[key];
              return (
                <button key={c.key} className={"chip " + (filter === c.key ? "active" : "")} onClick={function () { setFilter(c.key); }}>
                  <span className="dot" style={{ background: c.color }}></span>{c.label}
                </button>
              );
            })}
          </div>

          {filter && <p style={{ marginTop: "-20px", marginBottom: "24px", color: "var(--muted)", fontSize: "14.5px" }}>{COMPETENCES[filter].ctx}</p>}

          {PROJECTS.map(function (p, i) { return <Project key={p.id} p={p} idx={i} filter={filter} />; })}
        </section>

        <section className="section" id="recap">
          <div className="section-head">
            <div className="kicker">Synthèse</div>
            <h2>Tableau récapitulatif : AC → missions</h2>
            <p>« Pour vérifier que je maîtrise un apprentissage critique, quelle(s) mission(s) lire ? » Voici la réponse, organisée selon les cinq grandes compétences du référentiel.</p>
          </div>
          {RECAP.map(function (block) {
            const co = COMPETENCES[block.comp];
            return (
              <div className="comp-block" key={block.comp}>
                <h3><span className="sq" style={{ background: co.color }}></span>{co.label}</h3>
                <p className="ctx">{co.ctx}</p>
                <div className="tbl">
                  <table>
                    <thead><tr><th>Apprentissage critique</th><th>Missions justificatives (preuves)</th></tr></thead>
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
          <div>6 missions · 5 compétences · 26 apprentissages critiques<br /><span className="mono">alexisgerv@gmail.com</span></div>
        </div>
      </footer>
    </React.Fragment>
  );
}
