import React, { useState } from 'react';
import PdfViewer from './PdfViewer';

const PC_SCREENS = [
  {
    src: "assets/capture-stage/pc/Page d'accueil.png",
    title: "Page d'accueil",
    desc: "Tableau de bord principal de l'application permettant d'importer et de sélectionner les lots de grumes à traiter."
  },
  {
    src: "assets/capture-stage/pc/Génération vide.png",
    title: "Initialisation du calcul",
    desc: "Interface de configuration d'un nouveau débit avant le lancement de l'algorithme d'optimisation."
  },
  {
    src: "assets/capture-stage/pc/Génération avec tous les produits possibles.png",
    title: "Génération de plateaux",
    desc: "Calcul de l'ensemble des combinaisons et configurations possibles de découpes pour le lot sélectionné."
  },
  {
    src: "assets/capture-stage/pc/Optimisation avec schéma.png",
    title: "Optimisation de découpe interactive",
    desc: "Représentation graphique en coupe d'une grume avec placement optimal des planches et calcul instantané du rendement matière."
  },
  {
    src: "assets/capture-stage/pc/Optimisation sans schéma.png",
    title: "Résultats de l'optimisation",
    desc: "Tableau récapitulatif des dimensions, volumes et rendements pour chaque plateau optimisé."
  },
  {
    src: "assets/capture-stage/pc/impression de l'optimisation.png",
    title: "Fiche de débit imprimable",
    desc: "Mise en page optimisée pour l'impression physique des consignes de découpe destinées à l'atelier."
  },
  {
    src: "assets/capture-stage/pc/gestion des produits.png",
    title: "Gestion du catalogue",
    desc: "Back-office de paramétrage des dimensions de produits bois standard (largeurs, épaisseurs, qualités et tarifs)."
  },
  {
    src: "assets/capture-stage/pc/Galérie des Générations.png",
    title: "Historique des optimisations",
    desc: "Archivage et consultation rapide des anciennes simulations de découpes enregistrées."
  },
  {
    src: "assets/capture-stage/pc/Histogramme de la génération.png",
    title: "Statistiques de rendement",
    desc: "Analyse graphique et histogramme de répartition des épaisseurs découpées pour évaluer la productivité."
  },
  {
    src: "assets/capture-stage/pc/Paramètre .png",
    title: "Paramètres de l'application",
    desc: "Configuration globale des règles de calcul de l'algorithme (jeux de lame, tolérances, coefficients d'optimisation)."
  }
];

const MOBILE_SCREENS = [
  {
    src: "assets/capture-stage/mobile/Capture d'écran 2026-05-04 183711.png",
    title: "Menu principal mobile",
    desc: "Interface d'accueil ergonomique adaptée pour un usage tactile rapide par les opérateurs d'atelier."
  },
  {
    src: "assets/capture-stage/mobile/Capture d'écran 2026-05-04 183727.png",
    title: "Préférences système",
    desc: "Réglages rapides et options d'affichage sur smartphone."
  },
  {
    src: "assets/capture-stage/mobile/Capture d'écran 2026-05-04 183736.png",
    title: "Paramètres de grume",
    desc: "Saisie mobile simplifiée des dimensions de la grume (diamètre, ovalité, courbure)."
  },
  {
    src: "assets/capture-stage/mobile/Capture d'écran 2026-05-04 183751.png",
    title: "Schéma de découpe mobile",
    desc: "Visualisation responsive de la section de coupe directement sur le terrain."
  },
  {
    src: "assets/capture-stage/mobile/Capture d'écran 2026-05-04 183811.png",
    title: "Rendement global",
    desc: "Indicateurs clés de performance et de volume de bois valorisé après calcul."
  },
  {
    src: "assets/capture-stage/mobile/Capture d'écran 2026-05-04 183825.png",
    title: "Détails des découpes",
    desc: "Liste de débit défilable et lisible sur écran vertical pour guider le sciage."
  },
  {
    src: "assets/capture-stage/mobile/Capture d'écran 2026-05-04 183850.png",
    title: "Historique mobile",
    desc: "Recherche et consultation à distance des anciens débits calculés."
  }
];

export default function StagePreview() {
  const [activeTab, setActiveTab] = useState("pc"); // "pc" | "mobile" | "pdf"
  const [pcIdx, setPcIdx] = useState(0);
  const [mobIdx, setMobIdx] = useState(0);

  const nextPc = () => setPcIdx((pcIdx + 1) % PC_SCREENS.length);
  const prevPc = () => setPcIdx((pcIdx - 1 + PC_SCREENS.length) % PC_SCREENS.length);

  const nextMob = () => setMobIdx((mobIdx + 1) % MOBILE_SCREENS.length);
  const prevMob = () => setMobIdx((mobIdx - 1 + MOBILE_SCREENS.length) % MOBILE_SCREENS.length);

  return (
    <div className="preview-stage stage-custom-preview">
      <div className="pv-tabs">
        <button 
          className={"pv-tab " + (activeTab === "pc" ? "on" : "")} 
          onClick={function () { setActiveTab("pc"); }}
        >
          Captures d'écran (PC)
        </button>
        <button 
          className={"pv-tab " + (activeTab === "mobile" ? "on" : "")} 
          onClick={function () { setActiveTab("mobile"); }}
        >
          Captures d'écran (Mobile)
        </button>
        <button 
          className={"pv-tab " + (activeTab === "pdf" ? "on" : "")} 
          onClick={function () { setActiveTab("pdf"); }}
        >
          Rapport PDF
        </button>
      </div>

      {activeTab === "pc" && (
        <div className="pc-carousel-wrap">
          {/* Web Browser Frame Mockup */}
          <div className="browser-mockup">
            <div className="browser-header">
              <div className="browser-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </div>
              <div className="browser-url">ctconcept-optimiseur.local/simulation</div>
              <div className="browser-actions"></div>
            </div>
            <div className="browser-body">
              <div className="carousel-main-container">
                <button className="carousel-arrow prev" onClick={prevPc} aria-label="Précédent">
                  ‹
                </button>
                <div className="carousel-image-holder">
                  <img 
                    src={PC_SCREENS[pcIdx].src} 
                    alt={PC_SCREENS[pcIdx].title} 
                    className="carousel-img"
                    loading="lazy" 
                  />
                </div>
                <button className="carousel-arrow next" onClick={nextPc} aria-label="Suivant">
                  ›
                </button>
              </div>
            </div>
          </div>

          <div className="carousel-info">
            <div className="info-header">
              <h4>{PC_SCREENS[pcIdx].title}</h4>
              <span className="slide-counter">{pcIdx + 1} / {PC_SCREENS.length}</span>
            </div>
            <p className="slide-desc">{PC_SCREENS[pcIdx].desc}</p>
          </div>

          {/* Thumbnails strip */}
          <div className="carousel-thumbnails">
            {PC_SCREENS.map((screen, idx) => (
              <button 
                key={idx} 
                className={"carousel-thumb-btn " + (idx === pcIdx ? "on" : "")}
                onClick={function () { setPcIdx(idx); }}
                title={screen.title}
              >
                <img src={screen.src} alt={screen.title} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}

      {activeTab === "mobile" && (
        <div className="mobile-carousel-wrap">
          <div className="pv-phone-wrap">
            {/* Phone Frame Mockup */}
            <div className="pv-phone mockup-phone">
              <div className="pv-screen">
                {/* Phone Speaker notch */}
                <div className="phone-notch"></div>
                <div className="phone-screen-container">
                  <img 
                    src={MOBILE_SCREENS[mobIdx].src} 
                    alt={MOBILE_SCREENS[mobIdx].title} 
                    className="phone-img"
                    loading="lazy"
                  />
                  
                  {/* Floating nav buttons directly on the phone screen */}
                  <button className="phone-arrow prev" onClick={prevMob} aria-label="Précédent">‹</button>
                  <button className="phone-arrow next" onClick={nextMob} aria-label="Suivant">›</button>
                </div>
              </div>
            </div>

            <div className="pv-phone-side">
              <div className="info-header">
                <h5>{MOBILE_SCREENS[mobIdx].title}</h5>
                <span className="slide-counter">{mobIdx + 1} / {MOBILE_SCREENS.length}</span>
              </div>
              <p>{MOBILE_SCREENS[mobIdx].desc}</p>
              
              <div className="mobile-thumbs-grid">
                {MOBILE_SCREENS.map((screen, idx) => (
                  <button
                    key={idx}
                    className={"mobile-thumb-btn " + (idx === mobIdx ? "on" : "")}
                    onClick={function () { setMobIdx(idx); }}
                    title={screen.title}
                  >
                    <img src={screen.src} alt={screen.title} loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "pdf" && (
        <div className="stage-pdf-wrap">
          <PdfViewer id="stage" />
        </div>
      )}
    </div>
  );
}
