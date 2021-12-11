import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  //   useEffect(() => {
  //     showButton();
  //   }, []);

  const closeMobileMenu = () => {
    setClick(false);
  };

  const changeIcon = () => {
    setClick(!click);
  };

  //   const showButton = () => {
  //     setButton(true);
  //     if (window.innerWidth <= 960) {
  //       setButton(false);
  //     }
  //   };

  //   window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* navbar left */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Coffee House
        </Link>

        {/* change hamburger icon with click */}
        <div className="menu-icon" onClick={changeIcon}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        {/* navbar right */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
