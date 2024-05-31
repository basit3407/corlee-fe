import "./style.css";
import messages from "./messages.json";

function ResultDisplayWidget() {
  return (
    <div className="results-summary-container">
      <p className="result-count-heading">{messages["21_results_found"]}</p>
    </div>
  );
}

export default ResultDisplayWidget;
