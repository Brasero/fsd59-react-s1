import Display from "./Display.jsx";
import Inputs from "./Inputs.jsx";
import Buttons from "./Buttons.jsx";
import useCalculateReducer from "../reducer/calculateReducer.jsx";
import useCalculateContext from "../context/CalculateContext.jsx";

const Calculator = () => {
 
 //const [state, dispatch] = useReducer(reducer, initialState);
 const {state} = useCalculateContext()
 
 return (
  <>
   {
    state.error && <span style={{color: "red"}}>{state.error}</span>
   }
   <Display />
   <Inputs  />
  </>
 )
}

export default Calculator;