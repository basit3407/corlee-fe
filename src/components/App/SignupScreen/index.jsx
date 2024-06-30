import AccountCreationSection from "./AccountCreationSection";
import "./style.css";

function SignupComponent() {
  return (
    <div
      style={{
        display: "inline-block",
        width: "100%",
        background: "whitesmoke",
      }}
      className="sighupcontainer"
      data-ignore="used only for top most containter width"
    >
      <div className="account-creation-form-container1">
        <div className="account-creation-form-container2">
          <AccountCreationSection />
        </div>
      </div>
    </div>
  );
}

export default SignupComponent;
