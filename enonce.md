#  Jeu du Morpion avec Historique des Parties

## **Contexte**
Vous allez développer une version interactive du célèbre jeu du Morpion (ou Tic-Tac-Toe) en React. Ce jeu permettra à deux joueurs de s'affronter et inclura un système d'historique pour garder en mémoire les parties jouées. Chaque joueur pourra consulter l'historique des parties et rejouer les coups pour revivre une partie spécifique.

---

## **Objectifs pédagogiques**
- Utiliser **`useReducer`** pour gérer un état complexe (grille, joueur actif, résultats).
- Implémenter **`useEffect`** pour sauvegarder l’historique dans le `localStorage`.
- Appliquer le **ContextAPI** pour partager l’état du jeu et de l’historique entre les composants.

---

## **Instructions**

### **1. Fonctionnalités du jeu de base**
- Implémentez une grille de 3x3 pour le jeu du morpion.
- Permettez à deux joueurs de jouer alternativement (Joueur X et Joueur O).
- Détectez les conditions de victoire (ligne, colonne, diagonale) ou d'égalité.
- Réinitialisez la grille à la fin de chaque partie.

### **2. Gestion de l’historique**
- Ajoutez une fonctionnalité qui enregistre chaque partie jouée dans un historique. Une entrée dans l’historique doit inclure :
    - La séquence des coups joués.
    - Le résultat (victoire de X, victoire de O, égalité).
    - La date et l’heure de la partie.
- Permettez à l’utilisateur de consulter l’historique et de cliquer sur une partie pour voir les coups joués étape par étape (replay).

### **3. Sauvegarde de l’historique**
- Persistez l’historique des parties dans le `localStorage` afin qu’il reste disponible après le rechargement de la page. Utilisez **`useEffect`** pour synchroniser l’historique avec le stockage local.

### **4. Architecture et composants**
Votre application doit inclure au moins les composants suivants :
- **GameBoard** : Affiche la grille et gère les actions de jeu.
- **History** : Affiche l’historique des parties avec la possibilité de revoir les coups.
- **Header** : Indique le joueur actif ou le résultat de la partie en cours.
- **ContextAPI** : Implémentez un contexte global pour partager l’état du jeu et de l’historique entre les composants.

---

## **Bonus (facultatif)**
- Ajoutez un bouton "Annuler le dernier coup" pour revenir à l’état précédent pendant une partie en cours.
- Permettez aux joueurs de définir leurs noms avant de commencer une partie.
- Intégrez une interface esthétique avec des animations pour rendre le jeu plus ludique.

---

## **Livrables attendus**
- Une application React fonctionnelle avec les fonctionnalités décrites.
- Un code bien structuré, modulable et commenté.
- Une utilisation efficace de `useReducer`, `useEffect` et le `ContextAPI`.

---


## **Astuce**
Concentrez-vous sur la logique du jeu avant d’ajouter l’historique. Travaillez par itérations pour ajouter les fonctionnalités progressivement.