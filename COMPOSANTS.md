# Mémo — éléments réutilisables du site Ambree Studio

Ce fichier recense tout ce qui a été construit de façon réutilisable, pour éviter de le refaire ou de le perdre de vue. Mis à jour à chaque ajout.

## Déjà en place

### Design tokens (`styles.css`, tout en haut)
Variables CSS dans `:root` : couleurs (`--bg`, `--text`, `--accent` + nuances 100/300/700/900, `--sage`), rayons (`--radius-lg` 24px, `--radius-md` 16px, `--radius-pill`), polices (`--font-display` = Caprasimo, `--font-body` = Figtree), ombre (`--shadow-soft`), easing (`--ease`).
Le bloc `:root[data-theme="dark"]` réécrit ces mêmes variables avec le lockup sombre de la charte. Pour tout nouvel élément : toujours utiliser les variables, jamais une couleur en dur, pour que le mode sombre suive automatiquement.

### Bouton de langue FR/EN (`#langToggle`, fonction `applyLanguage()` dans `script.js`)
Bouton rond avec le drapeau de la langue cible (🇬🇧 quand le site est en français, 🇫🇷 quand il est en anglais). Bascule tous les éléments marqués `data-i18n="clé"` via le dictionnaire `translations` (objets `fr` et `en`) et retient le choix dans `localStorage` (clé `ambree-lang`). Persiste aussi entre les pages (`index.html` ↔ `mentions-legales.html`).
**Couverture** : `index.html` et `mentions-legales.html` sont intégralement traduits (nav, contenu, footer). Sur la page légale, une note en anglais précise que c'est une traduction de courtoisie et que la version française fait foi juridiquement.
**Pour ajouter un nouveau texte traduisible** : mettre `data-i18n="ma.cle"` sur l'élément (ou sur un `<span>` isolé si l'élément contient d'autres balises à préserver, comme dans les pills ou les points "pourquoi local"), puis ajouter `"ma.cle": "..."` dans les deux dictionnaires (`fr` et `en`) en haut de `script.js`.
**Note d'affichage** : certains environnements sans police emoji couleur affichent "FR"/"GB" au lieu du drapeau — normal, ça reste un simple fallback texte, rien à corriger.

### Bouton clair/sombre (`#themeToggle`, fonction `applyTheme()` dans `script.js`)
Bouton rond dans la nav (icône lune/soleil, Phosphor) qui bascule l'attribut `data-theme` sur `<html>` entre `light` et `dark`, et retient le choix dans `localStorage` (clé `ambree-theme`). Un petit script inline dans le `<head>` de chaque page HTML applique le thème sauvegardé avant le premier rendu, pour éviter un flash de la mauvaise couleur. Tant que le visiteur n'a rien choisi, le site suit la préférence système et continue de la suivre en direct si elle change.
**Pour l'ajouter à une nouvelle page HTML** : copier le script inline du `<head>` (juste avant `<link rel="icon">`) et le bouton `#themeToggle` dans la nav (juste avant `.nav-toggle`) depuis `index.html` — `script.js` est déjà partagé et gère tout le reste.

### Boutons (`.btn`)
Trois variantes à combiner avec `.btn` : `.btn-primary` (plein terracotta), `.btn-ghost` (contour), `.btn-light` (clair, utilisé sur fond terracotta). Effet d'appui intégré (`:active` → léger enfoncement).

### Panneaux visuels abstraits (`.pattern-warm`, `.pattern-cool` + `.pattern-shape`)
Remplacent les photos stock (Picsum donnait des images aléatoires hors-sujet). Deux variantes de dégradé (chaud terracotta / froid sauge) avec un léger pointillé en surimpression, et des formes (`.shape-circle`, `.shape-square`, `.shape-bar`, avec suffixe `.alt` pour une variante de couleur/position). Utilisés dans le hero et la section "pourquoi local". Réutilisable pour toute nouvelle section qui a besoin d'un visuel de marque sans photo réelle.

### Effet tilt 3D + halo curseur (`script.js`, fonction `initTiltCard()`)
Fonction générique : incline légèrement un panneau en suivant la souris (±10°) et fait suivre un halo lumineux. Prend en paramètres `{ zone, photo, mark, baseRotateDeg, markBaseRotateDeg }`. Respecte `prefers-reduced-motion` (désactivé automatiquement). Déjà appliqué à `.hero-photo` (avec le badge `.hero-mark` en parallaxe) et `.why-photo`.
**Pour l'appliquer ailleurs** : ajouter le CSS `transition`, `transform-style: preserve-3d` et le pseudo-élément `::after` (halo) sur le nouvel élément (copier le bloc `.why-photo` dans `styles.css` comme modèle), puis appeler `initTiltCard({ zone: monElement, photo: monElement })` dans `script.js`.
**Sur mobile/tactile** : pas de curseur, donc pas de survol possible. `initTiltCard` détecte ça via `(hover: hover) and (pointer: fine)` et n'attache rien. À la place, une animation CSS `@media (hover: none)` se déclenche une seule fois, exactement quand l'élément entre à l'écran au scroll — en réutilisant la classe `.is-visible` déjà posée par le système de révélation au scroll (`[data-reveal]`/IntersectionObserver dans `script.js`), plutôt qu'une boucle infinie déconnectée ou l'API expérimentale `animation-timeline: view()` (testée, peu fiable). Keyframes : `tilt-in-hero`, `tilt-in-mark`, `tilt-in-why` dans `styles.css`. Si tu ajoutes le tilt à un nouvel élément, pense à lui mettre `data-reveal` (pour avoir `.is-visible`) et à créer son propre `@keyframes tilt-in-...` déclenché par `.is-visible` sous `@media (hover: none)`, sinon il restera figé sur téléphone.

### Apparition au scroll (`[data-reveal]`)
Ajouter l'attribut `data-reveal` à n'importe quel élément pour qu'il apparaisse en fondu/glissé quand il entre dans l'écran. Géré par `IntersectionObserver` (pas d'écouteur de scroll). Respecte le mode mouvement réduit.

### Header collant qui s'assombrit (`#siteHeader`, `#scroll-sentinel`)
Le bandeau de nav devient flouté/opaque dès qu'on quitte le haut de page, via un `IntersectionObserver` sur une sentinelle invisible (pas d'écouteur de scroll non plus).

### Menu mobile (`#navToggle`, `#navLinks`)
Bouton hamburger qui affiche/masque la nav en dessous de 860px, avec bascule d'icône (liste ↔ croix).

### Cartes de tarifs (`.plan-card`, `.plan-card.is-featured`)
Grille de 3 cartes, celle du milieu peut être mise en avant (`.is-featured`, fond plein terracotta, légèrement agrandie). Utilisé pour les formules de création de site.

### Lignes de tarifs (`.tier-row`, `.tier-list`)
Présentation alternative en lignes empilées (nom + prix + description), volontairement différente des cartes ci-dessus pour éviter de répéter deux fois la même mise en page sur la même page. Utilisé pour les forfaits de maintenance.

### Pills (`.pill`)
Petites étiquettes arrondies pour une liste courte d'options à la ligne. Utilisé pour "options complémentaires". Colorées en sauge (`--sage-light` / `--sage` / `--sage-900`, le deuxième accent de la charte) pour bien les distinguer des cartes terracotta des formules juste au-dessus.

### Bande CTA pleine largeur (`.contact-band`)
Bloc terracotta en pleine largeur avec titre, texte et actions de contact. Réutilisable pour toute future section d'appel à l'action.

### Page mentions légales avec placeholders (`.todo`)
Style d'étiquette surlignée pour marquer un champ "à compléter" (utilisé dans `mentions-legales.html` en attendant le SIRET). Réutilisable si d'autres infos manquent ailleurs.

### Page de contact (`contact.html`)
Page dédiée avec un formulaire (nom, entreprise, email, téléphone, type de projet, budget indicatif, message) et un panneau latéral avec les coordonnées rapides (téléphone, email, site). Comme le site n'a pas de serveur/backend, l'envoi construit un lien `mailto:` avec toutes les infos du formulaire pré-remplies et l'ouvre dans un nouvel onglet (`window.open`, pas `location.href`, pour ne pas recharger/vider la page si aucun client mail n'est configuré). Un message de confirmation s'affiche après l'envoi. Tous les champs sont traduits (FR/EN) via le même système `data-i18n`, y compris le placeholder du champ message (`data-i18n-placeholder`).
Tous les boutons "Discutons de votre projet" du site (nav, hero, footer) et le nouveau bouton "Remplir le formulaire" de la bande de contact de la page d'accueil pointent vers cette page.
**Limite actuelle** : pas de vrai backend, donc pas d'enregistrement des demandes côté serveur — tout part par email via le client de messagerie du visiteur. Si un jour tu veux un vrai formulaire qui envoie sans ouvrir de client mail, il faudra un service comme Formspree ou un petit backend, ce qui sortira du cadre "site 100% statique" actuel.

## Idées évoquées, pas encore faites

- Appliquer l'effet tilt (`initTiltCard`) aux cartes de tarifs ou à d'autres éléments si tu veux plus d'interactivité.
- Remplacer les panneaux abstraits (`.pattern-warm` / `.pattern-cool`) par de vraies photos une fois disponibles.
- Intégrer le vrai fichier logo vectoriel (`Ambree studio logo concepts.zip`) à la place du SVG recréé à la main.
- Compléter et publier `mentions-legales.html` une fois le SIRET et l'hébergeur connus (retirer le `noindex`).

## Fichiers du projet

- `index.html` — page principale
- `mentions-legales.html` — mentions légales (provisoire)
- `styles.css` — tous les styles et design tokens
- `script.js` — toute la logique JS (nav, scroll-reveal, tilt, header)
- `server.js` — petit serveur local de prévisualisation (`node server.js`, port 5173)
