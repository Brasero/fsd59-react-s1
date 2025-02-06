// path: quiz/src/component/End/index.jsx
import "./style.scss";

const End = ({score, dispatch}) => {
 
 const message = score >= 5 ? "Bravo, vous avez réussi le quiz !" : "Dommage, vous n'avez pas réussi le quiz."
 
 const handleClick = () => {
  dispatch({
   type: 'RESTART_GAME'
  })
 }
 
 const handleQuit = () => {
  dispatch({
   type: 'QUIT_GAME'
  })
 }
 
 return (
  <div className="End">
   <p className={"End__text"}>{message}</p>
   <p className={"End__score"}>Votre score est de {score} / 10</p>
   <button className={"End__button"} onClick={handleClick}>Recommencer</button>
   <button className={"End__button"} onClick={handleQuit}>Quitter</button>
  </div>
 )
}

export default End