import "./style.css";
import messages from "./messages.json";

function MessageDisplayBox(props) {
  return (
    <div className="subject-container">
      <p className="bold-black-label">{messages["description"]}</p>
      <textarea
        rows={5}
        style={{ resize: "none" }}
        id="company name"
        placeholder="Write your message here"
        type="text"
        name="description"
        onChange={props.onChange}
        value={props.description}
        className="input-with-label-style input-style-f62::placeholder textareainput"
      />
    </div>
  );
}

export default MessageDisplayBox;
