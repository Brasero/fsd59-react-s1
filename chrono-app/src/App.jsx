import './App.css'
import Chrono from "./component/Chrono.jsx";

function App() {

  return (
    <>
    <Chrono />
    <Chrono isCyclique={true} />
    </>
  )
}

export default App