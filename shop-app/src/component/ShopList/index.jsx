// path: shop-app/src/component/ShopList/index.jsx
import "./style.scss";
import useShopContext from "../../context/ShopContext.jsx";
import ShopItem from "../ShopItem/index.jsx";

const ShopList = () => {
 
 const {state: {products}} = useShopContext();
 
 return (
  <div className="ShopList">
   <h2>Nos articles</h2>
   <div className="list">
    {
     products.map((product, index) => (
      <ShopItem key={index} product={product} />
     ))
    }
   </div>
  </div>
 )
}

export default ShopList