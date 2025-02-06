// path: exemple/src/component/Number/index.jsx
import "./style.scss";
import useCalculateContext from "../../context/CalculateContext.jsx";

const Number = ({num}) => {
 
 const {dispatch} = useCalculateContext()
 
 const handleClick = () => {
  dispatch({
   type: "SET_VALUE",
   payload: num
  })
 }
 
 return (
  <button onClick={handleClick} className="Number">
   {num}
  </button>
 )
}

export default Number