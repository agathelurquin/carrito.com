import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { Outlet } from "react-router-dom";
import Search from "./Search";

import "./../App.css";

function NavBar() {
  return (
    <>
      <nav>
        <div className="links-to-pages">

          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/all-products" className="nav-link">
            All Products
          </Link>
          <Link to="/cat/women" className="nav-link">
            Women
          </Link>
          <Link to="/cat/men" className="nav-link">
            Men
          </Link>
          <Search></Search>

        </div>
      </nav>
    </>
  );
}

export default NavBar;
