import "./style.css";
import messages from "./messages.json";

function MessageDisplayBox() {
  return (
    <div className="subject-container">
      <p className="bold-title">{messages["description"]}</p>
      <p className="message-box-style">{messages["write_message_here"]}</p>
    </div>
  );
}

export default MessageDisplayBox;
