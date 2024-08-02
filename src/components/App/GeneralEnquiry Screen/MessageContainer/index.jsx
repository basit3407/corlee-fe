import MessageActions from "../MessageActions";
import "./style.css";
import messages from "./messages.json";
import { toast } from "sonner";

function MessageContainer(props) {
  return (
    <div className="contact-info-container3">
      <div className="contact-info-container2 static">
        <p className="contact-info-text">{props.user.email}</p>
        <p
          className="highlighted-text"
          onClick={() => {
            navigator.clipboard.writeText(props.user.email);
            toast.success("Copied to clipboard");
          }}
          style={{ cursor: "pointer" }}
        >
          {messages["copy"]}
        </p>
      </div>
      <MessageActions {...props} />
    </div>
  );
}

export default MessageContainer;
