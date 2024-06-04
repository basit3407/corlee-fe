import DynamicContentDisplay from "../DynamicContentDisplay";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function ProductNavigation({ menuOpen }) {
  return (
    <div className="main-navigation-container-nav">
      <div
        className={`horizontal-menu-with-icons-nav ${
          menuOpen ? "menu-items show" : "menu-items"
        }`}
      >
        <div className="product-card-container-nav">
          <p className="contact-info-text-style-nav">{messages["products"]}</p>
          <SvgIcon1 className="svg-container-nav" />
        </div>
        <p className="contact-info-text-style-nav">{messages["events"]}</p>
        <p className="contact-info-text-style-nav">{messages["Blogs"]}</p>
        <p className="contact-info-text-style-nav">{messages["about_us"]}</p>
      </div>
      <DynamicContentDisplay />
    </div>
  );
}

export default ProductNavigation;
