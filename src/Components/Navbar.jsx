import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { Outlet } from "react-router-dom";
import Search from "./Search";

function NavBar() {
  return (
    <>
      <nav>
        <div className="links-to-pages">
          <Link to="/">Home</Link>
          <Link to="/all-products">All Products</Link>
          <Link to="/cat/women">Women</Link>
          <Link to="/cat/men">Men</Link>
          <Search></Search>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
