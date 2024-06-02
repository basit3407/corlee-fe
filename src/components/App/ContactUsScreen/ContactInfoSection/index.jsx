import "./style.css";
import messages from "./messages.json";

function ContactInfoSection() {
  return (
    <div className="contact-section4">
      <div className="contact-section">
        <div className="contact-info-container1">
          <p className="contact-heading">{messages["get_touch"]}</p>
          <p className="contact-heading-text-style">{messages["want_discuss_something"]}</p>
        </div>
      </div>
      <p className="contact-message">{messages["lrem_ipsum_tis_kvasiposade_poment_vtirade_ding_eft"]}</p>
    </div>
  );
}

export default ContactInfoSection;
