import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const API_URL = "https://carrito.adaptable.app/products";

function ProductsId() {
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
      <h2>Product Id</h2>
      <article key={product.id}>
        <h1>{product.name}</h1>
        <Carousel width={500}>
          <img src={`https://${product.image}`} alt="" />
          <img src={`https://${product.image}`} alt="" />
          <img src={`https://${product.image}`} alt="" />
          <img src={`https://${product.image}`} alt="" />
        </Carousel>
        <h2>Brand</h2>
        <p>
          <strong>{product.brandName}</strong>
        </p>
        <p>
          {" "}
          <strong>Description:</strong> {product.description}
        </p>
        <h2>Price</h2>
        <p>$ {product.price}</p>

        <h2>Size</h2>
        <select name="size" id="">
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
        <button>Add to bag</button>
      </article>
    </div>
  );
}

export default ProductsId;
