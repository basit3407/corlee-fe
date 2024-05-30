import TechInfoBox from "../TechInfoBox";
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
      <div className="vertical-centered-column-layout">
        <div className="flex-row-centered">
          <img src="/assets/img_I1091_9053_992_9305_9054c1.png" className="product-thumbnail" />
          <div className="navigation-bar">
            <div className="horizontal-nav-container">
              <div className="flex-row-centered">
                <p className="product-info-card">{messages["products"]}</p>
                <SvgIcon1 className="svg-container" />
              </div>
              <p className="product-info-card">{messages["events"]}</p>
              <p className="product-info-card">{messages["about_us"]}</p>
            </div>
            <div className="horizontal-section-with-icon">
              <div className="contact-info-container">
                <SvgIcon2 className="svg-container1" />
              </div>
              <p className="contact-info-text-style">{messages["call_us"]}</p>
            </div>
          </div>
          <div className="horizontal-flex-container-with-icons">
            <div className="card-container">
              <SvgIcon3 className="svg-container2" />
            </div>
            <div className="card-container">
              <SvgIcon4 className="svg-container2" />
            </div>
            <div className="vertical-divider" />
            <div className="card-container">
              <SvgIcon5 className="svg-container3" />
            </div>
          </div>
        </div>
        <TechInfoBox />
      </div>
    </div>
  );
}

export default ComponentYouSelected;
