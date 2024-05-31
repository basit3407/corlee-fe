import MessageActions from "../MessageActions";
import "./style.css";
import messages from "./messages.json";

function MessageDisplayWidget() {
  return (
    <div className="contact-info-container2">
      <div className="contact-info-container1">
        <p className="contact-info-text-style">{messages["brayan42hotmailcom"]}</p>
        <p className="highlighted-text">{messages["copy"]}</p>
      </div>
      <MessageActions />
    </div>
  );
}

export default MessageDisplayWidget;
