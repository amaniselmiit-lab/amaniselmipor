# 👩‍💻 Portfolio — Amani Selmi

Portfolio personnel **bilingue (FR/EN)**, moderne et responsive : *AI Engineer · Data Scientist · Développeuse Full-Stack*.
Site statique (HTML/CSS/JS), sans backend, déployé sur **GitHub Pages**.

🔗 **En ligne :** https://amaniselmiit-lab.github.io/italien/

---

## ✨ Ce qu'il contient

- **Hero** animé (titre qui défile, chiffres clés, liens LinkedIn/GitHub, CV téléchargeables)
- **À propos**, **Compétences**, **Expérience** (timeline), **Projets**, **Certifications**, **Formation**, **Langues**, **Contact**
- **Bilingue FR/EN** (bouton en haut à droite) · **thème clair/sombre** (mémorisé)
- **SEO** : meta tags, Open Graph, données structurées `schema.org/Person`
- **Accessible** & **imprimable** (Ctrl/Cmd + P → « Enregistrer en PDF »)
- Tes **3 CV** téléchargeables (AI Engineer 🇬🇧, Consultante Fonctionnelle 🇫🇷, Webmaster 🇫🇷)

---

## ✏️ Comment modifier mon contenu

**Tout se passe dans un seul fichier : [`data.js`](./data.js).**

Ouvre-le, change ce que tu veux, enregistre, puis pousse sur GitHub — le site se met à jour tout seul.

Exemples :

```js
// Changer l'email affiché
email: "ton.email@gmail.com",

// Retirer le téléphone du site (mets une chaîne vide)
phone: "",

// Ajouter un projet : copie un bloc existant dans la liste projects: [ ... ]
{
  emoji: "🚀",
  title: { fr: "Mon nouveau projet", en: "My new project" },
  description: { fr: "Description en français.", en: "Description in English." },
  tags: ["Python", "IA"],
  links: [ { type: "code", url: "https://github.com/...", label: { fr: "Code", en: "Code" } } ],
},
```

Les textes en deux langues s'écrivent toujours : `{ fr: "…", en: "…" }`.

### Remplacer un CV
Dépose ton nouveau PDF dans [`assets/cv/`](./assets/cv/) et mets à jour le chemin dans `data.js` (section `profile.cvs`).

### Changer les couleurs
Dans `data.js` → `settings.accent` et `settings.accent2`.

---

## 🚀 Aperçu en local

Aucune installation requise. Depuis le dossier `portfolio/` :

```bash
# avec Python
python3 -m http.server 8080
# puis ouvre http://localhost:8080
```

> Ouvrir directement `index.html` (double-clic) fonctionne aussi, mais un petit serveur
> local évite les blocages du navigateur sur le téléchargement des CV.

---

## 📦 Déploiement (GitHub Pages)

Le déploiement est **automatique** via GitHub Actions (`.github/workflows/deploy.yml`).
À chaque push sur la branche `claude/portfolio-projets-etudes-ulp1ij`, le site est reconstruit :

| Chemin | Contenu |
|---|---|
| `/`          | Ce portfolio |
| `/italiano/` | L'application « Impara l'Italiano » |

**À faire une seule fois** dans le dépôt : *Settings → Pages → Source : « GitHub Actions »*.

---

## 🗂️ Structure

```
portfolio/
├── index.html      # structure de la page + SEO
├── styles.css      # design (thème clair/sombre, responsive)
├── app.js          # génère le contenu + interactions
├── data.js         # 👉 TON CONTENU (le seul fichier à éditer)
└── assets/
    ├── favicon.svg
    └── cv/          # tes CV téléchargeables (PDF)
```
