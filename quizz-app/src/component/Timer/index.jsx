// path: quiz/src/component/Timer/index.jsx
import "./style.scss";

const Timer = ({timeLeft, isGamePaused}) => {
 
    const message = isGamePaused ? "Prochaine question : ": "Temps restant : "
    
 return (
  <div className="Timer">
   <p>{message} {timeLeft} s</p>
  </div>
 )
}

export default Timer