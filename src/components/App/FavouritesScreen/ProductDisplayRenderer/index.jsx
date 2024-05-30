import ProductDisplayWidget from "../ProductDisplayWidget";
import "./style.css";

function ProductDisplayRenderer({ productDisplayWidgetOptions }) {
  return (
    <div className="product-card-container1">
      {productDisplayWidgetOptions.map((data, index) => {
        return <ProductDisplayWidget {...data} key={index} />;
      })}
    </div>
  );
}

export default ProductDisplayRenderer;
