// path: shop-app/src/component/Banner/index.jsx
import "./style.scss";
import {useEffect} from "react";

const Banner = () => {
 
 useEffect(() => {
  // effet pour calculer le temps de défilement en fonction de la largeur de la page
  const banner = document.querySelector(".Banner p");
  const bannerWidth = banner.offsetWidth; // largeur du texte
  const screenWidth = window.innerWidth; // largeur de la page
  const duration = screenWidth / bannerWidth * 10; // calcul de la durée de l'animation
  banner.style.animationDuration = `${duration}s`; // application de la durée de l'animation
  return () => banner.style.animationDuration = "10s"; // remise à zéro de la durée de l'animation
 }, [])
 
 return (
  <div className="Banner">
   <p style={{animationDuration: "10s"}}>En ce moment -10% sur votre panier à partir de 100€ d'achat.</p>
  </div>
 )
}

export default Banner