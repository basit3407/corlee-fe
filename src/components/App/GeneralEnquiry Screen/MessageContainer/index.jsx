import MessageActions from "../MessageActions";
import "./style.css";
import messages from "./messages.json";

function MessageContainer(props) {
  return (
    <div className="contact-info-container3">
      <div className="contact-info-container2 static">
        <p className="contact-info-text">{props.user.email}</p>
        <p className="highlighted-text">{messages["copy"]}</p>
      </div>
      <MessageActions {...props} />
    </div>
  );
}

export default MessageContainer;
