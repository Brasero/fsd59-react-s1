import useCalculateContext from "../context/CalculateContext.jsx";

const Input = ({label, name}) => {
 
 const {state, dispatch} = useCalculateContext()
 const value = state[name]
 
 const handleChange = (e) => {
  const {value} = e.target
  
  if (!/^\d+$/.test(value) && value.trim() !== "") {
   return
  }
  
  dispatch({
   type: "set_value",
   payload: {
    name,
    value
   }
  })
 }
 
 return (
  <div>
   <label htmlFor={label}>{label}</label>
   <input type={"text"} id={label} onChange={handleChange} name={name} value={value} />
  </div>
 )
}

export default Input