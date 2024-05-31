import InquiryCard from "../InquiryCard";
import "./style.css";
import messages from "./messages.json";

function TicketInquiryComponent1({ date1, ticketType1, inquiryTitle2, requestDescription2 }) {
  return (
    <div className="ticket-inquiry-section">
      <div className="ticket-info-container">
        <p className="ticket-info-paragraph">{ticketType1}</p>
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className="product-inquiry-button">{messages["general_inquiry_1"]}</button>
      </div>
      <InquiryCard inquiryTitle2={inquiryTitle2} requestDescription2={requestDescription2} />
      <p className="ticket-date-info">{date1}</p>
    </div>
  );
}

export default TicketInquiryComponent1;
