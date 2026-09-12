# Déployer CIRS Conseil depuis GitHub sur Vercel

Le code et les visuels sont ceux du site validé. Next.js 16, React et TypeScript. Le projet conserve son export statique : aucun serveur ou secret n'est nécessaire pour cette version.

## 1. Tester en local

Installer une version LTS de Node.js compatible avec Next.js 16 (par exemple Node.js 22).
Dans ce dossier, exécuter :

```bash
npm ci
npm run dev
```

Puis ouvrir http://localhost:3000. Pour vérifier la production : `npm run build`.

## 2. Mettre le code sur GitHub

Créer un dépôt vide nommé `cirs-conseil` sur votre compte GitHub, de préférence privé. Ne pas ajouter de README ni de licence lors de la création.
Décompresser cette archive puis ouvrir un terminal dans le dossier qui contient package.json.

```bash
git init -b main
git add .
git commit -m "Initialiser le site CIRS Conseil"
git remote add origin https://github.com/VOTRE_COMPTE/cirs-conseil.git
git push -u origin main
```

Remplacer VOTRE_COMPTE par votre identifiant GitHub. Utiliser votre authentification GitHub habituelle ; ne pas mettre de jeton dans le code.

## 3. Importer dans Vercel

- Ouvrir https://vercel.com/new et connecter votre GitHub.
- Importer le dépôt cirs-conseil et autoriser Vercel à y accéder.
- Framework Preset : Next.js.
- Root Directory : laisser la racine (dossier contenant package.json).
- Build Command : détection automatique (`npm run build`).
- Output Directory : laisser le réglage automatique de Next.js, sans override manuel. Le projet utilise `output: 'export'`.
- Aucune variable d'environnement n'est nécessaire.
- Cliquer sur Deploy puis ouvrir l'adresse fournie par Vercel.

Vérifier l'accueil, /contact/, /publications/, /evenements/ et le menu mobile. Une fois GitHub relié, les futurs changements poussés sur la branche de production déclenchent les déploiements Vercel.

Le dépôt GitHub privé ne rend pas automatiquement le site Vercel privé : régler l'accès dans Vercel si nécessaire.

## 4. Domaine et contact

Le domaine se raccorde dans les réglages Domains du projet Vercel. Utiliser exactement les enregistrements DNS fournis par Vercel.
Le formulaire prépare une demande à copier : il n'envoie aucun email. Le changement d'hébergeur ne change pas ce comportement. La boîte mail professionnelle et l'envoi des demandes restent à configurer séparément.

## Contenu de l'archive

Sources, package-lock.json, configuration Next.js et images. Aucun node_modules, historique Git, sortie de compilation, secret ni configuration propre à ChatGPT Sites. La version de prévisualisation existante n'est pas modifiée.

Documentation officielle :
- https://vercel.com/docs/frameworks/full-stack/nextjs
- https://vercel.com/docs/git/vercel-for-github
