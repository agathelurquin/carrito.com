// DELETE THE EXISTING "ALL PRODUCTS" IN THIS FILE (WE MOVED IT TO THE ALL PRODUCTS PAGE)
// START WORKING ON THE HOME PAGE (BANNER - CARROUSEL)

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState();
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    axios
      .get(`https://carrito.adaptable.app/products?_page=${counter}`)
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
      <div className="list-content">
        <h1 className="home-title">
          <span className="highlight-color italic">Carrito</span>
          <span className="italic"> Shop </span>
        </h1>

        <div className="page-list-wrapper">
          <div className="cards-wrapper">
            <h2 className="home-subtitle">All Products</h2>
            {products.map((product) => (
              <div key={product.id} className="card">
                <Link to={`/products/${product.id}`}>
                  <div className="card-image">
                    <img src={product.image} alt={product.image} />
                  </div>
                  <div className="card-content">
                    <p className="product-name">{product.brandName}</p>
                    <p className="price">{product.price}€</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={() => setCounter(counter + 1)}>Next page</button>
    </div>
  );
}

export default Home;
