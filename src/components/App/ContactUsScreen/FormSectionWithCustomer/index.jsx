import CustomerFormSection from "../CustomerFormSection";
import "./style.css";
import messages from "./messages.json";

function FormSectionWithCustomer() {
  return (
    <div className="form-container">
      <p className="form-title-text-style">{messages["fill_out_form_below"]}</p>
      <CustomerFormSection />
    </div>
  );
}

export default FormSectionWithCustomer;
