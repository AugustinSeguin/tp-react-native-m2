# chat-tp

Un petit projet d'atelier / TP React Native + Expo qui sert de base pour un chat (prototype pédagogique).
Ce dépôt utilise Expo (Router) avec TypeScript et quelques dépendances courantes pour construire une app cross-platform (iOS / Android / Web).

## Prérequis

- **Node.js** : `nvm use` utilise la version .nvmrc
- Yarn ou npm
- Expo CLI (optionnel) : `npm install -g expo-cli` ou utiliser `npx expo`/`pnpm dlx expo`
- Sur appareil mobile : l'app Expo Go (Android/iOS) ou un émulateur Android / simulateur iOS.

## Installation

1. Cloner le dépôt :
2. Installer les dépendances :
   `npm install`

## Scripts utiles

- `npm start` — démarre Metro / Expo en mode tunnel (par défaut). Equivalent à `expo start --tunnel`.
- `npm run android` — démarre Expo et ouvre l'émulateur Android (ou l'appareil connecté).
- `npm run ios` — démarre Expo et ouvre le simulateur iOS (macOS seulement).
- `npm run web` — lance la version web.

Les scripts sont définis dans `package.json` (projet : `chat-tp`).

## Structure du projet

Racine :

- `app/` — pages et layout pour `expo-router`.
  - `_layout.tsx` — layout global
  - `index.tsx` — point d'entrée de l'app
  - `modal.tsx` — exemple d'écran modal
  - `(tabs)/` — dossier de routes pour les onglets
- `components/` — composants réutilisables (boutons, vues thémées, UI spécifique)
- `assets/` — images, sons et autres ressources statiques
- `constants/` — thèmes et constantes partagées
- `hooks/` — hooks personnalisés
- `scripts/` — scripts utilitaires

## Développement

1. Démarrer le serveur Expo :
   `npm start`
2. Ouvrir l'app dans Expo Go en scannant le QR code, ou lancer un simulateur :
   `npm run android`
   `npm run ios`
3. Pour le web :
   `npm run web`

