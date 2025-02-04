import './App.css'
import {useState} from "react";
import CounterButton from "./component/CounterButton.jsx";



function App() {

  const [counter, setCounter] = useState(0)
  const [error, setError] = useState("")
 
 
 const resetCounter = ( ) => {
   setCounter(0)
 }
  const increment = () => {
   setCounter(counter + 1)
   if (error) {
    setError("")
   }
  }
  const decrement = () => {
   if (counter === 0) {
    setError("Vous ne pouvez pas décrémenter en dessous 0")
    return
   }
   
   setCounter(counter - 1)
  }

  return (
   <>
    <CounterButton label={"-"} func={decrement} />
    <span>{counter}</span>
    <CounterButton label={"+"} func={increment} />
    <br/>
    <CounterButton label={"reset"} func={resetCounter} />
    {
     error && <span>{error}</span>
    }
   </>
  )
}

export default App