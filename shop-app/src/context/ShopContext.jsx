import {createContext, useContext} from "react";
import useShopReducer from "../reducer/shopReducer.jsx";

const ShopContext = createContext();

export const ShopProvider = ({children}) => {
 
 const context = useShopReducer();
 
 return (
  <ShopContext.Provider value={context}>
   {children}
  </ShopContext.Provider>
 );
}

const useShopContext = () => useContext(ShopContext);


export default useShopContext;