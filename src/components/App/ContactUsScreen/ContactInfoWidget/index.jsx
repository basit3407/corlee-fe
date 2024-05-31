import "./style.css";
import messages from "./messages.json";

function ContactInfoWidget() {
  return (
    <div className="contact-section3">
      <img
        src="/assets/img_1091_6037_8025cd.svg"
        alt=""
        className="contact-info-container1"
      />
      <p className="hero-title">{messages["call_us"]}</p>
      <p className="contact-info-heading1">{messages["33_123456_789"]}</p>
    </div>
  );
}

export default ContactInfoWidget;
