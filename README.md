# E-commerce Mobile

Application mobile e-commerce réalisée avec **React Native (Expo)** et un **backend Node/Express + MongoDB**. Elle propose un catalogue de produits, un panier et des écrans d’inscription/connexion avec stockage local (SQLite).

## Fonctionnalités

- Parcours du catalogue (données locales + API MongoDB).
- Recherche de produits.
- Ajout au panier, gestion des quantités et total.
- Inscription et connexion avec stockage local (SQLite).
- Profil utilisateur avec gestion de session locale.

## Prérequis

- Node.js + npm
- Expo Go (mobile) ou un émulateur Android/iOS
- MongoDB en local

## Installation

### 1) Backend (API produits)

```bash
cd backend
npm install
```

Assurez-vous que MongoDB tourne en local et que la base contient une collection **Produits** (base `instadb2`). La chaîne de connexion est dans `backend/src/db.js`.

### 2) Frontend (application Expo)

```bash
cd frontend
npm install
```

## Lancement

### 1) Démarrer l’API

```bash
cd backend
node src/server.js
```

Le serveur démarre sur `http://localhost:6000`.

> **Important (Android / device physique)**
> Si vous lancez l’app sur un téléphone, remplacez l’URL d’API par l’IP locale de votre machine dans `frontend/src/screens/Cataloguemongodb.jsx` (ex. `http://192.168.1.10:6000/api/produits`).

### 2) Démarrer l’app mobile

```bash
cd frontend
npx expo start
```

Scannez le QR code avec Expo Go (ou lancez l’émulateur via les raccourcis proposés par Expo).

## Détails techniques

- **Backend** : Express + Mongoose (MongoDB)
- **Frontend** : React Native (Expo) + React Navigation
- **Données locales** : SQLite (stockage des utilisateurs)

---

Si besoin, vous pouvez ajuster les endpoints et la logique de navigation dans `frontend/src`.
