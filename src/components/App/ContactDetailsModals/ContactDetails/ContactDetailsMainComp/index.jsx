import ContactFormWidget from "../ContactFormWidget";
import "./style.css";
import messages from "./messages.json";

function ContactDetailsMainComp() {
  return (
    <div className="contact-details-section2">
      <div className="contact-details-section">
        <div className="contact-details-section1">
          <p className="contact-details-title">{messages["contact_details"]}</p>
          <p className="contact-details-update-text-style">
            {messages["update_contact_details"]}
          </p>
        </div>
      </div>
      <ContactFormWidget />
    </div>
  );
}

export default ContactDetailsMainComp;
