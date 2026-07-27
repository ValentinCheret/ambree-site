// ---- i18n (light client-side translation, no build step) ----
// Add a data-i18n="key" attribute to any element whose textContent should be
// translated, then add the matching key to both dictionaries below.
const translations = {
  fr: {
    "nav.services": "Services",
    "nav.maintenance": "Maintenance",
    "nav.contact": "Contact",
    "cta.contact": "Discutons de votre projet",
    "cta.pricing": "Voir les tarifs",
    "cta.form": "Remplir le formulaire",
    "contact.hero.h1": "Parlons de votre projet.",
    "contact.hero.sub": "Remplissez ce formulaire avec vos coordonnées et quelques mots sur votre activité. Nous revenons vers vous avec un devis personnalisé.",
    "label.fullName": "Nom complet",
    "label.companyActivity": "Entreprise / activité",
    "label.projectType": "Type de projet",
    "option.newSite": "Nouveau site vitrine",
    "option.redesign": "Refonte d'un site existant",
    "option.ecommerce": "E-commerce",
    "option.other": "Autre",
    "label.budget": "Budget indicatif",
    "option.budgetEssential": "Essentiel (690 € – 990 €)",
    "option.budgetPro": "Pro (1 200 € – 1 800 €)",
    "option.budgetPremium": "Premium (2 200 € – 3 200 €)",
    "option.budgetUnsure": "Je ne sais pas encore",
    "label.message": "Votre projet en quelques mots",
    "placeholder.message": "Votre activité, vos besoins, vos délais...",
    "contact.form.submit": "Envoyer ma demande",
    "contact.form.note": "En cliquant sur envoyer, votre messagerie s'ouvrira avec un message pré-rempli à nous adresser.",
    "contact.form.success": "Votre messagerie va s'ouvrir avec votre message pré-rempli. Il ne restera plus qu'à l'envoyer.",
    "contact.aside.h2": "Une autre façon de nous joindre",
    "contact.aside.note": "Un vrai interlocuteur vous répond, à Valence, pas un robot.",
    "contact.mail.subject": "Nouvelle demande de devis",
    "contact.mail.name": "Nom",
    "contact.mail.company": "Entreprise / activité",
    "contact.mail.email": "Email",
    "contact.mail.phone": "Téléphone",
    "contact.mail.project": "Type de projet",
    "contact.mail.budget": "Budget indicatif",
    "contact.mail.message": "Message",
    "contact.mail.notProvided": "non renseigné",
    "hero.h1": "Un site vitrine à votre image.",
    "hero.sub": "Design sur mesure, accompagnement local et devis personnalisé, pour commerçants, restaurateurs et artisans.",
    "services.h2": "Trois formules, un site en ligne sous deux à quatre semaines.",
    "services.p": "Un template personnalisé aux couleurs de votre entreprise, pensé pour votre activité et votre clientèle.",
    "plan.essential.name": "Essentiel",
    "plan.essential.desc": "Template personnalisé aux couleurs de l'entreprise, responsive, formulaire de contact, un aller-retour de corrections.",
    "plan.pro.name": "Pro",
    "plan.pro.desc": "Design semi-sur-mesure, galerie photo, Google Maps, liens réseaux sociaux, référencement local de base, deux allers-retours de corrections.",
    "plan.premium.name": "Premium",
    "plan.premium.desc": "Design sur-mesure, module de réservation ou carte interactive, blog d'actualités, SEO renforcé, formation à la prise en main.",
    "badge.popular": "Le plus choisi",
    "options.h3": "À ajouter à toute formule",
    "reviews.h3": "Avis clients",
    "reviews.google": "Avis Google — bientôt disponibles",
    "reviews.trustpilot": "Avis Trustpilot — bientôt disponibles",
    "opt.copy": "Rédaction des textes",
    "opt.photo": "Séance photo pro",
    "opt.ecommerce": "E-commerce simple",
    "opt.lang": "Version FR / EN",
    "opt.logo": "Création de logo",
    "maintenance.h2": "Un site à jour, sans y penser.",
    "maintenance.p": "Sans engagement, préavis d'un mois.",
    "unit.month": "/ mois",
    "tier.serenite.name": "Sérénité",
    "tier.serenite.desc": "Hébergement, nom de domaine, certificat SSL, sauvegardes régulières, mises à jour techniques, suivi de disponibilité.",
    "tier.confort.name": "Confort",
    "tier.confort.desc": "Tout Sérénité, plus une heure de modification de contenu par mois (textes, photos, horaires, menu), support par email sous 48h.",
    "tier.business.name": "Business",
    "tier.business.desc": "Tout Confort, plus deux à trois heures de modification par mois, suivi SEO local mensuel, support prioritaire, rapport de visibilité trimestriel.",
    "why.h2": "Pourquoi un accompagnement local.",
    "why1.title": "Un interlocuteur unique à Valence",
    "why1.body": "Disponible pour un rendez-vous en personne, pas un ticket dans une file d'attente.",
    "why2.title": "Un suivi dans la durée",
    "why2.body": "Réactivité au quotidien, pas juste une livraison ponctuelle puis plus rien.",
    "why3.title": "Un site pensé pour votre activité",
    "why3.body": "Menu, horaires, réservations, avis clients : les vrais besoins d'un commerce.",
    "why4.title": "Une prise en main accompagnée",
    "why4.body": "Pour gérer vous-même vos mises à jour du quotidien, sans dépendre de nous.",
    "contact.h2": "Discutons de votre projet.",
    "contact.p": "Devis personnalisé et gratuit après un premier échange, sans engagement.",
    "footer.copy": "© 2026 Ambree Studio — Valence, Drôme",
    "footer.legal": "Mentions légales",
    "footer.back": "Retour au site",
    "legal.enNotice": "",
    "legal.title": "Mentions légales",
    "legal.updatedPre": "Page à finaliser dès l'immatriculation de l'entreprise. Les champs marqués",
    "legal.updatedPost": "doivent être remplis avant la mise en ligne publique du site.",
    "todo.plain": "à compléter",
    "todo.legalForm": "à compléter (ex. entreprise individuelle / micro-entreprise)",
    "todo.siret": "à compléter après immatriculation",
    "todo.vat": "à compléter si applicable",
    "todo.host": "à compléter selon l'hébergeur choisi",
    "label.companyName": "Raison sociale",
    "label.legalForm": "Forme juridique",
    "label.manager": "Nom du responsable",
    "label.registeredAddress": "Adresse du siège",
    "label.siret": "SIRET",
    "label.vat": "Numéro de TVA intracommunautaire",
    "label.phone": "Téléphone",
    "label.email": "Email",
    "label.host": "Hébergeur",
    "label.address": "Adresse",
    "legal.editor.h2": "Éditeur du site",
    "legal.director.h2": "Directeur de la publication",
    "legal.hosting.h2": "Hébergement",
    "legal.hosting.noPhonePre": "non communiqué (assistance via",
    "legal.hosting.noPhonePost": ")",
    "legal.ip.h2": "Propriété intellectuelle",
    "legal.ip.body": "L'ensemble des contenus présents sur ce site (textes, images, logo, charte graphique) est la propriété d'Ambree Studio, sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, sans autorisation préalable est interdite.",
    "legal.data.h2": "Données personnelles",
    "legal.data.body1": "Le formulaire de contact de ce site ne transmet aucune donnée à un serveur : il prépare un email pré-rempli qui s'ouvre dans le client de messagerie du visiteur, à charge pour lui de l'envoyer. Ambree Studio ne collecte, ne stocke ni ne traite donc aucune donnée via ce formulaire. Les informations que vous choisissez de nous envoyer par email ou par téléphone sont ensuite traitées comme toute correspondance, uniquement pour répondre à votre demande. Si un outil de mesure d'audience ou un formulaire connecté à un serveur est ajouté ultérieurement, cette section sera mise à jour pour préciser les données collectées, leur finalité, leur durée de conservation et les modalités d'exercice des droits d'accès, de rectification et de suppression prévus par le RGPD.",
    "legal.data.contactPre": "Pour toute question relative à vos données, contactez :",
    "legal.cookies.h2": "Cookies",
    "legal.cookies.body": "Ce site n'utilise actuellement aucun cookie de mesure d'audience ni traceur publicitaire.",
    "aria.openMenu": "Ouvrir le menu",
    "aria.closeMenu": "Fermer le menu",
    "theme.toLight": "Passer en mode clair",
    "theme.toDark": "Passer en mode sombre",
  },
  en: {
    "nav.services": "Services",
    "nav.maintenance": "Maintenance",
    "nav.contact": "Contact",
    "cta.contact": "Let's talk about your project",
    "cta.pricing": "See pricing",
    "cta.form": "Fill out the form",
    "contact.hero.h1": "Let's talk about your project.",
    "contact.hero.sub": "Fill in this form with your contact details and a few words about your business. We'll get back to you with a personalized quote.",
    "label.fullName": "Full name",
    "label.companyActivity": "Business / activity",
    "label.projectType": "Project type",
    "option.newSite": "New showcase website",
    "option.redesign": "Redesign of an existing site",
    "option.ecommerce": "E-commerce",
    "option.other": "Other",
    "label.budget": "Estimated budget",
    "option.budgetEssential": "Essentials (€690 – €990)",
    "option.budgetPro": "Pro (€1,200 – €1,800)",
    "option.budgetPremium": "Premium (€2,200 – €3,200)",
    "option.budgetUnsure": "Not sure yet",
    "label.message": "Your project, in a few words",
    "placeholder.message": "Your business, your needs, your timeline...",
    "contact.form.submit": "Send my request",
    "contact.form.note": "Clicking send will open your email app with a pre-filled message addressed to us.",
    "contact.form.success": "Your email app is about to open with your message pre-filled. Just hit send.",
    "contact.aside.h2": "Another way to reach us",
    "contact.aside.note": "A real person answers, based in Valence, not a bot.",
    "contact.mail.subject": "New project inquiry",
    "contact.mail.name": "Name",
    "contact.mail.company": "Business / activity",
    "contact.mail.email": "Email",
    "contact.mail.phone": "Phone",
    "contact.mail.project": "Project type",
    "contact.mail.budget": "Estimated budget",
    "contact.mail.message": "Message",
    "contact.mail.notProvided": "not provided",
    "hero.h1": "A website that looks like you.",
    "hero.sub": "Custom design, local support, and a personalized quote for shop owners, restaurateurs, and craftspeople.",
    "services.h2": "Three packages, a live website in two to four weeks.",
    "services.p": "A custom template in your brand colors, built around your business and your customers.",
    "plan.essential.name": "Essentials",
    "plan.essential.desc": "Template customized to your brand colors, responsive, contact form, one round of revisions.",
    "plan.pro.name": "Pro",
    "plan.pro.desc": "Semi-custom design, photo gallery, Google Maps, social media links, basic local SEO, two rounds of revisions.",
    "plan.premium.name": "Premium",
    "plan.premium.desc": "Fully custom design, booking module or interactive map, news blog, enhanced SEO, hands-on training.",
    "badge.popular": "Most popular",
    "options.h3": "Add-ons for any package",
    "reviews.h3": "Customer reviews",
    "reviews.google": "Google reviews — coming soon",
    "reviews.trustpilot": "Trustpilot reviews — coming soon",
    "opt.copy": "Copywriting",
    "opt.photo": "Professional photo shoot",
    "opt.ecommerce": "Simple e-commerce",
    "opt.lang": "FR / EN version",
    "opt.logo": "Logo design",
    "maintenance.h2": "A website that stays current, without the hassle.",
    "maintenance.p": "No commitment, one month's notice.",
    "unit.month": "/ month",
    "tier.serenite.name": "Peace of Mind",
    "tier.serenite.desc": "Hosting, domain name, SSL certificate, regular backups, technical updates, uptime monitoring.",
    "tier.confort.name": "Comfort",
    "tier.confort.desc": "Everything in Peace of Mind, plus one hour of content updates per month (text, photos, hours, menu), email support within 48 hours.",
    "tier.business.name": "Business",
    "tier.business.desc": "Everything in Comfort, plus two to three hours of updates per month, monthly local SEO tracking, priority support, quarterly visibility report.",
    "why.h2": "Why local support matters.",
    "why1.title": "One single contact, based in Valence",
    "why1.body": "Available for an in-person meeting, not just a ticket in a queue.",
    "why2.title": "Ongoing support, not a one-off",
    "why2.body": "Day-to-day responsiveness, not a one-time delivery and then silence.",
    "why3.title": "A website built around your business",
    "why3.body": "Menu, hours, bookings, reviews: the real needs of a local business.",
    "why4.title": "Guided hands-on training",
    "why4.body": "So you can manage your day-to-day updates yourself, without depending on us.",
    "contact.h2": "Let's talk about your project.",
    "contact.p": "A free, personalized quote after a first conversation, no commitment.",
    "footer.copy": "© 2026 Ambree Studio — Valence, Drôme, France",
    "footer.legal": "Legal notice",
    "footer.back": "Back to site",
    "legal.enNotice": "This is a courtesy English translation. The French version is the legally binding reference.",
    "legal.title": "Legal Notice",
    "legal.updatedPre": "This page will be finalized once the business is officially registered. Fields marked",
    "legal.updatedPost": "must be filled in before the site goes live publicly.",
    "todo.plain": "to complete",
    "todo.legalForm": "to complete (e.g. sole proprietorship / micro-enterprise)",
    "todo.siret": "to complete after registration",
    "todo.vat": "to complete if applicable",
    "todo.host": "to complete based on the chosen host",
    "label.companyName": "Company name",
    "label.legalForm": "Legal structure",
    "label.manager": "Manager's name",
    "label.registeredAddress": "Registered address",
    "label.siret": "SIRET (business ID)",
    "label.vat": "Intra-EU VAT number",
    "label.phone": "Phone",
    "label.email": "Email",
    "label.host": "Host",
    "label.address": "Address",
    "legal.editor.h2": "Site publisher",
    "legal.director.h2": "Publication director",
    "legal.hosting.h2": "Hosting",
    "legal.hosting.noPhonePre": "not published (support via",
    "legal.hosting.noPhonePost": ")",
    "legal.ip.h2": "Intellectual property",
    "legal.ip.body": "All content on this site (text, images, logo, brand guidelines) is the property of Ambree Studio unless stated otherwise. Any reproduction or use, in whole or in part, without prior authorization is prohibited.",
    "legal.data.h2": "Personal data",
    "legal.data.body1": "This site's contact form does not send any data to a server: it prepares a pre-filled email that opens in the visitor's own email application, which they then choose to send. Ambree Studio therefore does not collect, store, or process any data through this form. Information you choose to send us by email or phone is then handled like any correspondence, solely to respond to your request. If an audience-measurement tool or a server-connected form is added later, this section will be updated to specify what data is collected, its purpose, how long it is kept, and how to exercise your rights of access, correction, and deletion under the GDPR.",
    "legal.data.contactPre": "For any question about your data, contact:",
    "legal.cookies.h2": "Cookies",
    "legal.cookies.body": "This site does not currently use any audience-measurement or advertising cookies.",
    "aria.openMenu": "Open menu",
    "aria.closeMenu": "Close menu",
    "theme.toLight": "Switch to light mode",
    "theme.toDark": "Switch to dark mode",
  },
};

const langToggle = document.getElementById("langToggle");
const i18nTargets = document.querySelectorAll("[data-i18n]");
const i18nPlaceholderTargets = document.querySelectorAll("[data-i18n-placeholder]");
let currentLang = document.documentElement.getAttribute("lang") === "en" ? "en" : "fr";

function applyLanguage(lang) {
  currentLang = translations[lang] ? lang : "fr";
  document.documentElement.setAttribute("lang", currentLang);

  i18nTargets.forEach((el) => {
    const value = translations[currentLang][el.getAttribute("data-i18n")];
    if (value === undefined) return;
    el.textContent = value;
    if (el.hasAttribute("data-i18n-hide-if-empty")) {
      el.hidden = value === "";
    }
  });

  i18nPlaceholderTargets.forEach((el) => {
    const value = translations[currentLang][el.getAttribute("data-i18n-placeholder")];
    if (value !== undefined) el.setAttribute("placeholder", value);
  });

  if (langToggle) {
    const targetLang = currentLang === "fr" ? "en" : "fr";
    langToggle.querySelector(".lang-flag").textContent = targetLang === "en" ? "🇬🇧" : "🇫🇷";
    langToggle.setAttribute("aria-label", targetLang === "en" ? "Switch to English" : "Passer en français");
  }

  refreshThemeToggleLabel();
  if (navToggleRef) {
    const isOpen = navLinksRef?.classList.contains("is-open");
    navToggleRef.setAttribute("aria-label", translations[currentLang][isOpen ? "aria.closeMenu" : "aria.openMenu"]);
  }
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const next = currentLang === "fr" ? "en" : "fr";
    localStorage.setItem("ambree-lang", next);
    applyLanguage(next);
  });
}

// ---- Theme toggle (light / dark), persisted in localStorage ----
// The initial value is set synchronously by an inline script in <head> to avoid a flash of the wrong theme.
const themeToggle = document.getElementById("themeToggle");
const prefersDarkMedia = window.matchMedia("(prefers-color-scheme: dark)");

function refreshThemeToggleLabel() {
  if (!themeToggle) return;
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  themeToggle.querySelector("i").className = isDark ? "ph ph-sun" : "ph ph-moon";
  themeToggle.setAttribute("aria-label", translations[currentLang][isDark ? "theme.toLight" : "theme.toDark"]);
  themeToggle.setAttribute("aria-pressed", String(isDark));
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  refreshThemeToggleLabel();
}

applyTheme(document.documentElement.getAttribute("data-theme") || (prefersDarkMedia.matches ? "dark" : "light"));

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem("ambree-theme", next);
    applyTheme(next);
  });
}

// Follow system changes only as long as the visitor hasn't made an explicit choice.
prefersDarkMedia.addEventListener("change", (e) => {
  if (!localStorage.getItem("ambree-theme")) {
    applyTheme(e.matches ? "dark" : "light");
  }
});

// Sticky header background, driven by IntersectionObserver (no scroll listener).
const header = document.getElementById("siteHeader");
const sentinel = document.getElementById("scroll-sentinel");

if (header && sentinel) {
  const headerObserver = new IntersectionObserver(
    ([entry]) => header.classList.toggle("is-scrolled", !entry.isIntersecting),
    { threshold: 0 }
  );
  headerObserver.observe(sentinel);
}

// Mobile nav toggle.
const navToggleRef = document.getElementById("navToggle");
const navLinksRef = document.getElementById("navLinks");

if (navToggleRef && navLinksRef) {
  navToggleRef.addEventListener("click", () => {
    const isOpen = navLinksRef.classList.toggle("is-open");
    navToggleRef.setAttribute("aria-expanded", String(isOpen));
    navToggleRef.querySelector("i").className = isOpen ? "ph ph-x" : "ph ph-list";
    navToggleRef.setAttribute("aria-label", translations[currentLang][isOpen ? "aria.closeMenu" : "aria.openMenu"]);
  });

  navLinksRef.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      navLinksRef.classList.remove("is-open");
      navToggleRef.setAttribute("aria-expanded", "false");
      navToggleRef.querySelector("i").className = "ph ph-list";
      navToggleRef.setAttribute("aria-label", translations[currentLang]["aria.openMenu"]);
    })
  );
}

// Apply the language now that the toggle button and nav are wired up.
applyLanguage(currentLang);

// Contact form: builds a mailto: link from the filled fields (no backend on this site).
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const t = translations[currentLang];
    const data = new FormData(contactForm);
    const notProvided = t["contact.mail.notProvided"];
    const get = (field) => (data.get(field) || "").toString().trim() || notProvided;

    const subject = `${t["contact.mail.subject"]} — ${get("name") !== notProvided ? get("name") : ""}`.trim().replace(/—\s*$/, "—").trim();

    const bodyLines = [
      `${t["contact.mail.name"]} : ${get("name")}`,
      `${t["contact.mail.company"]} : ${get("company")}`,
      `${t["contact.mail.email"]} : ${get("email")}`,
      `${t["contact.mail.phone"]} : ${get("phone")}`,
      `${t["contact.mail.project"]} : ${get("project")}`,
      `${t["contact.mail.budget"]} : ${get("budget")}`,
      "",
      `${t["contact.mail.message"]} :`,
      get("message"),
    ];

    const mailto = `mailto:contact@ambree.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    const successEl = document.getElementById("formSuccess");
    if (successEl) successEl.hidden = false;

    // Opened in a throwaway context so the current page (and the success message) isn't
    // reloaded or lost if the browser has no mail client configured.
    window.open(mailto, "_blank");
  });
}

// 3D tilt + cursor-follow glow, driven by pointermove (not scroll).
// `zone` receives the is-active class and reports pointer position.
// `photo` gets the tilt/glow. `mark` (optional) gets an inverse parallax shift.
function initTiltCard({ zone, photo, mark, baseRotateDeg = 0, markBaseRotateDeg = 6 }) {
  if (!zone || !photo || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  // Touch devices have no cursor to follow; a CSS idle-tilt animation (see styles.css,
  // "@media (hover: none)") takes over instead, so skip attaching pointer listeners here.
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const maxTiltDeg = 10;
  const maxMarkShift = 10;
  let px = 0, py = 0;
  let queued = false;

  const render = () => {
    photo.style.transform = `rotate(${baseRotateDeg}deg) rotateX(${py * -maxTiltDeg}deg) rotateY(${px * maxTiltDeg}deg)`;
    photo.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
    photo.style.setProperty("--my", `${(py + 0.5) * 100}%`);
    if (mark) {
      mark.style.transform = `rotate(${markBaseRotateDeg}deg) translate(${px * -maxMarkShift}px, ${py * -maxMarkShift}px)`;
    }
    queued = false;
  };

  zone.addEventListener("pointermove", (e) => {
    const rect = zone.getBoundingClientRect();
    px = (e.clientX - rect.left) / rect.width - 0.5;
    py = (e.clientY - rect.top) / rect.height - 0.5;
    zone.classList.add("is-active");
    photo.classList.add("is-active");
    if (!queued) {
      queued = true;
      requestAnimationFrame(render);
    }
  });

  zone.addEventListener("pointerleave", () => {
    zone.classList.remove("is-active");
    photo.classList.remove("is-active");
    px = 0;
    py = 0;
    requestAnimationFrame(render);
  });
}

const heroVisual = document.querySelector(".hero-visual");
initTiltCard({
  zone: heroVisual,
  photo: heroVisual?.querySelector(".hero-photo"),
  mark: heroVisual?.querySelector(".hero-mark"),
  baseRotateDeg: -3,
  markBaseRotateDeg: 6,
});

const whyPhoto = document.querySelector(".why-photo");
initTiltCard({
  zone: whyPhoto,
  photo: whyPhoto,
  baseRotateDeg: 0,
});

// Scroll-reveal for elements marked [data-reveal].
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealTargets = document.querySelectorAll("[data-reveal]");

if (prefersReducedMotion) {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  revealTargets.forEach((el) => revealObserver.observe(el));
}
