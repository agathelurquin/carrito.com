import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./src/pages/AllProducts";
import ProductsId from "./src/pages/ProductsId";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductsId />} />
      </Routes>
    </div>
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
