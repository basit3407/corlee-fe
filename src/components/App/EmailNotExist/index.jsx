import EmailNotFoundErrorView from "./EmailNotFoundErrorView";
import "./style.css";
import messages from "./messages.json";
import Container from "../../UI/Container";
import { useNavigate } from "react-router-dom";

function ComponentYouSelected(params) {
  const navigate = useNavigate();
  return (
    <Container style={{ background: "whitesmoke" }}>
      <div className="email-not-found-container1">
        <div className="login-error-message-container">
          <div className="email-not-found-container">
            <div className="login-error-message-container1">
              <EmailNotFoundErrorView {...params} />
              {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
              <button
                className="primary-button-style"
                onClick={() => {
                  navigate("/login");
                }}
              >
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
