import React, { useState } from 'react';

const BORD = "#9c2435";

export default function BUWireframe() {
  const [tab, setTab] = useState("home");
  const screens = {
    home: (
      <g>
        <rect x="0" y="0" width="170" height="46" fill={BORD} />
        <text x="14" y="29" fill="#fff" fontSize="13" fontWeight="700" fontFamily="Inter">BU · IUT</text>
        <rect x="14" y="60" width="142" height="30" rx="8" fill="#eef0f3" />
        <text x="24" y="79" fill="#9aa1ad" fontSize="9.5" fontFamily="Inter">Rechercher un ouvrage…</text>
        <rect x="14" y="104" width="68" height="58" rx="9" fill="#f6f7f9" stroke="#e6e8ec" />
        <rect x="88" y="104" width="68" height="58" rx="9" fill="#f6f7f9" stroke="#e6e8ec" />
        <circle cx="30" cy="124" r="9" fill={BORD} opacity=".15" /><circle cx="104" cy="124" r="9" fill={BORD} opacity=".15" />
        <rect x="20" y="140" width="40" height="6" rx="2" fill="#c7ccd3" /><rect x="94" y="140" width="40" height="6" rx="2" fill="#c7ccd3" />
        <text x="14" y="186" fill="#15171c" fontSize="11" fontWeight="700" fontFamily="Inter">Mes prêts</text>
        <rect x="14" y="196" width="142" height="40" rx="9" fill="#fff" stroke="#e6e8ec" />
        <rect x="24" y="208" width="80" height="7" rx="2" fill="#c7ccd3" />
        <rect x="24" y="220" width="46" height="6" rx="2" fill="#e6e8ec" />
        <rect x="118" y="206" width="28" height="20" rx="6" fill={BORD} opacity=".9" />
      </g>
    ),
    search: (
      <g>
        <rect x="0" y="0" width="170" height="40" fill="#fff" />
        <rect x="14" y="10" width="142" height="22" rx="7" fill="#eef0f3" />
        <text x="22" y="25" fill="#6b7280" fontSize="9.5" fontFamily="Inter">design d'expérience</text>
        <rect x="14" y="50" width="58" height="22" rx="999" fill={BORD} /><text x="26" y="65" fill="#fff" fontSize="9" fontFamily="Inter">Disponible</text>
        <rect x="80" y="50" width="44" height="22" rx="999" fill="#eef0f3" /><text x="90" y="65" fill="#6b7280" fontSize="9" fontFamily="Inter">2024+</text>
        {[0, 1, 2, 3].map(function (i) {
          return (
            <g key={i} transform={"translate(14," + (86 + i * 58) + ")"}>
              <rect width="142" height="48" rx="9" fill="#fff" stroke="#e6e8ec" />
              <rect x="10" y="10" width="28" height="28" rx="5" fill={BORD} opacity={0.12 + i * 0.04} />
              <rect x="48" y="12" width="84" height="7" rx="2" fill="#c7ccd3" />
              <rect x="48" y="25" width="58" height="6" rx="2" fill="#e6e8ec" />
            </g>
          );
        })}
      </g>
    ),
    item: (
      <g>
        <rect x="0" y="0" width="170" height="120" fill={BORD} opacity=".12" />
        <rect x="56" y="24" width="58" height="76" rx="6" fill="#fff" stroke="#e6e8ec" />
        <rect x="64" y="34" width="42" height="7" rx="2" fill={BORD} opacity=".5" />
        <text x="14" y="146" fill="#15171c" fontSize="13" fontWeight="700" fontFamily="Inter">L'UX au quotidien</text>
        <rect x="14" y="156" width="80" height="6" rx="2" fill="#c7ccd3" />
        <rect x="14" y="178" width="142" height="1" fill="#e6e8ec" />
        <rect x="14" y="190" width="142" height="13" rx="2" fill="#eef0f3" />
        <rect x="14" y="208" width="120" height="13" rx="2" fill="#eef0f3" />
        <rect x="14" y="226" width="134" height="13" rx="2" fill="#eef0f3" />
        <rect x="14" y="286" width="142" height="34" rx="9" fill={BORD} />
        <text x="50" y="307" fill="#fff" fontSize="11" fontWeight="700" fontFamily="Inter">Emprunter</text>
      </g>
    ),
  };
  return (
    <div className="preview-stage">
      <div className="pv-tabs">
        <button className={"pv-tab " + (tab === "home" ? "on" : "")} onClick={function () { setTab("home"); }}>Accueil</button>
        <button className={"pv-tab " + (tab === "search" ? "on" : "")} onClick={function () { setTab("search"); }}>Recherche</button>
        <button className={"pv-tab " + (tab === "item" ? "on" : "")} onClick={function () { setTab("item"); }}>Fiche ouvrage</button>
      </div>
      <div className="pv-phone-wrap">
        <div className="pv-phone">
          <div className="pv-screen">
            <svg viewBox="0 0 170 330" style={{ width: "100%", height: "100%", display: "block" }}>{screens[tab]}</svg>
          </div>
        </div>
        <div className="pv-phone-side">
          <h5>Design System — BU de l'IUT</h5>
          <p>Wireframes des écrans clés issus du tri par cartes et de l'Affinity Map. Charte chromatique universitaire codifiée, typographie Roboto, mode sombre et daltonien intégrés.</p>
          <div className="pv-swatch">
            <i style={{ background: BORD }} title="Bordeaux #9c2435"></i>
            <i style={{ background: "#6b7280" }} title="Gris"></i>
            <i style={{ background: "#f6f7f9" }} title="Fond"></i>
            <i style={{ background: "#15171c" }} title="Encre"></i>
          </div>
          <p style={{ marginTop: 8, fontSize: 12 }} className="mono">{BORD}</p>
        </div>
      </div>
    </div>
  );
}
