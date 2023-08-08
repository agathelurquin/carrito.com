import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function KidStore() {
  const [kid, setKid] = useState();
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    axios
      .get(`https://carrito.adaptable.app/products?_page=${counter}&_limit=3`)
      .then((response) => {
        setKid(response.data);
      })
      .catch((e) => console.log(e));
  }, [counter]);

  if (!kid) {
    return <p>Loading...</p>;
  }

  return (
    <div className="page-container">
      <div className="list-content">
        <h2>
          <span className="highlight-color italic">Kids Section</span>
          {/* <span className="italic">Kids Section</span> */}
        </h2>

        <div className="cards-wrapper">
          {kid.map((kids) => (
            <div key={kids.gender} className="card">
              <Link to={`/products/${kids.gender}`}>
                <div className="card-image">
                  <img src={`https://${kids.image}`} alt={kids.image} />
                </div>
                <div className="card-content">
                  <p className="brand-name">{kids.brandName}</p>
                  <p className="price">{kids.price}€</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => setCounter(counter +1)}>More Shoes</button>
    </div>
  );
}

export default KidStore;
