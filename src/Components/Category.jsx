import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

// const API_URL = "https://carrito.adaptable.app/products";

function Category({ handleClick, cart }) {
  const [collection, setCollection] = useState(null);
  const { category } = useParams();
  const [page, setPage] = useState(1);
  const [brand, setBrand] = useState("");
  const [productType, setProductType] = useState("");

  function capitalizeCat(cat) {
    const firstLetter = cat.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = cat.slice(1);
    return `${firstLetterCap}${remainingLetters}`;
  }
  useEffect(() => {
    console.log(page);

    axios
      .get(`https://carrito.adaptable.app/products`, {
        params: {
          _page: page,
          _sort: "name",
          gender: capitalizeCat(category),
        },
      })
      .then((response) => {
        let currentCollection = collection ? collection : [];
        let fetchedCollection = response.data;

        setCollection([...currentCollection, ...fetchedCollection]);
      })
      .catch((e) => console.log(e));
  }, [page]);

  // BECAUSE WE SET THE LIMIT TO 12, WE DON'T HAVE ACCESS TO THE WHOLE DATA BASE
  // function fetchData() {
  //   axios
  //     .get(
  //       `https://carrito.adaptable.app/products?_page=${page}&gender=${capitalizeCat(
  //         category
  //       )}`
  //     )
  //     .then((response) => {
  //       let currentCollection = collection ? collection : [];
  //       let fetchedCollection = response.data;
  //       randomizeCollection([...currentCollection, ...fetchedCollection]);
  //     })
  //     .catch((e) => console.log(e));
  // }

  // function randomizeCollection(array) {
  //   let collectionCopy = [...array];
  //   let length = collectionCopy.length;

  //   let randomOrder = [];
  //   for (let i = 0; i < length; i++) {
  //     let randomId = Math.floor(Math.random() * collectionCopy.length);
  //     randomOrder.push(collectionCopy[randomId]);
  //     collectionCopy.splice(randomId, 1);
  //   }
  //   console.log("Random order: ", randomOrder, array);
  //   return setCollection([...randomOrder]);
  // }

  if (!collection) {
    return <div className="loading">Loading...</div>;
  }
  console.log("RES===================>   ", collection);
  return (
    <div className="collection">
      <h1>{category}</h1>
      <div>
        <Link to={`/cart`}>
          <button>Check out 🛒 ({cart.length})</button>
        </Link>
      </div>
      {collection.map((product) => {
        return (
          <div key={product.id}>
            <div>
              <Link to={`/product/${product.id}`}>
                <img src={`${product.image}`} alt="" width={200} />
              </Link>
              <h2>{product.name}</h2>
              <h3>Colour</h3>
              <p>{product.colour}</p>
              <h3>Price</h3>
              <p>$ {product.currentPrice}</p>
              <button onClick={() => handleClick(product)}>Add to bag</button>
            </div>
          </div>
        );
      })}
      <InfiniteScroll
        dataLength={collection.length}
        data
        next={() => setPage(page + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      ></InfiniteScroll>
    </div>
  );
}

export default Category;
