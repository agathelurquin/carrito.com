import "./App.css";

import { Routes, Route } from "react-router-dom";
import Men from "./pages/Men";
import Women from "./pages/Women";
import NavBar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import AllProducts from "./pages/AllProducts";
import ProductsId from "./pages/ProductsId";

function App() {
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
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductsId />} />
      </Routes>
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
