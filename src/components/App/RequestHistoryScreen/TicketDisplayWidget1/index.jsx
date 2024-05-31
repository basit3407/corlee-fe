import ContentDisplayWidget from "../ContentDisplayWidget";
import "./style.css";
import messages from "./messages.json";

function TicketDisplayWidget1() {
  return (
    <div className="ticket-inquiry-section">
      <div className="ticket-info-container">
        <p className="ticket-info-paragraph">{messages["ticket_number__ab9825_2"]}</p>
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className="product-inquiry-button">{messages["general_inquiry_2"]}</button>
      </div>
      <ContentDisplayWidget />
      <p className="ticket-date-info">{messages["sat_nov_23_2023_3"]}</p>
    </div>
  );
}

export default TicketDisplayWidget1;
