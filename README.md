# CIRS-Conseil Inc.

Site vitrine trilingue (français, anglais, arabe) développé avec Next.js 16 App Router, React 19, TypeScript strict et Framer Motion. Export statique, hébergeable sans serveur applicatif.

## Développement

`npm ci` puis `npm run dev`. Production : `npm run build`. Vérification TypeScript : `npm run typecheck`.

## Organisation

- `app/(fr)/` : version française, servie à la racine (`/`, `/equipe/`, `/articles/`, `/articles/<slug>/`, `/evenements/`, `/contact/`).
- `app/[lang]/` : versions anglaise (`/en/…`) et arabe (`/ar/…`, de droite à gauche). Deux layouts racines ; `app/global-not-found.tsx` sert la page 404 commune.
- `components/views.tsx` : pages complètes partagées entre les trois langues et métadonnées localisées (balises `hreflang`, URL canoniques).
- `components/document.tsx` : coquille HTML (`lang`, `dir`), polices et feuille de style unique `app/globals.css`.
- `lib/i18n.ts` : langues, préfixes d’URL, correspondance des pages pour le sélecteur de langue.
- `lib/content.ts` : tous les textes du site dans les trois langues (coordonnées, expertises, secteurs, régions, méthode, FAQ, pages) ; `components/i18n.tsx` les met à disposition des composants interactifs.
- `lib/articles.ts` : lecture des articles Markdown à la compilation.
- `components/site.tsx` : en-tête (avec sélecteur FR · EN · ع), pied de page, boutons, étiquettes, formulaire et coordonnées.
- `components/home.tsx` : sections interactives de l’accueil (expertises, méthode, secteurs, FAQ, portrait).
- `components/hero.tsx` : devise avec cadre de mise au point, carte des horizons, dissolution en pixels.
- `components/illustrations.tsx` : illustrations animées des cinq domaines d’expertise.
- `components/motion.tsx` : primitives d’animation (apparitions, titres mot à mot, texte révélé au défilement, compteurs).
- `lib/world.ts` et `public/world-dots.svg` : carte du monde en points, générés par `scripts/generate-world.mjs` (voir l’en-tête du script).
- `public/` : logo (favicon), illustration du globe, portrait du PDG, espace de rédaction `/admin/`.

## Contenus

Les contenus suivent le flyer CIRS-Conseil Inc. et les documents « Modifications à faire » : rubrique À propos, page Équipe (PDG, certifications, parcours, citation de Sénèque), cinq domaines d’expertise, mention d’indépendance vis-à-vis du think tank CIRS et notice de confidentialité (Loi 25, RGPD).

Recommandations appliquées : traduction anglaise et arabe ; liste « Services » de la rubrique À propos alignée exactement sur les cinq domaines d’expertise ; section des cinq offres de service (Affaires publiques & institutions, Conseil en affaires, Relations publiques, Conseil sur l’environnement, Conseil en management) supprimée, ainsi que son lien de navigation.

Aucune référence client, date d’événement ni statistique commerciale n’est inventée. Les chiffres clés de l’accueil sont des décomptes du contenu (domaines, secteurs, régions, pays et zones). Aucun suivi analytique, compte utilisateur ou collecte de données n’est activé ; l’espace `/admin/` sert uniquement à la rédaction des articles.

## Langues

Le français reste servi à la racine : les adresses existantes ne changent pas. L’anglais et l’arabe ont leurs propres adresses (`/en/`, `/ar/`), déclarées aux moteurs de recherche par des balises `hreflang`. Pour modifier un texte, éditer `lib/content.ts` : TypeScript signale toute clé manquante dans une des trois langues. La version arabe utilise Noto Kufi Arabic (titres) et Noto Sans Arabic (texte), auto-hébergées, et une mise en page miroir (flèches, positions, alignements) ; la carte du monde et les schémas restent orientés de gauche à droite. Les articles sont rédigés en français : les pages Articles anglaise et arabe les listent avec une mention et pointent vers la version française.

## Articles

Les articles sont des fichiers Markdown dans `content/articles/` (titre, date, rubrique, résumé, auteur, couverture, brouillon). Ils sont lus à la compilation et rendus sur `/articles/` (filtrable par rubrique) et `/articles/<slug>/`. L’espace de rédaction `/admin/` (Decap CMS, configuré dans `public/admin/config.yml`) permet à l’auteur de publier seul, avec une connexion par e-mail et mot de passe gérée par DecapBridge (aucun compte GitHub requis) : voir `GUIDE-ARTICLES.md`.

## Coordonnées et contact

Coordonnées centralisées dans `lib/content.ts` (`contact`) : firme@cirsorg.com, 418 558 48 64, WhatsApp +33 7 52 93 06 08, Québec, travail à distance. Le formulaire ouvre la messagerie du visiteur avec un courriel prérempli (lien `mailto:`) ; rien n’est stocké ni transmis par le site. Pour un envoi direct, connecter plus tard un service sécurisé côté serveur (validation, anti-spam, aucune clé API exposée).

## Design

Direction « cartographie du signal » : le globe pointillé et l’or du logo deviennent le langage visuel du site — carte du monde en points, pixels, arcs depuis Québec — sur une palette marine profond, or et bleu ciel.

- Typographie : Outfit (titres, géométrique, approche serrée) et Instrument Sans (texte), auto-hébergées via Fontsource : aucune requête vers Google, cohérent avec la Loi 25 et le RGPD.
- Titres bicolores (la seconde moitié en ton atténué), boutons pilule à pastille fléchée, cartes à encoche d’icône, panneaux aux grands rayons, en-tête en îlot flottant, mot-symbole géant en pied de page.
- Mouvement (Framer Motion) : cadre de mise au point qui glisse sur la devise, arcs animés vers les régions, pastilles glissantes (navigation, onglets, filtres), halo doré des services, flux « du bruit à la décision », titres révélés mot à mot, texte qui se remplit au défilement, compteurs, frise du parcours tracée au défilement, badges flottants, barre de progression de lecture.
- Toutes les animations respectent la préférence système « réduire les animations » ; le rendu initial est identique côté serveur et client (pas d’erreur d’hydratation).

## Accessibilité et vérifications

Structure sémantique, titres nommés pour les lecteurs d’écran, focus visible, onglets et accordéons pilotables au clavier, formulaire avec libellés et contraintes natives, menu mobile plein écran, lien d’évitement. Vérifications : `npm run typecheck`, `npm run build`, et contrôle visuel automatisé (Playwright) de chaque page à 1440, 1280, 1100, 820 et 390 px de large, avec et sans réduction des animations : aucun débordement horizontal, aucune erreur console.
