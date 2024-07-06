import TrendyDisplay from "../TrendyDisplay";
import "./style.css";

function StylishDisplay() {
  return (
    <div className="product-card-container3">
      <TrendyDisplay />
      <div className="product-gallery-row">
        <div className="circles">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
        </div>
        <div className="adddiv">+</div>
      </div>
    </div>
  );
}

export default StylishDisplay;
