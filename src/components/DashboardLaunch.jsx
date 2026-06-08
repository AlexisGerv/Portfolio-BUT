import React from 'react';

export default function DashboardLaunch() {
  return (
    <div className="preview-stage">
      <p className="pv-hint">L'aperçu simplifié ne rend pas justice au livrable : voici le <b>vrai tableau de bord interactif</b> (Plotly JS, dataset de 200 observations 2020-2025) avec barres et lignes de tendance, box plots, heatmap multidimensionnelle et carte choroplèthe mondiale — manipulable en plein écran.</p>
      <div className="dash-card">
        <div className="dash-glyph">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="12" width="3.4" height="8" rx="1" fill="#fff" />
            <rect x="9" y="7" width="3.4" height="13" rx="1" fill="#fff" opacity=".85" />
            <rect x="15" y="3.5" width="3.4" height="16.5" rx="1" fill="#fff" opacity=".7" />
          </svg>
        </div>
        <div className="dash-info">
          <h5>Tableau de bord — Impact de l'IA (SAÉ 3.03)</h5>
          <p>JavaScript natif &amp; Plotly JS · barres, box plot, heatmap, carte choroplèthe</p>
        </div>
        <a className="dash-launch" href="sae303-dashboard/index.html" target="_blank" rel="noopener noreferrer">Ouvrir le tableau de bord ↗</a>
      </div>
    </div>
  );
}
