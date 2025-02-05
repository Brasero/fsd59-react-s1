# Exercice : Simulateur de quiz avec chronomètre

## Objectif
Construire une application de quiz où les utilisateurs répondent à des questions dans un temps imparti.

---

## Consignes détaillées

### 1. État géré avec `useReducer`

#### État initial

```javascript
const initialState = {
  questions: [
    { id: 1, question: "Quelle est la capitale de la France ?", options: ["Paris", "Londres", "Berlin", "Rome"], correctAnswer: "Paris" },
    { id: 2, question: "Combien font 5 × 6 ?", options: ["30", "25", "20", "35"], correctAnswer: "30" },
    { id: 3, question: "Quel est le plus grand océan du monde ?", options: ["Pacifique", "Atlantique", "Arctique", "Indien"], correctAnswer: "Pacifique" },
    { id: 4, question: "Qui a peint la Joconde ?", options: ["Vincent van Gogh", "Pablo Picasso", "Léonard de Vinci", "Claude Monet"], correctAnswer: "Léonard de Vinci" },
    { id: 5, question: "Quelle planète est la plus proche du soleil ?", options: ["Mars", "Vénus", "Mercure", "Jupiter"], correctAnswer: "Mercure" },
    { id: 6, question: "En quelle année a eu lieu la Révolution française ?", options: ["1776", "1789", "1804", "1815"], correctAnswer: "1789" },
    { id: 7, question: "Quelle est la langue officielle du Brésil ?", options: ["Espagnol", "Portugais", "Français", "Anglais"], correctAnswer: "Portugais" },
    { id: 8, question: "Quel est l'élément chimique représenté par le symbole O ?", options: ["Or", "Oxygène", "Osmium", "Hydrogène"], correctAnswer: "Oxygène" },
    { id: 9, question: "Quelle est la devise nationale des États-Unis ?", options: ["E Pluribus Unum", "Liberté, Égalité, Fraternité", "In God We Trust", "Justice for All"], correctAnswer: "In God We Trust" },
    { id: 10, question: "Quel animal est connu pour sa capacité à changer de couleur ?", options: ["Serpent", "Caméléon", "Pieuvre", "Tigre"], correctAnswer: "Caméléon" }
  ],
  currentQuestion: 0,
  score: 0,
  timeLeft: 30, // temps en secondes
};
```

#### Reducer

Implémentez un reducer pour gérer les actions suivantes :
- **Enregistrer une réponse** : Comparez la réponse sélectionnée avec la bonne réponse et mettez à jour le score si elle est correcte.
- **Passer à la question suivante** : Réinitialisez le chronomètre et chargez la prochaine question.
- **Réinitialiser le quiz** : Remettez l'état à sa valeur initiale.

---

### 2. Chronomètre avec `useEffect`

- Décrémentez le temps restant pour la question actuelle chaque seconde.
- Si le temps atteint 0, passez automatiquement à la question suivante.
- Nettoyez l'effet lorsque la question change.

---

### 3. Interface utilisateur

- Affichez la question actuelle avec ses options de réponse.
- Montrez un compteur de temps dégressif.
- Ajoutez des boutons interactifs pour sélectionner une réponse et passer à la question suivante.
- Affichez un message de fin avec le score total une fois que toutes les questions ont été posées.

---

### Bonus

- Contextualisé vos données avec contextAPI
- Ajoutez des styles pour rendre l'application plus attrayante.
- Proposez un bouton permettant de redémarrer le quiz.