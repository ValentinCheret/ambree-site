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
    "contact.form.noteDirect": "Votre demande nous est envoyée directement, sans passer par votre messagerie.",
    "contact.form.success": "Votre messagerie va s'ouvrir avec votre message pré-rempli. Il ne restera plus qu'à l'envoyer.",
    "contact.form.successSent": "Merci, votre demande est bien partie. Nous revenons vers vous dès que possible.",
    "form.requiredNote": "Champs obligatoires",
    "form.sending": "Envoi en cours…",
    "form.errorGeneric": "L'envoi a échoué. Réessayez, ou écrivez-nous directement à contact@ambree.fr.",
    "err.required": "Ce champ est obligatoire.",
    "err.email": "Entrez une adresse email valide.",
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
    "plan.cta": "Demander un devis",
    "plan.essential.name": "Essentiel",
    "plan.essential.f1": "Template personnalisé à vos couleurs",
    "plan.essential.f2": "Affichage adapté au mobile",
    "plan.essential.f3": "Formulaire de contact",
    "plan.essential.f4": "Un aller-retour de corrections",
    "plan.pro.name": "Pro",
    "plan.pro.includes": "Tout l'Essentiel, plus :",
    "plan.pro.f1": "Design semi-sur-mesure",
    "plan.pro.f2": "Galerie photo",
    "plan.pro.f3": "Plan Google Maps",
    "plan.pro.f4": "Liens vers vos réseaux sociaux",
    "plan.pro.f5": "Référencement local de base",
    "plan.pro.f6": "Un second aller-retour de corrections",
    "plan.premium.name": "Premium",
    "plan.premium.includes": "Tout le Pro, plus :",
    "plan.premium.f1": "Design entièrement sur-mesure",
    "plan.premium.f2": "Module de réservation ou carte interactive",
    "plan.premium.f3": "Blog d'actualités",
    "plan.premium.f4": "Référencement renforcé",
    "badge.popular": "Le plus choisi",
    "options.h3": "À ajouter à toute formule",
    "options.hint": "Cliquez sur une option pour en savoir plus.",
    "opt.page": "Page supplémentaire",
    "opt.page.desc": "Une page en plus de celles prévues dans votre formule : un nouveau service, votre équipe, une galerie, ou une page dédiée à une offre particulière.",
    "opt.copy": "Rédaction des textes",
    "opt.copy.desc": "Nous écrivons les textes de votre site à partir d'un entretien avec vous : présentation de votre activité, descriptions de vos services, pages secondaires. Vous relisez et validez avant la mise en ligne.",
    "opt.photo": "Séance photo pro",
    "opt.photo.desc": "Une séance photo professionnelle de votre lieu, de vos produits ou de votre équipe. Les photos vous appartiennent et restent utilisables ailleurs : réseaux sociaux, cartes, supports imprimés.",
    "opt.logo": "Création de logo",
    "opt.logo.desc": "Un logo dessiné sur mesure pour votre activité, décliné dans les formats utiles au site, aux réseaux sociaux et à l'impression. Vous en recevez les fichiers sources.",
    "opt.email": "Email professionnel",
    "opt.email.desc": "Une adresse à votre nom de domaine, du type contact@votre-commerce.fr, plutôt qu'une adresse générique en gmail. Configuration sur votre téléphone et votre ordinateur comprise.",
    "opt.gmb": "Fiche Google ou TripAdvisor",
    "opt.gmb.desc": "Création ou remise à niveau de votre fiche : informations, horaires, photos, catégories, zone desservie. C'est souvent le tout premier contact d'un client qui vous cherche depuis son téléphone.",
    "opt.reviews": "Automatisation des avis clients",
    "opt.reviews.desc": "Vos clients reçoivent automatiquement une invitation à laisser un avis après leur passage. Les meilleurs avis peuvent ensuite s'afficher directement sur votre site.",
    "opt.lang": "Version FR / EN",
    "opt.lang.desc": "Votre site entièrement traduit en anglais, avec un bouton pour basculer d'une langue à l'autre. Utile dès que vous accueillez une clientèle touristique ou de passage.",
    "opt.ecommerce": "E-commerce simple",
    "opt.ecommerce.desc": "Une boutique en ligne pour un catalogue réduit : présentation des produits, panier et paiement sécurisé. Pensée pour vendre quelques références, pas pour gérer un stock important.",
    "opt.chatbot": "Installation de chatbot",
    "opt.chatbot.desc": "Un assistant répond aux questions courantes de vos visiteurs — horaires, tarifs, disponibilités, accès — y compris quand vous n'êtes pas derrière votre écran.",
    "opt.rgpd": "Mise en conformité RGPD",
    "opt.rgpd.desc": "Mentions légales, politique de confidentialité et bandeau de consentement adaptés à votre activité, dès lors que votre site collecte des données ou utilise un outil de mesure d'audience.",
    "process.h2": "Comment ça se passe, concrètement.",
    "process.p": "Comptez deux à quatre semaines entre notre premier échange et la mise en ligne.",
    "step1.title": "Premier échange",
    "step1.body": "On se rencontre à Valence, ou on en parle simplement au téléphone. Vous nous racontez votre activité, votre clientèle et ce que le site doit vous apporter. Vous repartez avec un devis précis et gratuit, sans engagement.",
    "step2.title": "Maquette",
    "step2.body": "Nous vous présentons une première version, aux couleurs de votre entreprise. Vous voyez à quoi ressemblera votre site avant qu'il ne soit construit, et nous ajustons ensemble.",
    "step3.title": "Construction et contenus",
    "step3.body": "Textes, photos, horaires, carte, formulaire de contact : tout est mis en place. Vous validez au fur et à mesure, avec un à deux allers-retours de corrections selon la formule choisie.",
    "step4.title": "Mise en ligne",
    "step4.body": "Votre site part en ligne et vous recevez une sauvegarde complète des fichiers : il vous appartient. Ensuite, pour la moindre modification, un message suffit.",
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
    "why4.title": "Vous restez propriétaire de tout",
    "why4.body": "Le site et ses fichiers vous appartiennent. Vous pouvez partir quand vous voulez, avec une sauvegarde complète.",
    "faq.h2": "Les questions qu'on nous pose.",
    "faq.q1": "Pourquoi une fourchette de prix et pas un prix fixe ?",
    "faq.a1": "Parce que deux commerces n'ont pas les mêmes besoins. Trois choses font varier le prix à l'intérieur d'une formule : le nombre de pages, le degré de personnalisation du design et la complexité technique (réservation, carte interactive, boutique). Le devis, lui, est ferme : vous savez exactement ce que vous payez avant que nous commencions.",
    "faq.q2": "Comment se passe le paiement ?",
    "faq.a2": "Nous en discutons au moment du devis et nous nous adaptons à votre trésorerie : échelonnement, paiement en plusieurs fois, rien n'est figé d'avance. C'est aussi ça, traiter avec quelqu'un de local plutôt qu'avec un formulaire d'abonnement.",
    "faq.q3": "Combien de temps avant que mon site soit en ligne ?",
    "faq.a3": "Comptez deux à quatre semaines à partir du moment où nous avons vos contenus. Le délai dépend surtout de la rapidité avec laquelle vous nous transmettez vos textes et vos photos : c'est presque toujours ce qui fait avancer ou traîner un projet.",
    "faq.q4": "Qui écrit les textes du site ?",
    "faq.a4": "Vous, dans la plupart des cas : personne ne connaît votre métier et vos clients mieux que vous. Nous vous guidons sur ce qu'il faut dire et à quel endroit. Si vous préférez ne pas vous en occuper, la rédaction complète est proposée en option.",
    "faq.q5": "Et les photos ?",
    "faq.a5": "Vos propres photos conviennent souvent très bien, surtout pour un commerce. Si elles manquent ou ne rendent pas justice à votre lieu, une séance photo professionnelle est disponible en option.",
    "faq.q6": "Mon site fonctionnera-t-il sur téléphone ?",
    "faq.a6": "Oui, sur toutes les formules, sans supplément. C'est même la priorité : la majorité de vos clients vous cherchera depuis un téléphone, souvent dans la rue, juste avant de pousser votre porte.",
    "faq.q7": "À qui appartient le site une fois livré ?",
    "faq.a7": "À vous. Le site vous appartient et vous en recevez les fichiers. Vous n'êtes lié à personne : ni à nous, ni à un abonnement obligatoire pour qu'il reste en ligne.",
    "faq.q8": "Que se passe-t-il si j'arrête la maintenance ?",
    "faq.a8": "Nous vous remettons une sauvegarde complète de votre site. Vous êtes libre de changer d'hébergeur ou de prestataire quand vous le souhaitez, sans rien perdre. Le préavis est d'un mois, sans engagement de durée.",
    "contact.h2": "Discutons de votre projet.",
    "contact.p": "Devis personnalisé et gratuit après un premier échange, sans engagement.",
    "footer.copy": "© 2026 Ambree Studio — Valence, Drôme",
    "footer.legal": "Mentions légales",
    "footer.tagline": "Sites vitrine sur mesure pour les commerçants, restaurateurs et artisans de Valence et de la Drôme.",
    "footer.navTitle": "Le site",
    "footer.contactTitle": "Nous joindre",
    "footer.process": "Déroulé d'un projet",
    "footer.faq": "Questions fréquentes",
    "footer.address": "10 allée Edith Piaf, 26000 Valence",
    "legal.enNotice": "",
    "legal.title": "Mentions légales",
    "legal.updated": "Dernière mise à jour : 8 août 2026.",
    "label.companyName": "Dénomination",
    "label.tradeName": "Nom commercial",
    "label.legalForm": "Forme juridique",
    "value.legalForm": "Entrepreneur individuel (micro-entreprise)",
    "label.manager": "Nom du responsable",
    "label.registeredAddress": "Adresse du siège",
    "label.siren": "SIREN",
    "label.siret": "SIRET",
    "label.ape": "Code APE",
    "label.registry": "Immatriculation",
    "value.registry": "Registre national des entreprises (RNE), le 3 août 2026",
    "label.vat": "TVA",
    "value.vat": "TVA non applicable, article 293 B du Code général des impôts",
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
    "legal.data.body1": "Le formulaire de contact recueille les informations que vous y saisissez : nom, entreprise ou activité, adresse email, numéro de téléphone, type de projet, budget indicatif et contenu de votre message. Ces données servent uniquement à répondre à votre demande et, le cas échéant, à établir un devis ; elles relèvent des mesures précontractuelles prises à votre demande. Elles ne font l'objet d'aucune cession, d'aucune revente ni d'aucune prospection commerciale.",
    "legal.data.body2": "L'acheminement de votre message est assuré par le service Web3Forms, qui intervient comme sous-traitant technique pour transmettre votre demande vers notre boîte email. Vos informations sont ensuite conservées dans notre messagerie le temps nécessaire au traitement de votre demande et à la relation qui pourrait en découler, puis supprimées.",
    "legal.data.body3": "Conformément au Règlement général sur la protection des données, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition concernant vos données. Vous pouvez également introduire une réclamation auprès de la CNIL.",
    "legal.data.contactPre": "Pour toute question relative à vos données, contactez :",
    "legal.cookies.h2": "Cookies",
    "legal.cookies.body": "Ce site n'utilise actuellement aucun cookie de mesure d'audience ni traceur publicitaire.",
    "aria.openMenu": "Ouvrir le menu",
    "aria.closeMenu": "Fermer le menu",
    "theme.toLight": "Passer en mode clair",
    "theme.toDark": "Passer en mode sombre",
    "a11y.skip": "Aller au contenu",
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
    "contact.form.noteDirect": "Your request is sent straight to us, without going through your email app.",
    "contact.form.success": "Your email app is about to open with your message pre-filled. Just hit send.",
    "contact.form.successSent": "Thank you, your request is on its way. We will get back to you as soon as we can.",
    "form.requiredNote": "Required fields",
    "form.sending": "Sending…",
    "form.errorGeneric": "Sending failed. Please try again, or email us directly at contact@ambree.fr.",
    "err.required": "This field is required.",
    "err.email": "Enter a valid email address.",
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
    "plan.cta": "Request a quote",
    "plan.essential.name": "Essentials",
    "plan.essential.f1": "Template customized to your brand colors",
    "plan.essential.f2": "Built for mobile screens",
    "plan.essential.f3": "Contact form",
    "plan.essential.f4": "One round of revisions",
    "plan.pro.name": "Pro",
    "plan.pro.includes": "Everything in Essentials, plus:",
    "plan.pro.f1": "Semi-custom design",
    "plan.pro.f2": "Photo gallery",
    "plan.pro.f3": "Google Maps location",
    "plan.pro.f4": "Links to your social media",
    "plan.pro.f5": "Basic local SEO",
    "plan.pro.f6": "A second round of revisions",
    "plan.premium.name": "Premium",
    "plan.premium.includes": "Everything in Pro, plus:",
    "plan.premium.f1": "Fully bespoke design",
    "plan.premium.f2": "Booking module or interactive map",
    "plan.premium.f3": "News blog",
    "plan.premium.f4": "Enhanced SEO",
    "badge.popular": "Most popular",
    "options.h3": "Add-ons for any package",
    "options.hint": "Select an option to read more about it.",
    "opt.page": "Extra page",
    "opt.page.desc": "A page beyond those included in your package: a new service, your team, a gallery, or a page dedicated to one particular offer.",
    "opt.copy": "Copywriting",
    "opt.copy.desc": "We write your site's text based on a conversation with you: your business, your service descriptions, secondary pages. You review and approve everything before it goes live.",
    "opt.photo": "Professional photo shoot",
    "opt.photo.desc": "A professional photo session of your premises, your products, or your team. The photos are yours and remain usable elsewhere: social media, cards, printed material.",
    "opt.logo": "Logo design",
    "opt.logo.desc": "A logo drawn specifically for your business, supplied in the formats you need for the site, social media, and print. You receive the source files.",
    "opt.email": "Professional email address",
    "opt.email.desc": "An address on your own domain, such as contact@your-shop.fr, rather than a generic gmail one. Setup on your phone and computer included.",
    "opt.gmb": "Google or TripAdvisor listing",
    "opt.gmb.desc": "Creating or overhauling your listing: details, opening hours, photos, categories, service area. It is often the very first contact for a customer looking you up on their phone.",
    "opt.reviews": "Customer review automation",
    "opt.reviews.desc": "Your customers automatically receive an invitation to leave a review after their visit. The best reviews can then be displayed directly on your site.",
    "opt.lang": "FR / EN version",
    "opt.lang.desc": "Your site fully translated into English, with a button to switch between the two languages. Worth it as soon as you welcome tourists or passing trade.",
    "opt.ecommerce": "Simple e-commerce",
    "opt.ecommerce.desc": "An online shop for a small catalogue: product listings, basket, and secure payment. Built to sell a handful of items, not to manage a large inventory.",
    "opt.chatbot": "Chatbot setup",
    "opt.chatbot.desc": "An assistant answers your visitors' everyday questions — opening hours, prices, availability, directions — including when you are away from your screen.",
    "opt.rgpd": "GDPR compliance",
    "opt.rgpd.desc": "Legal notice, privacy policy, and consent banner tailored to your business, whenever your site collects data or uses an analytics tool.",
    "process.h2": "How it actually works.",
    "process.p": "Expect two to four weeks between our first conversation and going live.",
    "step1.title": "First conversation",
    "step1.body": "We meet in Valence, or simply talk it over on the phone. You tell us about your business, your customers, and what the site needs to do for you. You leave with a precise, free quote, no strings attached.",
    "step2.title": "Mockup",
    "step2.body": "We show you a first version in your brand colors. You see what your site will look like before it is built, and we adjust it together.",
    "step3.title": "Build and content",
    "step3.body": "Text, photos, opening hours, map, contact form: everything gets set up. You approve as we go, with one or two rounds of revisions depending on the package.",
    "step4.title": "Going live",
    "step4.body": "Your site goes live and you receive a full backup of the files: it belongs to you. After that, a single message is all it takes for any change.",
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
    "why4.title": "You own everything",
    "why4.body": "The site and its files belong to you. You can walk away whenever you want, with a full backup.",
    "faq.h2": "The questions we get asked.",
    "faq.q1": "Why a price range instead of a fixed price?",
    "faq.a1": "Because no two businesses have the same needs. Three things move the price within a package: the number of pages, how custom the design is, and the technical complexity (booking, interactive map, shop). The quote itself is firm: you know exactly what you are paying before we start.",
    "faq.q2": "How does payment work?",
    "faq.a2": "We discuss it when we draw up the quote and adapt to your cash flow: staged payments, instalments, nothing is fixed in advance. That is also what dealing with someone local means, rather than with a subscription form.",
    "faq.q3": "How long before my site is live?",
    "faq.a3": "Expect two to four weeks from the moment we have your content. The timeline depends mostly on how quickly you send us your text and photos: that is almost always what makes a project move or stall.",
    "faq.q4": "Who writes the text on the site?",
    "faq.a4": "You do, in most cases: nobody knows your trade and your customers better than you. We guide you on what to say and where. If you would rather not deal with it, full copywriting is available as an add-on.",
    "faq.q5": "What about photos?",
    "faq.a5": "Your own photos are often perfectly good, especially for a local business. If they are missing or do not do your place justice, a professional photo shoot is available as an add-on.",
    "faq.q6": "Will my site work on a phone?",
    "faq.a6": "Yes, on every package, at no extra cost. It is the priority, in fact: most of your customers will look you up on a phone, often out on the street, right before walking through your door.",
    "faq.q7": "Who owns the site once it is delivered?",
    "faq.a7": "You do. The site is yours and you receive its files. You are tied to no one: not to us, and not to a mandatory subscription to keep it online.",
    "faq.q8": "What happens if I stop the maintenance plan?",
    "faq.a8": "We hand you a full backup of your site. You are free to change host or provider whenever you like, without losing anything. Notice is one month, with no minimum term.",
    "contact.h2": "Let's talk about your project.",
    "contact.p": "A free, personalized quote after a first conversation, no commitment.",
    "footer.copy": "© 2026 Ambree Studio — Valence, Drôme, France",
    "footer.legal": "Legal notice",
    "footer.tagline": "Bespoke showcase websites for shop owners, restaurateurs and craftspeople in Valence and the Drôme.",
    "footer.navTitle": "The site",
    "footer.contactTitle": "Get in touch",
    "footer.process": "How a project runs",
    "footer.faq": "Frequently asked questions",
    "footer.address": "10 allée Edith Piaf, 26000 Valence, France",
    "legal.enNotice": "This is a courtesy English translation. The French version is the legally binding reference.",
    "legal.title": "Legal Notice",
    "legal.updated": "Last updated: 8 August 2026.",
    "label.companyName": "Registered name",
    "label.tradeName": "Trading name",
    "label.legalForm": "Legal structure",
    "value.legalForm": "Sole trader (French micro-entreprise)",
    "label.manager": "Manager's name",
    "label.registeredAddress": "Registered address",
    "label.siren": "SIREN (company ID)",
    "label.siret": "SIRET (establishment ID)",
    "label.ape": "APE code (activity)",
    "label.registry": "Registration",
    "value.registry": "French national business register (RNE), 3 August 2026",
    "label.vat": "VAT",
    "value.vat": "VAT not applicable, article 293 B of the French tax code",
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
    "legal.data.body1": "The contact form collects the information you enter into it: name, business or trade, email address, phone number, project type, indicative budget, and the content of your message. This data is used solely to respond to your enquiry and, where applicable, to prepare a quote; it falls under pre-contractual steps taken at your request. It is never sold, shared, or used for marketing.",
    "legal.data.body2": "Your message is delivered by the Web3Forms service, acting as a technical processor to forward your enquiry to our mailbox. Your information is then kept in our mailbox for as long as needed to handle your enquiry and any relationship arising from it, and is then deleted.",
    "legal.data.body3": "Under the General Data Protection Regulation, you have the right to access, correct, erase, restrict, and object to the processing of your data. You may also lodge a complaint with the CNIL, the French data protection authority.",
    "legal.data.contactPre": "For any question about your data, contact:",
    "legal.cookies.h2": "Cookies",
    "legal.cookies.body": "This site does not currently use any audience-measurement or advertising cookies.",
    "aria.openMenu": "Open menu",
    "aria.closeMenu": "Close menu",
    "theme.toLight": "Switch to light mode",
    "theme.toDark": "Switch to dark mode",
    "a11y.skip": "Skip to content",
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

// Change l'icône affichée par un <svg class="icon"><use href="#i-..."></use></svg>.
// Remplace l'ancienne bascule de className sur les <i> du webfont Phosphor,
// abandonné au profit du sprite SVG inline (voir le haut de chaque page HTML).
function setIcon(host, name) {
  const use = host && host.querySelector("use");
  if (use) use.setAttribute("href", `#i-${name}`);
}

function refreshThemeToggleLabel() {
  if (!themeToggle) return;
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  setIcon(themeToggle, isDark ? "sun" : "moon");
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
    setIcon(navToggleRef, isOpen ? "x" : "list");
    navToggleRef.setAttribute("aria-label", translations[currentLang][isOpen ? "aria.closeMenu" : "aria.openMenu"]);
  });

  navLinksRef.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      navLinksRef.classList.remove("is-open");
      navToggleRef.setAttribute("aria-expanded", "false");
      setIcon(navToggleRef, "list");
      navToggleRef.setAttribute("aria-label", translations[currentLang]["aria.openMenu"]);
    })
  );
}

// Apply the language now that the toggle button and nav are wired up.
applyLanguage(currentLang);

// Pré-sélection du budget quand on arrive depuis une carte tarif de l'accueil
// (index.html → contact.html?formule=pro). La correspondance se fait sur
// data-plan et non sur le texte de l'option, pour rester valable en FR comme en EN.
const planFromUrl = new URLSearchParams(location.search).get("formule");
if (planFromUrl) {
  const budgetSelect = document.getElementById("cf-budget");
  const option = budgetSelect && budgetSelect.querySelector(`option[data-plan="${CSS.escape(planFromUrl)}"]`);
  if (option) option.selected = true;
}

// ---------------------------------------------------------------------------
// Formulaire de contact
//
// Envoi assuré par Web3Forms (https://web3forms.com), qui relaie la demande
// vers contact@ambree.fr. Le service ne fait que transmettre : rien à
// administrer, pas de tableau de bord.
//
// Cette clé est un identifiant public, destiné à figurer dans le code de la
// page — ce n'est pas un secret et elle ne donne accès à rien. Elle ne permet
// que d'envoyer un message vers l'adresse qui lui est associée. Il est donc
// normal qu'elle soit visible dans le dépôt et dans le navigateur.
//
// Si la clé est vidée, le formulaire retombe automatiquement sur l'ouverture
// du client mail du visiteur (voir FORM_ENDPOINT juste en dessous).
//
// Pour passer à un autre prestataire (Formspree par exemple), remplacer
// FORM_ENDPOINT et ajuster les champs spéciaux du payload plus bas.
// ---------------------------------------------------------------------------
const WEB3FORMS_ACCESS_KEY = "f2712fda-98d4-4994-bdc5-a63c7974f079";

const FORM_ENDPOINT = WEB3FORMS_ACCESS_KEY ? "https://api.web3forms.com/submit" : null;

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const submitBtn = document.getElementById("formSubmit");
  const noteEl = document.getElementById("formNote");
  const successEl = document.getElementById("formSuccess");
  const errorEl = document.getElementById("formError");

  // Un contrôle par champ obligatoire. L'id du message d'erreur associé est
  // déduit du name du champ ("email" -> "#err-email").
  const checks = [
    { input: contactForm.elements.name, errorKey: "err.required", rule: (v) => v.trim() !== "" },
    { input: contactForm.elements.email, errorKey: "err.email", rule: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) },
    { input: contactForm.elements.message, errorKey: "err.required", rule: (v) => v.trim() !== "" },
  ];

  // Rien n'est signalé avant la première tentative d'envoi : afficher des
  // erreurs sur un formulaire encore vierge est hostile.
  let hasSubmitted = false;

  function validateField(check) {
    const ok = check.rule(check.input.value);
    const msgEl = document.getElementById("err-" + check.input.name);
    check.input.setAttribute("aria-invalid", ok ? "false" : "true");
    if (msgEl) {
      msgEl.textContent = ok ? "" : translations[currentLang][check.errorKey];
      msgEl.hidden = ok;
    }
    return ok;
  }

  // reduce et non every : every s'arrêterait au premier champ fautif, alors
  // qu'on veut signaler toutes les erreurs d'un coup.
  const validateAll = () => checks.reduce((valid, c) => validateField(c) && valid, true);

  checks.forEach((c) => {
    ["blur", "input"].forEach((evt) =>
      c.input.addEventListener(evt, () => { if (hasSubmitted) validateField(c); })
    );
  });

  // La note sous le bouton ne décrit le bon comportement qu'en mode mailto.
  if (FORM_ENDPOINT && noteEl) {
    noteEl.setAttribute("data-i18n", "contact.form.noteDirect");
    noteEl.textContent = translations[currentLang]["contact.form.noteDirect"];
  }

  // Ouvre le client mail avec un message pré-rempli (mode sans backend).
  function openMailClient(data, t) {
    const notProvided = t["contact.mail.notProvided"];
    const get = (field) => (data.get(field) || "").toString().trim() || notProvided;

    const subject = `${t["contact.mail.subject"]} — ${get("name")}`;
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

    // Ouvert dans un contexte jetable pour que la page courante (et le message
    // de confirmation) ne soit pas rechargée si aucun client mail n'est configuré.
    window.open(mailto, "_blank");
  }

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    hasSubmitted = true;
    errorEl.hidden = true;
    successEl.hidden = true;

    if (!validateAll()) {
      // Le focus part sur le premier champ fautif, pour ne pas laisser un
      // utilisateur au clavier chercher où ça bloque.
      const firstBad = checks.find((c) => c.input.getAttribute("aria-invalid") === "true");
      if (firstBad) firstBad.input.focus();
      return;
    }

    // Champ piège rempli : c'est un robot, on abandonne sans rien afficher.
    if (contactForm.elements.website.value.trim() !== "") return;

    const t = translations[currentLang];
    const data = new FormData(contactForm);
    data.delete("website");

    if (!FORM_ENDPOINT) {
      openMailClient(data, t);
      successEl.textContent = t["contact.form.success"];
      successEl.hidden = false;
      return;
    }

    submitBtn.setAttribute("aria-busy", "true");
    submitBtn.textContent = t["form.sending"];

    try {
      const payload = {};
      data.forEach((value, key) => { payload[key] = value; });

      // Champs spéciaux reconnus par Web3Forms. Assignés APRÈS la boucle pour
      // qu'un champ du formulaire ne puisse jamais les écraser.
      payload.access_key = WEB3FORMS_ACCESS_KEY;
      payload.subject = `${t["contact.mail.subject"]} — ${payload.name}`;
      payload.from_name = "Formulaire ambree.fr";
      // replyto : permet de répondre au visiteur directement depuis la boîte
      // mail, sans avoir à recopier son adresse.
      payload.replyto = payload.email;

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);

      contactForm.reset();
      checks.forEach((c) => {
        c.input.setAttribute("aria-invalid", "false");
        const msgEl = document.getElementById("err-" + c.input.name);
        if (msgEl) msgEl.hidden = true;
      });
      hasSubmitted = false;
      successEl.textContent = t["contact.form.successSent"];
      successEl.hidden = false;
    } catch {
      // Le visiteur ne perd pas sa saisie : elle reste dans le formulaire,
      // et on lui donne l'adresse email en secours.
      errorEl.textContent = t["form.errorGeneric"];
      errorEl.hidden = false;
    } finally {
      submitBtn.removeAttribute("aria-busy");
      submitBtn.textContent = translations[currentLang]["contact.form.submit"];
    }
  });
}

// ---------------------------------------------------------------------------
// Trame de fond
//
// Points espacés qui s'écartent légèrement du curseur et s'éclaircissent à son
// approche. Volontairement discrète : elle doit se sentir sans se voir.
//
// Trois garde-fous, à conserver si les réglages sont modifiés :
//  - la couleur est lue dans --accent, jamais codée en dur, pour que la trame
//    suive le thème clair comme sombre ;
//  - au tactile et en mouvement réduit, le canvas est purement et simplement
//    retiré : sans curseur l'effet se réduisait à son état le plus faible, donc
//    invisible sur un écran étroit (voir le bloc final) ;
//  - la boucle s'arrête dès que le curseur s'immobilise : au repos, le coût
//    processeur retombe à zéro au lieu de tourner en continu.
//
// Réglages testés : au-delà d'environ 0.16 d'opacité au repos, un point situé
// derrière un caractère commence à entamer sérieusement le contraste du texte.
// ---------------------------------------------------------------------------

const TRAME = {
  pas: 96,            // écart entre deux points, en pixels
  alphaRepos: 0.06,
  alphaActif: 0.20,
  rayon: 1.6,
  portee: 180,        // rayon d'influence du curseur
  decalage: 5,        // déplacement maximal d'un point, en pixels
};

const trameCanvas = document.getElementById("trame");
const trameCtx = trameCanvas ? trameCanvas.getContext("2d") : null;

// L'effet repose sur un curseur : inutile au doigt. Et il n'a rien à faire
// chez un visiteur qui a demandé à réduire les animations.
const trameActive = !!trameCtx
  && window.matchMedia("(hover: hover) and (pointer: fine)").matches
  && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let trameL = 0, trameH = 0;
let trameCible = { x: -9999, y: -9999 };
let trameLisse = { x: -9999, y: -9999 };
let trameRaf = 0;
let trameDernierMouvement = 0;
let trameCouleur = { r: 198, g: 113, b: 57 };

function trameDimensionner() {
  if (!trameCtx) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  trameL = window.innerWidth;
  trameH = window.innerHeight;
  trameCanvas.width = Math.floor(trameL * dpr);
  trameCanvas.height = Math.floor(trameH * dpr);
  trameCanvas.style.width = trameL + "px";
  trameCanvas.style.height = trameH + "px";
  trameCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function rafraichirTrame() {
  if (!trameCtx) return;
  const v = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
  const n = parseInt(v.slice(1), 16);
  if (!Number.isNaN(n)) trameCouleur = { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  if (trameL) trameDessiner();   // applyTheme() peut appeler avant le dimensionnement
}

function trameDessiner() {
  if (!trameCtx) return;
  trameCtx.clearRect(0, 0, trameL, trameH);

  const { pas, alphaRepos, alphaActif, rayon, portee, decalage } = TRAME;
  const { r, g, b } = trameCouleur;

  for (let x = pas / 2; x < trameL + pas; x += pas) {
    for (let y = pas / 2; y < trameH + pas; y += pas) {
      const dx = x - trameLisse.x;
      const dy = y - trameLisse.y;
      const dist = Math.hypot(dx, dy);

      let px = x, py = y, t = 0;
      if (dist < portee && dist > 0.001) {
        t = 1 - dist / portee;
        t = t * t * (3 - 2 * t);                 // lissage aux extrémités
        const angle = Math.atan2(dy, dx);
        px += Math.cos(angle) * decalage * t;    // le point s'écarte du curseur
        py += Math.sin(angle) * decalage * t;
      }

      trameCtx.beginPath();
      trameCtx.arc(px, py, rayon + t * 0.8, 0, Math.PI * 2);
      trameCtx.fillStyle = `rgba(${r},${g},${b},${(alphaRepos + (alphaActif - alphaRepos) * t).toFixed(3)})`;
      trameCtx.fill();
    }
  }
}

function trameBoucle() {
  trameLisse.x += (trameCible.x - trameLisse.x) * 0.1;
  trameLisse.y += (trameCible.y - trameLisse.y) * 0.1;
  trameDessiner();

  const converge = Math.hypot(trameCible.x - trameLisse.x, trameCible.y - trameLisse.y) < 0.4;
  if (converge && performance.now() - trameDernierMouvement > 400) {
    trameRaf = 0;   // plus rien ne tourne tant que le curseur ne bouge pas
    return;
  }
  trameRaf = requestAnimationFrame(trameBoucle);
}

if (trameActive) {
  trameDimensionner();
  rafraichirTrame();

  window.addEventListener("resize", () => {
    trameDimensionner();
    trameDessiner();
  });

  // La trame surveille elle-même le thème plutôt que d'être appelée depuis
  // applyTheme() : cette fonction s'exécute plus haut dans le fichier, avant
  // que les constantes ci-dessus ne soient initialisées, et l'appel échouait
  // en zone morte temporelle — ce qui interrompait tout le reste du script.
  new MutationObserver(rafraichirTrame).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  window.addEventListener("mousemove", (e) => {
    trameCible = { x: e.clientX, y: e.clientY };
    // Au tout premier mouvement, on cale la position lissée sur le curseur :
    // sinon la trame met deux secondes à le rattraper en balayant l'écran.
    if (trameLisse.x === -9999) trameLisse = { x: trameCible.x, y: trameCible.y };
    trameDernierMouvement = performance.now();
    if (!trameRaf) trameRaf = requestAnimationFrame(trameBoucle);
  });
} else if (trameCanvas) {
  // Sur téléphone, la trame n'apportait rien : l'espacement calibré pour un
  // grand écran ne laissait qu'une cinquantaine de points, et sans curseur il
  // ne restait que l'état le plus faible de l'effet, donc invisible.
  // Plutôt que de laisser un canvas inerte en plein écran, on le retire.
  // Même chose en mouvement réduit, où l'animation n'a pas lieu d'être.
  trameCanvas.remove();
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

// Options complémentaires présentées en onglets (motif ARIA « tabs »).
// Les panneaux sont tous visibles dans le HTML ; c'est ce script qui masque
// les inactifs, de sorte que la page reste lisible sans JavaScript.
const optionTablist = document.querySelector('.pill-row[role="tablist"]');

if (optionTablist) {
  const tabs = [...optionTablist.querySelectorAll('[role="tab"]')];
  const panels = tabs.map((tab) => document.getElementById(tab.getAttribute("aria-controls")));

  function selectOption(index, moveFocus) {
    tabs.forEach((tab, i) => {
      const active = i === index;
      tab.setAttribute("aria-selected", String(active));
      // Tabindex mouvant : le groupe d'onglets ne compte que pour une seule
      // tabulation, les flèches servent ensuite à circuler à l'intérieur.
      tab.tabIndex = active ? 0 : -1;
      if (panels[i]) panels[i].hidden = !active;
    });
    if (moveFocus) tabs[index].focus();
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => selectOption(i, false));

    tab.addEventListener("keydown", (e) => {
      const last = tabs.length - 1;
      let next = null;
      if (e.key === "ArrowRight") next = i === last ? 0 : i + 1;
      else if (e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = last;
      if (next === null) return;
      e.preventDefault();
      selectOption(next, true);
    });
  });

  selectOption(0, false);
}

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
