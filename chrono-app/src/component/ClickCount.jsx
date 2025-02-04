import {useEffect, useState} from "react";

const ClickCount = () => {
 
 const [count, setCount] = useState(0)
 const [count2, setCount2] = useState(0)
 
 const increment = () => {
  setCount(count+1)
 }
 
 const increment2 = () => {
  setCount2(count2 + 1)
 }
 
 useEffect(() => {
  if (count === 10) {
   alert("Vous avez cliqué 10 fois sur Count 1")
  }
 }, [count])
 
 useEffect(() => {
  if (count2 === 3) {
   alert("Vous avez cliqué 3 fois sur count 2")
  }
 }, [count2]);
 
 useEffect(() => {
  console.log("Le component monte")
  return () => {
   console.log("Le component démonte")
  }
 }, []);
 
 return (
  <>
   <div>{count}</div>
   <button onClick={increment}>+1</button>
   <button onClick={increment2}>+1</button>
  </>
 )
}

export default ClickCount