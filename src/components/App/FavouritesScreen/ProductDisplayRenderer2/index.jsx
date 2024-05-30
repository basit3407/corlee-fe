import ProductDisplayWidget from "../ProductDisplayWidget";
import "./style.css";

function ProductDisplayRenderer2({ productDisplayWidgetArgs }) {
  return (
    <div className="product-card-container1">
      {productDisplayWidgetArgs.map((data, index) => {
        return <ProductDisplayWidget {...data} key={index} />;
      })}
    </div>
  );
}

export default ProductDisplayRenderer2;
