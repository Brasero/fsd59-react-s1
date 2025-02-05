import {useReducer} from "react";

const initialState = {
 a: "",
 b: "",
 result: "",
 error: ""
}

const checkValues = (state) => {
 if (state.a === "") return false
 if (state.b === "") return false
 return true
}

const reducer = (state,action) => {
 switch(action.type) {
  
  case "set_value":
   return {
    ...state,
    [action.payload.name]: action.payload.value,
    error: ""
   }
   
  case "calculate":
   return checkValues(state) ? {
    ...state,
    a: "",
    b: "",
    error: "",
    result: eval(`${state.a}${action.payload}${state.b}`)
   } : {
    ...state,
    error: "Merci de remplir tous les champs avant d'effectuer un calcul"
   }
   
  case "reset":
   return initialState;
  
  
  default:
   return state;
 }
}

const useCalculateReducer = () => useReducer(reducer, initialState)

export default useCalculateReducer