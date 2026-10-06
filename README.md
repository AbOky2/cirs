# CIRS-Conseil Inc.

Site vitrine en français développé avec Next.js 16 App Router, React 19, TypeScript strict et Framer Motion. Export statique, hébergeable sans serveur applicatif.

## Développement

`npm ci` puis `npm run dev`. Production : `npm run build`. Vérification TypeScript : `npm run typecheck`.

## Organisation

- `app/` : pages (accueil, équipe, articles, événements, contact, 404), métadonnées et feuille de style unique `globals.css`.
- `lib/content.ts` : contenus métier (coordonnées, expertises, services, secteurs, régions, méthode, FAQ, chiffres clés).
- `lib/articles.ts` : lecture des articles Markdown à la compilation.
- `components/site.tsx` : en-tête, pied de page, boutons, étiquettes, formulaire et coordonnées.
- `components/home.tsx` : sections interactives de l’accueil (expertises, services, méthode, secteurs, FAQ, portrait).
- `components/hero.tsx` : devise avec cadre de mise au point, carte des horizons, dissolution en pixels.
- `components/illustrations.tsx` : illustrations animées des cinq domaines d’expertise.
- `components/motion.tsx` : primitives d’animation (apparitions, titres mot à mot, texte révélé au défilement, compteurs).
- `lib/world.ts` et `public/world-dots.svg` : carte du monde en points, générés par `scripts/generate-world.mjs` (voir l’en-tête du script).
- `public/` : logo (favicon), illustration du globe, portrait du PDG, espace de rédaction `/admin/`.

## Contenus

Les contenus suivent le flyer CIRS-Conseil Inc. et les documents « Modifications à faire » : rubrique À propos, page Équipe (PDG, certifications, parcours, citation de Sénèque), cinq domaines d’expertise, cinq offres de service, mention d’indépendance vis-à-vis du think tank CIRS et notice de confidentialité (Loi 25, RGPD).

Aucune référence client, date d’événement ni statistique commerciale n’est inventée. Les chiffres clés de l’accueil sont des décomptes du contenu (domaines, offres, régions, pays et zones). Aucun suivi analytique, compte utilisateur ou collecte de données n’est activé ; l’espace `/admin/` sert uniquement à la rédaction des articles.

## Articles

Les articles sont des fichiers Markdown dans `content/articles/` (titre, date, rubrique, résumé, auteur, couverture, brouillon). Ils sont lus à la compilation et rendus sur `/articles/` (filtrable par rubrique) et `/articles/<slug>/`. L’espace de rédaction `/admin/` (Sveltia CMS, configuré dans `public/admin/config.yml`) permet à l’auteur de publier seul : voir `GUIDE-ARTICLES.md`.

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
