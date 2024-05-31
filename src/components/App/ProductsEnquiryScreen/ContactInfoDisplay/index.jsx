import MessageDisplayWidget from "../MessageDisplayWidget";
import "./style.css";
import messages from "./messages.json";

function ContactInfoDisplay() {
  return (
    <div className="contact-details-section">
      <p className="contact-details-heading">{messages["contact_details"]}</p>
      <MessageDisplayWidget />
    </div>
  );
}

export default ContactInfoDisplay;
