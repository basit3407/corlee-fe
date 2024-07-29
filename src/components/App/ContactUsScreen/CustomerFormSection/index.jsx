import CustomerInformationForm from "../CustomerInformationForm";
import "./style.css";
import messages from "./messages.json";

function CustomerFormSection(props) {
  return (
    <div className="contact-form-container">
      <CustomerInformationForm {...props} />
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
    </div>
  );
}

export default CustomerFormSection;
