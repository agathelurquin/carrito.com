import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Buttondisplaymore from "./Buttondisplaymore";

function MenStore() {
  const [men, setMen] = useState();
  const [counter, setCounter] = useState(1);
//   const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://carrito.adaptable.app/products?_page=${counter}&_limit=3`)
      .then((response) => {
        setMen(response.data);
      })
      .catch((e) => console.log(e));
  }, [counter]);

  if (!men) {
    return <p>Loading...</p>;
  }

  return (
    <div className="page-container">
      <div className="list-content">
        <h2>
          <span className="highlight-color italic">Men Section</span>
          {/* <span className="italic"> Men Section</span> */}
        </h2>

      

        <div className="cards-wrapper">
          {men.map((man) => (
            <div key={man.gender} className="card">
              <Link to={`/products/${man.gender}`}>
                <div className="card-image">
                  <img src={`https://${man.image}`} alt={man.image} />
                </div>
                <div className="card-content">
                  <p className="brand-name">{man.brandName}</p>
                  <p className="price">{man.price}€</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Buttondisplaymore />
      {/* <button onClick={() => setCounter(counter +1)}>More Shoes</button> */}
    </div>
  );
}

export default MenStore;
