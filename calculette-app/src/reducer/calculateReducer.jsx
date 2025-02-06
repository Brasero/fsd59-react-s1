import {useReducer} from "react";

const initialState = {
 display: "",
 stored: "",
 operator: ""
}


const reducer = (state,action) => {
 switch(action.type) {
  
  case "SET_VALUE":
   return {
    ...state,
    display: Number(`${state.display}${action.payload}`) // Ici, je traite state.display et action.payload comme une chaine de caractère puis la converti en une valeur numérique avec la class Number
   }
  
  case "SET_OPERATOR":
   return {
    ...state,
    display: "",
    operator: action.payload,
    stored: state.operator !== "" ? eval(`${state.stored}${state.operator}${state.display}`) : state.display
   }
  
  case "CALC":
   return {
    ...state,
    operator: "",
    stored: "",
    display: eval(`${state.stored}${state.operator}${state.display}`)
   }
  
  case "RESET":
   return initialState;
  
  default:
   return state;
 }
}

const useCalculateReducer = () => useReducer(reducer, initialState)

export default useCalculateReducer