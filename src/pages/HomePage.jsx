// DELETE THE EXISTING "ALL PRODUCTS" IN THIS FILE (WE MOVED IT TO THE ALL PRODUCTS PAGE)
// START WORKING ON THE HOME PAGE (BANNER - CARROUSEL)

import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import bannerImage from "./../assets/images/banner.jpeg";
import Carrouselwomen from "../Components/Carrouselwomen"
import Carrouselmen from "../Components/Carrouselmen"
// import Carruselwoman from "../Components/Carrousel"
// import Carruselkids from "../Components/Carruselkids"
import Footer from "../Components/Footer";
import "./../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Carrouselprueba from "../Components/Carrouselprueba";

function Home() {
  const [products, setProducts] = useState();
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    axios
      .get(`https://carrito.adaptable.app/products?_page=${counter}&_limit=4`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => console.log(e));
  }, [counter]);

  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <div className="page-container">

      <div className="top-page">
        <Navbar /> 
        <h1 className="home-title">
          <span className="highlight-color italic">Carrito</span>
          <span className="italic"> Shop </span>
        </h1>
      </div>

      <div className="hero-banner">
					<img
						className="promo"
						src={bannerImage}
						alt="banner-no-promo"
					/>
			</div>

      <div className ="product-display">
       <div className="product-woman">
          <Carrouselwomen type="Woman" className="product-display"/>
       </div>

       <div className="product-men">
          <Carrouselmen type="Men" className="product-display"/>
       </div>
      </div>
  
      <div className="footer">
          <Footer />
      </div>
    </div>

);
}

export default Home;





{/* <div className="container-display"> */}
{/* </div> */}

{/* <div className="container-display">
  <div className="product-woman">
    <Carrouselwomen type="Woman" className="product-display"/>
  </div>
  <div className="product-men">
    <Carrouselmen type="Men" className="product-display"/>
  </div>
</div> */}