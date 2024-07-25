import { useNavigate } from "react-router-dom";
import TrendyDisplay from "../TrendyDisplay";
import "./style.css";
import { api } from "../../../../config/api";
import { toast } from "sonner";

function StylishDisplay(props) {
  const navigate = useNavigate(props);
  const addToCart = async (e) => {
    try {
      e.stopPropagation();

      const response = await api.post("/cart-items/", {
        fabric_id: props.id,
        color: props.available_colors[0],
        quantity: "100",
      });
      console.log(response);
      if (response.status === 200) {
        toast.success("Item added to bag");
      } else if (response.status === 201) {
        toast.success("Item added to bag");
        props.setRefresh(Date.now());
      }
    } catch (err) {
      console.log("error:", err);
    }
  };

  return (
    <div
      className="product-card-container3"
      onClick={() => {
        navigate(`/product/${props.id}`);
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
          }}
        >
          {props.available_colors.map((e, i) => (
            <div
              className="circle1"
              key={i}
              style={{ backgroundColor: e }}
            ></div>
          ))}
        </div>
        <div
          className="adddiv"
          onClick={(e) => {
            addToCart(e);
          }}
        >
          +
        </div>
      </div>
    </div>
  );
}

export default StylishDisplay;
