// path: shop-app/src/component/ShopItem/index.jsx
import "./style.scss";
import useShopContext from "../../context/ShopContext.jsx";

const ShopItem = ({product}) => {
 
 const {addToCart} = useShopContext();
 
 return (
  <div className="ShopItem">
   <img src={product.image} alt={product.name} />
   <h3>{product.name}</h3>
   <p>{product.price} €</p>
   <button onClick={() => addToCart(product.id)}>Ajouter au panier</button>
  </div>
 )
}

export default ShopItem