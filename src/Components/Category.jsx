import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// const API_URL = "https://carrito.adaptable.app/products";

function Category() {
  const [collection, setCollection] = useState(null);
  const { category } = useParams();

  function capitalizeCat(cat) {
    const firstLetter = cat.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = cat.slice(1);
    return `${firstLetterCap}${remainingLetters}`;
  }
  useEffect(() => {
    axios
      .get(`https://carrito.adaptable.app/products`)
      .then((response) => {
        let fetchedCollection = response.data.filter(
          (product) => product.gender === capitalizeCat(category)
        );
        randomizeCollection(fetchedCollection);
      })
      .catch((e) => console.log(e));
  }, []);

  function randomizeCollection(array) {
    let collectionCopy = [...array];
    let length = collectionCopy.length;
    let randomOrder = [];
    for (let i = 0; i < length; i++) {
      let randomId = Math.floor(Math.random() * collectionCopy.length);
      randomOrder.push(collectionCopy[randomId]);
      collectionCopy.splice(randomId, 1);
    }
    setCollection([...randomOrder]);
  }

  if (!collection) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="collection">
      <h1>{category}</h1>
      {collection.map((product) => {
        return (
          <div>
            <div key={product.id}>
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
    </div>
  );
}

export default Category;
