import ProductTableRenderer from "../ProductTableRenderer";
import PersonalProfileButtonSection from "../PersonalProfileButtonSection";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import SvgIcon5 from "./icons/SvgIcon5";
import "./style.css";
import messages from "./messages.json";

function ComponentYouSelected({ productTableRowsData }) {
  return (
    <div className="main-content-container1">
      <div className="main-content-container">
        <div className="product-info-container">
          <img src="/assets/img_I1091_4994_992_9305_ef5a07.png" className="product-image-placeholder" />
          <div className="navigation-bar">
            <div className="hierarchical-content-container">
              <div className="hierarchical-content-container">
                <p className="primary-text-block">{messages["products"]}</p>
                <SvgIcon1 className="svg-container" />
              </div>
              <div className="navigation-menu">
                <p className="primary-text-block">{messages["events"]}</p>
                <p className="primary-text-block">{messages["blogs"]}</p>
                <p className="primary-text-block">{messages["about_us"]}</p>
              </div>
            </div>
            <div className="vertical-menu-container">
              <SvgIcon2 className="svg-container1" />
            </div>
          </div>
          <div className="contact-info-section">
            <p className="primary-text-block">{messages["call_us"]}</p>
            <div className="callout-container">
              <SvgIcon3 className="svg-container2" />
            </div>
            <div className="contact-info-container1">
              <span className="highlighted-text-badge">2</span>
              <div className="centered-text-container">
                <SvgIcon4 className="svg-container2" />
              </div>
            </div>
            <div className="vertical-divider-with-text" />
            <div className="callout-container">
              <SvgIcon5 className="svg-container3" />
            </div>
          </div>
        </div>
        <div className="shopping-cart-details-section">
          <div className="shopping-bag-details-section">
            <div className="shopping-bag-header">
              <p className="shopping-bag-title">{messages["shopping_bag"]}</p>
              <p className="shopping-bag-info">{messages["4_items"]}</p>
            </div>
            <ProductTableRenderer productTableRowsData={productTableRowsData} />
          </div>
          <div className="personal-details-section3">
            <PersonalProfileButtonSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentYouSelected;
