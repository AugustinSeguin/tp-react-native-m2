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

## Setup initial map

Pour pouvoir utiliser les cartes depuis les dernières versions d'expo sur Android, un build de développement est nécessaire.

Initialisez un projet expo puis suivez ces instructions:

A ce stade, la configuration initiale est terminée.
L'application est maintenant prête à être "buildée".

Voici les dernières étapes à suivre :

  0. Installer le plugin nécessaire pour les cartes :
    https://docs.expo.dev/versions/latest/sdk/map-view
    
    * dans la configuration d'expo rajouter votre clé d'api
      google maps pour iOS et Android comme suit :
    ```json
    "android": {
      "config": {
        "googleMaps": {
          "apiKey": "VOTRE_GOOGLE_MAPS_API_KEY",
        },
      },
    }
    ```

  1. Ajoutez votre clé d'API Google Maps :
      * Ouvrez le fichier map-teacher-app/app.json
      * Remplacez VOTRE_CLE_API_GOOGLE_MAPS_ICI par
        votre véritable clé d'API Google Maps à deux
        endroits (pour iOS et pour Android).

  2. Installez EAS CLI (si ce n'est pas déjà fait) :
      * Exécutez la commande : npm install -g eas-cli

  3. Connectez-vous à votre compte Expo :
      * Dans le dossier map-teacher-app, exécutez : npx 
        eas login

  4. Configurez le projet pour EAS Build :
      * Toujours dans le dossier map-teacher-app,
        exécutez : npx eas build:configure
      * Cela va créer un fichier eas.json dans votre
        projet.

  5. Créez le "Development Build" :
      * Exécutez la commande suivante pour la
        plateforme de votre choix (vous pouvez répéter
        l'opération pour l'autre).
      * Pour Android : npx eas build --profile 
        development --platform android
      * Pour iOS : npx eas build --profile development 
        --platform ios
      * EAS va vous donner une URL pour télécharger et
        installer l'application sur votre téléphone ou
        simulateur/émulateur.

  6. Lancez votre application :
      * Une fois l'application installée sur votre
        appareil, lancez le serveur de développement
        avec la commande : npx expo start --dev-client
      * Scannez le QR code depuis l'application que
        vous venez d'installer.

Votre carte devrait maintenant s'afficher correctement. N'hésitez pas si vous avez d'autres questions.

### Lien de l'application héberger sur EAS Build :

- exemple sur Android : https://expo.dev/accounts/thomaslaforge/projects/template-map-app/builds/9bf4ffac-a000-4ad1-a3be-108d3bd60746

- IOS : A vous de la build si vous avez un compte ou alors mettez-vous en mode Expo Go :
```bash
npx expo start
```
Puis avec la touche `s` changer le mode de lancement en `Expo Go`.

