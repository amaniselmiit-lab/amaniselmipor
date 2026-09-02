/* =============================================================================
   PORTFOLIO — DONNÉES / DATA
   -----------------------------------------------------------------------------
   👉 C'est le SEUL fichier à modifier pour mettre à jour ton portfolio.
      This is the ONLY file you need to edit to update your portfolio.

   • Les textes qui existent en 2 langues sont écrits ainsi : { fr: "...", en: "..." }
   • Pour changer une info : modifie la valeur, enregistre, pousse sur GitHub.
   • Tu peux ajouter/supprimer des éléments dans les listes [ ... ].
   ========================================================================== */

window.PORTFOLIO = {

  /* --- Réglages généraux / General settings ------------------------------- */
  settings: {
    defaultLang: "fr",     // langue par défaut : "fr" ou "en"
    defaultTheme: "auto",  // thème par défaut : "auto" | "light" | "dark"
    accent: "#6d5efc",     // couleur d'accent principale
    accent2: "#00d4c7",    // couleur d'accent secondaire (dégradés)
  },

  /* --- Profil / Profile ---------------------------------------------------- */
  profile: {
    name: "Amani Selmi",
    initials: "AS",
    title: { fr: "AI Engineer", en: "AI Engineer" },

    // Titres qui défilent dans le hero (effet machine à écrire)
    roles: {
      fr: ["AI Engineer", "Data Scientist", "Développeuse Full-Stack", "Formatrice IT"],
      en: ["AI Engineer", "Data Scientist", "Full-Stack Developer", "IT Trainer"],
    },

    tagline: {
      fr: "Je transforme les données et les modèles d'IA en applications concrètes.",
      en: "I turn data and AI models into applications that ship.",
    },

    summary: {
      fr: "Diplômée d'un Master en Business Analytics & Data Science, je conçois, entraîne et évalue des modèles de deep learning en Python (TensorFlow/Keras, scikit-learn), de la préparation des données à l'évaluation du modèle. Certifiée NVIDIA en deep learning, IA générative et applications agentiques basées sur les LLM, avec un profil full-stack (Angular, Spring Boot) pour bâtir les API et systèmes web dans lesquels les modèles d'IA s'intègrent. J'aime transformer des modèles de recherche en applications prêtes pour la production.",
      en: "Master's graduate in Business Analytics & Data Science, I design, train and evaluate deep learning models in Python (TensorFlow/Keras, scikit-learn) — from data preparation to model assessment. NVIDIA-certified in deep learning, generative AI and LLM-based agentic applications, with a full-stack background (Angular, Spring Boot) to build the APIs and web systems AI models plug into. I love turning research-grade models into production-ready applications.",
    },

    // Coordonnées / Contact
    email: "amani.selmi.it@gmail.com",
    phone: "+216 55 484 364",
    location: { fr: "Laouina, Tunis, Tunisie", en: "Laouina, Tunis, Tunisia" },
    linkedin: "https://www.linkedin.com/in/ameni-selmi-21bba2191",
    github: "https://github.com/amaniselmiit-lab",

    // CV téléchargeables (les fichiers sont dans /assets/cv/)
    cvs: [
      { label: { fr: "CV (Français)", en: "Résumé (French)" }, file: "assets/cv/Amani_Selmi_CV_FR.pdf" },
      { label: { fr: "CV (English)", en: "Résumé (English)" }, file: "assets/cv/Amani_Selmi_CV_EN.pdf" },
    ],
  },

  /* --- Chiffres clés / Key stats ------------------------------------------ */
  stats: [
    { value: "7",     label: { fr: "Certifications", en: "Certifications" } },
    { value: "6+",    label: { fr: "Projets IA & Dev", en: "AI & Dev projects" } },
    { value: "5",     label: { fr: "Langues", en: "Languages" } },
    { value: "Bac+5", label: { fr: "Master Data Science", en: "MSc Data Science" } },
  ],

  /* --- Compétences / Skills ------------------------------------------------ */
  skills: [
    {
      group: { fr: "Machine Learning & Deep Learning", en: "Machine Learning & Deep Learning" },
      icon: "🧠",
      items: ["Python", "TensorFlow / Keras", "scikit-learn", "CNN", "U-Net (CBAM, CoordConv)", "Entraînement & évaluation", "K-Means"],
    },
    {
      group: { fr: "IA Générative & LLM", en: "Generative AI & LLMs" },
      icon: "✨",
      items: ["Applications agentiques (LLM)", "Prompt engineering", "Modèles de diffusion", "Outils de dev assistés par IA"],
    },
    {
      group: { fr: "Données & Business Intelligence", en: "Data & Business Intelligence" },
      icon: "📊",
      items: ["Pandas", "NumPy", "SQL", "Prétraitement des données", "Power BI", "Dashboards & KPI"],
    },
    {
      group: { fr: "Full-Stack & Intégration", en: "Full-Stack & Integration" },
      icon: "🧩",
      items: ["Angular", "TypeScript", "React", "Spring Boot (Java)", "API REST", "OAuth2"],
    },
    {
      group: { fr: "Web & CMS", en: "Web & CMS" },
      icon: "🌐",
      items: ["WordPress", "PHP", "HTML5", "CSS3", "Bootstrap", "JavaScript", "Responsive design"],
    },
    {
      group: { fr: "Bases de données & Cloud", en: "Databases & Cloud" },
      icon: "🗄️",
      items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Microsoft Azure"],
    },
    {
      group: { fr: "Outils & Méthodes", en: "Tools & Methods" },
      icon: "🛠️",
      items: ["Git / GitHub", "Docker", "Jira", "Agile", "Documentation technique"],
    },
  ],

  /* --- Expérience / Experience -------------------------------------------- */
  experience: [
    {
      role: { fr: "Stagiaire IA / Data Science", en: "AI / Data Science Intern" },
      org: "LIMTIC",
      badge: { fr: "Stage PFE — Master", en: "Final-year project — Master's" },
      period: { fr: "Fév. 2026 — Juin 2026", en: "Feb 2026 — Jun 2026" },
      bullets: {
        fr: [
          "Conçu et entraîné un ensemble de 4 modèles U-Net (attention CBAM, CoordConv) pour l'évaluation automatisée du positionnement en mammographie.",
          "Construit le pipeline complet : prétraitement des images médicales, préparation du jeu de données, entraînement et évaluation (Python, TensorFlow/Keras).",
          "Itéré sur l'architecture et les hyperparamètres selon les métriques d'évaluation.",
        ],
        en: [
          "Designed and trained an ensemble of 4 U-Net models (CBAM attention, CoordConv) for automated mammography positioning assessment.",
          "Built the full pipeline: medical image preprocessing, dataset preparation, model training and evaluation (Python, TensorFlow/Keras).",
          "Iterated on architecture and hyperparameters based on evaluation metrics.",
        ],
      },
      tags: ["Deep Learning", "U-Net", "TensorFlow/Keras", "Medical Imaging", "Python"],
    },
    {
      role: { fr: "Formatrice en gestion informatique", en: "IT Trainer" },
      org: "EFC — Executive Training School",
      period: { fr: "Oct. 2025 — Juil. 2026", en: "Oct 2025 — Jul 2026" },
      bullets: {
        fr: [
          "Conçu et animé des formations en développement logiciel et administration des données, avec des projets pratiques.",
          "Vulgarisé des concepts techniques pour des publics non techniques et rédigé une documentation claire.",
        ],
        en: [
          "Designed and delivered software development and data administration training with hands-on projects.",
          "Explained technical concepts to non-technical audiences and produced clear documentation.",
        ],
      },
      tags: ["Formation", "Pédagogie", "Documentation"],
    },
    {
      role: { fr: "Formatrice en informatique & robotique", en: "IT & Robotics Trainer" },
      org: "Taybah Education Group",
      period: { fr: "Jan. 2025 — Juin 2025", en: "Jan 2025 — Jun 2025" },
      bullets: {
        fr: [
          "Enseigné les fondamentaux de la programmation et de la robotique via des supports adaptés à chaque niveau.",
        ],
        en: [
          "Taught programming fundamentals and robotics concepts through tailored materials for each level.",
        ],
      },
      tags: ["Programmation", "Robotique", "Formation"],
    },
    {
      role: { fr: "Stagiaire développeuse full-stack", en: "Full-Stack Developer Intern" },
      org: "ONP",
      badge: { fr: "Stage PFE — Licence", en: "Final-year project — Bachelor's" },
      period: { fr: "Fév. 2024 — Mai 2024", en: "Feb 2024 — May 2024" },
      bullets: {
        fr: [
          "Développé une application web d'administration de l'Active Directory (comptes, groupes, unités d'organisation) avec Angular et Spring Boot.",
          "Conçu les API REST, modélisé les données (MySQL) et sécurisé l'accès par OAuth2.",
          "Suivi des tâches et gestion des tickets via Jira.",
        ],
        en: [
          "Built a web application for Active Directory administration (accounts, groups, organizational units) with Angular and Spring Boot.",
          "Developed REST APIs, designed the data model (MySQL) and secured access with OAuth2.",
          "Tracked tasks and tickets with Jira.",
        ],
      },
      tags: ["Angular", "Spring Boot", "MySQL", "OAuth2", "REST API"],
    },
    {
      role: { fr: "Stagiaire développeuse full-stack", en: "Full-Stack Developer Intern" },
      org: "BTS Bank",
      period: { fr: "Juil. 2023 — Août 2023", en: "Jul 2023 — Aug 2023" },
      bullets: {
        fr: [
          "Développé une application de gestion des transactions rejetées.",
          "Investigué les anomalies et exécuté des requêtes SQL correctives avec vérification de l'intégrité des données.",
        ],
        en: [
          "Developed an application to manage rejected transactions.",
          "Investigated anomalies and ran corrective SQL queries with data-integrity checks.",
        ],
      },
      tags: ["SQL", "Java", "Debugging"],
    },
    {
      role: { fr: "Stagiaire développeuse front-end", en: "Front-End Developer Intern" },
      org: "MPSoft Manager",
      logoText: "MP",
      period: { fr: "Juil. 2022 — Août 2022", en: "Jul 2022 — Aug 2022" },
      bullets: {
        fr: [
          "Développé une application intranet responsive (HTML, CSS, Bootstrap).",
        ],
        en: [
          "Developed a responsive intranet application (HTML, CSS, Bootstrap).",
        ],
      },
      tags: ["HTML", "CSS", "Bootstrap"],
    },
  ],

  /* --- Projets / Projects -------------------------------------------------- */
  projects: [
    {
      featured: true,
      emoji: "🩺",
      title: { fr: "Évaluation du positionnement en mammographie", en: "Mammography Positioning Assessment" },
      description: {
        fr: "Ensemble de 4 modèles U-Net (attention CBAM, CoordConv) pour évaluer automatiquement le positionnement en mammographie. Pipeline complet : prétraitement d'images médicales, préparation du jeu de données, entraînement et évaluation. Projet de fin d'études (LIMTIC).",
        en: "Ensemble of 4 U-Net models (CBAM attention, CoordConv) to automatically assess mammography positioning. Full pipeline: medical image preprocessing, dataset preparation, training and evaluation. Final-year project (LIMTIC).",
      },
      tags: ["Deep Learning", "U-Net", "TensorFlow/Keras", "Medical Imaging", "Python"],
      links: [],
    },
    {
      featured: true,
      emoji: "🇮🇹",
      title: { fr: "Impara l'Italiano — apprendre l'italien (A1 → C2)", en: "Impara l'Italiano — learn Italian (A1 → C2)" },
      description: {
        fr: "Application web complète pour apprendre l'italien de A1 à C2 : leçons structurées, 7 types d'exercices, examens type PLIDA et un tuteur IA conversationnel (« Marco »). Sans backend, progression sauvegardée localement. React 19, TypeScript, Vite.",
        en: "Complete web app to learn Italian from A1 to C2: structured lessons, 7 exercise types, PLIDA-style exams and an AI conversational tutor (\"Marco\"). Backend-free, progress saved locally. React 19, TypeScript, Vite.",
      },
      tags: ["React", "TypeScript", "Vite", "EdTech", "LLM"],
      links: [
        { type: "demo", url: "./italiano/", label: { fr: "Démo live", en: "Live demo" } },
        { type: "code", url: "https://github.com/amaniselmiit-lab/italien", label: { fr: "Code", en: "Code" } },
      ],
    },
    {
      emoji: "🧠",
      title: { fr: "Détection de tumeurs cérébrales (Deep Learning)", en: "Brain Tumor Detection (Deep Learning)" },
      description: {
        fr: "Modèle CNN entraîné sur des IRM cérébrales pour détecter la présence de tumeurs. Préparation des images, entraînement et évaluation des performances.",
        en: "CNN model trained on brain MRI scans to detect the presence of tumors. Image preparation, training and performance evaluation.",
      },
      tags: ["Deep Learning", "CNN", "Healthcare AI", "Python"],
      links: [],
    },
    {
      emoji: "🗂️",
      title: { fr: "Administration Active Directory", en: "Active Directory Administration" },
      description: {
        fr: "Application web full-stack pour administrer un Active Directory (comptes, groupes, unités d'organisation). API REST Spring Boot, front Angular, modèle de données MySQL, accès sécurisé par OAuth2.",
        en: "Full-stack web application to administer an Active Directory (accounts, groups, organizational units). Spring Boot REST APIs, Angular front end, MySQL data model, OAuth2-secured access.",
      },
      tags: ["Angular", "Spring Boot", "MySQL", "OAuth2"],
      links: [],
    },
    {
      emoji: "🖼️",
      title: { fr: "Classification d'images non supervisée", en: "Unsupervised Image Classification" },
      description: {
        fr: "Clustering K-Means pour regrouper des images non étiquetées par similarité visuelle (data mining).",
        en: "K-Means clustering to group unlabeled images by visual similarity (data mining).",
      },
      tags: ["K-Means", "Unsupervised ML", "scikit-learn", "Python"],
      links: [],
    },
    {
      emoji: "📈",
      title: { fr: "Tableau de bord de suivi des KPI", en: "KPI Monitoring Dashboard" },
      description: {
        fr: "Dashboard interactif Power BI de suivi des indicateurs clés de performance, avec visualisations et filtres.",
        en: "Interactive Power BI dashboard tracking key performance indicators, with visuals and filters.",
      },
      tags: ["Power BI", "Business Intelligence", "Data Viz"],
      links: [],
    },
  ],

  /* --- Certifications ------------------------------------------------------ */
  // « file » = certificat réel (cliquable). Sans « file », la carte reste informative.
  certifications: [
    { name: "Building Agentic AI Applications with Large Language Models", issuer: "NVIDIA", year: "2026", emoji: "🤖", file: "assets/certs/NVIDIA_Building_Agentic_AI_LLMs.pdf" },
    { name: "Generative AI with Diffusion Models", issuer: "NVIDIA", year: "2026", emoji: "✨", file: "assets/certs/NVIDIA_Generative_AI_Diffusion_Models.pdf" },
    { name: "Fundamentals of Deep Learning", issuer: "NVIDIA", year: "2026", emoji: "🧠" },
    { name: { fr: "AI Night Challenge — 5ᵉ édition (Team « AI Generation »)", en: "AI Night Challenge — 5th Edition (Team \"AI Generation\")" }, issuer: "ARSII", year: "2026", emoji: "🏆", file: "assets/certs/ARSII_AI_Night_Challenge_2026.pdf" },
    { name: "Business Analysis Fundamentals with AI", issuer: "BA-Learning", year: "2025", emoji: "📊", file: "assets/certs/Business_Analysis_Fundamentals_AI.pdf" },
    { name: "Azure AI Fundamentals", issuer: "Microsoft", year: "2024", emoji: "☁️" },
    { name: "Machine Learning & AI", issuer: "GDG", year: "2023", emoji: "⚙️" },
    { name: "Linux Fundamentals", issuer: "Securinets", year: "2023", emoji: "🐧" },
  ],

  /* --- Formation / Education ----------------------------------------------- */
  education: [
    {
      degree: { fr: "Master — Business Analytics & Data Science", en: "Master's — Business Analytics & Data Science" },
      school: "Université Virtuelle de Tunis",
      period: "2024 — 2026",
    },
    {
      degree: { fr: "Licence — Développement des Systèmes d'Information", en: "Bachelor's — Information Systems Development" },
      school: "ISET Zaghouan",
      period: "2021 — 2024",
    },
  ],

  /* --- Langues / Languages ------------------------------------------------- */
  languages: [
    { name: { fr: "Arabe", en: "Arabic" },  level: { fr: "Langue maternelle", en: "Native" }, pct: 100 },
    { name: { fr: "Français", en: "French" }, level: { fr: "Courant", en: "Fluent" },        pct: 95 },
    { name: { fr: "Anglais", en: "English" }, level: { fr: "Courant", en: "Fluent" },        pct: 90 },
    { name: { fr: "Italien", en: "Italian" }, level: { fr: "B2", en: "B2" },                 pct: 65 },
    { name: { fr: "Allemand", en: "German" }, level: { fr: "A2", en: "A2" },                 pct: 30 },
  ],

  /* --- Textes d'interface / UI strings ------------------------------------ */
  ui: {
    nav: {
      about:          { fr: "À propos", en: "About" },
      skills:         { fr: "Compétences", en: "Skills" },
      experience:     { fr: "Expérience", en: "Experience" },
      projects:       { fr: "Projets", en: "Projects" },
      certifications: { fr: "Certifications", en: "Certifications" },
      education:      { fr: "Formation", en: "Education" },
      contact:        { fr: "Contact", en: "Contact" },
    },
    hero: {
      greeting: { fr: "Bonjour, je suis", en: "Hi, I'm" },
      ctaContact: { fr: "Me contacter", en: "Get in touch" },
      ctaProjects: { fr: "Voir mes projets", en: "See my projects" },
      cvHeading: { fr: "Télécharger le CV", en: "Download résumé" },
    },
    sections: {
      about:          { fr: "À propos", en: "About me" },
      skills:         { fr: "Compétences", en: "Skills" },
      skillsSub:      { fr: "Ma boîte à outils technique.", en: "My technical toolbox." },
      experience:     { fr: "Expérience", en: "Experience" },
      experienceSub:  { fr: "Mon parcours professionnel.", en: "My professional journey." },
      projects:       { fr: "Projets", en: "Projects" },
      projectsSub:    { fr: "Une sélection de réalisations en IA et développement.", en: "A selection of AI and development work." },
      certifications: { fr: "Certifications", en: "Certifications" },
      certificationsSub: { fr: "Formations certifiantes — cliquez sur un certificat pour l'afficher.", en: "Certified training — click a certificate to view it." },
      education:      { fr: "Formation", en: "Education" },
      languages:      { fr: "Langues", en: "Languages" },
      contact:        { fr: "Travaillons ensemble", en: "Let's work together" },
      contactSub:     { fr: "Une opportunité, une question ? Écrivez-moi, je réponds vite.", en: "An opportunity, a question? Drop me a line — I reply fast." },
    },
    labels: {
      featured:     { fr: "Projet phare", en: "Featured" },
      liveDemo:     { fr: "Démo live", en: "Live demo" },
      code:         { fr: "Code", en: "Code" },
      viewProject:  { fr: "Voir le projet", en: "View project" },
      emailMe:      { fr: "M'écrire", en: "Email me" },
      phone:        { fr: "Téléphone", en: "Phone" },
      location:     { fr: "Localisation", en: "Location" },
      themeLight:   { fr: "Thème clair", en: "Light theme" },
      themeDark:    { fr: "Thème sombre", en: "Dark theme" },
      menu:         { fr: "Menu", en: "Menu" },
      backToTop:    { fr: "Haut de page", en: "Back to top" },
    },
    footer: {
      builtWith: { fr: "Conçu et développé par Amani Selmi.", en: "Designed & built by Amani Selmi." },
      rights: { fr: "Tous droits réservés.", en: "All rights reserved." },
    },
  },
};
