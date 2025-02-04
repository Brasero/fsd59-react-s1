import {useEffect, useState} from "react";

const EffectTest = () => {
 
 const [count, setCount] = useState(0)
 
 useEffect(() => {
  console.log("Je suis monté ")
  // Fonction de nettoyage effectuer quand le component disparait de l'écran (démontage)
  return () => {
   console.log("Je démonte")
  }
 }, []);
 
 useEffect(() => {
  console.log("Count à changer de valeur")
 }, [count])
 
 const tick = () => {
  setTimeout(() => {
   setCount(count + 1)
  }, 1000)
 }
 
 tick()
 
 return (
  <div>
   {count}
   Effect
  </div>
 )
}

export default EffectTest