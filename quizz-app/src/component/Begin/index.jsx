// path: quiz/src/component/Begin/index.jsx
import "./style.scss";

const Begin = ({dispatch}) => {
 
 const handleClick = () => {
  dispatch({
   type: "START_GAME"
  })
 }
 
 return (
  <div className="Begin">
    <h1 className={"Begin__title"}>Le grand quiz</h1>
    <p className={"Begin__text"}>Testez vos connaissances en répondant aux questions suivantes</p>
    <button onClick={handleClick} className={"Begin__button"}>Commencer</button>
  </div>
 )
}

export default Begin