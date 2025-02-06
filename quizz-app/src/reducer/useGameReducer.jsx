import {useReducer} from "react";

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
 timeLeft: 30,
 isGameRunning: false,
 isGameOver: false,
 isGamePaused: false
}

const gameReducer = (state, action) => {
 switch (action.type) {
  case "START_GAME":
   return {
    ...initialState,
    isGameRunning: true
   }
  case "ANSWER_QUESTION":
   const isCorrect = state.questions[state.currentQuestion].correctAnswer === action.payload
   return {
    ...state,
    score: isCorrect ? state.score + 1 : state.score,
    isGamePaused: true,
    timeLeft: 3
   }
   case "NEXT_QUESTION":
   return {
    ...state,
    currentQuestion: state.currentQuestion + 1,
    isGameOver: state.currentQuestion + 1 === state.questions.length,
    timeLeft: 30,
    isGamePaused: false
   }
  case "TICK":
   return {
    ...state,
    timeLeft: state.timeLeft - 1,
   }
  case "END_GAME":
   return {
    ...state,
    isGameRunning: false,
    isGameOver: true,
    isGamePaused: false
   }
  case "RESTART_GAME":
   return {
    ...initialState,
    isGameRunning: true
   }
   case "QUIT_GAME":
    return {
     ...initialState
    }
  default:
   return state
 }
}

const userGameReducer = () => useReducer(gameReducer, initialState)

export default userGameReducer