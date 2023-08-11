import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Filter from "../Components/Filter";

// const API_URL = "https://carrito.adaptable.app/products"

function CategoryPage() {
  const [collection, setCollection] = useState([]);
  const { category } = useParams();
  const [page, setPage] = useState(1);
  const [brand, setBrand] = useState("-1");
  const [productType, setProductType] = useState("");

  const brands = [
    "asos",
    "Barbour International",
    "Vans",
    "pull&bear",
    "puma",
    "47 Brand",
    "Barbour",
  ];

  function capitalizeCat(cat) {
    const firstLetter = cat.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = cat.slice(1);
    return `${firstLetterCap}${remainingLetters}`;
  }
  useEffect(() => {
    if (page === 1) return;
    const options = {
      _page: page,
      _sort: "name",
      gender: capitalizeCat(category),
    };
    console.log("THERE");

    if (brand !== "-1") {
      options.brand = brand;
    }
    axios
      .get(`https://carrito.adaptable.app/products`, {
        params: options,
      })
      .then((response) => {
        // let currentCollection = collection ? collection : [];
        let fetchedCollection = response.data;

        setCollection((currentCollection) => [
          ...currentCollection,
          ...fetchedCollection,
        ]);
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
    console.log("HERE");
    axios
      .get(`https://carrito.adaptable.app/products`, {
        params: options,
      })
      .then((response) => {
        let fetchedCollection = response.data;
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
      {/* <div className="filter">
        <select
          name="brand"
          id="brand"
          value={brand}
          // onChange={(event) => setBrand(event.target.value)}
        >
          <option value="-1" disabled>
            Please select a brand
          </option>
          {brands.map((brand) => {
            return <option value={brand}>{brand}</option>;
          })}
        </select>
      </div> */}
      <Filter filter={brand} filterOptions={brands} setFilter={setBrand} />
      <div className="card">
        {collection.map((product) => {
          return (
            <div className="itemCard">
              <div className="divWithAll" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img
                    className="productPicture"
                    src={`${product.image}`}
                    alt=""
                    width={200}
                  />
                </Link>
                <div className="cardDetail">
                  <h2 className="titleName">{product.name}</h2>
                  <div className="priceAndColor">
                    <h3 className="productDetail">Colour: {product.colour} </h3>

                    <p>$ {product.currentPrice}</p>
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
              </div>
            </div>
          );
        })}
      </div>
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

// setOptions((currentState) => {
//   return { ...currentState, [e.target.name]: e.target.value };
// });
