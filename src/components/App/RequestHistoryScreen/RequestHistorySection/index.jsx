import "./style.css";
import messages from "./messages.json";

function RequestHistorySection() {
  return (
    <div className="request-history-container1">
      <div className="request-history-container">
        <p className="request-history-title">{messages["request_history"]}</p>
        <p className="request-history-text">{messages["here_you_find_all_request_you_made_past"]}</p>
      </div>
    </div>
  );
}

export default RequestHistorySection;
