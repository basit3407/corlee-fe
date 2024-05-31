import "./style.css";
import messages from "./messages.json";

function ContactFormWidget() {
  return (
    <div className="center-column-with-labels">
      <div className="form-layout-container">
        <div className="email-field-container">
          {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <div className="form-field-container">
            <label htmlFor="email" className="email-phone-label-style">
              {messages["email"]}
            </label>
            <input id="email" placeholder="Zachariah5@yahoo.com" type="text" className="input-field-with-email-phone-styling input-style-f62::placeholder" />
          </div>
        </div>
        <div className="contact-info-label">
          {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <div className="form-field-container">
            <label htmlFor="phone number" className="email-phone-label-style">
              {messages["phone_number"]}
            </label>
            <input id="phone number" placeholder="539-667-4180" type="text" className="input-field-with-email-phone-styling input-style-f62::placeholder" />
          </div>
        </div>
      </div>
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="primary-button">{messages["updates"]}</button>
    </div>
  );
}

export default ContactFormWidget;
