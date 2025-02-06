// path: exemple/src/component/Operators/index.jsx
import "./style.scss";
import useCalculateContext from "../../context/CalculateContext.jsx";


const Operators = () => {
 
 const {dispatch} = useCalculateContext()
 
 const operators = [
  {
   sign: "+",
   action: () => {
    dispatch({
     type: "SET_OPERATOR",
     payload: "+"
    })
   }
  },
  {
   sign: "x",
   action: () => {
    dispatch({
     type: "SET_OPERATOR",
     payload: "*"
    })
   }
  },
  {
   sign: "-",
   action: () => {
    dispatch({
     type: "SET_OPERATOR",
     payload: "-"
    })
   }
  },
  {
   sign: "=",
   action: () => {
    dispatch({
     type: "CALC"
    })
   }
  },
  {
   sign: "C",
   action: () => {
    dispatch({
     type: "RESET"
    })
   }
  },
 ]
 
 return (
  <div className="Operators">
   {
    operators.map((obj, i) => <button key={i} onClick={obj.action}>{obj.sign}</button>)
   }
  </div>
 )
}

export default Operators