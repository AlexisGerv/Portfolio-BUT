import React from 'react';

export const COMPETENCES = {
  DEV:   { key:"DEV",   label:"Développer",  color:"#3d5afe", ctx:"Cœur du parcours DWeb-DI : mes réalisations techniques majeures, du back-end industriel à l'hébergement." },
  COMP:  { key:"COMP",  label:"Comprendre",  color:"#0ea5a4", ctx:"Cadrer un projet, analyser un marché et traiter des données utilisateurs ou business." },
  CONC:  { key:"CONC",  label:"Concevoir",   color:"#8b5cf6", ctx:"La réflexion en amont, de la structuration d'une idée jusqu'aux choix ergonomiques." },
  EXPR:  { key:"EXPR",  label:"Exprimer",    color:"#f59e0b", ctx:"Mon profil créatif : direction artistique, rédaction éditoriale, data-design." },
  ENTR:  { key:"ENTR",  label:"Entreprendre",color:"#ef4444", ctx:"Autonomie, conformité légale, posture sécurité et gestion de projet en équipe." },
};

export const PROJECTS = [
  {
    id:"stage",
    index:"Projet 01 · Stage",
    title:"Logiciel industriel d'optimisation de découpe",
    sub:"CT Concept — Stage de 10 semaines · .NET / Blazor Server C#",
    rightTag:{label:"Stage", type:"type"},
    comps:["DEV","COMP","ENTR"],
    star:{
      s:"Stage de 10 semaines dans l'EURL d'informatique industrielle CT Concept. Découverte complète d'un univers métier technique complexe — la scierie — et d'un écosystème technologique totalement absent de la formation universitaire classique (.NET / Blazor Server C#).",
      t:"Concevoir, modéliser, intégrer et déployer l'interface, le modèle de données relationnel, les services applicatifs et les modules d'historique/impression d'un optimiseur industriel de découpe de grumes, destiné à être exploité en conditions réelles d'atelier de production.",
      a:"Immersion métier pour m'approprier le dictionnaire technique du domaine (Fin Bout, Gros Bout, tolérances de flache sur Parement Principal et Sous-Parement). Développement de toute l'IHM en C# avec Blazor Server et des communications temps réel bidirectionnelles via SignalR. Modélisation de la base relationnelle avec l'ORM Entity Framework Core. Optimisation graphique (Syncfusion Blazor) pour une lisibilité et un contraste maximums en milieu industriel poussiéreux et fortement éclairé. Refonte responsive complète pour PC industriels fixes et smartphones en mobilité. Déploiement manuel en production sur serveur Linux Debian (runtime .NET, reverse proxy Nginx en HTTPS/TLS, services Systemd). Résolution de bugs complexes assistée by IA (Claude Code, Codex) pour absorber le coût d'entrée de la syntaxe .NET.",
      r:"Logiciel métier stable et optimisé, livré et installé avec succès chez le client industriel final. Retours utilisateurs très positifs sur la rapidité d'usage et la lisibilité du rendu géométrique de la grume (plateaux matérialisés par des rectangles colorés). Validation solide de l'AC34.02 (framework côté serveur — Niveau 3).",
      eval:"Acquisition d'une forte autonomie technique et d'une aptitude à monter en compétences sur des stacks industrielles fermées.",
      axis:"Renforcer la gestion fine de la persistance de l'état (sessions serveurs SignalR) et durcir la cybersécurité applicative (permissions, rôles) — ce qui justifie mon choix de poursuite en Master Informatique.",
    },
    acs:[
      ["AC24.01","Produire des pages et applications Web responsives"],
      ["AC24.02","Mettre en place ou développer un back office"],
      ["AC24.04","Modéliser les traitements d'une application Web"],
      ["AC24.06","Configurer une solution d'hébergement adaptée"],
      ["AC25.01","Gérer un projet avec une méthode agile"],
      ["AC34.02","Développer avec un framework côté serveur (N3)"],
    ],
  },
  {
    id:"dataviz",
    index:"Projet 02 · SAÉ 3.03",
    title:"Tableau de bord interactif — Impact de l'IA (Dataviz)",
    sub:"Open data Kaggle · JavaScript natif (ES6+) & Plotly JS",
    rightTag:{label:"20/20", type:"grade"},
    comps:["DEV","EXPR","COMP"],
    star:{
      s:"Situation d'apprentissage universitaire : exploiter l'open data comme levier de communication et d'information en concevant un dispositif interactif moderne et fluide.",
      t:"Analyser et extraire les indicateurs pertinents d'un dataset CSV Kaggle volumineux sur l'impact socio-économique des IA génératives (2020-2025), puis développer un dashboard web interactif grand public mettant ces données en valeur.",
      a:"Tri, filtrage et nettoyage des données en JavaScript natif via des algorithmes d'agrégation statistique personnalisés par pays et secteurs. Intégration avancée de Plotly JS pour des modules visuels complexes : barres avec lignes de tendance, Box Plot de dispersion de rentabilité, Heatmap multidimensionnelle des secteurs, carte du monde choroplèthe de l'indice des pertes d'emplois. Interactions riches en front-end : compteurs animés via requestAnimationFrame, flux asynchrones via l'API Fetch, et fenêtres modales JS réinterrogeant Plotly pour redimensionner et afficher des analyses détaillées. Interface épurée et responsive en CSS3 sur la police Inter.",
      r:"Tableau de bord d'une grande rigueur statistique et visuelle, récompensé par la note maximale de 20/20. Illustration directe des capacités d'analyse de données (AC21.03) et de programmation d'interfaces riches (AC24.03).",
      eval:"Excellente prise en main de bibliothèques tierces de manipulation visuelle de données.",
      axis:"Pour la scalabilité et l'ajout de nouvelles visualisations, un développement en composants réutilisables avec un framework JavaScript (React, vu au S4) aurait été préférable au JS natif.",
    },
    acs:[
      ["AC21.03","Traiter des données avec des outils statistiques"],
      ["AC23.02","Définir une iconographie"],
      ["AC23.05","Produire pour une communication plurimédia"],
      ["AC23.06","Produire de la visualisation de données / 3D"],
      ["AC24.01","Produire des applications Web responsives"],
      ["AC24.03","Développer des interactions riches"],
    ],
  },
  {
    id:"bu",
    index:"Projet 03 · SAÉ 3.01",
    title:"Refonte d'interface — Application de la BU de l'IUT",
    sub:"UX/UI Design · User Research, Design System & wireframes",
    rightTag:{label:"SAÉ", type:"type"},
    comps:["CONC","EXPR","COMP"],
    star:{
      s:"Projet d'étude axé UX/UI : moderniser les parcours des services de la bibliothèque universitaire de l'IUT et optimiser la relation usager en convertissant les relances courriels en notifications mobiles instantanées.",
      t:"Mener la phase de recherche utilisateur, structurer l'architecture de l'information, et concevoir un Design System standardisé ainsi que tous les wireframes des écrans clés du dispositif mobile.",
      a:"Analyse quantitative des données de flux et d'affluence par demi-heure de la BU. Ateliers d'architecture de l'information par tri par cartes (Sorting) et structuration des insights en Affinity Map pour organiser l'arborescence (recherche, gestion des prêts, avis communautaires). Idéation papier rapide par l'atelier Six-to-One, puis sélection du concept final (One-Up). Modélisation rigoureuse des wireframes (Accueil, Recherche filtrée, Fiche produit). Élaboration complète d'un Design System : charte chromatique universitaire codifiée (bordeaux #9c2435, gris, blanc), hiérarchie typographique (Roboto) et bibliothèque d'icônes vectorielles personnalisées. Intégration de critères stricts d'accessibilité (thème sombre, mode daltonien).",
      r:"Livrable de conception UX/UI exhaustif et professionnel, prêt à être transmis à une équipe d'intégration front-end. Valide solidement la facette Design d'expérience et de service (AC21.05).",
      eval:"Assimilation rigoureuse des méthodologies de design centré utilisateur (UCD).",
      axis:"Le projet s'étant arrêté aux wireframes statiques, la suite logique aurait été de les transposer en prototype haute fidélité animé sous Figma, pour mener des tests de friction en conditions réelles.",
    },
    acs:[
      ["AC21.04","Identifier les parcours client (enquêtes terrain)"],
      ["AC21.05","Cartographier les expériences utilisateur"],
      ["AC22.02","Produire une recommandation ergonomique"],
      ["AC23.02","Définir une iconographie"],
      ["AC23.03","Créer et décliner une identité visuelle"],
    ],
  },
  {
    id:"vald",
    index:"Projet 04 · SAÉ 3.02",
    title:"Stratégie plurimédia & dossier de presse — Projet Vald",
    sub:"Industries créatives & culturelles · Press kit 11 pages",
    rightTag:{label:"SAÉ", type:"type"},
    comps:["CONC","EXPR","COMP","ENTR"],
    star:{
      s:"Simulation de commande professionnelle complexe : stratégie marketing globale et communication plurimédia dans les industries créatives et culturelles, avec une ouverture internationale obligatoire.",
      t:"Analyser l'écosystème juridique, managérial et de distribution d'un acteur majeur de l'industrie musicale (l'artiste Vald), puis concevoir et rédiger un dossier de presse professionnel pour le lancement articulé de ses albums Pandémonium et Magnificat.",
      a:"Analyse des structures porteuses (label indépendant Échelon Records, distribution Sony Music / Hall Access, management externe Merkus). Étude documentaire de la mutation de l'univers de marque de l'artiste (transition sémantique entre l'obscurité de Pandémonium, mars 2025, et le renouveau lumineux de Magnificat lancé par surprise à l'Accor Arena). Direction artistique et mise en page éditoriale d'un document numérique de 11 pages, aux codes graphiques épurés et percutants du secteur urbain actuel. Rédaction journalistique et contenus plurimédias : biographie narrative sourcée, tracklist augmentée et commentée, chroniques de singles, et annuaire de contacts ciblant les programmateurs de festivals et le booking international (Live Nation).",
      r:"Dossier de presse hautement qualitatif et rigoureux, validé pour son réalisme économique et son adéquation aux pratiques des labels et agences de presse musicale. Preuve directe d'aptitude à formuler une recommandation stratégique (AC22.03).",
      eval:"Développement d'un sens aigu de l'identité de marque (branding) et de la communication.",
      axis:"Pour approfondir l'ouverture internationale, la suite aurait été de décliner le kit média en version anglophone intégrale et d'intégrer un site vitrine « Web Press Kit » interactif pour le téléchargement des assets HD par la presse étrangère.",
    },
    acs:[
      ["AC21.01","Analyser la stratégie de communication / marketing"],
      ["AC22.03","Co-construire une recommandation stratégique"],
      ["AC23.01","Produire un écrit journalistique sourcé"],
      ["AC23.04","Écrire et scénariser pour le transmédia"],
      ["AC23.05","Produire pour une communication plurimédia"],
      ["AC25.04","Collaborer au sein des organisations"],
    ],
  },
  {
    id:"solaire",
    index:"Projet 06 · SAÉ S4",
    title:"Système Solaire 3D & Réalité Virtuelle",
    sub:"Three.js r0.184 · Vite · WebXR / VR natif — JavaScript ES6+ POO",
    rightTag:{label:"SAÉ", type:"type"},
    comps:["DEV","COMP","EXPR","ENTR"],
    star:{
      s:"SAÉ de Semestre 4 — réaliser une expérience web immersive exploitant les capacités graphiques natives du navigateur sans plugin. Le défi : rendre un système solaire scientifiquement cohérent (données astrophysiques réelles) lisible à l'œil et navigable en réalité virtuelle native via WebXR, avec des contraintes fortes de performance (FPS stables en WebGL).",
      t:"Concevoir et développer de A à Z, en JavaScript ES6+ pur, une application 3D interactive complète : huit planètes, soixante-sept lunes majeures (données JSON réelles en km et jours), deux ceintures d'astéroïdes en InstancedMesh, un mode VR immersif avec cockpit de vaisseau LIGHTSPEED et effets hyperespace — le tout architecturé en POO modulaire via Vite.",
      a:"Architecture orientée objet rigoureuse : classe parente Astre définissant la hiérarchie pivot → anchor → tilt → mesh (le pivot gère l'orbite, l'anchor sert d'accroche pour les satellites). Chaque planète hérite d'Astre avec ses paramètres en dur, Saturne surchargeant init() pour ses anneaux. Intégration WebXR via renderer.setAnimationLoop() (requis pour la compatibilité VR), cockpit 3D LIGHTSPEED avec contrôleurs VR natifs et effet de distorsion hyperspeed au saut. Gestion de données réelles : info_planete.json avec distances en km et périodes orbitales en jours pour les lunes de Jupiter et Saturne, mappées en unités de scène via un algorithme logarithmique (log10) pour préserver la lisibilité des orbites. Performance : InstancedMesh pour 1 500 astéroïdes répartis sur deux ceintures, ombres PCFSoftShadowMap désactivées sur les lunes JSON pour éviter l'effondrement des FPS. Environnement immersif : fond étoilé équirectangulaire 8K Voie Lactée, textures planétaires 2K, anneaux de Saturne avec canal alpha.",
      r:"Application 3D et VR entièrement fonctionnelle, architecturée de façon propre et maintenable, prouvant la capacité à maîtriser un écosystème technique exigeant (Three.js, WebXR, Vite) sans framework UI. La scène reste fluide sur desktop et se transpose en expérience de réalité virtuelle à la première personne depuis tout casque WebXR compatible. La modularité des classes planètes (ajout d'un astre = une classe de 10 lignes) démontre une conception orientée maintenabilité.",
      eval:"Forte montée en compétences en programmation 3D temps réel et en gestion de la performance WebGL. Maîtrise confirmée d'une bibliothèque spécialisée (Three.js) et du pipeline WebXR dans un contexte purement navigateur — sans serveur ni back-end.",
      axis:"L'étape suivante serait d'ajouter des shaders GLSL custom (atmosphères planétaires, halos stellaires) et un HUD contextuel en réalité virtuelle (panneau flottant d'informations sur la planète visée), ce qui nécessiterait d'explorer Troika-three-text ou un système de sprites HTML intégrés à la scène XR.",
    },
    acs:[
      ["AC24.03","Développer des interactions riches & dispositifs interactifs (WebXR/VR)"],
      ["AC21.03","Traiter des données avec des outils statistiques / JSON réels"],
      ["AC21.05","Cartographier les expériences utilisateur (UX anti-cinétose VR)"],
      ["AC23.06","Produire de la 3D / animation / visualisation de données"],
      ["AC25.04","Collaborer au sein des organisations (architecture modulaire, Git)"],
    ],
  },
  {
    id:"cyber",
    index:"Projet 05 · Projet personnel",
    title:"Hardening & sécurisation d'infrastructure serveur",
    sub:"Home Lab Docker / Linux · Raspberry Pi 5 NVMe",
    rightTag:{label:"Perso", type:"type"},
    comps:["DEV","COMP","ENTR"],
    star:{
      s:"Projet d'initiative personnelle : concevoir, assembler et administrer en totale autonomie une infrastructure de serveurs domestiques sécurisée (Home Lab sur Raspberry Pi 5 + stockage NVMe) pour héberger mes portfolios numériques et services web de manière cloisonnée.",
      t:"Automatiser l'orchestration des conteneurs, centraliser la répartition des charges réseau (reverse proxy), durcir le système Linux contre les vecteurs d'attaque (hardening) et gérer strictement les accès des collaborateurs administratifs externes.",
      a:"Conteneurisation et cloisonnement applicatif via Docker et Docker Compose pour isoler les variables d'environnement. Déploiement de Portainer et de Nginx Proxy Manager comme reverse proxy centralisant le trafic entrant et automatisant le chiffrement SSL/TLS via Let's Encrypt. Durcissement du démon SSH (changement du port par défaut, restriction des groupes autorisés, blocage des mots de passe au profit exclusif de clés asymétriques Ed25519/RSA). Scripts Bash d'automatisation pour auditer les journaux système, purger les logs et orchestrer des sauvegardes chiffrées. Conformité et confidentialité logicielle : blocage de la télémétrie de mes outils de code (extension Codex VS Code).",
      r:"Une infrastructure serveur isolée, résiliente, fonctionnelle et conforme aux recommandations fondamentales de l'ANSSI pour la sécurisation des architectures Linux. Validation évidente de l'AC24.06 (hébergement).",
      eval:"Démonstration d'aptitudes solides en administration système, indispensables à la légitimité d'un développeur full-stack.",
      axis:"Le projet s'étant concentré sur la configuration en CLI, l'étape suivante serait d'intégrer un scanner de vulnérabilités (type Trivy pour les conteneurs) et un monitoring centralisé (Grafana / Prometheus) pour cartographier en temps réel les alertes et tentatives d'intrusion.",
    },
    acs:[
      ["AC24.06","Configurer une solution d'hébergement adaptée"],
      ["AC25.02","Cartographier un écosystème"],
      ["AC25.06","Prendre en compte les contraintes juridiques & de sécurité"],
    ],
  },
];

export const RECAP = [
  { comp:"DEV", rows:[
    ["AC24.01","Produire des pages et applications Web responsives","<b>Stage</b> : refonte responsive de l'IHM pour écrans tactiles industriels et smartphones. · <b>SAÉ 3.03</b> : grille fluide CSS3 (Inter) pour la lisibilité des graphiques Plotly sur mobile."],
    ["AC24.02","Mettre en place ou développer un back office","<b>Stage</b> : interface d'administration pour configurer dimensions et prix des produits bois sans perte d'historique."],
    ["AC24.03","Intégrer des interactions riches","<b>SAÉ 3.03</b> : compteurs KPI animés (requestAnimationFrame), requêtes Fetch asynchrones, modales JS réinterrogeant Plotly. · <b>SAÉ S4 (Système Solaire)</b> : boucle WebXR setAnimationLoop, contrôleurs VR natifs, cockpit 3D LIGHTSPEED et effet hyperespace."],
    ["AC24.04","Modéliser les traitements d'une application Web","<b>Stage</b> : architecture en couches sous Blazor Server, liaison bidirectionnelle SignalR, mapping SQL via Entity Framework Core."],
    ["AC24.06","Configurer une solution d'hébergement","<b>Projet Cyber</b> : Home Lab Debian sur Raspberry Pi 5 (Nginx Proxy Manager, Portainer). · <b>Stage</b> : déploiement sur serveur Debian (Nginx, HTTPS/TLS, Systemd)."],
    ["AC34.02","Développer avec un framework côté serveur (N3)","<b>Stage</b> : maîtrise avancée de C# .NET et Blazor Server pour un logiciel lourd dépassant le cadre étudiant classique."],
  ]},
  { comp:"COMP", rows:[
    ["AC21.01","Analyser la stratégie marketing d'une organisation","<b>SAÉ 3.02 (Vald)</b> : analyse de l'écosystème commercial du rap français (Échelon Records, Sony Music / Hall Access, Merkus)."],
    ["AC21.03","Traiter des données avec des outils statistiques","<b>SAÉ 3.03</b> : agrégation d'un dataset Kaggle, indice de corrélation chômage/automatisation. · <b>SAÉ 3.01</b> : Heatmap des heures d'affluence de la BU. · <b>SAÉ S4 (Système Solaire)</b> : données JSON astrophysiques réelles (distances en km, périodes en jours), mapping logarithmique vers les unités de scène."],
    ["AC21.04 · AC21.05","Identifier les parcours & cartographier l'UX","<b>SAÉ 3.01</b> : atelier de tri par cartes et Affinity Map. · <b>Stage</b> : immersion métier en scierie pour comprendre les frictions des opérateurs. · <b>SAÉ S4 (Système Solaire)</b> : conception du HUD VR et du tutoriel de vol pour limiter les effets de cinétose."],
  ]},
  { comp:"CONC", rows:[
    ["AC22.02","Produire une recommandation ergonomique","<b>SAÉ 3.01</b> : recherche conceptuelle papier (Six-to-One) puis modélisation du concept retenu en wireframes."],
    ["AC22.03","Co-construire une recommandation stratégique","<b>SAÉ 3.02 (Vald)</b> : plan d'action plurimédia structuré autour de la dualité artistique (Pandémonium vs Magnificat)."],
  ]},
  { comp:"EXPR", rows:[
    ["AC23.01","Produire un écrit journalistique sourcé","<b>SAÉ 3.02 (Vald)</b> : biographies d'artistes, chroniques musicales et communiqués de presse ciblés."],
    ["AC23.02 · AC23.03","Définir une iconographie & créer une identité visuelle","<b>SAÉ 3.01</b> : Design System (icônes vectorielles, bordeaux #9c2435, sémantique Roboto). · <b>SAÉ 3.02</b> : dossier de presse 11 pages, esthétique brute du rap contemporain."],
    ["AC23.05 · AC23.06","Produire pour une communication plurimédia / data-design / 3D","<b>SAÉ 3.03</b> : data-design de pointe (choroplèthe, box plot, heatmap) pour vulgariser un enjeu technologique mondial. · <b>SAÉ S4 (Système Solaire)</b> : scène 3D complète temps réel (textures 2K, anneaux Saturne canal alpha, 1 500 astéroïdes InstancedMesh, fond Voie Lactée 8K) et environnement sonore spatialisé."],
  ]},
  { comp:"ENTR", rows:[
    ["AC25.01","Gérer un projet avec amélioration continue","<b>Stage</b> : développement itératif en binôme, intégration continue des fonctionnalités basée sur les tests internes."],
    ["AC25.04","Collaborer au sein des organisations","<b>Stage</b> : collaboration Agile, gestion rigoureuse des commits et merges Git avec Thibault. · <b>SAÉ 3.01 / 3.02</b> : équipes projet avec répartition des tâches. · <b>SAÉ S4 (Système Solaire)</b> : architecture modulaire Vite, POO ES6+ avec héritage, commits Git descriptifs en français."],
    ["AC25.06","Prendre en compte les contraintes juridiques & de sécurité","<b>Projet Cyber</b> : durcissement ANSSI — clés SSH asymétriques, blocage de télémétrie, isolation Docker, certificats TLS."],
  ]},
];

export const GALLERIES = {
  stage: {
    intro: "Captures du logiciel livré chez CT Concept (extraites de mon rapport de stage).",
    shots: [
      ["assets/stage-1.jpg", "Vue Optimisation", "La grume (ellipse) découpée en plateaux colorés, rendement matière calculé en direct (44,7 %)."],
      ["assets/stage-2.jpg", "Tableau de bord", "Suivi de production et indicateurs côté serveur."],
      ["assets/stage-3.jpg", "Back office", "Configuration des produits bois (dimensions, prix, classes)."],
      ["assets/stage-4.jpg", "Responsive mobile", "La même interface adaptée au smartphone en mobilité d'atelier."],
    ]
  },
  dataviz: {
    intro: "Graphiques regénérés depuis mon dataset Kaggle (200 obs.), palette Plotly « Blues » d'origine.",
    shots: [
      ["assets/dv-1.jpg", "Heatmap secteurs", "Indicateurs IA moyens (adoption, emploi, revenus, confiance) par secteur."],
      ["assets/dv-2.jpg", "Box plot", "Dispersion de l'impact revenus selon l'outil d'IA utilisé."],
    ]
  },
  bu: {
    intro: "Livrables UX/UI de la refonte de l'appli de la BU de l'IUT (SAÉ 3.01).",
    shots: [
      ["assets/bu-1.jpg", "Wireframe — Accueil", "Écran d'accueil et navigation principale."],
      ["assets/bu-2.jpg", "Wireframe — Recherche", "Recherche filtrée et listes de résultats."],
      ["assets/bu-3.jpg", "Wireframe — Fiche", "Fiche ouvrage et actions d'emprunt."],
      ["assets/bu-4.jpg", "Design System", "Grille de pictogrammes vectoriels personnalisés."],
      ["assets/bu-5.jpg", "Idéation papier", "Ateliers Six-to-One / One-Up de recherche conceptuelle."],
    ]
  },
  vald: {
    intro: "Pages du dossier de presse Vald · Magnificat (SAÉ 3.02), 11 sections.",
    shots: [
      ["assets/vald-1.jpg", "Couverture", "Vald · Magnificat — direction artistique et date de sortie."],
      ["assets/vald-2.jpg", "Sommaire & biographie", "Mise en page éditoriale, photo d'artiste, sommaire des 11 sections."],
      ["assets/vald-3.jpg", "Album & tracklist", "Présentation de l'album et tracklist commentée."],
    ]
  },
};

export const PDFS = {
  stage: {
    file: "docs/rapport-stage-ctconcept.pdf",
    pages: "≈ 30 pages",
    note: "Le rapport de stage complet remis au jury, consultable directement ci-dessous : contexte CT Concept, architecture .NET / Blazor Server, choix techniques et déploiement en production."
  },
  vald: {
    file: "docs/dossier-presse-vald.pdf",
    pages: "11 pages",
    note: "Le dossier de presse intégral (11 pages), feuilletable ci-dessous : direction artistique, biographie sourcée, tracklist commentée et annuaire de contacts presse."
  },
  bu: {
    file: "docs/refonte-bu-sae301.pdf",
    pages: "livrable complet",
    note: "Le livrable UX/UI complet de la refonte de l'appli de la BU, consultable ci-dessous : recherche utilisateur, tri par cartes et Affinity Map, wireframes et Design System (charte bordeaux, iconographie, accessibilité)."
  },
};

export const PV_TAGS = {
  stage: "Rapport de stage · PDF",
  dataviz: "Démo live · nouvel onglet",
  bu: "Livrable UX/UI · PDF",
  vald: "Dossier de presse · PDF",
  cyber: "Schéma interactif",
  solaire: "Simulation interactive"
};

export const PV_HEADS = {
  stage: "Document source",
  dataviz: "Démo interactive",
  bu: "Document source",
  vald: "Document source",
  cyber: "Aperçu interactif",
  solaire: "Aperçu animé"
};

export const DV = {
  sect: {
    title: "Adoption de l'IA par secteur (%)",
    max: 65,
    data: [["Gaming", 60.4], ["Manufacturing", 57.0], ["Éducation", 57.0], ["Legal", 56.1], ["Finance", 55.8], ["Santé", 55.7], ["Automobile", 54.9], ["Marketing", 54.2], ["Retail", 47.9], ["Média", 47.3]]
  },
  job: {
    title: "Pertes d'emploi dues à l'IA, par pays (%)",
    max: 34,
    data: [["Canada", 31.0], ["Chine", 29.1], ["Allemagne", 28.1], ["UK", 27.1], ["France", 26.5], ["Corée du Sud", 25.5], ["Japon", 25.5], ["Inde", 25.2], ["USA", 20.7], ["Australie", 18.8]]
  },
  year: {
    title: "Confiance des consommateurs, par année (%)",
    max: 65,
    data: [["2020", 59.2], ["2021", 59.9], ["2022", 59.4], ["2023", 62.3], ["2024", 58.1], ["2025", 57.9]]
  },
};

export const CY_NODES = {
  net: {
    label: "Internet",
    detail: (
      <span>
        <b>Surface d'exposition.</b> Seul le port 443 (HTTPS) est ouvert vers l'extérieur. SSH déplacé sur un port non standard, mots de passe désactivés au profit de clés <b>Ed25519</b>.
      </span>
    )
  },
  npm: {
    label: "Reverse Proxy",
    detail: (
      <span>
        <b>Nginx Proxy Manager.</b> Centralise tout le trafic entrant et automatise le chiffrement <b>SSL/TLS via Let's Encrypt</b> pour chaque service exposé.
      </span>
    )
  },
  docker: {
    label: "Conteneurs Docker",
    detail: (
      <span>
        <b>Cloisonnement applicatif.</b> Chaque service isolé via Docker Compose (variables d'environnement séparées). Orchestration et supervision par <b>Portainer</b>.
      </span>
    )
  },
  host: {
    label: "Raspberry Pi 5",
    detail: (
      <span>
        <b>Hôte durci (hardening ANSSI).</b> Démon SSH restreint, scripts Bash d'audit des journaux, sauvegardes chiffrées, télémétrie des outils de code bloquée.
      </span>
    )
  },
};
