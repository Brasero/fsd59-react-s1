// path: shop-app/src/component/Header/index.jsx
import "./style.scss";
import Banner from "../Banner/index.jsx";

const Header = () => {
 
 return (<header className="Header">
   <h1>Shop App</h1>
   <p>Tout ce dont vous avez besoin, au même endroit</p>
   <Banner/>
  </header>)
}

export default Header