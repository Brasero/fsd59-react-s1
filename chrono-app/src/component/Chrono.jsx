import {useEffect, useState} from "react";

const Chrono = ({isCyclique = false}) => {
 //State du Chrono pour suivre le temps écoulé,
 const [counter, setCounter] = useState(0)
 //State des cycles pour compter les cycles si le chronomètre est cyclique,
 const [cycle, setCycle] = useState(0)
 // pour stocker l'identifiant de l'intervalle,
 const [intervalID, setIntervalID] = useState(0)
 //isRunning pour indiquer si le chronomètre est en cours de fonctionnement.
 const [isRunning, setIsRunning] = useState(false)
 
 //La fonction start démarre le chronomètre en utilisant setInterval pour incrémenter le counter toutes les secondes.
 // Elle stocke l'identifiant de l'intervalle dans intervalID et met à jour isRunning à true.
 const start = () => {
  let ID = setInterval(() => {
   setCounter((prevState) => prevState + 1 )
  }, 1000)
  setIntervalID(ID)
  setIsRunning(true)
 }
 
 //La fonction stop arrête le chronomètre en utilisant clearInterval avec l'identifiant stocké dans intervalID,
 // puis réinitialise intervalID et isRunning.
 const stop = () => {
  clearInterval(intervalID)
  setIntervalID(0)
  setIsRunning(false)
 }
 
 //La fonction reset arrête le chronomètre,
 // réinitialise le counter à 0 et, si le chronomètre est cyclique, réinitialise également le cycle.
 const reset = () => {
  stop()
  setCounter(0)
  if (isCyclique) {
   setCycle(0)
  }
 }
 
 //Le hook useEffect surveille les changements de counter.
 // Si counter atteint 5 et que le chronomètre est en cours de fonctionnement,
 // il vérifie si le chronomètre est cyclique.
 // Si c'est le cas,
 // il réinitialise le counter et incrémente le cycle.
 // Sinon, il arrête le chronomètre.
 useEffect(() => {
  if (counter >= 5 && isRunning) {
   if (isCyclique) {
    setCounter(0)
    setCycle(cycle + 1)
    return
   }
   stop()
  }
 }, [counter])
 
 //Le rendu du composant affiche le counter et,
 // si le chronomètre est cyclique, le cycle.
 // Il inclut également des boutons pour démarrer, arrêter et réinitialiser le chronomètre,
 // avec des états désactivés appropriés.
 return (
  <>
   <div>
    {
     isCyclique && <span>Cycle : {cycle}</span>
    }
    <span>Counter : {counter}</span>
   </div>
   <div>
    <button onClick={start} disabled={isRunning}>Start</button>
    <button onClick={stop} disabled={!isRunning}>Stop</button>
    {
     (counter !== 0 || cycle !== 0) && <button onClick={reset}>Reset</button>
    }
   </div>
  </>
 )
}

export default Chrono