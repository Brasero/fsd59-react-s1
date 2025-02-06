// path: exemple/src/component/Display/index.jsx
import "./style.scss";
import useCalculateContext from "../../context/CalculateContext.jsx"

const Display = () => {
 
 const {state} = useCalculateContext()
 const {display} = state
 
 return (
  <div className="Display">
    <span>{display || 0}</span>
  </div>
 )
}

export default Display