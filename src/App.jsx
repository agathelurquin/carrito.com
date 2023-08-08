import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from 'react'
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import Kid from "./Pages/Kid"
import NavBar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import AllProducts from "./src/pages/AllProducts";
import ProductsId from "./src/pages/ProductsId";

function App() {
  return (
    <>
		<Routes>
				<Route element={<NavBar />}/>
					<Route
						path="/"
						element={<HomePage />} 
					/>
					<Route
						path="/women"
						element={<Women  />}
					/>
					<Route
						path="/men"
						element={<Men />}
					/>
          <Route
						path="/kids"
						element={<Kid  />}
					/>
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductsId />} />
			</Routes>
		</>
  )

}

export default App;

// JOSE Home Page "/" --> Banner (button --> Shop all), sections with categories, higlights of products
// JOSE Navbar (component) --> displays the categories (navlinks)
// NICO List "/all-products" (shop all) (product link)
// NICO Product page "/:product-id"
// AGATHE search bar + search algorithm
// NICO CART CRUD
// JOSE Category pages
