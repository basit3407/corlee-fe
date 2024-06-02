import InputForm from "../InputForm";
import MessageForm from "../MessageForm";
import CompanyInputWidget from "../CompanyInputWidget";
import MessageDisplayBox from "../MessageDisplayBox";
import "./style.css";
import messages from "./messages.json";

function CustomerInformationForm() {
  return (
    <div className="fullwidth-container">
      <InputForm />
      <MessageForm />
      <div className="flex-row-container">
        <div className="email-field-container">
          {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <div className="horizontal-centered-label-container">
            <label htmlFor="email" className="bold-black-label">
              {messages["email"]}
            </label>
            <input id="email" placeholder="i.e johmdoe@email.com" type="text" className="input-with-label-style input-style-f62::placeholder" />
          </div>
        </div>
        <div className="contact-info-label-container">
          {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <div className="horizontal-centered-label-container">
            <label htmlFor="phone number" className="bold-black-label">
              {messages["phone_number"]}
            </label>
            <input id="phone number" placeholder="i.e +33 123456 789" type="text" className="input-with-label-style input-style-f62::placeholder" />
          </div>
        </div>
      </div>
      <CompanyInputWidget />
      <MessageDisplayBox />
      <div className="sample-request-button1">
        <div className="sample-request-button" />
        <p className="sample-request-button-style">{messages["request_sample"]}</p>
      </div>
    </div>
  );
}

export default CustomerInformationForm;
