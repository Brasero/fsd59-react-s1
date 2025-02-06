import {useReducer} from 'react';

const actions = {
 ADD_TO_CART: "ADD_TO_CART", CALC_TOTAL: "CALC_TOTAL", DECREASE_QTY: "DECREASE_QTY", REMOVE_FROM_CART: "REMOVE_FROM_CART"
}

const initialState = {
 products: [{
  id: 1, name: "Montre de luxe", price: 120, image: "https://picsum.photos/200?random=1"
 }, {
  id: 2, name: "Sac à dos", price: 80, image: "https://picsum.photos/200?random=2"
 }, {
  id: 3, name: "Casque audio", price: 150, image: "https://picsum.photos/200?random=3"
 }, {
  id: 4, name: "Smartphone", price: 600, image: "https://picsum.photos/200?random=4"
 }, {
  id: 5, name: "Chaussures de sport", price: 90, image: "https://picsum.photos/200?random=5"
 }], cart: [], total: 0, totalDiscount: 0
};

const shopReducer = (state, action) => {
 switch (action.type) {
  
  case actions.ADD_TO_CART:
   return {
    ...state, cart: addOrIncrement(state, action.payload)
   }
  
  case actions.CALC_TOTAL:
   return {
    ...state, ...calcTotalAndDiscount(state)
   }
   
  case actions.DECREASE_QTY:
   return {
    ...state, cart: state.cart.map((item) => item.id === action.payload ? {...item, qty: item.qty - 1} : item)
   }
   
   case actions.REMOVE_FROM_CART:
   return {
    ...state, cart: state.cart.filter((item) => item.id !== action.payload)
   }
  
  default:
   return state;
 }
};

const addOrIncrement = (state, productID) => {
 const product = state.products.find((item) => item.id === productID);
 const existingProduct = state.cart.find((item) => item.id === product.id);
 if (existingProduct) {
  return state.cart.map((item) => item.id === product.id ? {...item, qty: item.qty + 1} : item);
 }
 return [...state.cart, {...product, qty: 1}];
}

const calcTotalAndDiscount = (state) => {
 const totalExceptDiscount = state.cart.reduce((acc, item) => acc + item.price * item.qty, 0);
 const totalDiscount = totalExceptDiscount > 100 ? totalExceptDiscount * 0.1 : 0;
 const total = totalExceptDiscount - totalDiscount;
 return {total, totalDiscount};
}

const useShopReducer = () => {
 const [state, dispatch] = useReducer(shopReducer, initialState);
 
 const addToCart = (productID) => {
  dispatch({type: actions.ADD_TO_CART, payload: productID});
 }
 
 const calcTotal = () => {
  dispatch({type: actions.CALC_TOTAL});
 }
 
 const decreaseQty = (productID) => {
  dispatch({type: actions.DECREASE_QTY, payload: productID});
 }
 
 const removeFromCart = (productID) => {
  dispatch({type: actions.REMOVE_FROM_CART, payload: productID});
 }
 
 return {
  state, addToCart, calcTotal, decreaseQty, removeFromCart
 }
}

export default useShopReducer;