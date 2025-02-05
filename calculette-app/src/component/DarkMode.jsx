import useCalculateContext from "../context/CalculateContext.jsx";


const DarkMode = () => {
 
 const {isDark, toggleDarkMode} = useCalculateContext()
 
 return (
  <>
  <button onClick={toggleDarkMode}>Toggle</button>
   <div>{isDark ? "Mode nuit":"Mode jour" }</div>
  </>
 )
}

export default DarkMode