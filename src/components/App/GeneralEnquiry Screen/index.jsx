import TicketInfoSection from "./TicketInfoSection";
import "./style.css";
import Container from "../../UI/Container";

function GeneralEnquiryComponent() {
  return (
    <Container>
      <div className="main-content-container">
        <div className="content-section">
          <TicketInfoSection />
        </div>
      </div>
    </Container>
  );
}

export default GeneralEnquiryComponent;
