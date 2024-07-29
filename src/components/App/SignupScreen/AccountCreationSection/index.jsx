import UserSignupSection from "../UserSignupSection";
import "./style.css";
import messages from "./messages.json";

function AccountCreationSection() {
  return (
    <div className="account-creation-form-container">
      <p className="hero-title inSignup">{messages["create_account"]}</p>
      <UserSignupSection />
    </div>
  );
}

export default AccountCreationSection;
