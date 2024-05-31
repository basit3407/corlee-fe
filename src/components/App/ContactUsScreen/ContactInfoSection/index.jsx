import "./style.css";
import messages from "./messages.json";

function ContactInfoSection() {
  return (
    <div className="contact-info-section2">
      <img
        src="/assets/img_1135_7986_c40456.svg"
        alt=""
        className="contact-info-section1"
      />
      <p className="contact-info-heading">{messages["call_us"]}</p>
      <p className="contact-info-heading1">{messages["33_123456_789"]}</p>
    </div>
  );
}

export default ContactInfoSection;
