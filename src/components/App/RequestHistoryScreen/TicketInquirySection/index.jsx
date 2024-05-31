import RequestHistorySection from "../RequestHistorySection";
import TicketInquiryDashboard from "../TicketInquiryDashboard";
import "./style.css";

function TicketInquirySection({ ticketInquiriesData }) {
  return (
    <div className="request-history-container2">
      <RequestHistorySection />
      <TicketInquiryDashboard ticketInquiriesData={ticketInquiriesData} />
    </div>
  );
}

export default TicketInquirySection;
