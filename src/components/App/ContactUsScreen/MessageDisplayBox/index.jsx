import "./style.css";
import messages from "./messages.json";

function MessageDisplayBox() {
  return (
    <div className="container-with-label">
      <p className="bold-black-text">{messages["description"]}</p>
      <p className="message-box-style">{messages["write_message_here"]}</p>
    </div>
  );
}

export default MessageDisplayBox;
