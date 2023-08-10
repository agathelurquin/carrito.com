import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import bannerImage from "./../assets/images/banner.jpeg";
import Carrousel from "../Components/Carrousel";
// import Carruselwoman from "../Components/Carrousel"
// import Carruselkids from "../Components/Carruselkids"
import Footer from "../Components/Footer";
import "./../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
      <Navbar />

      <h1 className="home-title">
        <span className="highlight-color italic">Carrito</span>
        <span className="italic"> Shop </span>
      </h1>

      <div className="hero-banner">
        <img className="promo" src={bannerImage} alt="banner-no-promo" />
      </div>

      <div className="product-display">
        <div className="product-men">
          <Carrousel type="Men" />
        </div>
        <div className="product-woman">
          <Carrousel type="Women" />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
