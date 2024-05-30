import NewsletterSubscriptionSection from "./NewsletterSubscriptionSection";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import "./style.css";
import messages from "./messages.json";

function BottomBar() {
  return (
    <div className="newsletter-section-bb">
      <div className="hero-section-bb">
        <NewsletterSubscriptionSection />
        <div className="flex-container-with-icons-bb">
          <div className="navigation-bar-bb">
            <p className="unique-text-block-bb">{messages["products"]}</p>
            <p className="unique-text-block-bb">{messages["events"]}</p>
            <p className="unique-text-block-bb">{messages["about_us"]}</p>
          </div>
          <div className="sidebar-container-bb">
            <img src="/assets/logo-white.png" className="image-container-bb" />
          </div>
          <div className="flex-box-section-bb">
            <SvgIcon1 className="svg-container-bb" />
            <SvgIcon2 className="svg-container-bb" />
            <SvgIcon3 className="svg-container1-bb" />
            <SvgIcon4 className="svg-container1-bb" />
          </div>
        </div>
        <div className="contact-info-section1-bb">
          <div className="contact-info-container-bb">
            <div className="contact-info-container1-bb">
              <p className="unique-text-block-bb">
                {messages["33_123456_789"]}
              </p>
              <div className="vertical-divider-bb" />
              <p className="unique-text-block-bb">
                {messages["infocorleecom"]}
              </p>
            </div>
            <p className="contact-info-section-bb">
              {messages["5f_no_489_section_3_jinma_rd_changhua_city_changhu"]}
            </p>
          </div>
        </div>
        <p className="footer-copyright-text-bb">
          <span className="brand-text-style-bb">
            {messages["2023_corlee__co_all_rights_reserved"]}
          </span>
          <a
            href="https://www.allbirds.com/pages/allbirds-terms-of-use"
            className="link-underline-white-bb"
          >
            {messages["terms"]}
          </a>
          <span className="brand-text-style-bb">, </span>
          <a
            href="https://www.allbirds.com/pages/privacy-policy"
            className="link-underline-white-bb"
          >
            {messages["privacy"]}
          </a>
          <span className="brand-text-style-bb"> &amp; </span>
          <a
            href="https://www.allbirds.com/pages/accessibility"
            className="link-underline-white-bb"
          >
            {messages["accessibility"]}
          </a>
        </p>
      </div>
    </div>
  );
}

export default BottomBar;
