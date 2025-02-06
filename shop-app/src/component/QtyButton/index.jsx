// path: shop-app/src/component/QtyButton/index.jsx
import "./style.scss";
import useShopContext from "../../context/ShopContext.jsx";

const QtyButton = ({productID, qty}) => {
 
 const {addToCart, decreaseQty, removeFromCart} = useShopContext();
 
 const handlePlus = () => {
  addToCart(productID);
 }
 
 const handleMinus = () => {
  decreaseQty(productID);
 }
 
 const handleDelete = () => {
  removeFromCart(productID)
 }
 
 return (
  <div className="QtyButton">
      {
          qty === 1 ?
           <button className={"delete"} onClick={handleDelete}>&#128465; {/*Unicode pour la poubelle*/}</button>
           : <button className={"minus"} onClick={handleMinus}>-</button>
      }
   <span>{qty}</span>
   <button className={"plus"} onClick={handlePlus}>+</button>
  </div>
 )
}

export default QtyButton