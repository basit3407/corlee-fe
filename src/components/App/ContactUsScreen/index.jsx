import CustomerInteractionSection from "./CustomerInteractionSection";
import ContactInfoSection from "./ContactInfoSection";
import "./style.css";
import Container from "../../UI/Container";

function ContactUsComponent() {
  return (
    <Container>
      <div className="vertical-centered-layout-c">
        <div className="main-content-section-c">
          <CustomerInteractionSection />
          <ContactInfoSection />
        </div>
      </div>
    </Container>
  );
}

export default ContactUsComponent;
