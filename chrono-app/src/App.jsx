import './App.css'
import Chrono from "./component/Chrono.jsx";
import EffectTest from "./component/EffectTest.jsx";
import {useState} from "react";

function App() {

  const [show, setShow] = useState(true)
  
  const handleClick = () => {
    setShow(!show)
  }
  
  return (
    <>
      <button onClick={handleClick}>{show ? "Cacher": "Montrer"}</button>
      {
        show && <EffectTest />
      }
    <Chrono />
    <Chrono isCyclique={true} />
    </>
  )
}

export default App