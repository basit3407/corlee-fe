import TicketInquiryComponent from "../TicketInquiryComponent";
import "./style.css";

function TicketInquiryListRenderer({ ticketInquiriesData }) {
  return (
    <div className="ticket-inquiry-list">
      {ticketInquiriesData.map((data, index) => {
        return <TicketInquiryComponent {...data} key={index} />;
      })}
    </div>
  );
}

export default TicketInquiryListRenderer;
