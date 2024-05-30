import DynamicContentDisplay from "../DynamicContentDisplay";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function ProductNavigation() {
  return (
    <div className="main-navigation-container-nav">
      <div className="horizontal-menu-with-icons">
        <div className="product-card-container">
          <p className="contact-info-text-style">{messages["products"]}</p>
          <SvgIcon1 className="svg-container" />
        </div>
        <p className="contact-info-text-style">{messages["events"]}</p>
        <p className="contact-info-text-style">{messages["about_us"]}</p>
      </div>
      <DynamicContentDisplay />
    </div>
  );
}

export default ProductNavigation;
