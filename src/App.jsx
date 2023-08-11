import "./App.css";
import "./detailsProduct.css";
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
import Purchase from "./pages/PurchaseOrderPage";
import ScrollUpButton from "./Components/ScrollUpButton";

function App() {
  const [cart, setCart] = useState([]);
  // useState(item
  // quantity: 0;
  // itemInfo; item}
  //})
  const handleClick = (item) => {
    // 2 states
    // 1: if id present,
    // //   const foundProduct = cart.find((product) => product.id === item.id);
    // setQuatityr+1
    // 2: new item --> fx
    //==> met tom code dans une fonction
    // Cart.item {quantity:3
    // item}

    // cart = [item1, item4, itenm1]
    // setCart --> push
    /** Deep copy of the state Array */
    const cartCopy = structuredClone(cart);
    //  {name, price....}
    // [{name: cjec, quantity: 2}, {...}]
    const foundProduct = cartCopy.find((product) => product.id === item.id);
    if (!foundProduct) {
      item.quantity = 1;
      setCart([...cartCopy, item]);
      console.log(item);
    } else {
      // let copy = { ...foundProduct };
      foundProduct.quantity++;
      console.log(item);
      setCart(cartCopy);
    }
  };
  console.log(cart, cart.length);
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
        <Route
          path="/cat/:category"
          element={<CategoryPage handleClick={handleClick} cart={cart} />}
        ></Route>
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route
          path="/all-products"
          element={<AllProducts handleClick={handleClick} cart={cart} />}
        />
        <Route
          path="/product/:id"
          element={<ProductsId handleClick={handleClick} cart={cart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart handleClick={handleClick} cart={cart} setCart={setCart} />
          }
        />
        <Route
          path="/PurchaseOrderPage"
          element={<Purchase setCart={setCart} />}
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
