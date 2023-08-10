import {useState} from "react";
import {Link} from "react-router-dom";
import React from 'react'
import { Outlet } from "react-router-dom";
import "../carrito.com/src/App.css";

function NavBar() {
  return (
    <>
      <nav>
         <div className="links-to-pages">
						<Link to="/women" className="nav-link">WOMEN</Link>
						<Link to="/men" className="nav-link">MEN</Link>	
				</div>
			</nav> 
    </>
  )
}

export default NavBar;