import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "../Components/Search";
import ScrollUpButton from "../Components/ScrollUpButton";
import CartCountBadge from "../Components/CartCountBadge";
// const API_URL = "https://carrito.adaptable.app/products";

function AllProducts({ handleClick, cart }) {
  const [shoes, setShoes] = useState(null);
  const [page, setPage] = useState(1);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    // console.log(page);
    axios
      .get(
        `https://carrito.adaptable.app/products?q=${searchString}&_page=${page}&_limit=12`
      )
      .then((res) => {
        let currentShoes = shoes ? shoes : [];
        setShoes([...res.data]);
      })
      .catch((e) => console.log(e));
  }, [page, searchString]);

  const fetchData = () => {
    setPage(page + 1);
    axios
      .get(
        `https://carrito.adaptable.app/products?q=${searchString}&_page=${page}&_limit=12`
      )
      .then((res) => {
        let currentShoes = shoes ? shoes : [];
        setShoes([...currentShoes, ...res.data]);
      })
      .catch((e) => console.log(e));
  };
  if (!shoes) {
    return <div className="loading">Loading...</div>;
  }
  // let collectionToDisplay;
  // if (!searchString) {
  //   collectionToDisplay = shoes;
  // } else {
  //   collectionToDisplay = shoes.filter((product) =>
  //     product.name.toLowerCase().includes(searchString.toLowerCase())
  //   );
  // }
  return (
    <div>
      <h1>All Products</h1>

      <Search searchString={searchString} handleSubmit={setSearchString} />
      <div>
        <Link to={`/cart`}>
          <button>
            <CartCountBadge number={cart.length} />
          </button>
        </Link>
      </div>

      {/* {shoes.map((shoe) => { */}
      <div className="card">
        {shoes.map((shoe) => {
          return (
            <div className="itemCard">
              <div className="divWithAll" key={shoe.id}>
                <Link to={`/product/${shoe.id}`}>
                  <img
                    className="productPicture"
                    src={`${shoe.image}`}
                    alt=""
                    width={200}
                  />
                </Link>
                <div className="cardDetail">
                  <h2 className="titleName">{shoe.name}</h2>
                  <div className="priceAndColor">
                    <h3 className="productDetail">Colour: {shoe.colour}</h3>
                  </div>
                </div>

                <div className="buttonAlign">
                  <button
                    className="buttonAll"
                    onClick={() => handleClick(shoe)}
                  >
                    Add to bag
                  </button>
                </div>

                <h3>Price</h3>
                <p>$ {shoe.currentPrice}</p>

              </div>
            </div>
          );
        })}
      </div>

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
