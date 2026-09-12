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

## À renseigner avant ouverture commerciale

Les coordonnées, le domaine et le fournisseur de messagerie ne sont pas fournis. Le formulaire valide et prépare une demande copiable, sans transmission ni stockage. Pour recevoir des messages, connecter un service sécurisé côté serveur avec validation, contrôle du débit et protection anti-spam ; ne jamais exposer de clé API dans le navigateur. Configurer séparément le domaine et les enregistrements de messagerie SPF/DKIM/DMARC. Ajouter les informations légales confirmées de la société et les informations de confidentialité correspondant aux services effectivement activés.

Aucune publication, date d’événement, référence client ou statistique non fournie n’est inventée. Les rubriques éditoriales affichent leur disponibilité future. Aucun CMS, suivi analytique, compte utilisateur ou collecte de données n’est activé.

## Design

Bleu nuit, or mat, typographie éditoriale et illustration de globe. Références explorées : https://dribbble.com/tags/strategy-consulting et https://dribbble.com/tags/editorial-web-design. Figma Community n’était pas accessible à la recherche. Illustrations originales générées pour le site, logo extrait du document de conception. Les polices Google Fonts ont une pile système de repli.

## Accessibilité et interactions

Structure sémantique, états focus visibles, formulaire avec labels et contraintes natives, navigation mobile, accordéons accessibles, sélecteur de secteurs pilotable avec les flèches haut/bas, préférence de réduction des animations. Aucun test visuel navigateur n’a été effectué dans cette réalisation. La compilation de production et le contrôle TypeScript sont les vérifications techniques.
