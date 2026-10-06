# CIRS Conseil

Site vitrine en français développé avec Next.js 16 App Router, React 19 et TypeScript strict. Export statique, hébergeable sans serveur applicatif.

## Développement

`npm ci` puis `npm run dev`. Production : `npm run build`. Vérification TypeScript : `npm run typecheck`.

## Organisation

- `app/` : pages, métadonnées, styles adaptatifs et page 404.
- `lib/content.ts` : contenu métier des expertises, secteurs et zones géographiques.
- `components/site.tsx` : composants et interactions réutilisables.
- `public/` : illustration éditoriale originale et logo fourni dans le brief.

Le document « Conception du site CIRS-Conseil.docx » est la source du contenu. Le logo fourni est conservé sur la page contact ; un traitement typographique compact sert la navigation.

## Équipe et expertises

La page `/equipe/` présente le PDG (photo, certifications, parcours, citation de Sénèque) ; ces éléments ne figurent plus sur l'accueil. Les domaines d'expertise sont condensés en cinq (`expertises` dans `lib/content.ts`).

## Articles

Les articles sont des fichiers Markdown dans `content/articles/` (titre, date, rubrique, résumé, auteur, couverture, brouillon). Ils sont lus à la compilation par `lib/articles.ts` et rendus sur `/articles/` et `/articles/<slug>/`. L'espace de rédaction `/admin/` (Sveltia CMS, configuré dans `public/admin/config.yml`) permet à l'auteur de publier seul : voir `GUIDE-ARTICLES.md`. L'ancienne page Publications est remplacée par Articles.

## Coordonnées et contact

Coordonnées centralisées dans `lib/content.ts` (`contact`) : firme@cirsorg.com, 418 558 48 64, WhatsApp +33 7 52 93 06 08, Québec, travail à distance. Le formulaire ouvre la messagerie du visiteur avec un courriel prérempli (lien `mailto:`) ; rien n'est stocké ni transmis par le site. Pour un envoi direct, connecter plus tard un service sécurisé côté serveur (validation, anti-spam, aucune clé API exposée).

Domaines d'expertise (12) et services (5) reprennent le flyer CIRS-Conseil Inc. La rubrique À propos, la citation de Sénèque, la mention d’indépendance vis-à-vis du think tank CIRS et la notice de confidentialité (Loi 25, RGPD) suivent le document « Modifications à faire ». Le portrait du fondateur (`public/fondateur.webp`) provient de ce document.

Aucune publication, date d’événement, référence client ou statistique non fournie n’est inventée. Les rubriques éditoriales affichent leur disponibilité future. Aucun CMS, suivi analytique, compte utilisateur ou collecte de données n’est activé.

## Design

Direction éditoriale inspirée des cabinets de conseil stratégique de référence (Hakluyt, Brunswick, FGS Global, Teneo) : la typographie porte l'identité, la structure passe par la grille, les filets et l'espace, sans cartes, ombres ni coins arrondis.

- Polices auto-hébergées via Fontsource (aucune requête vers Google, cohérent avec la Loi 25 et le RGPD) : Newsreader (serif à axe optique) pour les titres et le corps des articles, Hanken Grotesk pour l'interface.
- Palette : ivoire `#f5f2ec`, encre `#0e1a2b`, marine `#0a172b`, or réservé aux accents.
- Grille éditoriale : une colonne d'étiquettes (3/12) et un corps (9/12) sur toutes les sections.
- Apparition au défilement en CSS natif (`animation-timeline: view()`), désactivée si l'utilisateur réduit les animations.

## Accessibilité et interactions

Structure sémantique, états focus visibles, formulaire avec labels et contraintes natives, navigation mobile, accordéons accessibles, sélecteur de secteurs pilotable avec les flèches haut/bas, préférence de réduction des animations. Aucun test visuel navigateur n’a été effectué dans cette réalisation. La compilation de production et le contrôle TypeScript sont les vérifications techniques.
