import RenderContactOptions from "../RenderContactOptions";
import "./style.css";
import messages from "./messages.json";

function ContactInformationSection({ contactOptionsArray }) {
  return (
    <div className="contact-section">
      <div className="message-container">
        <div className="message-box">
          <p className="call-to-action-text-style">{messages["call_us"]}</p>
          <p className="contact-message-text-style">
            {messages["we_just_one_message_away"]}
          </p>
        </div>
      </div>
      <RenderContactOptions contactOptionsArray={contactOptionsArray} />
      <p className="call-to-action-heading">{messages["need_help"]}</p>
      <p className="contact-link-text-style">{messages["contact_us"]}</p>
    </div>
  );
}

export default ContactInformationSection;
