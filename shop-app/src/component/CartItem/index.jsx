// path: shop-app/src/component/CartItem/index.jsx
import "./style.scss";
import QtyButton from "../QtyButton/index.jsx";

const CartItem = ({product, index}) => {
 
 const total = product.price * product.qty;
 
 return (
  <div style={{animationDelay: `${index * 100}ms`}} className="CartItem">
   <img src={product.image} alt={product.name}/>
   <div className="details">
    <h3>{product.name}</h3>
    <p>{product.price} €</p>
    <p><small><QtyButton qty={product.qty} productID={product.id} /> x {product.price} € =</small> {total} €</p>
   </div>
  </div>
 )
}

export default CartItem