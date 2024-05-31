import MessageContainer from "../MessageContainer";
import "./style.css";
import messages from "./messages.json";

function ContactInfoSection() {
  return (
    <div className="contact-details-container">
      <p className="contact-details-heading">{messages["contact_details"]}</p>
      <MessageContainer />
    </div>
  );
}

export default ContactInfoSection;
