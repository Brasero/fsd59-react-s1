import './App.css'
import {useReducer} from "react";


// { type: string, ?payload: any } -> objet "action"

const initialState = {
  counter: 0,
  click: 0,
  message: "",
  error: ""
}

const reducer = (state, action) => {
  switch (action.type) {
    
    case "increment":
      return {
        ...state,
        click: state.click + 1,
        counter: state.counter + action.payload
      }
      
    case "set_message":
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    
    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  
  const handleClick = (num = 1) => {
    dispatch({
      type: "increment",
      payload: num
    })
  }
  
  const handleMessageClick = (e) => {
    const {value, name} = e.target
    console.log(name)
    dispatch({
      type: "set_message",
      payload: {
        name,
        value
      }
    })
  }
  
  return (
    <>
      {state.counter}
      <button onClick={() => handleClick()}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
      <input value={state.message} name={"message"} onChange={handleMessageClick} />
      <input value={state.error} name={"error"}  onChange={handleMessageClick}/>
      {
        state.message && <span>{state.message}</span>
      }
    </>
  )
}

export default App