import { useState } from "react";
import ProductNavigation from "./ProductNavigation";
import "./style.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="main-content-container-nav">
      <div className="header-navbar-nav">
        <img src="/assets/logo.png" className="product-image-styles-nav" />
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ProductNavigation menuOpen={menuOpen} />
      </div>
    </div>
  );
}

export default Navbar;
