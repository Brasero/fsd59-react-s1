import './App.css'



function App() {
 
 const handleClick = (message) => {
  alert(message)
 }
 
 const handleSubmit = (event) => {
  event.preventDefault()
  console.log("hello")
 }
  

  return (
   <>
    <form onSubmit={handleSubmit}>
     <button type={"submit"} role={"button"}>Envoyer</button>
    </form>
    <button onClick={() => handleClick("Mon message")}>Click me</button>
   </>
  )
}

export default App