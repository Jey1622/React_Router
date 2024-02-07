import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [icon, setIcon] = useState(false);
  const handleClick = () => {
    setIcon(!icon);
  };
  const closeSideDrawer = () => {
    setIcon(false);
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo" onClick={closeSideDrawer}>
          LOGO
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {icon ? (
            <FaTimes className="fa-times"></FaTimes>
          ) : (
            <FaBars className="fa-bars"></FaBars>
          )}
        </div>
        <ul className={icon ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" className="nav-links" onClick={closeSideDrawer}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="nav-links" onClick={closeSideDrawer}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="nav-links"
              onClick={closeSideDrawer}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="nav-links"
              onClick={closeSideDrawer}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className="nav-links"
              onClick={closeSideDrawer}
            >
              Conntact-Us
            </Link>
          </li>
          <li>
            <Link to="/signup" className="nav-links" onClick={closeSideDrawer}>
              Sign-up
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
