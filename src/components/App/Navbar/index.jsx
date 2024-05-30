import ProductNavigation from "./ProductNavigation";
import "./style.css";

function Navbar() {
  return (
    <div className="main-content-container-nav">
      <div className="header-navbar-nav">
        <img src="/assets/logo.png" className="product-image-styles-nav" />
        <ProductNavigation />
      </div>
    </div>
  );
}

export default Navbar;
