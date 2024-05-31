import MessageDisplay from "../MessageDisplay";
import FormSectionWithMessage from "../FormSectionWithMessage";
import ContactInfoDisplay from "../ContactInfoDisplay";
import "./style.css";

function MessageFormSection() {
  return (
    <div className="contact-section1">
      <div className="contact-section-style">
        <MessageDisplay />
        <FormSectionWithMessage />
        <ContactInfoDisplay />
      </div>
    </div>
  );
}

export default MessageFormSection;
