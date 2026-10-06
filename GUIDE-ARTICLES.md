# Publier des articles sur le site CIRS-Conseil Inc.

La rubrique **Articles** (`/articles/`) se gère depuis un espace de rédaction en ligne : **`/admin/`** (par exemple https://cirsconseil.org/admin/). On y écrit, modifie, met en brouillon ou supprime des articles sans toucher au code.

Chaque publication est enregistrée dans le dépôt GitHub `AbOky2/cirs` (dossier `content/articles/`). Vercel remet ensuite le site en ligne automatiquement, en 1 à 2 minutes environ.

## 1. Préparer l'accès (une seule fois)

1. Disposer d'un compte GitHub avec un accès en écriture au dépôt `AbOky2/cirs`. Si l'auteur n'est pas propriétaire du dépôt, le propriétaire l'ajoute dans *Settings → Collaborators*.
2. Créer un jeton d'accès personnel sur GitHub : *Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token*.
   - **Repository access** : *Only select repositories* → `AbOky2/cirs`.
   - **Permissions → Repository permissions → Contents** : *Read and write*.
   - Choisir une date d'expiration (par exemple 1 an), puis copier le jeton.
3. Ouvrir `/admin/` sur le site, choisir **Se connecter avec un jeton d'accès** et coller le jeton. Le navigateur s'en souvient.

Le jeton est personnel : ne jamais le partager ni l'écrire dans un fichier du site. En cas de doute, le révoquer sur GitHub et en créer un nouveau.

## 2. Écrire et publier un article

1. Dans `/admin/`, ouvrir **Articles**, puis cliquer sur **Créer une entrée** (ou **Nouveau**).
2. Remplir les champs :
   - **Titre**
   - **Date de publication** : les articles sont classés du plus récent au plus ancien.
   - **Rubrique** : Analyses stratégiques, Notes de politiques publiques, Notes stratégiques, Veille internationale ou Perspectives CIRS-Conseil.
   - **Résumé** : il s'affiche dans la liste des articles.
   - **Auteur**
   - **Image de couverture** : facultative.
   - **Texte** : l'éditeur gère les intertitres, le gras, les listes, les liens, les citations et les images.
3. Cocher **Brouillon** pour enregistrer sans publier. Décocher la case quand l'article est prêt.
4. Cliquer sur **Enregistrer**. L'article apparaît sur le site après la remise en ligne automatique.

Pour modifier ou supprimer un article, l'ouvrir depuis la liste dans `/admin/`.

## Bon à savoir

- L'adresse de l'article est construite à partir du titre au moment de la création : `/articles/titre-de-l-article/`.
- L'article « Anticiper, comprendre, décider : notre démarche » sert d'exemple. Il peut être modifié ou supprimé librement. Sans aucun article publié, la page Articles affiche « Nos premiers articles sont à venir ».
- L'espace de rédaction utilise [Sveltia CMS](https://github.com/sveltia/sveltia-cms), gratuit et sans serveur. Sa configuration se trouve dans `public/admin/config.yml`.
