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
  const [colour, setColour] = useState("-1");
  const [brandSelection, setBrandSelection] = useState([]);
  const [colourSelection, setColourSelection] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("-1");

  // const [productType, setProductType] = useState("");

  let brandOptions = [];
  let sortOptions = ["name", "currentPrice", "all"];

  // Récup les options uniques (colour...)
  useEffect(() => {
    axios
      .get(`https://carrito.adaptable.app/products`)
      .then((response) => {
        let allBrands = response.data.map((item) => item.brand);
        console.log("beggining", brandOptions);
        const uniqueBrands = [...new Set(allBrands)];
        setBrandSelection(uniqueBrands);

        let allColours = response.data.map((item) => item.colour);
        const uniqueColours = [...new Set(allColours)];
        setColourSelection(uniqueColours);

        console.log("RESULT", brandSelection);
      })
      .catch((e) => console.log(e));
  }, []);

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

    if (brand !== "-1") {
      options.brand = brand;
    }
    if (colour !== "-1") {
      options.colour = colour;
    }

    // Infinite scroll avec filtres
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
    // if (sortCriteria === "all") {
    //   setSortCriteria("");
    // }
    const options = {
      _page: 1,
      _sort: sortCriteria,
      gender: capitalizeCat(category),
    };

    if (brand !== "-1") {
      options.brand = brand;
    }
    if (colour !== "-1") {
      options.colour = colour;
    }
    axios
      .get(`https://carrito.adaptable.app/products`, {
        params: options,
      })
      .then((response) => {
        let fetchedCollection = response.data;
        setCollection(fetchedCollection);
      })
      .catch((e) => console.log(e));
  }, [brand, sortCriteria, colour]);

  if (!collection) {
    return <div className="loading">Loading...</div>;
  }
  console.log("RES===================>   ", collection);
  return (
    <div className="collection">
      <h1>{category}</h1>
      <Filter
        filter={brand}
        filterOptions={brandSelection}
        setFilter={setBrand}
      />
      <Filter
        filter={sortCriteria}
        filterOptions={sortOptions}
        setFilter={setSortCriteria}
      />
      <Filter
        filter={colour}
        filterOptions={colourSelection}
        setFilter={setColour}
      />

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

// setOptions((currentState) => {
//   return { ...currentState, [e.target.name]: e.target.value };
// });
