import DynamicContentDisplay from "../DynamicContentDisplay";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css"; // Ensure your custom CSS is imported
import messages from "./messages.json";

function ProductNavigation({ menuOpen }) {
  return (
    <div
      className={`main-navigation-container-nav flex-col md:flex md:flex-row md:items-center md:gap-8 ${
        menuOpen ? "block" : "hidden"
      }`}
    >
      <div className="product-card-container-nav">
        <p className="contact-info-text-style-nav">{messages["products"]}</p>
        <SvgIcon1 className="svg-container-nav" />
      </div>
      <p className="contact-info-text-style-nav">{messages["events"]}</p>
      <p className="contact-info-text-style-nav">{messages["Blogs"]}</p>
      <p className="contact-info-text-style-nav">{messages["about_us"]}</p>
      <DynamicContentDisplay />
    </div>
  );
}

export default ProductNavigation;
