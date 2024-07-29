import PasswordResetMessage from "../PasswordResetMessage";
import SecurePasswordForm from "../SecurePasswordForm";
import "./style.css";

function SecurityCheckWidget(props) {
  return (
    <div className="nested-svg-container">
      <PasswordResetMessage />
      <SecurePasswordForm {...props} />
    </div>
  );
}

export default SecurityCheckWidget;
