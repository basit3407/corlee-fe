import { useNavigate } from "react-router-dom";
import TrendyDisplay from "../TrendyDisplay";
import "./style.css";

function StylishDisplay(props) {
  const navigate = useNavigate(props);
  return (
    <div
      className="product-card-container3"
      onClick={() => {
        navigate("/product");
      }}
      style={{
        backgroundImage: `url(${props.photo_url})`,
        cursor: "pointer",
      }}
    >
      <TrendyDisplay {...props} />

      <div className="product-gallery-row">
        <div
          className="circles"
          onClick={(e) => {
            e.stopPropagation();
            console.log(props.available_colors);
          }}
        >
          {props.available_colors.slice(0, 3).map((e, i) => (
            <div
              className="circle1"
              key={i}
              style={{ backgroundColor: e }}
            ></div>
          ))}
        </div>
        <div className="adddiv">+</div>
      </div>
    </div>
  );
}

export default StylishDisplay;
