import ContactInfoSection from "../ContactInfoSection";
import FormSectionWithMessage from "../FormSectionWithMessage";
import ContactInfoDisplay from "../ContactInfoDisplay";
import "./style.css";

function ContactFormSection() {
  return (
    <div className="contact-section3">
      <div className="contact-section1">
        <ContactInfoSection />
        <FormSectionWithMessage />
        <ContactInfoDisplay />
      </div>
    </div>
  );
}

export default ContactFormSection;
