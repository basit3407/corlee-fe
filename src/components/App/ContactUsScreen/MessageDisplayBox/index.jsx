import "./style.css";
import messages from "./messages.json";

function MessageDisplayBox() {
  return (
    <div className="subject-container">
      <p className="bold-black-label">{messages["description"]}</p>
      <input
        id="company name"
        placeholder="Write your message here"
        type="text"
        class="input-with-label-style input-style-f62::placeholder"
      />
    </div>
  );
}

export default MessageDisplayBox;
