import "./style.css";
import Container from "../../UI/Container";
import MessageFormSection from "./MessageFormSection";

function ContactUsComponent() {
  return (
    <Container>
      <div className="vertical-centered-layout-c">
        <div className="vertical-layout-container">
          <MessageFormSection />
        </div>
      </div>
    </Container>
  );
}

export default ContactUsComponent;
