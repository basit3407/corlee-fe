import ResultDisplayWidget from "../ResultDisplayWidget";
import TicketInfoComponent from "../TicketInfoComponent";
import TicketDisplayWidget from "../TicketDisplayWidget";
import TicketInquiryListRenderer from "../TicketInquiryListRenderer";
import ProductCardWidget from "../ProductCardWidget";
import TicketDisplayWidget1 from "../TicketDisplayWidget1";
import TicketInfoDisplay from "../TicketInfoDisplay";
import "./style.css";

function TicketInquiryDashboard({ ticketInquiriesData }) {
  return (
    <div className="product-inquiry-section">
      <ResultDisplayWidget />
      <TicketInfoComponent />
      <TicketDisplayWidget />
      <TicketInquiryListRenderer ticketInquiriesData={ticketInquiriesData} />
      <ProductCardWidget />
      <TicketDisplayWidget1 />
      <TicketInfoDisplay />
    </div>
  );
}

export default TicketInquiryDashboard;
