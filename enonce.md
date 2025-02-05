# Exercice : Simulateur de panier d'achat avec promotions

## Objectif
Créer une application de simulateur de panier d'achat où les utilisateurs peuvent ajouter des produits au panier, ajuster les quantités et bénéficier de promotions selon le total.

---

## Consignes détaillées

### 1. Mise en place du `CartContext`
- Créez un contexte React pour gérer le panier et exposez les fonctions nécessaires à l'ajout, la suppression et la modification de produits.
- Le contexte utilisera `useReducer` pour la gestion d'état.

#### État initial du panier
L'état initial du panier doit inclure :
- Une liste vide pour les articles ajoutés au panier.
- Un total initial de 0.
- Une réduction initiale de 0.

#### Actions à implémenter
- **Ajouter au panier** : Ajouter un produit avec ses informations (nom, image, prix, quantité).
- **Supprimer du panier** : Retirer un produit du panier.
- **Modifier la quantité** : Mettre à jour la quantité d'un produit spécifique.
- **Calculer le total** : Calculer le total du panier et appliquer une réduction de 10 % si le total dépasse 100€.

---

### 2. Structure de l'application

#### Pages principales
- **Page des produits** : Affichez une liste de produits disponibles avec leurs images, noms et prix. Chaque produit doit avoir un bouton "Ajouter au panier".
- **Page du panier** : Affichez les produits ajoutés au panier avec leurs quantités et leur prix total. Permettez de modifier les quantités ou de retirer des produits.

#### Gestion des données globales
Utilisez `CartContext` pour partager les données du panier entre les composants. Assurez-vous que les fonctions nécessaires (ajout, suppression, modification) sont accessibles via ce contexte.

---

### 3. Liste des produits à afficher
Voici une liste de produits fictifs avec des images obtenues via l'API [Lorem Picsum](https://picsum.photos) pour illustrer :

| ID  | Produit               | Prix (€) | Image                              |
|-----|-----------------------|----------|------------------------------------|
| 1   | Montre de luxe        | 120      | https://picsum.photos/200?random=1 |
| 2   | Sac à dos             | 80       | https://picsum.photos/200?random=2 |
| 3   | Casque audio          | 150      | https://picsum.photos/200?random=3 |
| 4   | Smartphone            | 600      | https://picsum.photos/200?random=4 |
| 5   | Chaussures de sport   | 90       | https://picsum.photos/200?random=5 |

---

### 4. Fonctionnalités principales

#### Page des produits
- Affichez une grille contenant les informations suivantes pour chaque produit :
    - Une image illustrative.
    - Le nom du produit.
    - Le prix.
    - Un bouton "Ajouter au panier".

#### Page du panier
- Listez tous les produits ajoutés au panier avec :
    - L'image du produit.
    - Le nom du produit.
    - Le prix unitaire.
    - La quantité sélectionnée (modifiable).
    - Le prix total pour chaque produit (prix unitaire × quantité).

- Affichez le **total général** et la **réduction appliquée** (si applicable).
- Ajoutez des boutons permettant de modifier les quantités ou de supprimer des produits.

---

### Bonus
- Ajoutez des styles pour rendre l'application plus attrayante.
- Intégrez des animations pour les interactions avec le panier (ajout, suppression).
- Ajoutez une validation pour empêcher les quantités négatives.
- Permettez de filtrer les produits sur la page principale (par prix, nom, etc.).