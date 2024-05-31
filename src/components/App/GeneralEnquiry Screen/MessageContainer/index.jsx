import MessageActions from "../MessageActions";
import "./style.css";
import messages from "./messages.json";

function MessageContainer() {
  return (
    <div className="contact-info-container3">
      <div className="contact-info-container2">
        <p className="contact-info-text">{messages["brayan42hotmailcom"]}</p>
        <p className="highlighted-text">{messages["copy"]}</p>
      </div>
      <MessageActions />
    </div>
  );
}

export default MessageContainer;
