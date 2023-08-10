import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

// const API_URL = "https://carrito.adaptable.app/products"

function CategoryPage() {
  const [collection, setCollection] = useState(null);
  const { category } = useParams();
  const [page, setPage] = useState(1);
  const [brand, setBrand] = useState("-1");
  const [productType, setProductType] = useState("");

  const brands = ["asos", "adidas", "nike", "pull&bear", "puma", "47 Brand"];

  function capitalizeCat(cat) {
    const firstLetter = cat.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = cat.slice(1);
    return `${firstLetterCap}${remainingLetters}`;
  }
  useEffect(() => {
    console.log(page);
    const options = {
      _page: page,
      _sort: "name",
      gender: capitalizeCat(category),
    };

    if (brand !== "-1") {
      options.brand = brand;
    }

    axios
      .get(`https://carrito.adaptable.app/products`, {
        params: options,
      })
      .then((response) => {
        let currentCollection = collection ? collection : [];
        let fetchedCollection = response.data;

        setCollection([...currentCollection, ...fetchedCollection]);
      })
      .catch((e) => console.log(e));
  }, [page]);

  useEffect(() => {
    setPage(1);
    const options = {
      _page: 1,
      _sort: "name",
      gender: capitalizeCat(category),
    };

    if (brand !== "-1") {
      options.brand = brand;
    }

    axios
      .get(`https://carrito.adaptable.app/products`, {
        params: options,
      })
      .then((response) => {
        let currentCollection = collection ? collection : [];
        let fetchedCollection = response.data;
        console.log(currentCollection, fetchedCollection);
        setCollection(fetchedCollection);
      })
      .catch((e) => console.log(e));
  }, [brand]);

  if (!collection) {
    return <div className="loading">Loading...</div>;
  }
  console.log("RES===================>   ", collection);
  return (
    <div className="collection">
      <h1>{category}</h1>
      <div className="filter">
        <select
          name="brand"
          id="brand"
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
        >
          <option value="-1" disabled>
            Please select a brand
          </option>
          {brands.map((brand) => {
            return <option value={brand}>{brand}</option>;
          })}
        </select>
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

export default CategoryPage;
