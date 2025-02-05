import Button from "./Button.jsx";
import useCalculateContext from "../context/CalculateContext.jsx";


const operators = [
 {
  label: "+",
  operator: "+"
 },
 {
  label: "x",
  operator: "*"
 }
]

const Buttons = () => {
 
 const {dispatch} = useCalculateContext()
 const handleCalculate = (op) => {
  dispatch({
   type: "calculate",
   payload: op
  })
 }
 
 const handleReset = () => {
  dispatch({
   type: "reset"
  })
 }
 
 return (
  <>
   {
    operators.map((op, i) => <Button label={op.label} key={i} handleClick={() => handleCalculate(op.operator)} />)
   }
   <Button label={"reset"} handleClick={handleReset} />
  </>
 )
}

export default Buttons