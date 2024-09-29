
# EPSIGPT ImageGen - Clone ChatGPT avec Génération d'Images

## Table des Matières
- [Aperçu](#aperçu)
- [Technologies Utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Fonctionnalités](#fonctionnalités)
- [Captures d'Écran](#captures-décran)

## Aperçu
**EPSIGPT ImageGen** est une application web qui permet aux utilisateurs de générer des images et des réponses en fonction de leurs requêtes textuelles. Elle intègre l'API d'OpenAI pour générer les images et les réponses et utilise l'authentification via Google pour une connexion sécurisée.

## Technologies Utilisées

### Frontend
- **React.js**
- **CSS**

### Backend
- **Node.js**
- **Express.js**
- **OpenAI API**
- **Google Cloud Console** (pour l'authentification)

## Prérequis
- **npm**
- **Compte Google Cloud**
- **Clé API OpenAI**

## Installation

1. **Cloner le dépôt :**
    ```bash
    git clone https://github.com/YounessManyani/Chat-Image-generateur
    cd Chat-Image-generateur
    ```

2. **Installer les dépendances pour le frontend :**
    ```bash
    cd react-app
    npm install
    ```

3. **Installer les dépendances pour le backend :**
    ```bash
    cd index.js
    npm install
    ```

## Utilisation

1. **Configurer les clés API et l'authentification :**
    - Créez un projet dans [Google Cloud Console](https://console.cloud.google.com/), activez l'authentification OAuth 2.0 et configurez les redirections.
    - Obtenez une clé API OpenAI et définissez-la dans un fichier `.env` :
    ```bash
    OPENAI_API_KEY=votre_cle_api_openai
    GOOGLE_CLIENT_ID=votre_client_id_google
    GOOGLE_CLIENT_SECRET=votre_client_secret_google
    ```

2. **Démarrer le backend :**
    ```bash
    cd index.js
    node index.js
    ```

3. **Démarrer le frontend :**
    ```bash
    cd ../react-app
    npm run dev
    ```

4. **Accéder à l'application :**
    Ouvrez votre navigateur et allez à [http://localhost:3000]

## Fonctionnalités
- **Authentification Google** : Connexion sécurisée avec OAuth 2.0.
- **Génération d'images** : Génération d'images en fonction des inputs des utilisateurs via l'API OpenAI.
- **Génération des réponses** : Génération des réponses en fonction des inputs des utilisateurs via l'API OpenAI.
- **Interface utilisateur fluide** : Conception intuitive avec React et Tailwind CSS.

## Captures d'Écran
### Tableau de Bord Principal

<img width="1440" alt="Screenshot 2024-09-29 at 15 37 09" src="https://github.com/user-attachments/assets/6e8ac7bf-0585-4867-b300-9a3f6a4b73b7">
<img width="1440" alt="Screenshot 2024-09-29 at 15 33 33" src="https://github.com/user-attachments/assets/1d724406-3c92-495e-8aa3-020c73733e18">
<img width="1440" alt="Scr<img width="1440" alt="Screenshot 2024-09-29 at 15 33 56" src="https://github.com/user-attachments/assets/d67a1278-ec55-4398-8008-0075c502192c">
<img width="1440" alt="Screenshot 2024-09-29 at 15 35 42" src="https://github.com/user-attachments/assets/92563214-a892-43b9-9089-90fe0ff996b0">
<img width="1440" alt="Screenshot 2024-09-29 at 15 40 23" src="https://github.com/user-attachments/assets/cc03daad-a54e-46e4-8ffc-daba4abe072e">

