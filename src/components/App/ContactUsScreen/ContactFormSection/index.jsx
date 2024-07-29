import ContactInfoSection from "../ContactInfoSection";
import FormSectionWithMessage from "../FormSectionWithMessage";
import ContactInfoDisplay from "../ContactInfoDisplay";
import "./style.css";

function ContactFormSection(props) {
  return (
    <div className="contact-section3">
      <div className="contact-section1">
        <ContactInfoSection />
        <FormSectionWithMessage {...props} />
        <ContactInfoDisplay />
      </div>
    </div>
  );
}

export default ContactFormSection;
