import PasswordResetMessage from "../PasswordResetMessage";
import SecurePasswordForm from "../SecurePasswordForm";
import "./style.css";

function SecurityCheckWidget() {
  return (
    <div className="nested-svg-container">
      <PasswordResetMessage />
      <SecurePasswordForm />
    </div>
  );
}

export default SecurityCheckWidget;
