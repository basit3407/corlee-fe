import EmailNotificationView from "./EmailNotificationView";
import "./style.css";
import messages from "./messages.json";
import Container from "../../UI/Container";

function ComponentYouSelected() {
  return (
    <Container style={{ background: "whitesmoke" }}>
      <div className="email-notification-container3">
        <div className="email-notification-container2">
          <div className="email-notification-container1">
            <div className="email-notification-container5">
              <EmailNotificationView />
              {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
              <button className="primary-button-style">
                {messages["return_login"]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ComponentYouSelected;