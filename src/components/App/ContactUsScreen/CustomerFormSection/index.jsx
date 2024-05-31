import CustomerContactForm from "../CustomerContactForm";
import "./style.css";
import messages from "./messages.json";

function CustomerFormSection() {
  return (
    <div className="contact-form-container">
      <CustomerContactForm />
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="submit-button-style">{messages["submit"]}</button>
    </div>
  );
}

export default CustomerFormSection;
