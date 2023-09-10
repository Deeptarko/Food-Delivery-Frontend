import React, { useState } from "react";
import "./Navbar.css";

import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Navbar = () => {
  const [showNavbarIcon, setShowNavbarIcon] = useState(false);

  const toggleNavbarIcon = () => {
    setShowNavbarIcon(!showNavbarIcon);
  };

  return (
    <>
      <header className={showNavbarIcon ? `header active` : `header`}>
        <span className="logo">Foodka</span>

        <nav className="navbar ">
          <ul className="navbar-list">
            <li className="navbar-link">
              <Link to="/" className="navbar-link-item">
                Home
              </Link>
            </li>
            <li className="navbar-link">
              <Link to="/menu" className="navbar-link-item">
                Menu
              </Link>
            </li>
            <li className="navbar-link">
              <Link to="/about" className="navbar-link-item">
                About Us
              </Link>
            </li>
            <ul className="navbar-link">
              <Link className="navbar-link-item">
                <DropdownMenu name="MY PROFILE" menu={['My Orders','Logout']}/>
              </Link>
            </ul>
          </ul>
        </nav>

        <div className="mobile-nav-btn">
          <RxHamburgerMenu
            className="mobile-nav-icon"
            name="burger-icon"
            onClick={toggleNavbarIcon}
          />
          <GrClose
            className="mobile-nav-icon"
            name="close-icon"
            onClick={toggleNavbarIcon}
          />
        </div>
      </header>
    </>
  );
};

export default Navbar;
