import ProductNavigation from "./ProductNavigation";
import "./style.css";

function Navbar() {
  return (
    <div className="main-content-container">
      <div className="header-navbar">
        <img src="/assets/logo.png" className="product-image-styles" />
        <ProductNavigation />
      </div>
    </div>
  );
}

export default Navbar;
