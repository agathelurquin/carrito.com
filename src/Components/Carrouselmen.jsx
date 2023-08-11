import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


function Carrousel({ type }) {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(1);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const categories = ["coatsMen", "pantsMen", "shoesMen", "accessoriesMen"];
  // const filteredData = [];

  useEffect(() => {
    setProducts([]);
    // const selectedCategory = categories[categoryIndex];
    for(const category of categories) {
      axios
      .get(`https://carrito.adaptable.app/products?_page=${counter}&_limit=1&category=${category}`)
      .then((response) => {
        setProducts((currentState => [...currentState, ...response.data]));
        // filteredData.push([...products])
        // console.log('okay',filteredData[0][0])
      })
      .catch((e) => console.log(e));

    }
    
    
  }, [categoryIndex, counter]);

  // useEffect(() => {
  //   setProducts([]);
  //   const selectedCategory = categories[categoryIndex];

  //   axios
  //     .get(`https://carrito.adaptable.app/products`)
  //     .then((response) => {
          // let fetchedData = response.data
          // let coatsWomen = fetchedData.filter((product)=> product.category === categories[0])
          // let pantsWomen = fetchedData.filter((product)=> product.category === categories[1])
          // let partyOutfitWomen = fetchedData.filter((product)=> product.category === categories[2])
          // let accessoriesWomen = fetchedData.filter((product)=> product.category === categories[3])

  //       setProducts(response.data);
  //     })
  //     .catch((e) => console.log(e));
  // }, [categoryIndex, counter]);

  return (
    <div className="page-container">
      <div className="list-container">

        <div className="display-products">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="card">
              
                <Link to={`/${product.gender.toLowerCase()}`}>
                  <div className="card-image">
                    <img src={product.image} alt={product.image} />
                  </div>
                  <div className="card-content">
                    <p className="brand-name">{product.brand}</p>
                    <p className="price">{product.currentPrice} €</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '2rem' }}>
            </div>
          )}
        </div>
      </div>
                <div className="button-get-style">
                  <h2>
                    <span className="carritostyle">Click to get a men outfit. </span>
                  </h2>
                <button className="button"
                  onClick={() => {
                    setCategoryIndex((categoryIndex + 1) % categories.length);
                    setCounter(counter + 1);
                  }}
                >
                  Get style
                </button>
              </div>

      <h1></h1>
    </div>
  );
}

export default Carrousel;


// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Carrousel({ type }) {
//   const [products, setProducts] = useState([]);
//   const [counter, setCounter] = useState(1);

//   const categories = ["coatsMen", "pantsMen", "partyOutfitMen", "accessoriesMen"];

//   useEffect(() => {
//     setProducts([]);
//     const randomCategory = categories[Math.floor(Math.random() * categories.length)];

//     axios
//       .get(`https://carrito.adaptable.app/products?_page=${counter}&_limit=4&category=${randomCategory}`)
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((e) => console.log(e));
//   }, [counter]);

//   return (
//     <div className="page-container">
//       <div className="list-container">
//         <h2>
//           <span className="carritostyle">{type} Section</span>
//         </h2>

//         <div className="display-products">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <div key={product.id} className="card">
//                 <Link to={`/${product.gender.toLowerCase()}`}>
//                   <div className="card-image">
//                     <img src={product.image} alt={product.image} />
//                   </div>
//                   <div className="card-content">
//                     <p className="brand-name">{product.brand}</p>
//                     <p className="price">{product.currentPrice}€</p>
//                   </div>
//                 </Link>
//               </div>
//             ))
//           ) : (
//             <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '2rem' }}>
//               <div>
//                 <div className="image-skeleton" style={{ width: 314, height: 400, background: 'gray', borderRadius: '1rem' }}></div>
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
//                   <div style={{ background: 'gray', width: 100 }}></div>
//                   <div style={{ background: 'gray', width: 100 }}></div>
//                 </div>
//               </div>
//               <div>
//                 <div className="image-skeleton" style={{ width: 314, height: 400, background: 'gray', borderRadius: '1rem' }}></div>
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
//                   <div style={{ background: 'gray', width: 100 }}></div>
//                   <div style={{ background: 'gray', width: 100 }}></div>
//                 </div>
//               </div>
//               <div>
//                 <div className="image-skeleton" style={{ width: 314, height: 400, background: 'gray', borderRadius: '1rem' }}></div>
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
//                   <div style={{ background: 'gray', width: 100 }}></div>
//                   <div style={{ background: 'gray', width: 100 }}></div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <button onClick={() => setCounter(counter + 1)}>More Shoes</button>
//     </div>
//   );
// }

// export default Carrousel;

