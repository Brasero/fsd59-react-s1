import './App.css'
import Students from "./component/Students.jsx";

function App() {
  
  const students = [
    { notes: [12, 11, 10], name: "Alan" },
    { notes: [18, 10, 19], name: "Alice" },
    { notes: [10, 9, 11], name: "Bernard" },
    { notes: [11, 17, 19], name: "Sophie" },
  ];

  return (
    <>
    <Students students={students} />
    </>
  )
}

export default App