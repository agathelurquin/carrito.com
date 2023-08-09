import {useState} from "react";
import {Link} from "react-router-dom";
import React from 'react'
import { Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
         <div className="links-to-pages">
						<Link to="/women">Women</Link>
						<Link to="/men">Men</Link>	
				</div>
			</nav> 
    </>
  )
}

export default NavBar;