import "./style.css";
import messages from "./messages.json";
import { toast } from "sonner";

function MessageActions(props) {
  return (
    <>
      <div className="contact-info-container">
        <div className="contact-info-container2 static">
          <p className="contact-info-text">{props.user.phone}</p>
          <p
            className="highlighted-text"
            onClick={() => {
              navigator.clipboard.writeText(props.user.phone);
              toast.success("Copied to clipboard");
            }}
            style={{ cursor: "pointer" }}
          >
            {messages["copy_1"]}
          </p>
        </div>
      </div>{" "}
      <div className="contact-buttons-container">
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className="email-button-style">{messages["send_email"]}</button>
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className="call-button-style">{messages["make_call"]}</button>
      </div>
    </>
  );
}

export default MessageActions;
