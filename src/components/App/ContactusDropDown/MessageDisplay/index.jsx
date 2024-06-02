import "./style.css";
import messages from "./messages.json";

function MessageDisplay() {
  return (
    <div className="centered-text-box">
      <p className="inquiry-type-style">{messages["other"]}</p>
    </div>
  );
}

export default MessageDisplay;
