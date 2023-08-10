import {useState} from "react";
import {Link} from "react-router-dom";
import React from 'react'
import { Outlet } from "react-router-dom";
import "./../App.css";

function NavBar() {
  return (
    <>
      <nav>
         <div className="links-to-pages">
						<Link to="/cat/women" className="nav-link">WOMEN</Link>
						<Link to="/cat/men" className="nav-link">MEN</Link>	
            
				</div>
			</nav> 
    </>
  )
}

export default NavBar;