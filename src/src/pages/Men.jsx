import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MenStore() {
  const [men, setMen] = useState();
  useEffect(() => {
    axios
      .get("https://carrito.adaptable.app/products")
      .then((response) => {
        setMen(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (!men) {
    return <p>Loading...</p>;
  }

  return (
    <div className="page-container">
      <div className="list-content">
        <h1>
          <span className="highlight-color italic">Carrito</span>
          <span className="italic"> Men Section</span>
        </h1>

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
    </div>
  );
}

export default MenStore;
