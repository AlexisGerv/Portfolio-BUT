import React from 'react';

export const COMPETENCES = {
  DEV:   { key:"DEV",   label:"Développer",  color:"#3d5afe", ctx:"Cœur du parcours DWeb-DI : réalisations techniques, du back-end industriel à l'hébergement." },
  COMP:  { key:"COMP",  label:"Comprendre",  color:"#0ea5a4", ctx:"Cadrer un projet, analyser un marché et traiter des données utilisateurs ou business." },
  CONC:  { key:"CONC",  label:"Concevoir",   color:"#8b5cf6", ctx:"La réflexion en amont, de la structuration d'une idée jusqu'aux choix ergonomiques." },
  EXPR:  { key:"EXPR",  label:"Exprimer",    color:"#f59e0b", ctx:"Direction artistique, rédaction éditoriale, data-design." },
  ENTR:  { key:"ENTR",  label:"Entreprendre",color:"#ef4444", ctx:"Autonomie, posture sécurité et gestion de projet." },
};

export const PROJECTS = [
  {
    id:"stage",
    index:"Projet 01 · Stage",
    title:"Logiciel industriel d'optimisation de découpe",
    sub:"CT Concept - 10 semaines · Développement web · Dijon",
    rightTag:{label:"Stage", type:"type"},
    comps:["DEV","COMP","ENTR"],
    techs: ["cs", "sql", "blazor", "linux", "git", "nginx"],
    star:{
      s:"CT Concept est une micro-entreprise spécialisée dans le développement d'applications pour les scieries. Son gérant, Cyril Tripier, avait déjà conçu la logique métier de son optimiseur de découpe, mais souhaitait lui donner une interface web accessible depuis n'importe quel appareil. Ne disposant pas des compétences pour le développement web, il a fait appel à un stagiaire pour concrétiser ce projet.",
      t:"J'ai pris en charge l'intégralité de la partie web en autonomie : concevoir l'interface, modéliser la base de données, développer les fonctionnalités métier, et déployer l'application en production. La contrainte était forte : le logiciel devait fonctionner en conditions réelles d'atelier, depuis un poste fixe comme depuis un smartphone. J'ai travaillé aux côtés de Thibault, le fils de Cyril, lui-même en alternance dans l'entreprise, ce qui a rendu la collaboration a la fois technique et humainement enrichissante. Par ailleurs, les technologies utilisées étaient entièrement nouvelles pour moi et absentes de ma formation.",
      a:"J'ai commencé par une immersion dans le vocabulaire du métier, indispensable pour comprendre les règles de découpe et dialoguer efficacement avec Cyril. J'ai ensuite conçu l'ensemble de l'interface en C# avec Blazor Server, un cadre de développement qui fait tourner la logique côté serveur et communique avec le navigateur en temps réel, permettant des mises à jour instantanées sans rechargement de page. J'ai modélisé la base de données relationnelle, intégré des modules d'historique et d'impression, et optimisé les performances pour que l'interface reste fluide sur mobile comme sur ordinateur. J'ai enfin déployé l'application sur un serveur Linux, en configurant manuellement le serveur web et la sécurité des connexions.",
      r:"L'application a été livrée, installée et mise en service avec succès, utilisable directement depuis Internet. Le logiciel est stable, optimisé, et répond aux contraintes d'un usage en production réelle. Ce projet illustre ma capacité à m'adapter rapidement à un environnement technique et métier totalement inconnu, et à mener un projet de bout en bout de façon autonome.",
      eval: (
        <>
          <p>Ce stage a été ma première confrontation réelle avec un environnement de développement professionnel que je ne maîtrisais pas du tout. Apprendre Blazor et C# en conditions réelles, sans filet, a été déstabilisant au départ, mais c'est aussi ce qui m'a le plus appris. Avoir la liberté d'avancer à mon rythme et de prendre des décisions techniques par moi-même m'a permis de développer une vraie autonomie, différente de ce qu'on acquiert en cours.</p>
          <p>Si je devais refaire ce projet, je commencerais par modéliser la base de données avant d'écrire la moindre ligne de code applicatif. Avec Thibault, on a sous-estimé cette étape au départ, ce qui nous a causé des problèmes en cascade plus tard. C'est une leçon que j'ai bien retenue : une base mal pensée au départ coûte beaucoup plus cher à corriger qu'à anticiper.</p>
        </>
      ),
      axis: "Sur la sécurité du serveur d'hébergement, j'aurais aimé aller un peu plus loin dans la configuration. C'est un domaine qui m'intéresse de plus en plus et sur lequel je me sens encore perfectible, et l'une des raisons qui orientent ma poursuite d'études vers la cybersécurité.",
    },
    acs:[
      ["AC24.01","Produire des pages et applications Web responsives"],
      ["AC24.02","Mettre en place ou développer un back office"],
      ["AC24.04","Modéliser les traitements d'une application Web"],
      ["AC24.06","Configurer une solution d'hébergement adaptée"],
      ["AC25.01","Gérer un projet avec une méthode d'amélioration continue"],
      ["AC25.04","Collaborer au sein des organisations"],
      ["AC34.02","Développer avec un framework côté serveur (N3)"],
    ],
  },
  {
    id:"dataviz",
    index:"Projet 02 · SAÉ 3.03",
    title:"SAÉ 303 - Dashboard Dataviz",
    sub:"Projet universitaire · Seul · BUT MMI",
    rightTag:{label:"SAÉ", type:"type"},
    comps:["DEV","EXPR","COMP"],
    techs: ["js", "htmlcss", "plotly"],
    star:{
      s:"La SAÉ 303 avait pour objectif de concevoir un dispositif interactif exploitant l'open data comme levier de communication et d'information. J'ai choisi de travailler sur un dataset Kaggle portant sur l'impact socio-économique des intelligences artificielles génératives entre 2020 et 2025, un sujet à la fois actuel et riche en indicateurs à croiser.",
      t:"Le défi était double : extraire les informations véritablement significatives d'un fichier CSV volumineux et hétérogène, puis les restituer sous une forme claire et engageante. Tout le traitement des données a été réalisé en JavaScript natif, sans bibliothèque externe, en développant des algorithmes d'agrégation statistique personnalisés pour croiser les données par pays et par secteur d'activité.",
      a:"La consigne imposait l'utilisation de Plotly.js pour les visualisations. J'en ai tiré le meilleur parti en construisant des graphiques avancés : barres avec lignes de tendance, diagrammes de dispersion de rentabilité, carte du monde représentant l'indice de pertes d'emploi par pays, et carte de chaleur multidimensionnelle des secteurs. L'interface propose également des compteurs animés, des chargements de données asynchrones et des fenêtres d'analyse détaillée qui s'ouvrent à la demande, le tout dans un design épuré et entièrement responsive.",
      r:"Le résultat est un tableau de bord autonome, rigoureux sur le plan statistique et soigné visuellement, qui transforme un jeu de données brut en un outil de lecture clair et interactif. Ce projet a consolidé mes compétences en analyse de données et en développement d'interfaces web riches, deux axes centraux de ma formation.",
      eval: "Ce projet a été l'un des plus fluides de ma formation. La prise en main de Plotly.js et la manipulation des données en JavaScript natif se sont faites rapidement, et j'ai pu me concentrer sur la qualité des visualisations plutôt que de lutter contre les outils.",
      axis: "En travaillant sur ce portfolio, j'ai réalisé qu'utiliser React aurait été un meilleur choix pour ce type de projet. Structurer le dashboard en composants réutilisables aurait rendu le code plus facile à faire évoluer et à maintenir, surtout pour ajouter de nouvelles visualisations. C'est une réflexion après coup, mais elle illustre bien comment les apprentissages du semestre 4 changent la façon dont je regarde mes projets précédents.",
    },
    acs:[
      ["AC21.03","Traiter des données avec des outils statistiques"],
      ["AC23.06","Produire de la visualisation de données / 3D"],
      ["AC24.01","Produire des applications Web responsives"],
      ["AC24.03","Développer des interactions riches"],
    ],
  },
  {
    id:"bu",
    index:"Projet 03 · SAÉ 3.01",
    title:"SAÉ 301 — Refonte UX/UI de la bibliothèque universitaire",
    sub:"Projet universitaire · Groupe de 4 · BUT MMI",
    rightTag:{label:"SAÉ", type:"type"},
    comps:["CONC","EXPR","COMP"],
    techs: [],
    star:{
      s:"La SAÉ 301 nous a placés face à un défi concret : repenser les parcours numériques de la bibliothèque universitaire de l'IUT, dont le dispositif de relances par courriel était jugé peu efficace. L'enjeu était de moderniser l'expérience usager en basculant vers une application mobile avec des notifications instantanées, plus adaptées aux habitudes actuelles des étudiants.",
      t:"Pour cadrer le projet, nous avons rencontré un membre de l'équipe de la BU, qui nous a transmis des données réelles de fréquentation par demi-heure et partagé ses attentes pour la refonte. À partir de ces éléments, nous avons mené des ateliers de recherche utilisateur : un tri par cartes sur Miro pour organiser les grandes rubriques de l'application, et une carte d'affinité pour structurer les insights recueillis. Cela nous a permis de définir une arborescence cohérente autour de trois axes : la recherche de ressources, la gestion des prêts et les avis communautaires.",
      a:"Nous avons ensuite enchaîné sur une phase d'idéation rapide avec l'atelier Six-to-One, avant de sélectionner et de raffiner le concept retenu. Nous avons produit les wireframes des écrans clés de l'application : accueil, recherche filtrée et fiche produit, en veillant à ce que chaque parcours soit logique et sans friction. L'ensemble de la documentation a été réalisé sur Canva.",
      r:"Le livrable final constitue un dossier de conception UX complet, couvrant toute la phase de recherche jusqu'aux wireframes finaux, directement exploitable par une équipe chargée de l'intégration. Ce projet nous a appris à structurer une démarche de design centrée utilisateur de bout en bout, depuis l'entretien terrain jusqu'aux spécifications des écrans, en travaillant en équipe avec des rôles et des livrables clairement répartis.",
      eval: "Ce projet m'a permis de découvrir les méthodologies de design centré utilisateur de façon structurée, en suivant une démarche encadrée par l'enseignant. Les ateliers comme le tri par cartes ou la carte d'affinité m'ont donné des outils concrets pour organiser une réflexion collective et justifier des choix d'architecture de l'information.",
      axis: "Le projet s'est arrêté aux wireframes, comme prévu dans la consigne. La suite logique aurait été de les faire évoluer vers un prototype interactif pour tester les parcours en conditions réelles, ce que la contrainte du projet ne permettait pas d'atteindre.",
    },
    acs:[
      ["AC21.03","Traiter des données avec des outils statistiques"],
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
    title:"SAÉ 302 — Dossier de presse · Vald, Magnificat",
    sub:"Projet universitaire · Seul · BUT MMI",
    rightTag:{label:"SAÉ", type:"type"},
    comps:["CONC","EXPR","COMP","ENTR"],
    techs: [],
    star:{
      s:"La SAÉ 302 prenait la forme d'une simulation de commande professionnelle : concevoir un dossier de presse pour un artiste musical dans le cadre d'une stratégie de communication plurimédia. J'ai choisi de travailler sur Vald, rappeur majeur du rap français, à l'occasion de la sortie de son album Magnificat en novembre 2025 un projet artistiquement ambitieux, annoncé par surprise lors d'un concert à l'Accor Arena, qui marque une rupture forte avec son album précédent Pandémonium.",
      t:"L'exercice demandait d'analyser en profondeur l'écosystème d'un artiste avant de produire le moindre contenu. J'ai donc étudié la structure économique et juridique qui entoure Vald : son label indépendant Echelon Records, son accord de distribution avec Sony Music via Hall Access, et le rôle de son management Merkus dans la gestion de sa carrière. J'ai également analysé ses données d'audience sur les plateformes, et décrypté la mutation de son univers artistique entre les deux albums, l'un ancré dans la noirceur, l'autre tourné vers la lumière et la pop.",
      a:"Le dossier de 11 pages couvre l'ensemble des rubriques attendues dans le secteur musical : biographie narrative, présentation de l'album et analyse des partis pris artistiques, tracklist commentée titre par titre, chroniques des singles choisis pour la promotion, discographie complète, revue de presse sourcée, calendrier de tournée et annuaire de contacts à destination des programmateurs de festivals et du booking. La mise en page a été réalisée sur Canva, avec une direction artistique inspirée des codes graphiques du secteur urbain actuel.",
      r:"Le livrable final est un dossier autonome, directement exploitable par une agence de presse ou un label. Ce projet m'a permis de mobiliser à la fois des compétences rédactionnelles écrire pour un public professionnel avec un ton journalistique adapté et une compréhension concrète des mécanismes économiques de l'industrie musicale indépendante.",
      eval: "C'est le projet de cette liste qui m'a le plus impliqué personnellement. Travailler sur un artiste que je suis, comprendre les rouages économiques d'un label indépendant et rédiger un contenu à la hauteur des standards du secteur musical m'a vraiment motivé. J'ai pris plaisir à soigner la rédaction et la mise en page autant que le fond.",
      axis: "La note reçue ne correspondait pas à ce que j'espérais, sans retour de l'enseignant pour comprendre ce qui a pêché. C'est une frustration réelle, mais elle m'a appris à dissocier l'investissement personnel que je mets dans un projet de l'évaluation qui en est faite, et à continuer à produire un travail soigné indépendamment du résultat.",
    },
    acs:[
      ["AC21.01","Analyser la stratégie de communication / marketing"],
      ["AC22.03","Co-construire une recommandation stratégique"],
      ["AC23.01","Produire un écrit journalistique sourcé"],
      ["AC23.04","Écrire et scénariser pour le transmédia"],
    ],
  },
  {
    id:"solaire",
    index:"Projet 06 · SAÉ S4",
    title:"SAÉ 402 - Système solaire interactif en réalité virtuelle",
    sub:"Projet universitaire · Seul · BUT MMI",
    rightTag:{label:"SAÉ", type:"type"},
    comps:["DEV","COMP","CONC","EXPR","ENTR"],
    techs: ["js", "htmlcss", "threejs", "git"],
    star:{
      s:"La SAÉ 402 demandait de concevoir une expérience web immersive exploitant les capacités graphiques natives du navigateur, sans plugin, en utilisant Three.js comme outil imposé. Le contexte simulé était celui d'un planétarium : créer un dispositif pédagogique et ludique sur le système solaire, accessible aussi bien à un jeune public qu'à des visiteurs adultes, directement depuis un casque de réalité virtuelle.",
      t:"Le principal défi était de concilier rigueur scientifique et lisibilité visuelle. Les distances réelles entre les planètes sont si colossales qu'une représentation à l'échelle exacte rendrait la scène illisible à l'œil. J'ai donc conçu un algorithme qui compresse les distances de façon logarithmique, en préservant les proportions relatives tout en gardant l'ensemble navigable. Les données des lunes de Jupiter et Saturne, distances et périodes orbitales en kilomètres et en jours, ont été intégrées depuis un fichier JSON et converties automatiquement en unités exploitables par la scène 3D. L'application représente ainsi huit planètes, soixante-sept lunes majeures et deux ceintures d'astéroïdes.",
      a:"L'application a été développée entièrement en JavaScript pur, avec une architecture orientée objet modulaire : chaque astre hérite d'une classe parente commune, ce qui permet d'ajouter une nouvelle planète en une dizaine de lignes. Pour maintenir des performances fluides, j'ai optimisé le rendu des astéroïdes en les regroupant en instances uniques plutôt qu'en objets séparés, et désactivé certains effets d'ombre sur les lunes secondaires. Le mode réalité virtuelle, testé sur un casque Meta Quest 3S, permet de se déplacer dans la scène à la première personne avec un effet de saut en hyperespace entre les planètes.",
      r:"Ce projet a été avant tout une plongée dans la 3D sur le web, un domaine que je découvrais entièrement. Apprendre à structurer une scène 3D, gérer les performances en temps réel et intégrer la réalité virtuelle depuis un navigateur m'a ouvert un champ de compétences techniques que je n'avais pas abordé jusque-là.",
      eval: "La plus grande partie du temps sur ce projet a été consacrée à comprendre les outils plutôt qu'à coder. La documentation du casque VR était dense et peu accessible, Three.js demande un vrai effort d'apprentissage pour en saisir la logique, et la gestion des modules JavaScript ajoutait une couche de complexité supplémentaire. Avancer malgré tout jusqu'à un résultat fonctionnel et testé sur casque réel est ce dont je suis le plus satisfait sur ce projet.",
      axis: "La suite logique serait d'intégrer un affichage d'informations contextuelles en réalité virtuelle, sous forme de panneaux flottants visibles depuis le casque. C'est d'ailleurs quelque chose sur lequel je travaille actuellement, ce projet ayant ouvert une curiosité durable pour la 3D et la VR sur le web.",
    },
    acs:[
      ["AC21.03","Traiter des données avec des outils statistiques / JSON réels"],
      ["AC21.05","Cartographier les expériences utilisateur (UX anti-cinétose VR)"],
      ["AC22.02","Produire une recommandation ergonomique"],
      ["AC23.02","Définir une iconographie"],
      ["AC23.03","Créer et décliner une identité visuelle"],
      ["AC23.04","Imaginer, écrire et scénariser en vue d'une communication multimédia"],
      ["AC23.06","Produire de la 3D / animation / visualisation de données"],
      ["AC24.03","Développer des interactions riches & dispositifs interactifs (WebXR/VR)"],
      ["AC25.04","Collaborer au sein des organisations (architecture modulaire, Git)"],
    ],
  },
  {
    id:"cyber",
    index:"Projet 05 · Projet personnel",
    title:"Home Lab - Infrastructure personnelle & initiation à la cybersécurité",
    sub:"Projet personnel · Linux · Raspberry Pi 5",
    rightTag:{label:"Perso", type:"type"},
    comps:["DEV","COMP","ENTR"],
    techs: ["bash", "docker", "linux", "nginx", "git"],
    star:{
      s:"La cybersécurité est le domaine vers lequel je souhaite m'orienter après mon BUT. Pour commencer à en acquérir les bases de façon concrète, j'ai monté de A à Z un environnement de laboratoire domestique sur Raspberry Pi 5, dans lequel j'héberge mes services web et mène des expérimentations techniques en autonomie.",
      t:"L'infrastructure repose sur Docker pour isoler les applications entre elles, un reverse proxy centralisant le trafic entrant et automatisant le chiffrement des connexions, et un durcissement du serveur SSH : port modifié, accès restreint aux clés cryptographiques, mots de passe désactivés. Des scripts d'automatisation gèrent les sauvegardes et l'audit des journaux système.",
      a:"En parallèle, j'ai mené un exercice pratique d'exploitation et de remédiation dans un environnement isolé sous VirtualBox. Depuis une machine Kali Linux, j'ai scanné les ports d'un serveur cible volontairement vulnérable (Metasploitable 2), identifié un service FTP obsolète affecté par une backdoor connue (CVE-2011-2523), puis exploité cette faille via Metasploit pour obtenir un accès administrateur complet. L'exercice s'est conclu par une phase de remédiation : mise à jour du service, migration vers un protocole chiffré et restriction des accès réseau par pare-feu.",
      r:"Ce projet personnel m'a permis de passer de la théorie à la pratique sur des sujets que la formation n'aborde pas encore : montage d'infrastructure, administration Linux, et premiers pas en test d'intrusion dans un cadre légal et maîtrisé. C'est une démarche que je poursuis activement en vue d'une spécialisation en cybersécurité.",
      eval: "Ce projet m'a apporté quelque chose que la formation ne m'avait pas encore donné : la capacité à identifier concrètement des failles de sécurité, à les exploiter dans un cadre maîtrisé, et à produire un rapport d'audit structuré. Passer de la théorie à la pratique sur ce sujet a confirmé mon intérêt pour la cybersécurité comme axe de spécialisation.",
      axis: "La prochaine étape serait de monter en complexité sur les scénarios d'attaque et d'élargir les techniques d'audit, ce que je compte approfondir dans le cadre de ma poursuite d'études.",
    },
    acs:[
      ["AC24.06","Configurer une solution d'hébergement adaptée"],
      ["AC25.06","Prendre en compte les contraintes juridiques & de sécurité"],
    ],
  },
];

export const RECAP = [
  { comp:"DEV", rows:[
    ["AC24.01","Produire des pages et applications Web responsives","<b>Stage</b> : interface adaptée aux écrans industriels et aux smartphones. · <b>SAÉ 303</b> : mise en page responsive pour la lisibilité des graphiques sur mobile."],
    ["AC24.02","Mettre en place ou développer un back office","<b>Stage</b> : interface d'administration pour configurer les dimensions et les prix des produits sans perdre l'historique."],
    ["AC24.03","Intégrer des interactions riches","<b>SAÉ 303</b> : compteurs animés, chargements asynchrones et fenêtres d'analyse détaillée. · <b>SAÉ 402</b> : mode réalité virtuelle avec déplacement à la première personne et effet de saut en hyperespace."],
    ["AC24.04","Modéliser les traitements d'une application Web","<b>Stage</b> : architecture en couches sous Blazor Server, communication temps réel et gestion de la base de données via Entity Framework Core."],
    ["AC24.06","Configurer une solution d'hébergement","<b>Projet Cyber</b> : serveur domestique sur Raspberry Pi avec reverse proxy et gestion des conteneurs. · <b>Stage</b> : déploiement sur serveur Linux avec serveur web et connexions chiffrées."],
    ["AC34.02","Développer avec un framework côté serveur (N3)","<b>Stage</b> : développement d'un logiciel métier complet en C# et Blazor Server, livré et utilisé en production réelle."],
  ]},
  { comp:"COMP", rows:[
    ["AC21.01","Analyser la stratégie marketing d'une organisation","<b>SAÉ 302</b> : analyse de l'écosystème d'un label indépendant, de sa distribution et de son management."],
    ["AC21.03","Traiter des données avec des outils statistiques","<b>SAÉ 303</b> : traitement d'un dataset Kaggle et croisement des données par pays et secteur. · <b>SAÉ 301</b> : analyse des données de fréquentation de la BU. · <b>SAÉ 402</b> : intégration de données astrophysiques réelles avec conversion logarithmique."],
    ["AC21.04 · AC21.05","Identifier les parcours & cartographier l'UX","<b>SAÉ 301</b> : ateliers de tri par cartes et carte d'affinité pour structurer l'arborescence de l'application. · <b>SAÉ 402</b> : conception de la navigation en réalité virtuelle pour rendre la scène lisible depuis le casque."],
  ]},
  { comp:"CONC", rows:[
    ["AC22.02","Produire une recommandation ergonomique","<b>SAÉ 301</b> : idéation rapide en atelier puis modélisation des wireframes des écrans clés. · <b>SAÉ 402</b> : réflexion sur l'ergonomie en réalité virtuelle pour organiser les informations dans l'espace 3D."],
    ["AC22.03","Co-construire une recommandation stratégique","<b>SAÉ 302</b> : stratégie de communication construite autour du contraste artistique entre les deux albums de Vald."],
  ]},
  { comp:"EXPR", rows:[
    ["AC23.01","Produire un écrit journalistique sourcé","<b>SAÉ 302</b> : rédaction d'une biographie narrative, de chroniques de singles et d'un annuaire de contacts professionnels."],
    ["AC23.02 · AC23.03","Définir une iconographie & créer une identité visuelle","<b>SAÉ 301</b> : charte graphique et bibliothèque d'icônes pour l'application mobile. · <b>SAÉ 402</b> : textures planétaires et éléments visuels de l'interface du casque."],
    ["AC23.04","Imaginer, écrire et scénariser pour le transmédia","<b>SAÉ 302</b> : plan de communication articulé autour de deux albums aux univers opposés. · <b>SAÉ 402</b> : séquence narrative du voyage spatial, de l'accueil jusqu'au saut en hyperespace."],
    ["AC23.06","Élaborer et produire de la 3D, des animations et designs sonores","<b>SAÉ 303</b> : visualisations interactives (carte du monde, carte de chaleur, diagrammes). · <b>SAÉ 402</b> : scène 3D temps réel avec planètes, lunes, ceintures d'astéroïdes et effets visuels."],
  ]},
  { comp:"ENTR", rows:[
    ["AC25.01","Gérer un projet avec amélioration continue","<b>Stage</b> : développement par itérations successives, fonctionnalités testées et ajustées au fil du projet."],
    ["AC25.04","Collaborer au sein des organisations","<b>Stage</b> : travail en binôme avec gestion des versions Git. · <b>SAÉ 402</b> : architecture modulaire avec classes héritées et historique de commits structuré."],
    ["AC25.06","Prendre en compte les contraintes juridiques & de sécurité","<b>Projet Cyber</b> : sécurisation du serveur par clés SSH, isolation des applications et connexions chiffrées."],
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
  cyber: "Rapport d'audit · Interactif",
  solaire: "Simulation interactive"
};

export const PV_HEADS = {
  stage: "Document source",
  dataviz: "Démo interactive",
  bu: "Document source",
  vald: "Document source",
  cyber: "Rapport d'audit",
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

export const SKILLS = [
  { id: "cs", name: "C#", category: "langage", level: 4, levelLabel: "Maîtrisé", desc: "Développement back-end, Blazor Server, applications de bureau." },
  { id: "js", name: "JavaScript", category: "langage", level: 4.5, levelLabel: "Avancé", desc: "Manipulation du DOM, asynchronisme, Plotly.js, Three.js." },
  { id: "htmlcss", name: "HTML / CSS", category: "langage", level: 4.5, levelLabel: "Avancé", desc: "Flexbox, Grid, designs responsifs, animations, accessibilité." },
  { id: "sql", name: "SQL", category: "langage", level: 3.5, levelLabel: "Intermédiaire", desc: "Conception de bases de données relationnelles, requêtes complexes." },
  { id: "bash", name: "Bash", category: "langage", level: 3.5, levelLabel: "Intermédiaire", desc: "Automatisation de tâches, scripts d'administration système." },
  
  { id: "blazor", name: "Blazor Server", category: "framework", level: 4, levelLabel: "Maîtrisé", desc: "Framework C# côté serveur pour applications web interactives." },
  { id: "react", name: "React", category: "framework", level: 3.5, levelLabel: "Intermédiaire", desc: "Composants fonctionnels, state management, hooks, Vite." },
  { id: "threejs", name: "Three.js", category: "framework", level: 3.5, levelLabel: "Intermédiaire", desc: "3D temps réel sur le web, WebGL, WebXR pour la réalité virtuelle." },
  { id: "plotly", name: "Plotly.js", category: "framework", level: 3.5, levelLabel: "Intermédiaire", desc: "Dataviz interactive, graphiques statistiques et scientifiques." },
  
  { id: "docker", name: "Docker", category: "devops", level: 3.5, levelLabel: "Intermédiaire", desc: "Conteneurisation, déploiement isolé, Docker Compose." },
  { id: "linux", name: "Linux", category: "devops", level: 4.5, levelLabel: "Avancé", desc: "Administration système Debian, durcissement SSH (ANSSI), hébergement." },
  { id: "git", name: "Git", category: "devops", level: 4, levelLabel: "Maîtrisé", desc: "Gestion de version, branches, collaboration en équipe." },
  { id: "nginx", name: "Nginx", category: "devops", level: 3.5, levelLabel: "Intermédiaire", desc: "Reverse proxy, configuration de serveurs web, SSL/TLS." }
];

