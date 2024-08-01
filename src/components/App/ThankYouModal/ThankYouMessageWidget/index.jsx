import MessageButtonWidget from "../MessageButtonWidget";
import "./style.css";
import messages from "./messages.json";

function ThankYouMessageWidget() {
  return (
    <div className="success-message-container1">
      <div className="flex-column-centered">
        <div className="success-message-container2">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_5138_51e166.svg"
            alt=""
            className="image-container"
          />
          <div className="success-message-container">
            <div className="vertical-centered-text-container">
              <p className="gratitude-message1">{messages["thank_you"]}</p>
              <p className="gratitude-message">{messages["thank_you_1"]}</p>
            </div>
          </div>
          <p className="success-message">
            {messages["requet_submitted_successfully"]}
          </p>
        </div>
      </div>
      <div className="flex-column-centered">
        <div className="request-info-container">
          <p className="request-number-heading">{messages["request_number"]}</p>
          <MessageButtonWidget />
        </div>
      </div>
      <p className="message-text">
        {messages["we_received_email_we_looking_into_request__get_bac"]}
      </p>
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="success-button">{messages["great"]}</button>
    </div>
  );
}

export default ThankYouMessageWidget;
