// path: quiz/src/component/Question/index.jsx
import "./style.scss";
import {useEffect} from "react";

const Question = ({questionDetail, dispatch, isGamePaused}) => {
 
 const { question, options, correctAnswer } = questionDetail
 
 const setClassName = (option) => {
  if (isGamePaused) {
   if (option === correctAnswer) {
    return "Question__options__option--correct"
   } else {
    return "Question__options__option--incorrect"
   }
  }
  return "Question__options__option"
 }
 
 useEffect(() => {
  // Effet gérant le temps restant
  // Effet lancé une seule fois au montage du component,
  // à chaque changement de question le component monte à nouveau
  let interval = setInterval(() => {
   dispatch({
    type: "TICK"
   })
  }, 1000)
  return () => {
   clearInterval(interval)
  }
 }, [])
 
 const handleClick = (option) => {
  dispatch({
   type: "ANSWER_QUESTION",
   payload: option
  })
 }
 
 return (
  <div className="Question">
   <p className={"Question__text"}>Question : {question}</p>
   <div className="Question__options">
    {
     options.map((option, index) => (
      <button onClick={() => handleClick(option)} disabled={isGamePaused} className={setClassName(option)} key={index}>{option}</button>
     ))
    }
   </div>
  </div>
 )
}

export default Question