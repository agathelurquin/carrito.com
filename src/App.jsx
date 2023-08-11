import "./App.css";

import { Routes, Route } from "react-router-dom";
import Men from "./pages/Men";
import Women from "./pages/Women";
import NavBar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import AllProducts from "./pages/AllProducts";
import ProductsId from "./pages/ProductsId";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./pages/Cart";
import { useState } from "react";
import ScrollUpButton from "./Components/ScrollUpButton";

function App() {
  const [cart, setCart] = useState([]);
  const handleClick = (item) => {
    setCart([...cart, item]);
  };
  console.log(cart);
  return (
    <>
      <Routes>
        <Route element={<NavBar />} />
        <Route path="/" element={<HomePage />} />
        {/* Later : Remove the Women + Men + Kid component.
        Bundle them into one single component.
        The Route should look something like this:
        <Route path="/:category" element....  />
        */}
        <Route path="/cat/:category" element={<CategoryPage />}></Route>
        {/* <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} /> */}
        <Route
          path="/all-products"
          element={<AllProducts handleClick={handleClick} />}
        />
        <Route
          path="/product/:id"
          element={<ProductsId handleClick={handleClick} />}
        />
        <Route
          path="/cart"
          element={
            <Cart handleClick={handleClick} cart={cart} setCart={setCart} />
          }
        />
      </Routes>
      <ScrollUpButton />
    </>
  );
}

export default App;

// JOSE Home Page "/" --> Banner (button --> Shop all), sections with categories, higlights of products
// JOSE Navbar (component) --> displays the categories (navlinks)
// NICO List "/all-products" (shop all) (product link)
// NICO Product page "/:product-id"
// AGATHE search bar + search algorithm
// NICO CART CRUD
// JOSE Category pages
// const handleClick = (item) => {
//   const foundProduct = cart.find((product) => product.id === item.id);
//   if (!foundProduct) {
//     item.quantity = 1;
//     setCart([...cart, item]);
//   } else {
//     const copy = { ...foundProduct };
//     copy++;
//   }
// };
