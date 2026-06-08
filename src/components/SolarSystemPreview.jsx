import React from 'react';

export default function SolarSystemPreview() {
  return (
    <div className="preview-stage">
      <p className="pv-hint">La simulation tourne dans le navigateur via Three.js et WebXR — 8 planètes, 67+ lunes (données JSON réelles), deux ceintures d'astéroïdes (1 500 InstancedMesh), mode VR natif et cockpit LIGHTSPEED. Lancez-la en plein écran pour l'expérience complète.</p>
      <div className="dash-card">
        <div className="dash-glyph" style={{ background: "linear-gradient(135deg,#0b1a2e,#1a3a5c)" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="4" fill="#fde68a" />
            <circle cx="12" cy="12" r="9" fill="none" stroke="#60a5fa" strokeWidth="1.2" strokeDasharray="3 2" />
            <circle cx="12" cy="12" r="6" fill="none" stroke="#93c5fd" strokeWidth="0.8" strokeDasharray="2 3" />
          </svg>
        </div>
        <div className="dash-info">
          <h5>Système Solaire 3D — Simulation interactive complète</h5>
          <p>Three.js r0.184 · WebXR/VR · 8 planètes · lunes JSON · ceintures · sons spatialisés</p>
        </div>
        <a className="dash-launch" href="systeme-solaire/index.html" target="_blank" rel="noopener noreferrer">Ouvrir la simulation ↗</a>
      </div>
    </div>
  );
}
