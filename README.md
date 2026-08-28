# ⚛️ Adan

Une exploration interactive du **tableau périodique des éléments**, en React + TypeScript, écrit par CLAUDE avec mon fils.

Cliquez sur l'atome, parcourez les 118 éléments, triez-les, et plongez dans le détail de chacun : masse atomique, catégorie, abondance sur Terre, molécules courantes et applications.

## ✨ Fonctionnalités

- **Écran d'accueil** — un atome animé qui pulse au clic avant d'ouvrir le tableau.
- **Tableau périodique** — la disposition classique en 18 colonnes, chaque élément coloré selon sa catégorie (alcalins, halogènes, gaz nobles, lanthanides…).
- **Tri à la volée** — basculez d'un simple clic entre la vue tableau et une liste triée par numéro atomique ou par masse, croissant ou décroissant.
- **Fiche détaillée** — un clic sur un élément affiche toutes ses propriétés, avec navigation directe vers l'élément précédent/suivant.

## 🗂️ Structure

Le code vit dans le dossier [`frontend/`](./frontend) :

| Fichier             | Rôle                              |
| ------------------- | --------------------------------- |
| `App.tsx`           | Routing et écran d'accueil        |
| `Sites.tsx`         | Le tableau périodique et ses tris |
| `ElementDetail.tsx` | La fiche d'un élément             |
| `elements.ts`       | Les données des 118 éléments      |

## 🚀 Démarrage

```bash
cd frontend
npm install
npm start
```

L'app démarre sur [http://localhost:3000](http://localhost:3000).

## 🧰 Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router 7](https://reactrouter.com/) pour la navigation
- [Create React App](https://create-react-app.dev/) pour l'outillage

## 📜 Scripts

| Commande        | Effet                                       |
| --------------- | ------------------------------------------- |
| `npm start`     | Lance le serveur de développement           |
| `npm run build` | Génère le build de production dans `build/` |
| `npm test`      | Lance les tests en mode watch               |
