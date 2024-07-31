import DynamicContentSection from "../DynamicContentSection";
import "./style.css";

function ProductSection(props) {
  return (
    <div className="product-list-container">
      <DynamicContentSection {...props} />
    </div>
  );
}

export default ProductSection;
