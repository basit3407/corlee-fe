import { useNavigate } from "react-router-dom";
import ProductNavigation from "./ProductNavigation";
import "./style.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="main-content-container-nav">
      <div className="header-navbar-nav">
        <img
          src="/assets/logo.png"
          className="product-image-styles-nav"
          alt="logo"
          style={{ cursor: "pointer", zIndex: 3 }}
          onClick={() => navigate("/")}
        />
        <ProductNavigation />
      </div>
    </div>
  );
}

export default Navbar;
