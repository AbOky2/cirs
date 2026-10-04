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

## Articles

Les articles sont des fichiers Markdown dans `content/articles/` (titre, date, rubrique, résumé, auteur, couverture, brouillon). Ils sont lus à la compilation par `lib/articles.ts` et rendus sur `/articles/` et `/articles/<slug>/`. L'espace de rédaction `/admin/` (Sveltia CMS, configuré dans `public/admin/config.yml`) permet à l'auteur de publier seul : voir `GUIDE-ARTICLES.md`. L'ancienne page Publications est remplacée par Articles.

## Coordonnées et contact

Coordonnées centralisées dans `lib/content.ts` (`contact`) : firme@cirsorg.com, 418 558 48 64, WhatsApp +33 7 52 93 06 08, Québec, travail à distance. Le formulaire ouvre la messagerie du visiteur avec un courriel prérempli (lien `mailto:`) ; rien n'est stocké ni transmis par le site. Pour un envoi direct, connecter plus tard un service sécurisé côté serveur (validation, anti-spam, aucune clé API exposée).

Domaines d'expertise (12) et services (5) reprennent le flyer CIRS-Conseil Inc. La rubrique À propos, la citation de Sénèque, la mention d’indépendance vis-à-vis du think tank CIRS et la notice de confidentialité (Loi 25, RGPD) suivent le document « Modifications à faire ». Le portrait du fondateur (`public/fondateur.webp`) provient de ce document.

Aucune publication, date d’événement, référence client ou statistique non fournie n’est inventée. Les rubriques éditoriales affichent leur disponibilité future. Aucun CMS, suivi analytique, compte utilisateur ou collecte de données n’est activé.

## Design

Bleu marine royal et or, alignés sur le logo et le flyer, typographie éditoriale et illustration de globe. Références explorées : https://dribbble.com/tags/strategy-consulting et https://dribbble.com/tags/editorial-web-design. Figma Community n’était pas accessible à la recherche. Illustrations originales générées pour le site, logo extrait du document de conception. Les polices Google Fonts ont une pile système de repli.

## Accessibilité et interactions

Structure sémantique, états focus visibles, formulaire avec labels et contraintes natives, navigation mobile, accordéons accessibles, sélecteur de secteurs pilotable avec les flèches haut/bas, préférence de réduction des animations. Aucun test visuel navigateur n’a été effectué dans cette réalisation. La compilation de production et le contrôle TypeScript sont les vérifications techniques.
