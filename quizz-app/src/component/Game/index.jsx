// path: quiz/src/component/Game/index.jsx
import "./style.scss";
import Begin from "../Begin/index.jsx";
import Question from "../Question/index.jsx";
import End from "../End/index.jsx";
import useGameReducer from "../../reducer/useGameReducer.jsx";
import {useEffect} from "react";
import Timer from "../Timer/index.jsx";

const Game = () => {
 
 const [state, dispatch] = useGameReducer()
 const { isGameRunning, isGameOver, timeLeft, isGamePaused } = state
 
 useEffect(() => {
  // Effet qui passe automatiquement à la prochaine question lorsque le temps imparti est écoulé
  if (timeLeft <= 0) {
   dispatch({
    type: "NEXT_QUESTION"
   })
  }
 }, [timeLeft]);
 
 return (
  <div className="Game">
   {
    !isGameRunning && !isGameOver && <Begin dispatch={dispatch} />
   }
   {
    isGameRunning && !isGameOver && (
     <>
      <Timer isGamePaused={isGamePaused} timeLeft={timeLeft} />
      <Question isGamePaused={isGamePaused} questionDetail={state.questions[state.currentQuestion]} dispatch={dispatch} />
     </>
    )
   }
   {
    isGameOver && <End score={state.score} dispatch={dispatch} />
   }
  </div>
 )
}

export default Game