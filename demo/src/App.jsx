import './App.css'
import Messages from "./component/Messages.jsx";

function App() {
  
  const MESSAGES = [
    { message : "React JS" },
    { message : "React Native" },
    { message : "Angular" },
    { message : "Symfony" },
    { message : "MongoDB" },
  ];

  return (
    <>
      <Messages messages={MESSAGES} />
    </>
  )
}

export default App