import StyledItemDisplay from "../StyledItemDisplay";
import NameInputWidget from "../NameInputWidget";
import SubjectInfoWidget from "../SubjectInfoWidget";
import CompanyInput from "../CompanyInput";
import MessageDisplayBox from "../MessageDisplayBox";
import "./style.css";
import messages from "./messages.json";

function CustomerInformationForm() {
  return (
    <div className="fullwidth-container1">
      <StyledItemDisplay />
      <NameInputWidget />
      <SubjectInfoWidget />
      <div className="contact-info-section3">
        <div className="email-field-container">
          {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <div className="form-field-container">
            <label htmlFor="email" className="name-label-style">
              {messages["email"]}
            </label>
            <input id="email" placeholder="i.e johmdoe@email.com" type="text" className="input-with-label input-style-f62::placeholder" />
          </div>
        </div>
        <div className="contact-info-label">
          {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <div className="form-field-container">
            <label htmlFor="phone number" className="name-label-style">
              {messages["phone_number"]}
            </label>
            <input id="phone number" placeholder="i.e +33 123456 789" type="text" className="input-with-label input-style-f62::placeholder" />
          </div>
        </div>
      </div>
      <CompanyInput />
      <MessageDisplayBox />
      <div className="sample-request-button1">
        <div className="sample-request-button" />
        <p className="sample-request-text-style">{messages["request_sample"]}</p>
      </div>
    </div>
  );
}

export default CustomerInformationForm;
