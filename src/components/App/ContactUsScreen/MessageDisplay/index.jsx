import "./style.css";
import messages from "./messages.json";

function MessageDisplay() {
  return (
    <div className="contact-section1">
      <div className="contact-section">
        <div className="contact-section2">
          <p className="contact-heading">{messages["get_touch"]}</p>
          <p className="contact-heading-text-style">{messages["want_discuss_something"]}</p>
        </div>
      </div>
      <p className="contact-info-text">{messages["lrem_ipsum_tis_kvasiposade_poment_vtirade_ding_eft"]}</p>
    </div>
  );
}

export default MessageDisplay;
