import NameInputWidget from "../NameInputWidget";
import MessageForm from "../MessageForm";
import CompanyInputWidget from "../CompanyInputWidget";
import MessageDisplayBox from "../MessageDisplayBox";
import "./style.css";
import messages from "./messages.json";

function CustomerContactForm() {
  return (
    <div className="fullwidth-container">
      <NameInputWidget />
      <MessageForm />
      <div className="flex-row-contact-info-container">
        <div className="email-field-container">
          {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <div className="horizontal-centered-label-container">
            <label htmlFor="email" className="name-label-style">
              {messages["email"]}
            </label>
            <input id="email" placeholder="i.e johmdoe@email.com" type="text" className="input-with-label-style input-style-f62::placeholder" />
          </div>
        </div>
        <div className="contact-info-section1">
          {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <div className="horizontal-centered-label-container">
            <label htmlFor="phone number" className="name-label-style">
              {messages["phone_number"]}
            </label>
            <input id="phone number" placeholder="i.e +33 123456 789" type="text" className="input-with-label-style input-style-f62::placeholder" />
          </div>
        </div>
      </div>
      <CompanyInputWidget />
      <MessageDisplayBox />
      <div className="sample-request-button">
        <div className="sample-request-button1" />
        <p className="sample-request-button-style">{messages["request_sample"]}</p>
      </div>
    </div>
  );
}

export default CustomerContactForm;
