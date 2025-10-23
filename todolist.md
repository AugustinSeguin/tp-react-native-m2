🧭 TO-DO LIST — TP "Chat is my best hybrid friend"
1️⃣ Initialisation du projet

Créer un projet Expo :

npx create-expo-app chat-is-my-best-hybrid-friend
cd chat-is-my-best-hybrid-friend

Supprimer les fichiers inutiles (App.test.js, assets/adaptive-icon.png, etc.)

Ajouter un .gitignore propre (celui que je t’ai donné précédemment)

Installer les dépendances nécessaires :

npx expo install expo-battery expo-brightness expo-av expo-sms expo-location react-native-maps @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack @react-native-async-storage/async-storage

Et :

npx expo install react-native-screens react-native-safe-area-context

2️⃣ Splash screen dynamique

Créer un composant SplashScreen.js

Importer et utiliser expo-battery pour obtenir le niveau de batterie

Importer expo-brightness pour gérer la luminosité :

Si batterie > 50%, fond bleu clair (#ADD8E6) et luminosité haute

Si batterie < 50%, fond saumon (#FFA07A) et luminosité plus basse

Afficher le texte :
"Bienvenue sur Chat is my best hybrid friend"

Ajouter un setTimeout pour rediriger vers le menu principal après quelques secondes

3️⃣ Navigation

Configurer React Navigation :

Créer un Bottom Tab Navigator avec 3 onglets :

Home → Menu principal (Chat / Dog / Quit)

Carte → Carte avec Toulon & Paris

Clicker → Statistiques + reset des clics

Créer un Stack Navigator si besoin pour la navigation interne (Splash → Tabs)

4️⃣ Menu principal

Créer un composant HomeScreen.js :

Bouton Chat

Bouton Dog

Bouton Quit

"Quit" → ferme l’application (BackHandler.exitApp())

5️⃣ Fonctionnalité Chat 😺

Créer un composant ChatScreen.js

Afficher une image de chat (locale dans assets/)

Utiliser expo-av pour jouer un son de miaulement quand on clique

Incrémenter le compteur "chat" dans AsyncStorage

Revenir à l’écran précédent

6️⃣ Fonctionnalité Dog 🐶

Créer un composant DogScreen.js

Appeler une API publique pour chien :

https://dog.ceo/api/breeds/image/random

Afficher l’image retournée

Utiliser expo-sms pour préparer un SMS avec le texte :

"Je n'aime pas les chats"

au numéro 06 06 06 06 06

Incrémenter le compteur "dog" dans AsyncStorage

7️⃣ Écran "Carte"

Créer un composant MapScreen.js

Utiliser expo-location pour obtenir la position actuelle (demander la permission)

Utiliser react-native-maps pour afficher :

La position actuelle (marqueur)

Deux autres marqueurs :

Toulon : lat: 43.1242, lon: 5.928

Paris : lat: 48.8566, lon: 2.3522

Régler le zoom initial pour que Toulon et Paris soient visibles sans dézoomer

8️⃣ Écran "Clicker"

Créer un composant ClickerScreen.js

Lire les compteurs "chat" et "dog" depuis AsyncStorage

Afficher les valeurs

Ajouter un bouton "Réinitialiser" :

Réinitialise les deux compteurs à 0

Met à jour le stockage persistant

9️⃣ Persistance des données

Créer un petit service utilitaire storage.js :

getCount(type) → lit AsyncStorage

incrementCount(type) → incrémente

resetCounts() → remet à zéro

Appeler ces fonctions dans ChatScreen et DogScreen

🔟 Finitions

Mettre des styles cohérents (StyleSheet.create)

Vérifier les autorisations (SMS, localisation, luminosité)

Vérifier le comportement hors ligne (Dog API)

Tester sur téléphone avec Expo Go
