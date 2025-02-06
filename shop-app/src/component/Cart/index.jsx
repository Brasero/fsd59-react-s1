// path: shop-app/src/component/Cart/index.jsx
import "./style.scss";
import {useEffect, useState} from "react";
import useShopContext from "../../context/ShopContext.jsx";
import CartItem from "../CartItem/index.jsx";

const Cart = () => {
 
 const {state: {cart, total, totalDiscount}, calcTotal} = useShopContext();
 
 useEffect(() => {
  //Calcule du total et des réductions à chaque changement du panier
  calcTotal();
  return () => calcTotal();
 }, [cart]);
 
 const [collapse, setCollapse] = useState(true);
 const handleCollapse = () => {
  setCollapse(!collapse);
 }
 
 return (<div className={`Cart ${collapse ? "" : "opened"}`}>
  <h2>Mon panier</h2>
  <button onClick={handleCollapse}>{collapse ? "Afficher" : "Masquer"}</button>
  <hr />
  <p className={"discount"}>Réduction : {totalDiscount} €</p>
  <p className={'total'}>Total : {total} €</p>
  {
   collapse ? null : <div className="list">
    {
     cart.length === 0 ? <p>Votre panier est vide</p> : cart.map((product, index) => (
      <CartItem key={index} product={product} index={index} />
     ))
    }
   
   </div>
  }
 </div>)
}

export default Cart