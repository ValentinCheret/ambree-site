# Mémo — éléments réutilisables du site Ambree Studio

Ce fichier recense tout ce qui a été construit de façon réutilisable, pour éviter de le refaire ou de le perdre de vue. Mis à jour à chaque ajout.

## Déjà en place

### Design tokens (`styles.css`, tout en haut)
Variables CSS dans `:root` : couleurs (`--bg`, `--text`, `--accent` + nuances 100/300/700/900, `--sage`), rayons (`--radius-lg` 24px, `--radius-md` 16px, `--radius-pill`), polices (`--font-display` = Caprasimo, `--font-body` = Figtree), ombre (`--shadow-soft`), easing (`--ease`).
Le bloc `:root[data-theme="dark"]` réécrit ces mêmes variables avec le lockup sombre de la charte. Pour tout nouvel élément : toujours utiliser les variables, jamais une couleur en dur, pour que le mode sombre suive automatiquement.

**`--on-accent` — texte sur aplat terracotta.** À utiliser systématiquement dès qu'un texte est posé sur `--accent` (bouton primaire, carte Pro, bande de contact, badges). Sa valeur est le charbon `#201e1d` dans les **deux** thèmes.
Pourquoi : du crème sur le terracotta `#c67139` plafonne à **3,4:1**, sous le seuil AA de 4,5:1. Le charbon donne 4,6:1 en thème clair et 6,3:1 en sombre. C'est la seule famille de teintes qui passe sans modifier la couleur de marque.
⚠️ Deux conséquences à respecter : (1) **jamais de transparence** sur un texte posé sur terracotta (même `opacity: .9` repasse sous le seuil) — pour hiérarchiser, jouer sur la taille et la graisse ; (2) au survol d'une surface terracotta, utiliser `--accent-hover`, qui **éclaircit** dans les deux thèmes pour que `--on-accent` reste lisible (assombrir casserait le contraste en thème clair).

**`--line` / `--line-soft`** — filets et séparateurs. Remplacent les `rgba(74, 36, 17, …)` codés en dur, qui étaient invisibles en thème sombre. **`--header-bg`** — fond flouté du header au scroll.

### Bouton de langue FR/EN (`#langToggle`, fonction `applyLanguage()` dans `script.js`)
Bouton rond avec le drapeau de la langue cible (🇬🇧 quand le site est en français, 🇫🇷 quand il est en anglais). Bascule tous les éléments marqués `data-i18n="clé"` via le dictionnaire `translations` (objets `fr` et `en`) et retient le choix dans `localStorage` (clé `ambree-lang`). Persiste aussi entre les pages (`index.html` ↔ `mentions-legales.html`).
**Couverture** : `index.html` et `mentions-legales.html` sont intégralement traduits (nav, contenu, footer). Sur la page légale, une note en anglais précise que c'est une traduction de courtoisie et que la version française fait foi juridiquement.
**Pour ajouter un nouveau texte traduisible** : mettre `data-i18n="ma.cle"` sur l'élément (ou sur un `<span>` isolé si l'élément contient d'autres balises à préserver, comme dans les pills ou les points "pourquoi local"), puis ajouter `"ma.cle": "..."` dans les deux dictionnaires (`fr` et `en`) en haut de `script.js`.
**Note d'affichage** : certains environnements sans police emoji couleur affichent "FR"/"GB" au lieu du drapeau — normal, ça reste un simple fallback texte, rien à corriger.

### Bouton clair/sombre (`#themeToggle`, fonction `applyTheme()` dans `script.js`)
Bouton rond dans la nav (icône lune/soleil, Phosphor) qui bascule l'attribut `data-theme` sur `<html>` entre `light` et `dark`, et retient le choix dans `localStorage` (clé `ambree-theme`). Un petit script inline dans le `<head>` de chaque page HTML applique le thème sauvegardé avant le premier rendu, pour éviter un flash de la mauvaise couleur. Tant que le visiteur n'a rien choisi, le site suit la préférence système et continue de la suivre en direct si elle change.
**Pour l'ajouter à une nouvelle page HTML** : copier le script inline du `<head>` (juste avant `<link rel="icon">`) et le bouton `#themeToggle` dans la nav (juste avant `.nav-toggle`) depuis `index.html` — `script.js` est déjà partagé et gère tout le reste.

### Icônes — sprite SVG inline (`.sprite`, `.icon`)
Les icônes viennent d'un sprite `<svg class="sprite">` placé juste après `<body>` sur chaque page, et non plus du webfont Phosphor chargé depuis unpkg (≈200 ko de JS tiers, et des icônes qui apparaissaient après le premier rendu).
**Usage** : `<svg class="icon" aria-hidden="true"><use href="#i-phone"></use></svg>`. La taille suit le `font-size` du parent (`width: 1em`) et la couleur suit `currentColor` — mêmes réglages qu'avant, rien à ajuster.
**Icônes disponibles** (Phosphor Regular, licence MIT) : `i-map-pin`, `i-list`, `i-x`, `i-moon`, `i-sun`, `i-arrows-clockwise`, `i-storefront`, `i-graduation-cap`, `i-note-pencil`, `i-phone`, `i-envelope-simple`, `i-globe`.
**Chaque page n'embarque que les symboles qu'elle utilise** (`index.html` les 12, `contact.html` 8, `mentions-legales.html` 5). Pour ajouter une icône : récupérer le SVG sur `https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/<nom>.svg`, coller son contenu dans un `<symbol id="i-<nom>" viewBox="0 0 256 256">` du sprite de la page concernée.
**Pour changer une icône en JS** : utiliser `setIcon(element, "sun")` dans `script.js` (réécrit le `href` du `<use>`), et non plus une bascule de `className`.

### Boutons (`.btn`)
Trois variantes à combiner avec `.btn` : `.btn-primary` (plein terracotta, texte `--on-accent`), `.btn-ghost` (contour), `.btn-light` (clair, utilisé sur fond terracotta). Effet d'appui intégré (`:active` → léger enfoncement).

### Accessibilité de base (`.skip-link`, `:focus-visible`)
Un anneau de focus terracotta est défini globalement sur `:focus-visible` (navigation clavier). Chaque page commence par un lien d'évitement `.skip-link`, invisible jusqu'à ce qu'on l'atteigne au clavier, qui saute vers le contenu principal. Pour une nouvelle page : copier le `<a class="skip-link">` juste après `<body>` et donner l'`id` correspondant à la cible.

### Panneaux visuels abstraits (`.pattern-warm`, `.pattern-cool` + `.pattern-shape`)
Remplacent les photos stock (Picsum donnait des images aléatoires hors-sujet). Deux variantes de dégradé (chaud terracotta / froid sauge) avec un léger pointillé en surimpression, et des formes (`.shape-circle`, `.shape-square`, `.shape-bar`, avec suffixe `.alt` pour une variante de couleur/position). Utilisés dans le hero et la section "pourquoi local". Réutilisable pour toute nouvelle section qui a besoin d'un visuel de marque sans photo réelle.

### Effet tilt 3D + halo curseur (`script.js`, fonction `initTiltCard()`)
Fonction générique : incline légèrement un panneau en suivant la souris (±10°) et fait suivre un halo lumineux. Prend en paramètres `{ zone, photo, mark, baseRotateDeg, markBaseRotateDeg }`. Respecte `prefers-reduced-motion` (désactivé automatiquement). Déjà appliqué à `.hero-photo` (avec le badge `.hero-mark` en parallaxe) et `.why-photo`.
**Pour l'appliquer ailleurs** : ajouter le CSS `transition`, `transform-style: preserve-3d` et le pseudo-élément `::after` (halo) sur le nouvel élément (copier le bloc `.why-photo` dans `styles.css` comme modèle), puis appeler `initTiltCard({ zone: monElement, photo: monElement })` dans `script.js`.
**Sur mobile/tactile** : pas de curseur, donc pas de survol possible. `initTiltCard` détecte ça via `(hover: hover) and (pointer: fine)` et n'attache rien. À la place, une animation CSS `@media (hover: none)` se déclenche une seule fois, exactement quand l'élément entre à l'écran au scroll — en réutilisant la classe `.is-visible` déjà posée par le système de révélation au scroll (`[data-reveal]`/IntersectionObserver dans `script.js`), plutôt qu'une boucle infinie déconnectée ou l'API expérimentale `animation-timeline: view()` (testée, peu fiable). Keyframes : `tilt-in-hero`, `tilt-in-mark`, `tilt-in-why` dans `styles.css`. Si tu ajoutes le tilt à un nouvel élément, pense à lui mettre `data-reveal` (pour avoir `.is-visible`) et à créer son propre `@keyframes tilt-in-...` déclenché par `.is-visible` sous `@media (hover: none)`, sinon il restera figé sur téléphone.

### Trame de fond (`.trame`, section « Trame de fond » de `script.js`)
Canvas plein écran en fond de page, présent sur les trois pages : des points espacés qui s'écartent légèrement du curseur et s'éclaircissent à son approche. Librement inspirée d'un composant « kinetic grid » du catalogue 21st, mais entièrement réécrite — l'original était un quadrillage blanc et bleu sur fond noir, à l'opposé de la charte.
Réglages dans l'objet `TRAME` en tête de section. L'intensité retenue est la plus discrète des trois testées.

**Trois garde-fous à conserver si les réglages changent :**
1. La couleur est lue dans `--accent`, jamais codée en dur : la trame suit le thème (terracotta sur crème, orangé clair sur charbon).
2. **La boucle s'arrête** dès que le curseur s'immobilise (`trameRaf = 0`). L'original recalculait tout en permanence ; ici le coût au repos est nul. Ne pas transformer ça en boucle continue.
3. Au tactile et en mouvement réduit, **seul le dessin statique** est réalisé — une fois, sans aucun coût ensuite. Seule la réaction au curseur est conditionnelle.

**Contraste** : au-delà d'environ `alphaRepos: 0.16`, un point situé derrière un caractère entame sérieusement la lisibilité. Au réglage actuel (0.06), le texte atténué passe de 6,26:1 à 5,90:1 en thème clair — toujours au-dessus du seuil AA.

**`pointer-events: none` est indispensable** sur le canvas : sans lui, il intercepterait tous les clics de la page. Le `z-index: -1` le place sous le contenu sans avoir à positionner `<main>` ni `<footer>`.

⚠️ **La trame ne doit pas être rafraîchie depuis `applyTheme()`** : cette fonction s'exécute plus haut dans le fichier, avant l'initialisation des constantes de la trame, et l'appel échouait en zone morte temporelle — ce qui interrompait silencieusement tout le reste du script. Le suivi du thème passe donc par un `MutationObserver` sur `data-theme`, autonome et insensible à l'ordre des blocs.

### Apparition au scroll (`[data-reveal]`)
Ajouter l'attribut `data-reveal` à n'importe quel élément pour qu'il apparaisse en fondu/glissé quand il entre dans l'écran. Géré par `IntersectionObserver` (pas d'écouteur de scroll). Respecte le mode mouvement réduit.

### Header collant qui s'assombrit (`#siteHeader`, `#scroll-sentinel`)
Le bandeau de nav devient flouté/opaque dès qu'on quitte le haut de page, via un `IntersectionObserver` sur une sentinelle invisible (pas d'écouteur de scroll non plus).

### Menu mobile (`#navToggle`, `#navLinks`)
Bouton hamburger qui affiche/masque la nav en dessous de 860px, avec bascule d'icône (liste ↔ croix).

### CTA du header (`.nav-cta`, `.nav-cta-mobile`)
Deux exemplaires du même bouton, car `.nav-cta` est un **frère** de `.nav-links` et ne peut donc pas apparaître à l'intérieur du panneau dépliant :
- `.nav-cta` — affiché au-dessus de 860px, à droite des liens.
- `.nav-cta-mobile` — placé **dans** `.nav-links`, affiché uniquement quand le menu mobile est déplié (`.nav-links.is-open .nav-cta-mobile`).

Si tu modifies le libellé ou la cible de l'un, **pense à faire les deux**. En dessous de 1080px, la pastille `.nav-locale` est masquée pour laisser la place au CTA (l'info reste dans le hero et le footer).
Sur `contact.html`, les deux CTA pointent vers `tel:` plutôt que vers la page courante, et le lien « Contact » porte `aria-current="page"`.

### Cartes de tarifs (`.plan-card`, `.plan-card.is-featured`)
Grille de 3 cartes, celle du milieu mise en avant (`.is-featured`, fond plein terracotta, agrandie en `scale(1.04)`). Utilisé pour les formules de création de site.
Chaque carte contient : nom (+ badge), prix, ligne « Tout l'Essentiel, plus : » (`.plan-includes`, absente sur la première formule), liste de prestations à coches (`.plan-features`) et un bouton (`.plan-cta`).
**Les formules sont cumulatives** (Pro = Essentiel + …, Premium = Pro + …), comme les forfaits de maintenance. C'est délibéré : avec des listes indépendantes, un visiteur conclurait que Pro n'a pas de formulaire de contact ou que Premium n'est pas responsive, puisque seule la première formule les mentionne.
**Alignement des boutons** : `.plan-grid` est en `align-items: stretch` (cartes de hauteur égale) et `.plan-card` en `flex-direction: column`, ce qui permet à `.plan-cta { margin-top: auto }` de coller les trois boutons en bas malgré des listes de longueurs différentes. En dessous de 900px, la grille passe sur une colonne et chaque carte reprend sa hauteur propre.
Coches en sauge sur les cartes claires, en `--on-accent` sur la carte terracotta (la sauge n'y tiendrait pas le minimum de 3:1 exigé pour un élément graphique).

### Passage de la formule au formulaire (`?formule=`)
Chaque `.plan-cta` pointe vers `contact.html?formule=essentiel|pro|premium`. `script.js` lit le paramètre et pré-sélectionne l'option correspondante du menu « Budget indicatif », repérée par son attribut `data-plan`.
**Ne jamais ajouter d'attribut `value` à ces `<option>`** : sans `value`, `FormData` renvoie le texte complet de l'option (« Pro (1 200 € – 1 800 €) »), ce qui rend l'email reçu lisible. La correspondance passe donc par `data-plan`, qui reste valable en français comme en anglais.

### Lignes de tarifs (`.tier-row`, `.tier-list`)
Présentation alternative en lignes empilées (nom + prix + description), volontairement différente des cartes ci-dessus pour éviter de répéter deux fois la même mise en page sur la même page. Utilisé pour les forfaits de maintenance.

### Timeline d'étapes (`.step-list`, `.step`)
Liste verticale numérotée utilisée pour « Comment ça se passe » (section `.process` d'`index.html`). Structure inspirée d'un composant du catalogue 21st, réécrite en vanilla.
Chaque `.step` est une grille à deux colonnes : une colonne repère (`.step-marker` = pastille `.step-num` + trait `.step-line`) et une colonne texte (`.step-body`). Le trait se remplit tout seul quelle que soit la longueur du texte : la cellule repère s'étire sur la hauteur de la ligne (comportement `stretch` par défaut en grid) et `.step-line` prend `flex: 1`. Le trait de la dernière étape est masqué via `.step:last-child`.
**Pour ajouter ou retirer une étape** : dupliquer un `<li class="step">`, changer le numéro, ajouter les clés i18n. Aucun ajustement CSS ni JS nécessaire.
C'est le **troisième rythme de mise en page** de la page d'accueil, choisi exprès pour ne pas répéter la grille de cartes (formules) ni la liste en lignes (maintenance).

### FAQ en accordéon (`.faq-list`, `.faq-item`)
Construite sur `<details>` / `<summary>` **natifs**, pas sur du JS : navigation clavier et lecteurs d'écran sont gérés par le navigateur, et la FAQ reste entièrement consultable si `script.js` ne se charge pas.
L'attribut `name="faq"` partagé par tous les `<details>` rend l'accordéon **exclusif** (une seule réponse ouverte à la fois) — c'est du HTML natif, aucune ligne de JS. Un navigateur ancien qui ignore `name=` reste parfaitement utilisable : plusieurs réponses peuvent simplement être ouvertes en même temps.
Le triangle par défaut est masqué (`list-style: none` + `::-webkit-details-marker`), remplacé par un chevron `i-caret-down` qui pivote via `.faq-item[open]`. `<details>` n'anime pas son ouverture : un simple fondu (`@keyframes faq-in`) adoucit l'apparition de la réponse.
**⚠️ Pour ajouter ou modifier une question, il faut toucher TROIS endroits** : le `<details>` dans `index.html`, les clés `faq.qN` / `faq.aN` dans les **deux** dictionnaires de `script.js`, et le bloc **JSON-LD `FAQPage`** du `<head>`. Si le texte du JSON-LD diffère de celui affiché, Google ignore purement et simplement le balisage.

### Options complémentaires en onglets (`.pill`, `.option-panel`)
Rangée de pastilles sauge (`--sage-light` / `--sage-900`, le deuxième accent de la charte, qui les distingue des cartes terracotta juste au-dessus) fonctionnant comme une **barre d'onglets** : cliquer sur une pastille affiche la description de l'option dans un panneau unique en dessous.
Implémente le motif ARIA « tabs » : `role="tablist"` / `role="tab"` / `role="tabpanel"`, `aria-selected`, `aria-controls`, **tabindex mouvant** (le groupe ne compte que pour une seule tabulation) et navigation aux flèches gauche/droite avec bouclage, plus Origine/Fin. Le code tient en une trentaine de lignes dans `script.js`, sans dépendance.
**Progressive enhancement** : les onze panneaux sont présents et visibles dans le HTML ; c'est le script qui masque les inactifs au chargement. Sans JavaScript, les descriptions s'affichent donc les unes à la suite des autres — moins compact, mais entièrement lisible.
L'onglet actif est signalé par une **inversion complète** (fond `--sage-900`, texte `--bg`) et non par la seule couleur : 8,8:1 en thème clair, 14,6:1 en sombre. Attention, la sauge moyenne `--sage` ne donne que 3,15:1 avec du crème — ne pas l'utiliser comme fond de texte.
**Pour ajouter une option** : un `<button role="tab">` dans `.pill-row` et un `<div role="tabpanel">` correspondant (les `id` doivent se répondre via `aria-controls` / `aria-labelledby`), plus les clés `opt.<nom>` et `opt.<nom>.desc` dans les deux dictionnaires. Aucun ajustement CSS ni JS.
Au-dessus de 520px les libellés tiennent sur une ligne (`white-space: nowrap`) ; en dessous le retour à la ligne est autorisé, sans quoi les intitulés longs déborderaient sur petit écran.

### Footer (`.footer-grid`, `.footer-col`, `.footer-bottom`)
Trois colonnes sur fond `--bg-alt` : marque + accroche, plan du site, coordonnées ; puis une barre inférieure séparée par un filet (copyright + mentions légales). Structure inspirée d'un composant du catalogue 21st, réécrite en vanilla.
**Le bloc coordonnées est un signal de référencement local** (nom, ville, téléphone présents sur chaque page). Pas d'adresse postale : elle sera à ajouter ici **et** dans le JSON-LD d'`index.html` une fois l'entreprise immatriculée.
Pas de bloc réseaux sociaux : Ambree Studio n'a aucun compte à ce jour. Ne pas en ajouter tant qu'il n'y en a pas de réel.
**Les titres de colonnes sont des `<h2>`** (pour la navigation au lecteur d'écran) ramenés à la police de texte via `.footer-col-title` — sans cette surcharge, la police d'affichage à sa taille par défaut écraserait tout le footer.
**Le footer est dupliqué dans les trois pages HTML** : toute modification doit être reportée partout. Seule différence entre les pages : les ancres sont internes sur `index.html` (`#services`) et préfixées ailleurs (`index.html#services`), et la page courante porte `aria-current="page"`.
Chaque page doit avoir `i-phone`, `i-envelope-simple` et `i-map-pin` dans son sprite d'icônes.

### Bande CTA pleine largeur (`.contact-band`)
Bloc terracotta en pleine largeur avec titre, texte et actions de contact. Réutilisable pour toute future section d'appel à l'action.

### Étiquette « à compléter » (`.todo`)
Étiquette surlignée servant à marquer un champ non renseigné. Elle avait été créée pour les mentions légales en attendant l'immatriculation ; **elle n'est plus utilisée nulle part** depuis que l'entreprise est immatriculée. Le style est conservé car il reste pratique pour signaler visiblement une information manquante sur une future page.

### Page de contact (`contact.html`)
Page dédiée avec un formulaire (nom, entreprise, email, téléphone, type de projet, budget indicatif, message) et un panneau latéral avec les coordonnées rapides (téléphone, email, site). Comme le site n'a pas de serveur/backend, l'envoi construit un lien `mailto:` avec toutes les infos du formulaire pré-remplies et l'ouvre dans un nouvel onglet (`window.open`, pas `location.href`, pour ne pas recharger/vider la page si aucun client mail n'est configuré). Un message de confirmation s'affiche après l'envoi. Tous les champs sont traduits (FR/EN) via le même système `data-i18n`, y compris le placeholder du champ message (`data-i18n-placeholder`).
Tous les boutons "Discutons de votre projet" du site (nav, hero, footer) et le nouveau bouton "Remplir le formulaire" de la bande de contact de la page d'accueil pointent vers cette page.
**Validation** : `novalidate` sur le `<form>` désactive les bulles natives du navigateur au profit de messages traduits, affichés sous le champ concerné et annoncés aux lecteurs d'écran (`aria-describedby` + `role="alert"` + `aria-invalid`). L'erreur n'est jamais signalée par la seule couleur. Rien ne s'affiche avant la première tentative d'envoi ; ensuite, les champs se revalident en direct pendant la saisie. Le focus part automatiquement sur le premier champ fautif.
Pour ajouter un champ obligatoire : une entrée dans le tableau `checks` de `script.js`, et un `<p class="field-error" id="err-<name>" role="alert" hidden>` sous le champ (l'id se déduit du `name`).

**Anti-spam** : un champ piège `name="website"` (classe `.hp`), placé hors écran et non focusable. Volontairement **pas** en `display:none` ni `visibility:hidden`, que beaucoup de robots détectent. S'il est rempli, la soumission est abandonnée en silence. Il est retiré des données avant tout envoi.

**Envoi actif via Web3Forms** (`WEB3FORMS_ACCESS_KEY`, en haut de la section « Formulaire de contact » de `script.js`). L'envoi se fait en arrière-plan par `fetch` : le visiteur ne quitte pas la page. Bouton neutralisé pendant l'envoi, message de succès ou d'échec, **saisie conservée en cas d'échec**.
Repli automatique : si la clé est vidée, `FORM_ENDPOINT` repasse à `null` et le formulaire ouvre le client mail du visiteur, note sous le bouton comprise. Utile pour déboguer sans envoyer de vrais messages.

**La clé est un identifiant public**, destiné à figurer dans le code de la page. Ce n'est pas un secret : elle ne donne accès à rien et ne permet que d'envoyer un message vers l'adresse qui lui est associée. Il est donc normal qu'elle soit visible dans le dépôt Git et dans le navigateur — inutile de chercher à la masquer, ce serait impossible dans un site statique de toute façon. Si le formulaire se met à recevoir du spam, la clé se régénère depuis web3forms.com.

Champs spéciaux ajoutés au payload, assignés **après** la boucle sur les champs pour qu'aucune saisie ne puisse les écraser : `access_key`, `subject`, `from_name`, et surtout `replyto` (l'email du visiteur), qui permet de lui répondre d'un simple « Répondre » depuis la boîte mail.
Pour changer de prestataire (Formspree par exemple), remplacer `FORM_ENDPOINT` et ajuster ces champs spéciaux.

**Aucun engagement de délai de réponse n'est affiché aux prospects** (décision de Valentin). Le « sous 48h » qui subsiste concerne uniquement le support de la formule de maintenance Confort, qui est une prestation payante.

**RGPD** : la section « Données personnelles » de `mentions-legales.html` décrit ce mode d'envoi (données collectées, finalité, base précontractuelle, Web3Forms comme sous-traitant, durée de conservation, droits, CNIL). Elle est donc à jour et cohérente avec le comportement réel du formulaire.
⚠️ Vérifier la politique de confidentialité de Web3Forms avant la mise en ligne publique, et faire relire cette section — elle n'a pas été rédigée par un juriste.

### Référencement et partage
- **Données structurées** : un bloc JSON-LD `ProfessionalService` dans le `<head>` d'`index.html` (nom, téléphone, email, zone desservie, les trois formules avec leurs fourchettes de prix). C'est ce qui alimente la fiche entreprise dans Google. **À compléter dès l'immatriculation** : `streetAddress` et `postalCode` dans `address`.
- **OpenGraph / Twitter Card** sur `index.html` et `contact.html` : titre, description, et `og-image.png` (1200×630) pour l'aperçu au partage sur SMS, WhatsApp, LinkedIn, Facebook. Toute nouvelle page doit recevoir son propre bloc (avec son `og:url` et son `<link rel="canonical">`).
- **`og-image.png`** : image générée aux couleurs de la charte, mais avec Georgia en substitut de Caprasimo (la police n'était pas disponible côté génération). À remplacer par un visuel dessiné proprement quand l'occasion se présente.
- **`robots.txt` / `sitemap.xml`** à la racine. Penser à ajouter chaque nouvelle page au sitemap et à mettre à jour `<lastmod>`.

## Informations légales de l'entreprise

Immatriculation validée par l'INPI le **3 août 2026**. Les informations figurent à trois endroits qui doivent rester cohérents entre eux :
`mentions-legales.html` (section « Éditeur du site »), le **JSON-LD** en tête d'`index.html`, et le **footer** des trois pages.

- Dénomination : Chéret Valentin Jean-Marie Francis — Nom commercial : Ambree Studio
- Entrepreneur individuel (micro-entreprise) — SIREN 108 347 469 — SIRET 108 347 469 00018 — APE 6201Z
- Siège : 10 allée Edith Piaf, 26000 Valence
- **Franchise en base de TVA** : pas de numéro de TVA intracommunautaire. La mention « TVA non applicable, article 293 B du CGI » est obligatoire, y compris sur les factures. Ne pas inventer de `vatID` dans le JSON-LD.
- Pas de champ `geo` dans le JSON-LD : les coordonnées GPS exactes ne sont pas connues, et une position approximative serait pire que rien.

⚠️ **Le siège est le domicile personnel de Valentin.** Il a choisi le 8 août 2026 de l'afficher partout (mentions légales, footer, données structurées) pour le référencement local, en connaissance de cause. S'il prend un jour une domiciliation commerciale, c'est à changer aux trois endroits ci-dessus.

⚠️ **Le PDF de synthèse INPI contient bien d'autres données** — numéro de sécurité sociale, date et commune de naissance, situation matrimoniale, email personnel. Rien de tout cela n'a à figurer sur le site : seules les mentions exigées par la LCEN y sont.

La page `mentions-legales.html` n'est plus en `noindex` et figure désormais dans `sitemap.xml`.

## En attente d'une décision de Valentin

- **Nom de domaine** : la FAQ affirme que le site et ses fichiers appartiennent au client, mais ne dit **rien** du nom de domaine, faute de décision technique. À trancher (domaine déposé au nom du client ? transférable ?), puis ajouter la réponse à la question « À qui appartient le site une fois livré ? » — dans `index.html`, dans les deux dictionnaires de `script.js` **et** dans le JSON-LD `FAQPage`.
- **Modalités de paiement** : la réponse actuelle (« nous nous adaptons à votre trésorerie ») est volontairement souple, conformément au choix de négocier au cas par cas. Si un jour un ancrage chiffré est décidé (ex. 30 % d'acompte), il convertira mieux qu'une formulation ouverte.
- **Section Réalisations** : à construire à partir d'un ou deux projets de démonstration, présentés explicitement comme des **exemples de réalisation** et jamais comme des clients réels. Valentin fournira les visuels.
- **Section Témoignages** : rien ne sera publié tant qu'il n'y aura pas de vrais clients ayant donné leur accord écrit.

## Idées évoquées, pas encore faites

- Appliquer l'effet tilt (`initTiltCard`) aux cartes de tarifs ou à d'autres éléments si tu veux plus d'interactivité.
- Remplacer les panneaux abstraits (`.pattern-warm` / `.pattern-cool`) par de vraies photos une fois disponibles.
- Intégrer le vrai fichier logo vectoriel (`Ambree studio logo concepts.zip`) à la place du SVG recréé à la main.
- Compléter et publier `mentions-legales.html` une fois le SIRET et l'hébergeur connus (retirer le `noindex`).

## Fichiers du projet

- `index.html` — page principale
- `contact.html` — page de contact (formulaire + coordonnées)
- `mentions-legales.html` — mentions légales (provisoire, `noindex`)
- `styles.css` — tous les styles et design tokens
- `script.js` — toute la logique JS (i18n, thème, nav, scroll-reveal, tilt, formulaire)
- `server.js` — petit serveur local de prévisualisation (`node server.js`, port 5173)
- `og-image.png` — visuel d'aperçu au partage (1200×630)
- `robots.txt` / `sitemap.xml` — référencement
- `signature-email.html` — signature de mail (hors site)

**Cache-busting** : `styles.css` et `script.js` sont appelés avec `?v=3`. Après une modification de l'un des deux, incrémenter le numéro **dans les trois pages HTML**, sinon les visiteurs garderont l'ancienne version en cache.
