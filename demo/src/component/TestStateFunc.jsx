import {useState} from "react";

const TestStateFunc = () => {
 
 const [count, setCount] = useState(0)
 
 const tick = () => {
  setTimeout(() => {
   setCount(count + 1)
  }, 1000)
 }
 
 tick()
 
 return (
  <div>
   <p>Counter: {count}</p>
  </div>
 )
}

export default TestStateFunc;