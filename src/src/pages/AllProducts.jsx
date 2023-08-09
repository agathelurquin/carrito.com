import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://carrito.adaptable.app/products";

function AllProducts() {
  const [shoes, setShoes] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        console.log(res);
        setShoes(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (!shoes) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div>
      <h2>All Products</h2>
      {shoes.map((shoe) => {
        return (
          <article key={shoe.id}>
            <h1>{shoe.name}</h1>
            <img src={`${shoe.image}`} alt="" width={300} />

            <h3>Gender</h3>
            <p>{shoe.gender}</p>
            <h3>Colour</h3>
            <p>{shoe.colour}</p>
            <h3>Price</h3>
            <p>$ {shoe.price}</p>
            <Link to={`/product/${shoe.id}`}>Shoe details page</Link>
          </article>
        );
      })}
    </div>
  );
}

export default AllProducts;

// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Home() {
//   const [products, setProducts] = useState();
//   const [counter, setCounter] = useState(1);

//   useEffect(() => {
//     axios
//       .get(`https://carrito.adaptable.app/products?_page=${counter}`)
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((e) => console.log(e));
//   }, [counter]);

//   if (!products) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="page-container">
//       <div className="list-content">
//         <h1 className="home-title">
//           <span className="highlight-color italic">Carrito</span>
//           <span className="italic"> Shop </span>
//         </h1>

//         <div className="page-list-wrapper">
//           <div className="cards-wrapper">
//             <h2 className="home-subtitle">All Products</h2>
//             {products.map((product) => (
//               <div key={product.id} className="card">
//                 <Link to={`/products/${product.id}`}>
//                   <div className="card-image">
//                     <img src={`https://${product.image}`} alt={product.image} />
//                   </div>
//                   <div className="card-content">
//                     <p className="product-name">{product.brandName}</p>
//                     <p className="price">{product.price}€</p>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <button onClick={() => setCounter(counter + 1)}>Next page</button>
//     </div>
//   );
// }

// export default Home;
