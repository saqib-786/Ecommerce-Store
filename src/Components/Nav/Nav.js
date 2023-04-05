import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { Button,Box } from "@mui/material";
import {useEffect} from "react";
import { IoMdClose } from "react-icons/io";
import $ from 'jquery';
import "./style.css";

function Nav({setShowMenu,mobileNav,setMobileNav}) {

  useEffect(()=>{
    $(document).ready(function(){
      $('#menu_btn').click(function(){
        
      })
    })


  })

  
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
          <Button id="close_btn" onClick={()=>{setMobileNav(!mobileNav);setShowMenu(false)}} className="menu_icon">
            <IoMdClose className="menu_icon" />
          </Button>
        ) : (
          <Button id="menu_btn" onClick={()=>{setMobileNav(true);setShowMenu(true)}} className="menu_icon">
            <FiMenu className="menu_icon" />
          </Button>
        )}
      </nav>
     </Box>
      
    </React.Fragment>
  );
}

export default Nav;
