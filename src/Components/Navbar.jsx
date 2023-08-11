import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { Outlet } from "react-router-dom";
import Search from "./Search";
import logoCarrito from "./../assets/images/carritooficial.jpg"
import Cart from "../pages/Cart"
import shoppingCard from "./../assets/images/shoppingcard.jpeg"

import "./../App.css";

function NavBar() {
  return (
    <>
      <nav>
        <div className="links-to-pages">
          <img src={logoCarrito} alt="logo-carrito"></img>
          <Link to="/" className="nav-link">
            Welcome
          </Link>
          <Link to="/cat/women" className="nav-link">
            Women
          </Link>
          <Link to="/cat/men" className="nav-link">
            Men
          </Link>
          <Link to="/all-products" className="nav-link">
            All Products
          </Link>
          <Search></Search>
          {/* <a href="/Cart">
            <img className="shopping-car" src={shoppingCard} alt="logo-shooping"></img>
          </a> */}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
