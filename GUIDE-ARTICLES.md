# Publier des articles sur le site CIRS-Conseil Inc.

La rubrique **Articles** (`/articles/`) se gère depuis un espace de rédaction en ligne : **`/admin/`** (https://cirsconseil.org/admin/). On s'y connecte avec une **adresse e-mail et un mot de passe**, puis on écrit, modifie, met en brouillon ou supprime des articles. Aucune connaissance technique n'est nécessaire.

- **Partie 1** : mise en service, à faire **une seule fois** par la personne qui gère le dépôt GitHub `AbOky2/cirs`.
- **Partie 2** : guide de la personne qui rédige les articles.

---

## Partie 1 — Mise en service (une seule fois)

L'espace de rédaction utilise [Decap CMS](https://decapcms.org/) et le service de connexion [DecapBridge](https://decapbridge.com/) (offre gratuite : jusqu'à 10 rédacteurs par site). DecapBridge conserve un jeton GitHub et enregistre les articles dans le dépôt au nom des rédacteurs, qui n'ont donc pas besoin de compte GitHub.

### 1. Créer un jeton GitHub pour DecapBridge

Sur GitHub, avec le compte propriétaire du dépôt : *Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token*.

- **Token name** : `DecapBridge – site CIRS`
- **Expiration** : 1 an (noter la date : il faudra le renouveler, voir plus bas)
- **Repository access** : *Only select repositories* → `AbOky2/cirs`
- **Permissions → Repository permissions → Contents** : *Read and write*

Copier le jeton. Ne jamais l'écrire dans un fichier du site.

### 2. Déclarer le site sur DecapBridge

1. Créer un compte sur https://decapbridge.com/ puis, dans le tableau de bord, ajouter un site :
   - **Git provider** : GitHub
   - **Repository** : `AbOky2/cirs`
   - **Access token** : le jeton de l'étape 1
   - **CMS login URL** : `https://cirsconseil.org/admin/index.html`
   - **Auth type** : *Classic* (connexion par e-mail et mot de passe)
2. Cliquer sur **Create site**. DecapBridge affiche une configuration contenant une ligne `identity_url: https://auth.decapbridge.com/sites/…`.
3. Dans `public/admin/config.yml`, remplacer `ID_DU_SITE` par l'identifiant figurant dans cette ligne (la suite de lettres et de chiffres après `/sites/`). Le reste de la configuration est déjà prêt : ne pas copier le reste du modèle DecapBridge.
4. Enregistrer la modification sur la branche `main`. Vercel remet le site en ligne.

### 3. Inviter la personne qui rédige

Dans DecapBridge, ouvrir le site → **Manage collaborators** → inviter son adresse e-mail. Elle reçoit un courriel pour choisir son mot de passe.

### 4. Vérifier

Ouvrir https://cirsconseil.org/admin/, se connecter, créer un article de test en cochant **Brouillon**, l'enregistrer, puis le supprimer. Un commit « Article : publier … » doit apparaître dans le dépôt.

### Entretien

- **Renouveler le jeton GitHub avant son expiration** : en créer un nouveau (étape 1) et le coller dans les réglages du site sur DecapBridge. Sinon, l'enregistrement d'articles échoue.
- **Retirer l'accès d'un rédacteur** : DecapBridge → Manage collaborators.

---

## Partie 2 — Guide de la personne qui rédige

### Se connecter

1. Ouvrir **https://cirsconseil.org/admin/**.
2. Saisir son adresse e-mail et son mot de passe.
3. Mot de passe oublié : utiliser le lien de réinitialisation de la page de connexion.

### Écrire et publier un article

1. Ouvrir **Articles**, puis cliquer sur **Nouveau Article**.
2. Remplir les champs :
   - **Titre**
   - **Date de publication** : les articles sont classés du plus récent au plus ancien.
   - **Rubrique** : Analyses stratégiques, Notes de politiques publiques, Notes stratégiques, Veille internationale ou Perspectives CIRS-Conseil.
   - **Résumé** : il s'affiche dans la liste des articles.
   - **Auteur**
   - **Image de couverture** : facultative.
   - **Texte de l'article** : la barre d'outils permet d'ajouter des intertitres, du gras, de l'italique, des listes, des liens, des citations et des images.
3. Pour enregistrer sans publier, cocher **Brouillon**. Décocher la case quand l'article est prêt.
4. Cliquer sur **Publier** (en haut), puis **Publier maintenant**.
5. L'article apparaît sur le site **1 à 2 minutes** plus tard.

### Modifier ou supprimer un article

Dans **Articles**, cliquer sur l'article dans la liste. Le modifier puis cliquer sur **Publier**. Pour le supprimer, utiliser le menu **Supprimer l'entrée publiée**.

### Bon à savoir

- L'adresse de l'article est créée à partir du titre lors de la première publication (`/articles/titre-de-l-article/`). Modifier le titre ensuite ne change pas l'adresse.
- L'article « Anticiper, comprendre, décider : notre démarche » sert d'exemple. Il peut être modifié ou supprimé. Sans article publié, la page Articles affiche « Nos premiers articles sont à venir ».
- Les images doivent être raisonnablement légères (moins de 1 Mo si possible) pour que le site reste rapide.
