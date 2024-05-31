import Container from "../../UI/Container";
import TicketInquirySection from "./TicketInquirySection";
import "./style.css";

function RequestHistoryComponent({ ticketInquiriesData }) {
  return (
    <Container>
      <div className="main-container1-his">
        <div className="main-container-his">
          <TicketInquirySection ticketInquiriesData={ticketInquiriesData} />
        </div>
      </div>
    </Container>
  );
}

export default RequestHistoryComponent;
