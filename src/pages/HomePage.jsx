// DELETE THE EXISTING "ALL PRODUCTS" IN THIS FILE (WE MOVED IT TO THE ALL PRODUCTS PAGE)
// START WORKING ON THE HOME PAGE (BANNER - CARROUSEL)

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Carrouselwomen from "../Components/Carrouselwomen"
import Carrouselmen from "../Components/Carrouselmen"
import videoHeader from "../assets/images/carritobanner2.mp4"
import Footer from "../Components/Footer";
import Category from "../Components/Category";
import "./../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
        
      </div>
      <div className="hero-banner">
					<video autoPlay controls loop
          position="absolute"
           width="800"  height="360"
						className="promo"
						src={videoHeader}
						alt="banner-no-promo"
					/>
			</div>  
      <h1>Carrito</h1>
      <div className ="product-display">
       <div className="product-woman">
          <Carrouselwomen type="Woman" className="product-display"/>
       </div>

       <div className="product-men">
          <Carrouselmen type="Men" className="product-display"/>
       </div>
      </div>
  
      <div className="links-to-categories">
      <div className="all-products">
        <h2>See all collection </h2>
        <Link to="/all-products">Shop All </Link>
      </div>
      <div className="men-products">
        <h2>Men Collection </h2>
        <Link to={`/cat/men`}>Shop All </Link>
      </div>
      <div className="women-products">
        <h2>Women Collection </h2>
        <Link to="/cat/women">Shop All </Link>
      </div>
      </div>

      <div className="footer">
          <Footer />
      </div>
    </div>
);
}

export default Home;




