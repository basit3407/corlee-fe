import ProductSection from "../ProductSection";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import SvgIcon5 from "./icons/SvgIcon5";
import "./style.css";
import messages from "./messages.json";

function ComponentYouSelected() {
  return (
    <div className="main-content-container">
      <div className="main-content-section">
        <div className="flex-row-container">
          <img src="/assets/img_I1091_3915_992_9305_fd6d8a.png" className="product-image-styles" />
          <div className="navigation-bar">
            <div className="horizontal-nav-container">
              <div className="flex-row-container">
                <p className="product-info-card">{messages["products"]}</p>
                <SvgIcon1 className="svg-container" />
              </div>
              <p className="product-info-card">{messages["events"]}</p>
              <p className="product-info-card">{messages["about_us"]}</p>
            </div>
            <div className="horizontal-flex-container">
              <div className="contact-info-container">
                <SvgIcon2 className="svg-container1" />
              </div>
              <p className="contact-info">{messages["call_us"]}</p>
            </div>
          </div>
          <div className="horizontal-menu-container">
            <div className="card-container-with-svg">
              <SvgIcon3 className="svg-container2" />
            </div>
            <div className="card-container-with-svg">
              <SvgIcon4 className="svg-container2" />
            </div>
            <div className="vertical-divider" />
            <div className="card-container-with-svg">
              <SvgIcon5 className="svg-container3" />
            </div>
          </div>
        </div>
        <ProductSection />
      </div>
    </div>
  );
}

export default ComponentYouSelected;
