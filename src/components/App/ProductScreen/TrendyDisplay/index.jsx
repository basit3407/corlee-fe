import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function TrendyDisplay() {
  return (
    <div className="product-card">
      <div className="product-card-container1">
        <p className="unique-header-text-style">{messages["1a7708"]}</p>
        <div className="card-with-code-snippet">
          <SvgIcon1 className="svg-container2" />
        </div>
      </div>
      <div className="hot-selling-container">
        <p className="hot-selling-text-emoji">🔥</p>
        <p className="hot-selling-text-style">{messages["hot_selling"]}</p>
      </div>
    </div>
  );
}

export default TrendyDisplay;
