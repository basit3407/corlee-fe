import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function EmailNotFoundErrorView(props) {
  return (
    <div className="email-not-found-message-container">
      <div className="email-not-found-container2">
        <SvgIcon1 className="svg-container" />
      </div>
      <p className="error-message-title">Email does not exist.</p>
      <p className="email-not-found-message1">
        <span>
          {messages["we_unable_find_email_you_entered_seems_like_there_"]}
        </span>
        <span className="email-not-found-message">{props.email}</span>
      </p>
    </div>
  );
}

export default EmailNotFoundErrorView;
