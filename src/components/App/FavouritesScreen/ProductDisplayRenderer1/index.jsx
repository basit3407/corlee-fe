import ProductDisplayWidget from "../ProductDisplayWidget";
import "./style.css";

function ProductDisplayRenderer1({ productDisplayWidgetOptions1 }) {
  return (
    <div className="product-card-container1">
      {productDisplayWidgetOptions1.map((data, index) => {
        return <ProductDisplayWidget {...data} key={index} />;
      })}
    </div>
  );
}

export default ProductDisplayRenderer1;
