import CustomerFormSection from "../CustomerFormSection";
import "./style.css";
import messages from "./messages.json";

function FormSectionWithMessage(props) {
  return (
    <div className="form-container">
      <p className="header-title-text-style">
        {messages["fill_out_form_below"]}
      </p>
      <CustomerFormSection {...props} />
    </div>
  );
}

export default FormSectionWithMessage;
