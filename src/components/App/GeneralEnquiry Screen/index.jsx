import TicketInfoSection from "./TicketInfoSection";
import "./style.css";
import Container from "../../UI/Container";

function GeneralEnquiryComponent(props) {
  return (
    <Container>
      <div className="main-content-container">
        <div className="content-section">
          <TicketInfoSection {...props} />
        </div>
      </div>
    </Container>
  );
}

export default GeneralEnquiryComponent;
