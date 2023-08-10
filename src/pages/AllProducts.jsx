import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

// const API_URL = "https://carrito.adaptable.app/products";

function AllProducts({ handleClick }) {
  const [shoes, setShoes] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // console.log(page);
    axios
      .get(`https://carrito.adaptable.app/products?_page=${page}&_limit=12`)
      .then((res) => {
        let currentShoes = shoes ? shoes : [];
        setShoes([...currentShoes, ...res.data]);
      })
      .catch((e) => console.log(e));
  }, [page]);

  const fetchData = () => {
    setPage(page + 1);
    axios
      .get(`https://carrito.adaptable.app/products?_page=${page}&_limit=12`)
      .then((res) => {
        let currentShoes = shoes ? shoes : [];
        setShoes([...currentShoes, ...res.data]);
      })
      .catch((e) => console.log(e));
  };
  if (!shoes) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div>
      <h1>All Products</h1>
      {shoes.map((shoe) => {
        return (
          <div>
            <div key={shoe.id}>
              <Link to={`/product/${shoe.id}`}>
                <img src={`${shoe.image}`} alt="" width={200} />
              </Link>
              <h2>{shoe.name}</h2>
              <h3>Colour</h3>
              <p>{shoe.colour}</p>
              <h3>Price</h3>
              <p>$ {shoe.currentPrice}</p>
              <button onClick={() => handleClick(shoe)}>Add to bag</button>
              <Link to={`/cart`}>
                <button>Check out</button>
              </Link>
            </div>
          </div>
        );
      })}
      <InfiniteScroll
        dataLength={shoes.length}
        data
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      ></InfiniteScroll>
    </div>
  );
}

export default AllProducts;
