import ContactInfoWidget from "../ContactInfoWidget";
import ImageContainer from "../ImageContainer";
import "./style.css";
import messages from "./messages.json";

function ContactInfoSection() {
  return (
    <div className="contact-info-section2">
      <div>
        <ContactInfoWidget />
        <div className="contact-info-divider" />
        <div className="contact-info-section">
          <p className="heading-text-bold-black">{messages["email_us"]}</p>
          <p className="golden-sunrise">{messages["infocorleecom"]}</p>
        </div>
        <div className="contact-info-divider" />
        <div className="contact-info-section">
          <p className="heading-text-bold-black">{messages["visit_us"]}</p>
          <p className="address-details">{messages["5f_no_489_section_3_jinma_rd_changhua_city_changhu"]}</p>
        </div>
        <ImageContainer />
      </div>
    </div>
  );
}

export default ContactInfoSection;
