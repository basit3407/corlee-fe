import NewsletterSubscriptionSection from "./NewsletterSubscriptionSection";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import "./style.css";
import messages from "./messages.json";
import { useNavigate } from "react-router-dom";

function BottomBar(props) {
  const navigate = useNavigate();
  return (
    <div
      className={
        props.home
          ? "newsletter-section-bb"
          : props.contact
          ? "newsletter-section-bb contactbottombar"
          : props.history
          ? "newsletter-section-bb historybottombar"
          : "newsletter-section-bb nothome"
      }
    >
      <div className="hero-section-bb">
        <NewsletterSubscriptionSection />
        <div className="flex-container-with-icons-bb">
          <div className="navigation-bar-bb">
            <p
              className="unique-text-block-bb"
              onClick={() => {
                navigate("/products");
                window.scrollTo(0, 0);
              }}
              style={{
                cursor: "pointer",
              }}
            >
              {messages["products"]}
            </p>
            <p
              className="unique-text-block-bb"
              onClick={() => {
                navigate("/events");
                window.scrollTo(0, 0);
              }}
              style={{
                cursor: "pointer",
              }}
            >
              {messages["events"]}
            </p>
            <p
              className="unique-text-block-bb"
              onClick={() => {
                navigate("/about");
                window.scrollTo(0, 0);
              }}
              style={{
                cursor: "pointer",
              }}
            >
              {messages["about_us"]}
            </p>
            <p
              className="unique-text-block-bb"
              onClick={() => {
                navigate("/blogs");
                window.scrollTo(0, 0);
              }}
              style={{
                cursor: "pointer",
              }}
            >
              Blogs
            </p>
          </div>
          <div className="sidebar-container-bb" onClick={() => navigate("/")}>
            <img
              src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/logo-white.webp"
              className="image-container-bb"
            />
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
                {localStorage.getItem("phone")}
              </p>
              <div className="vertical-divider-bb" />
              <p className="unique-text-block-bb">
                {localStorage.getItem("email")}
              </p>
            </div>
            <p className="contact-info-section-bb">
              {localStorage.getItem("address")}
            </p>
          </div>
        </div>
        <p className="footer-copyright-text-bb">
          <span className="brand-text-style-bb">
            © {new Date().getFullYear()} corlee & co. All Rights Reserved.
          </span>{" "}
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate("/terms");
              window.scrollTo(0, 0);
            }}
            className="link-underline-white-bb"
          >
            {messages["terms"]}
          </a>
          <span className="brand-text-style-bb">, </span>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate("/privacy");
              window.scrollTo(0, 0);
            }}
            className="link-underline-white-bb"
          >
            {messages["privacy"]}
          </a>
          <span className="brand-text-style-bb"> &amp; </span>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate("/accessibility");
              window.scrollTo(0, 0);
            }}
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
