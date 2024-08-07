import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import SvgIcon5 from "./icons/SvgIcon5";
import "./style.css";
import messages from "./messages.json";

function NavBarBlack() {
  return (
    <div className="main-content-container-events">
      <div className="main-content-wrapper-events">
        <div className="flex-container-with-icons-events">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/logo-white.webp"
            className="product-image-style-events"
          />
          <div className="hierarchical-container-events">
            <div className="hierarchical-container-events">
              <div className="horizontal-nav-container-events">
                <div className="hierarchical-container-events">
                  <p className="product-info-card-events">
                    {messages["products"]}
                  </p>
                  <SvgIcon1 className="svg-container-events" />
                </div>
                <p className="product-info-card-events">{messages["events"]}</p>
                <p className="product-info-card-events">
                  {messages["about_us"]}
                </p>
              </div>
              <div className="header-section-events">
                <div className="callout-box-events">
                  <SvgIcon2 className="svg-container1-events" />
                </div>
                <p className="contact-info-heading-events">
                  {messages["call_us"]}
                </p>
              </div>
            </div>
            <div className="horizontal-flex-container-with-icons-events">
              <div className="card-container-events">
                <SvgIcon3 className="svg-container2-events" />
              </div>
              <div className="card-container-events">
                <SvgIcon4 className="svg-container3-events" />
              </div>
              <div className="divider-line-events" />
              <div className="card-container-events">
                <SvgIcon5 className="svg-container2-events" />
              </div>
            </div>
          </div>
        </div>
        <div className="appointment-section-events">
          <p className="appointment-heading-style-events">
            {messages["want_book_appointment_us"]}
          </p>
          <p className="majestic-heading-events">
            {messages["lets_go__discuss"]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBarBlack;
