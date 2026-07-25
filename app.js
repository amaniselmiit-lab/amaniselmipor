/* =============================================================================
   PORTFOLIO — LOGIQUE / APP
   Génère le contenu depuis data.js et gère : langue FR/EN, thème clair/sombre,
   menu mobile, effet machine à écrire, révélations au scroll, navigation active.
   ========================================================================== */
(function () {
  "use strict";

  var P = window.PORTFOLIO;
  if (!P) { console.error("data.js introuvable"); return; }

  // Active le mode « JS » : autorise les animations d'apparition (sans JS, tout reste visible).
  document.documentElement.classList.add("js");

  var LS_LANG = "portfolio_lang";
  var LS_THEME = "portfolio_theme";

  var lang = localStorage.getItem(LS_LANG) || P.settings.defaultLang || "fr";

  /* ---------- Icônes SVG ------------------------------------------------- */
  var ICONS = {
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58l-.01-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
  };

  /* ---------- Helpers ---------------------------------------------------- */
  function t(v) {
    if (v && typeof v === "object" && !Array.isArray(v) && ("fr" in v || "en" in v)) {
      return v[lang] != null ? v[lang] : (v.fr != null ? v.fr : v.en);
    }
    return v;
  }
  function ui(path) {
    return path.split(".").reduce(function (o, k) { return o && o[k]; }, P.ui);
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function $(sel) { return document.querySelector(sel); }

  // Génère un monogramme propre à partir d'un nom d'organisation.
  var STOPWORDS = { de: 1, du: 1, des: 1, la: 1, le: 1, les: 1, of: 1, the: 1, and: 1, "et": 1 };
  function monogram(name) {
    var words = String(name || "").replace(/[^0-9A-Za-zÀ-ÿ]+/g, " ").trim().split(/\s+/);
    for (var i = 0; i < words.length; i++) {
      if (/^[A-Z][A-Z0-9]{1,4}$/.test(words[i])) return words[i]; // acronyme : EFC, ONP, BTS, ISET…
    }
    var sig = words.filter(function (w) { return !STOPWORDS[w.toLowerCase()]; });
    if (sig.length <= 1) return (sig[0] || words[0] || "•").slice(0, 3).toUpperCase();
    return sig.slice(0, 3).map(function (w) { return w[0]; }).join("").toUpperCase();
  }
  // Logo d'un item de timeline : vraie image si `logo` fournie, sinon monogramme.
  function logoHtml(item, name) {
    if (item.logo) {
      return '<img class="tl-item__logo" src="' + esc(item.logo) + '" alt="' + esc(name) +
        '" loading="lazy">';
    }
    return '<span class="tl-item__logo tl-item__logo--mono">' + esc(item.logoText || monogram(name)) + "</span>";
  }

  /* ---------- Navigation ------------------------------------------------- */
  var NAV_ITEMS = ["about", "skills", "experience", "projects", "certifications", "education", "contact"];

  function renderNav() {
    $("#navLinks").innerHTML = NAV_ITEMS.map(function (id) {
      var target = id === "education" ? "education" : id;
      return '<a href="#' + target + '" data-nav="' + target + '">' + esc(t(ui("nav." + id))) + "</a>";
    }).join("");
  }

  /* ---------- Hero ------------------------------------------------------- */
  function renderHero() {
    var pr = P.profile;
    $("#heroGreeting").textContent = t(ui("hero.greeting"));
    $("#heroTagline").textContent = t(pr.tagline);
    $("#ctaContact").textContent = t(ui("hero.ctaContact"));
    $("#ctaProjects").textContent = t(ui("hero.ctaProjects"));

    var socials = [
      { icon: ICONS.linkedin, label: "LinkedIn", url: pr.linkedin },
      { icon: ICONS.github, label: "GitHub", url: pr.github },
      { icon: ICONS.mail, label: t(ui("labels.emailMe")), url: "mailto:" + pr.email }
    ];
    var socialHtml = socials.map(function (s) {
      return '<a class="social-link" href="' + esc(s.url) + '"' +
        (s.url.indexOf("mailto:") === 0 ? "" : ' target="_blank" rel="noopener"') +
        ">" + s.icon + "<span>" + esc(s.label) + "</span></a>";
    }).join("");

    var cvHtml = (pr.cvs || []).map(function (cv) {
      return '<a class="social-link" href="' + esc(cv.file) + '" download>' + ICONS.download +
        "<span>" + esc(t(cv.label)) + "</span></a>";
    }).join("");

    $("#heroSocials").innerHTML = socialHtml +
      (cvHtml ? '<span style="flex-basis:100%;height:0"></span>' + cvHtml : "");

    $("#heroStats").innerHTML = (P.stats || []).map(function (s) {
      return '<li class="stat"><div class="stat__value">' + esc(s.value) +
        '</div><div class="stat__label">' + esc(t(s.label)) + "</div></li>";
    }).join("");
  }

  /* ---------- Sections statiques (data-ui) ------------------------------- */
  function renderStaticUI() {
    document.querySelectorAll("[data-ui]").forEach(function (node) {
      node.textContent = t(ui(node.getAttribute("data-ui")));
    });
    $("#aboutText").textContent = t(P.profile.summary);
    $("#footerText").textContent = t(ui("footer.builtWith"));
    $("#footerRights").textContent = t(ui("footer.rights"));
    $("#footerYear").textContent = new Date().getFullYear();
  }

  /* ---------- Compétences ------------------------------------------------ */
  function renderSkills() {
    $("#skillsGrid").innerHTML = (P.skills || []).map(function (g) {
      var tags = g.items.map(function (i) { return '<span class="tag">' + esc(i) + "</span>"; }).join("");
      return '<article class="skill-card reveal">' +
        '<div class="skill-card__head"><span class="skill-card__icon">' + esc(g.icon || "•") +
        '</span><h3 class="skill-card__title">' + esc(t(g.group)) + "</h3></div>" +
        '<div class="skill-card__tags">' + tags + "</div></article>";
    }).join("");
  }

  /* ---------- Expérience ------------------------------------------------- */
  function renderExperience() {
    $("#timeline").innerHTML = (P.experience || []).map(function (x) {
      var bullets = (t(x.bullets) || []).map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("");
      var tags = (x.tags || []).map(function (tg) { return '<span class="tag">' + esc(tg) + "</span>"; }).join("");
      var badge = x.badge ? ' <span class="tl-item__badge">' + esc(t(x.badge)) + "</span>" : "";
      return '<article class="tl-item tl-item--logo reveal">' +
        logoHtml(x, x.org) +
        '<div class="tl-item__main">' +
        '<div class="tl-item__top"><div><span class="tl-item__role">' + esc(t(x.role)) +
        '</span> <span class="tl-item__org">· ' + esc(x.org) + "</span>" + badge + "</div>" +
        '<span class="tl-item__period">' + esc(t(x.period)) + "</span></div>" +
        '<ul class="tl-item__bullets">' + bullets + "</ul>" +
        '<div class="tl-item__tags">' + tags + "</div>" +
        "</div></article>";
    }).join("");
  }

  /* ---------- Projets ---------------------------------------------------- */
  function renderProjects() {
    $("#projectsGrid").innerHTML = (P.projects || []).map(function (p) {
      var tags = (p.tags || []).map(function (tg) { return '<span class="tag">' + esc(tg) + "</span>"; }).join("");
      var links = (p.links || []).map(function (l) {
        var icon = l.type === "code" ? ICONS.code : ICONS.external;
        var isExternal = l.url.indexOf("http") === 0;
        return '<a class="project__link" href="' + esc(l.url) + '"' +
          (isExternal ? ' target="_blank" rel="noopener"' : "") + ">" + icon +
          "<span>" + esc(t(l.label)) + "</span></a>";
      }).join("");
      var badge = p.featured
        ? '<span class="project__featured-badge">' + esc(t(ui("labels.featured"))) + "</span>" : "";
      return '<article class="project reveal' + (p.featured ? " is-featured" : "") + '">' +
        '<div class="project__banner">' + badge + "<span>" + esc(p.emoji || "🚀") + "</span></div>" +
        '<div class="project__body">' +
        '<h3 class="project__title">' + esc(t(p.title)) + "</h3>" +
        '<p class="project__desc">' + esc(t(p.description)) + "</p>" +
        '<div class="project__tags">' + tags + "</div>" +
        (links ? '<div class="project__links">' + links + "</div>" : "") +
        "</div></article>";
    }).join("");
  }

  /* ---------- Certifications --------------------------------------------- */
  function renderCerts() {
    $("#certsGrid").innerHTML = (P.certifications || []).map(function (c) {
      return '<article class="cert reveal">' +
        '<span class="cert__icon">' + esc(c.emoji || "🎓") + "</span>" +
        '<div><div class="cert__name">' + esc(c.name) + "</div>" +
        '<div class="cert__meta"><b>' + esc(c.issuer) + "</b> · " + esc(c.year) + "</div></div></article>";
    }).join("");
  }

  /* ---------- Formation + langues ---------------------------------------- */
  function renderEducation() {
    $("#educationList").innerHTML = (P.education || []).map(function (e) {
      return '<article class="tl-item tl-item--logo reveal">' +
        logoHtml(e, e.school) +
        '<div class="tl-item__main">' +
        '<div class="tl-item__top"><span class="tl-item__role">' + esc(t(e.degree)) + "</span>" +
        '<span class="tl-item__period">' + esc(e.period) + "</span></div>" +
        '<div class="tl-item__org">' + esc(e.school) + "</div>" +
        "</div></article>";
    }).join("");

    $("#langsList").innerHTML = (P.languages || []).map(function (l) {
      return '<div class="lang reveal"><div class="lang__top"><span class="lang__name">' +
        esc(t(l.name)) + '</span><span class="lang__level">' + esc(t(l.level)) + "</span></div>" +
        '<div class="lang__bar"><span class="lang__fill" data-pct="' + (l.pct || 0) + '"></span></div></div>';
    }).join("");
  }

  /* ---------- Contact ---------------------------------------------------- */
  function renderContact() {
    var pr = P.profile;
    var cards = [
      { icon: ICONS.mail, label: "Email", value: pr.email, href: "mailto:" + pr.email },
      { icon: ICONS.phone, label: t(ui("labels.phone")), value: pr.phone, href: "tel:" + pr.phone.replace(/\s/g, "") },
      { icon: ICONS.linkedin, label: "LinkedIn", value: "ameni-selmi", href: pr.linkedin, ext: true },
      { icon: ICONS.pin, label: t(ui("labels.location")), value: t(pr.location), href: null }
    ];
    $("#contactCards").innerHTML = cards.map(function (c) {
      var inner = '<span class="contact-card__icon">' + c.icon + "</span>" +
        '<span class="contact-card__label">' + esc(c.label) + "</span>" +
        '<span class="contact-card__value">' + esc(c.value) + "</span>";
      if (c.href) {
        return '<a class="contact-card reveal" href="' + esc(c.href) + '"' +
          (c.ext ? ' target="_blank" rel="noopener"' : "") + ">" + inner + "</a>";
      }
      return '<div class="contact-card reveal">' + inner + "</div>";
    }).join("");
  }

  /* ---------- Effet machine à écrire ------------------------------------- */
  var typer = { timer: null };
  function startTyping() {
    clearTimeout(typer.timer);
    var elm = $("#heroRole");
    var roles = t(P.profile.roles) || [P.profile.title ? t(P.profile.title) : ""];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elm.textContent = roles[0]; return;
    }
    var ri = 0, ci = 0, deleting = false;
    function tick() {
      var word = roles[ri];
      elm.textContent = word.slice(0, ci);
      if (!deleting && ci < word.length) { ci++; typer.timer = setTimeout(tick, 90); }
      else if (!deleting && ci === word.length) { deleting = true; typer.timer = setTimeout(tick, 1600); }
      else if (deleting && ci > 0) { ci--; typer.timer = setTimeout(tick, 45); }
      else { deleting = false; ri = (ri + 1) % roles.length; typer.timer = setTimeout(tick, 350); }
    }
    tick();
  }

  /* ---------- Thème ------------------------------------------------------ */
  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }
  function currentTheme() {
    var stored = localStorage.getItem(LS_THEME);
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function initTheme() {
    var stored = localStorage.getItem(LS_THEME);
    applyTheme(stored || P.settings.defaultTheme || "auto");
    $("#themeToggle").addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      localStorage.setItem(LS_THEME, next);
      applyTheme(next);
    });
  }

  /* ---------- Langue ----------------------------------------------------- */
  function updateLangButtons() {
    document.querySelectorAll(".lang-switch__btn").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang);
    });
  }
  function renderAll() {
    renderNav(); renderHero(); renderStaticUI(); renderSkills();
    renderExperience(); renderProjects(); renderCerts();
    renderEducation(); renderContact();
    observeReveals(); observeNav();
  }
  function setLang(next) {
    lang = next;
    localStorage.setItem(LS_LANG, lang);
    document.documentElement.setAttribute("lang", lang);
    updateLangButtons();
    renderAll();
    startTyping();
  }
  function initLang() {
    document.querySelectorAll(".lang-switch__btn").forEach(function (b) {
      b.addEventListener("click", function () {
        var next = b.getAttribute("data-lang");
        if (next !== lang) setLang(next);
      });
    });
    document.documentElement.setAttribute("lang", lang);
    updateLangButtons();
  }

  /* ---------- Menu mobile ------------------------------------------------ */
  function initMenu() {
    var toggle = $("#menuToggle"), links = $("#navLinks");
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open);
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Révélations au scroll -------------------------------------- */
  var revealObs = null;
  function revealAll() {
    document.querySelectorAll(".reveal").forEach(function (n) {
      n.classList.add("is-in");
      var bar = n.querySelector(".lang__fill");
      if (bar) bar.style.width = bar.getAttribute("data-pct") + "%";
    });
  }
  function observeReveals() {
    // Filet de sécurité : navigateurs sans IntersectionObserver → tout afficher.
    if (!("IntersectionObserver" in window)) { revealAll(); return; }
    if (revealObs) revealObs.disconnect();
    revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          var bar = en.target.querySelector(".lang__fill");
          if (bar) bar.style.width = bar.getAttribute("data-pct") + "%";
          revealObs.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach(function (n) { revealObs.observe(n); });
  }

  /* ---------- Navigation active ------------------------------------------ */
  var navObs = null;
  function observeNav() {
    if (navObs) navObs.disconnect();
    var map = {};
    document.querySelectorAll("[data-nav]").forEach(function (a) { map[a.getAttribute("data-nav")] = a; });
    navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          document.querySelectorAll("[data-nav]").forEach(function (a) { a.classList.remove("is-active"); });
          var link = map[en.target.id];
          if (link) link.classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    NAV_ITEMS.forEach(function (id) {
      var sec = document.getElementById(id === "education" ? "education" : id);
      if (sec) navObs.observe(sec);
    });
  }

  /* ---------- Effets de scroll (nav, bouton haut) ------------------------ */
  function initScrollFx() {
    var nav = $("#nav"), toTop = $("#toTop");
    function onScroll() {
      var y = window.scrollY;
      nav.classList.toggle("is-scrolled", y > 8);
      toTop.classList.toggle("is-visible", y > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Init ------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    if (P.settings) {
      if (P.settings.accent) document.documentElement.style.setProperty("--accent", P.settings.accent);
      if (P.settings.accent2) document.documentElement.style.setProperty("--accent-2", P.settings.accent2);
    }
    initTheme();
    initLang();
    renderAll();
    initMenu();
    initScrollFx();
    startTyping();
  });
})();
