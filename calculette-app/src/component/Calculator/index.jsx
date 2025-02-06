// path: exemple/src/component/Calculator/index.jsx
import "./style.scss";
import Display from "../Display/index.jsx";
import Numbers from "../Numbers/index.jsx";
import Operators from "../Operators/index.jsx";

const Calculator = () => {
 
 
 
 return (
  <div className="Calculator">
   <Display />
   <Numbers />
   <Operators />
  </div>
 )
}

export default Calculator