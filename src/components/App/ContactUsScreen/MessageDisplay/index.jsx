import "./style.css";
import messages from "./messages.json";

function MessageDisplay() {
  return (
    <div className="contact-section2">
      <div className="contact-section3">
        <div className="contact-section">
          <p className="contact-heading">{messages["get_touch"]}</p>
          <p className="contact-heading-text-style">{messages["want_discuss_something"]}</p>
        </div>
      </div>
      <p className="contact-info-section4">{messages["lrem_ipsum_tis_kvasiposade_poment_vtirade_ding_eft"]}</p>
    </div>
  );
}

export default MessageDisplay;
