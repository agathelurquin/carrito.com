import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const API_URL = "https://carrito.adaptable.app/products";

function ProductsId({ handleClick, cart }) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <Link to={`/cart`}>
        <button>Check out 🛒 ({cart.length})</button>
      </Link>
      <div className="productDetails">
        <div className="carousel">
          <Carousel width={500}>
            <img src={`${product.image}`} alt="" />
            <img src={`${product.secondImages[0]}`} alt="" />
            <img src={`${product.secondImages[1]}`} alt="" />
            <img src={`${product.secondImages[2]}`} alt="" />
          </Carousel>
        </div>

        <div className="details" key={product.id}>
          <h1>{product.name}</h1>

          {/* <p>
            <strong>{product.brand}</strong>
          </p> */}
          <h2>Description:</h2>
          <p> {product.description}</p>
          <h2>Price</h2>
          <p>$ {product.currentPrice}</p>
          <div className="selectSize">
            <h2>Size</h2>
            <div className="size">
              <select name="size" id="">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
          </div>
          <button className="button" onClick={() => handleClick(product)}>
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsId;
