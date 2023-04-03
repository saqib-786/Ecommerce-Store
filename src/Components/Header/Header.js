import React from "react";
import { Container, Box } from "@mui/material";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import { useState } from "react";
import "../Nav/style.css";
import { FiShoppingCart } from "react-icons/fi";

const CustomContainer = styled(Container)(({ theme, variant, color }) => ({
  backgroundColor: "whitesmoke",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const CustomBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "90vh",
  backgroundColor: "white",
  position: "absolute",
  zIndex: "5555555",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0% 0px",
  justifyContent: "space-evenly",
}));
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <React.Fragment>
      <header>
        <CustomContainer maxWidth="">
          <h1>
            <Link to={"/"}>LOGO</Link>
          </h1>

          <Nav
            mobileNav={mobileNav}
            setMobileNav={setMobileNav}
            setShowMenu={setShowMenu}
          />
        </CustomContainer>
        {showMenu ? (
          <CustomBox>
            <Link
              onClick={() => {
                setShowMenu(false);
                setMobileNav(false);
              }}
              to={"/"}
              className="nav_item"
            >
              Home
            </Link>
            <Link
              onClick={() => {
                setShowMenu(false);
                setMobileNav(false);
              }}
              to={"/about"}
              className="nav_item"
            >
              About
            </Link>
            <Link
              onClick={() => {
                setShowMenu(false);
                setMobileNav(false);
              }}
              to={"/products"}
              className="nav_item"
            >
              Products
            </Link>
            <Link
              onClick={() => {
                setShowMenu(false);
                setMobileNav(false);
              }}
              to={"/contact"}
              className="nav_item"
            >
              Contact
            </Link>
            <Link
              onClick={() => {
                setShowMenu(false);
                setMobileNav(false);
              }}
              to={"/cart"}
              className="nav_item"
            >
              <FiShoppingCart className="cart_2" />
            </Link>
          </CustomBox>
        ) : null}
      </header>
    </React.Fragment>
  );
}

export default Header;
