import ContactInfoSection1 from "../ContactInfoSection1";
import ImageContainer from "../ImageContainer";
import "./style.css";
import messages from "./messages.json";

function ContactInfoDisplay() {
  return (
    <div className="contact-info-section1">
      <div>
        <ContactInfoSection1 />
        <div className="contact-info-divider" />
        <div className="contact-info-section">
          <p className="header-title">{messages["email_us"]}</p>
          <p className="golden-text-heading">{localStorage.getItem("email")}</p>
        </div>
        <div className="contact-info-divider" />
        <div className="contact-info-section">
          <p className="header-title">{messages["visit_us"]}</p>
          <p className="location-details-text-style">
            {localStorage.getItem("address")}
          </p>
        </div>
        <ImageContainer />
      </div>
    </div>
  );
}

export default ContactInfoDisplay;
