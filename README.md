# Nord Frontière — Démonstration frontend

Prototype composé d'un site public et d'un CRM interne, développé exclusivement en HTML5, CSS3 et JavaScript Vanilla.

## Lancer le projet
1. Décompresser le dossier.
2. Ouvrir `index.html` dans un navigateur. Pour une expérience plus fiable, utiliser l'extension **Live Server** de VS Code.
3. Pour le CRM, ouvrir `admin/login.html`.

## Accès CRM de démonstration
- E-mail : `admin@nordfrontiere.demo`
- Mot de passe : `NordDemo2026`

## Fonctionnalités incluses
- Navigation publique : accueil, agence, destinations, circuits, voyages, offres, contact.
- CRM : dashboard, clients, prospects, destinations, voyages, circuits, réservations, paiements, devis/factures, documents, calendrier, employés, rapports et paramètres.
- Données fictives persistées dans LocalStorage.
- Ajout, modification et suppression sur les principaux modules.
- Recherche dans les tableaux, formulaires modaux, graphiques illustratifs et impression de devis.

## Important — périmètre de démonstration
- Aucun backend, API, Spring Boot, authentification sécurisée ou base de données n'est inclus.
- Les identifiants de démonstration sont publics et ne doivent jamais être réutilisés en production.
- Les formulaires du site public ne transmettent aucun message.
- Les montants, clients, réservations, destinations, dates et avis sont fictifs.
- Les visuels SVG locaux sont des illustrations originales de substitution, pas des photographies documentaires.
- Les coordonnées, le logo officiel, les programmes et les informations légales de Nord Frontière restent à valider.
- Les données LocalStorage sont propres au navigateur et à l'appareil.

## Préparation de la phase backend
Les opérations de lecture/écriture sont centralisées dans `js/services/storage.js`. Cette couche pourra être remplacée par des appels `fetch()` vers les futures API REST Spring Boot sans disperser la logique LocalStorage dans les interfaces.

## Structure
- `index.html` : accueil public
- `public/` : pages publiques secondaires
- `admin/` : connexion et modules CRM
- `assets/images/` : visuels locaux
- `css/` : styles publics et administratifs
- `js/data/` : données de démonstration
- `js/services/` : couche de stockage
- `js/public/`, `js/admin/` : logique des interfaces

## Accès à l'administration
Un lien discret « ESPACE ADMIN » est disponible dans l'en-tête du site public. Il mène à `admin/login.html`. L'accès reste une démonstration frontend ; une authentification serveur sera nécessaire avant toute mise en production.

## Organisation des pages publiques
Toutes les pages publiques sont désormais directement à la racine du projet : `index.html`, `about.html`, `destinations.html`, `circuits.html`, `voyages.html`, `offers.html` et `contact.html`. Le dossier `public/` a été supprimé pour éviter les doublons. Les menus et liens internes pointent directement vers ces fichiers. L'administration reste dans `admin/`.
