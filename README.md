# Portfolio — Romaric Yelkouni

Portfolio React + Vite prêt à être personnalisé et déployé en ligne.

## 1. Lancer le projet

Prérequis : Node.js récent et npm.

```bash
npm install
npm run dev
```

Créer la version de production :

```bash
npm run build
npm run preview
```

Le dossier `dist/` contient le site prêt à être publié.

## 2. Personnalisations indispensables avant publication

1. **Adresse e-mail** : dans `src/App.jsx`, remplace `VOTRE_EMAIL@example.com` par ton adresse réelle (constante `CONTACT` et lien de contact).
2. **LinkedIn** : remplace `https://www.linkedin.com/` par l'URL exacte de ton profil ou supprime le lien.
3. **Photo** : remplace `public/images/profile.jpeg` par ta photo définitive en conservant ce nom, ou modifie le chemin dans `src/App.jsx`.
4. **CV** : dépose ton CV PDF dans `public/cv/` puis ajoute un lien `/cv/nom-du-cv.pdf` si tu souhaites le proposer au téléchargement.
5. **Projets** : vérifie les descriptions et remplace les liens GitHub génériques par les dépôts ou démonstrations exacts. Les projets Gapal et UNESCO sont présentés comme étude/concept ou prototype conceptuel, pas comme produits finalisés.

## 3. Déploiement rapide

### GitHub Pages
Pour un déploiement GitHub Pages avec Vite, configure `base` dans `vite.config.js` selon le nom du dépôt, puis utilise une action GitHub Pages ou publie le contenu de `dist/`.

### Netlify / Vercel
Importer le dépôt et utiliser :
- Build command : `npm run build`
- Publish directory : `dist`

## 4. Structure

- `src/App.jsx` : contenu, navigation, projets, compétences, services et contact.
- `src/App.css` : design responsive.
- `public/images/profile.jpeg` : photo de profil.
- `public/cv/` : emplacement du CV.

Les dossiers `node_modules/` et `dist/` ne sont pas inclus dans l'archive. `npm install` les recrée.
