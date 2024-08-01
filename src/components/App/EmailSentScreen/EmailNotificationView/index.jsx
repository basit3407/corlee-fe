import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function EmailNotificationView(props) {
  return (
    <div className="email-notification-container4">
      <div className="email-notification-container">
        <SvgIcon1 className="svg-container" />
      </div>
      <p className="email-notification-heading">{messages["email_way"]}</p>
      <p className="password-reset-message-text-style">
        <span>
          {messages["we_sent_you_reset_password_instructions_if_doesnt_"]}
        </span>
        <span className="email-notification-text-style">{props.email}</span>
      </p>
    </div>
  );
}

export default EmailNotificationView;
