import useCalculateContext from "../context/CalculateContext.jsx";


const Display = () => {
 
 const {state: {result}} = useCalculateContext()
 
 return (
  <div>
   <span>{result}</span>
  </div>
 )
}

export default Display