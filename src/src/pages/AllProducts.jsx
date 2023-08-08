import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://carrito.adaptable.app/products";

function AllProducts() {
  const [shoes, setShoes] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        console.log(res);
        setShoes(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (!shoes) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div>
      <h2>All Products</h2>
      {shoes.map((shoe) => {
        return (
          <article key={shoe.id}>
            <h1>{shoe.name}</h1>
            <img src={`https://${shoe.image}`} alt="" width={300} />
            <h2>Description</h2>
            <p>{shoe.description}</p>
            <h3>Gender</h3>
            <p>{shoe.gender}</p>
            <h3>Colour</h3>
            <p>{shoe.colour}</p>
            <Link to={`/product/${shoe.id}`}>Shoe details page</Link>
          </article>
        );
      })}
    </div>
  );
}

export default AllProducts;
