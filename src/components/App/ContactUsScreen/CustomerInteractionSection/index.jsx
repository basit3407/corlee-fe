import MessageDisplay from "../MessageDisplay";
import FormSectionWithCustomer from "../FormSectionWithCustomer";
import "./style.css";

function CustomerInteractionSection() {
  return (
    <div className="contact-form-container2">
      <div className="contact-form-container1">
        <MessageDisplay />
        <FormSectionWithCustomer />
      </div>
    </div>
  );
}

export default CustomerInteractionSection;
