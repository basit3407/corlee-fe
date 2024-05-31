import ProductDetailsRenderer1 from "../ProductDetailsRenderer1";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import SvgIcon5 from "./icons/SvgIcon5";
import "./style.css";
import messages from "./messages.json";

function ComponentYouSelected({ productDetailsRendererArgsList }) {
  return (
    <div className="main-content-container">
      <div className="product-details-section">
        <div className="product-details-section-widget-container">
          <img src="/assets/img_I1091_2972_992_9305_8cac9a.png" className="product-image-placeholder" />
          <div className="navigation-bar">
            <div className="product-inquiry-section">
              <div className="product-inquiry-section">
                <p className="product-info-card">{messages["products"]}</p>
                <SvgIcon1 className="svg-container" />
              </div>
              <div className="horizontal-menu-container1">
                <p className="product-info-card">{messages["events"]}</p>
                <p className="product-info-card">{messages["blogs"]}</p>
                <p className="product-info-card">{messages["about_us"]}</p>
              </div>
            </div>
            <div className="contact-section">
              <div className="contact-info-container3">
                <SvgIcon2 className="svg-container1" />
              </div>
              <p className="contact-info">{messages["call_us"]}</p>
            </div>
          </div>
          <div className="horizontal-menu-container">
            <div className="card-container-with-title">
              <SvgIcon3 className="svg-container2" />
            </div>
            <div className="card-container-with-title">
              <SvgIcon4 className="svg-container2" />
            </div>
            <div className="horizontal-divider" />
            <div className="card-container-with-title">
              <SvgIcon5 className="svg-container3" />
            </div>
          </div>
        </div>
        <ProductDetailsRenderer1 productDetailsRendererArgsList={productDetailsRendererArgsList} />
      </div>
    </div>
  );
}

export default ComponentYouSelected;
