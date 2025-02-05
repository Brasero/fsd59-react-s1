import {createContext, useContext} from "react";
import useCalculateReducer from "../reducer/calculateReducer.jsx";

// Creation du context
const CalculateContext = createContext()


// Creation du provider grace au context
export const CalculateProvider = ({children}) => {
 
 const [state, dispatch] = useCalculateReducer();
 
 
 return <CalculateContext.Provider value={{state, dispatch}}>
  {children}
 </CalculateContext.Provider>
}

//Fonction utile permettant de consommer le context
const useCalculateContext = () => useContext(CalculateContext)

export default useCalculateContext