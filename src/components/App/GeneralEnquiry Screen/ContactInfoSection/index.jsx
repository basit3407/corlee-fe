import MessageContainer from "../MessageContainer";
import "./style.css";
import messages from "./messages.json";

function ContactInfoSection( props) {
  return (
    <div className="contact-details-container">
      <p className="contact-details-heading mb40">{messages["contact_details"]}</p>
      <MessageContainer {...props} />
      
    </div>
  );
}

export default ContactInfoSection;
