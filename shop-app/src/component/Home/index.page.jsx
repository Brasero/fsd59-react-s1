// path : shop-app/src/component/Home/index.page.jsx
import "./style.scss";
import ShopList from "../ShopList/index.jsx";
import Cart from "../Cart/index.jsx";

const HomePage = () => {
 
 return <div className="page" id="Home">
  <Cart />
  <ShopList />
 </div>
}

export default HomePage