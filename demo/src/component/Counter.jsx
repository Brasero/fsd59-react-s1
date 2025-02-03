import {useState} from "react";

const Counter = ({step = 1}) => {
 
 const [counter, setCounter] = useState(0)
 const [multipleCounter, setMultipleCounter] = useState(0)
 
 const tick = () => {
  setTimeout(() => {
   setCounter(counter + step)
   if ((counter + step)%10 === 0) {
    setMultipleCounter(multipleCounter + 1)
   }
  }, 1000)
 }
 
 tick()
 
 return(
  <div>
   <span>Counter : {counter}</span>
   <span>Multiple de 10 : {multipleCounter}</span>
  </div>
 )
 
}

export default Counter