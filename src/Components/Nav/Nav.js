import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { Button,Box } from "@mui/material";
// import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./style.css";

function Nav({setShowMenu,mobileNav,setMobileNav}) {

  
  return (
    <React.Fragment>
     <Box>
     <nav>
        <ul className="nav_list">
          <li>
            <Link to={'/'} className="nav_item">Home</Link>
          </li>
          <li>
            <Link to={'/about'} className="nav_item">About</Link>
          </li>
          <li>
            <Link to={'/products'} className="nav_item">Products</Link>
          </li>
          <li>
            <Link to={'/contact'} className="nav_item">Contact</Link>
          </li>
          <li>
            <Link to={'/cart'}>
              <FiShoppingCart className="cart" />
            </Link>
          </li>
        </ul>

        {mobileNav ? (
          <Button onClick={()=>{setMobileNav(!mobileNav);setShowMenu(false)}} className="menu_icon">
            <IoMdClose className="menu_icon" />
          </Button>
        ) : (
          <Button onClick={()=>{setMobileNav(true);setShowMenu(true)}} className="menu_icon">
            <FiMenu className="menu_icon" />
          </Button>
        )}
      </nav>
     </Box>
      
    </React.Fragment>
  );
}

export default Nav;
