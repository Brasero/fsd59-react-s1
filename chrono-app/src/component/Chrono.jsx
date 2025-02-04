import {useState} from "react";

const Chrono = ({isCyclique = false}) => {
 //Chrono
 const [counter, setCounter] = useState(0)
 const [cycle, setCycle] = useState(0)
 // identifiant de l'intervalle
 const [intervalID, setIntervalID] = useState(0)
 const [isRunning, setIsRunning] = useState(false)
 const start = () => {
  let ID = setInterval(() => {
   setCounter((prevState) => prevState + 1 )
  }, 1000)
  setIntervalID(ID)
  setIsRunning(true)
 }
 
 const stop = () => {
  clearInterval(intervalID)
  setIntervalID(0)
  setIsRunning(false)
 }
 
 const reset = () => {
  stop()
  setCounter(0)
  if (isCyclique) {
   setCycle(0)
  }
 }
 
 const checkMax = () => {
  if (counter >= 5 && isRunning) {
   if (isCyclique) {
    setCycle(cycle + 1)
    setCounter(0)
    return
   }
    stop()
  }
 }
 
 checkMax()
 
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