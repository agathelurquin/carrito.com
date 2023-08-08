import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
        <img src={`https://${product.image}`} alt="" width={300} />
        <h2>Description</h2>
        <p>{product.description}</p>
      </article>
    </div>
  );
}

export default ProductsId;
