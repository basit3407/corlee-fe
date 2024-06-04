import { useState } from "react";
import ProductNavigation from "./ProductNavigation";
import "./style.css"; // Ensure your custom CSS is imported

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="main-content-container-nav">
      <div className="header-navbar-nav">
        <img
          src="/assets/logo.png"
          className="product-image-styles-nav"
          alt="Logo"
        />
        <div className="md:hidden" onClick={toggleMenu}>
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
          </div>
        </div>
        <div
          className={`md:flex md:items-center md:justify-between ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ProductNavigation />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
