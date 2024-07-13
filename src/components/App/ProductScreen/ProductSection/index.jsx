import DynamicContentSection from "../DynamicContentSection";
import StylishProductDisplay from "../StylishProductDisplay";
import "./style.css";

function ProductSection(props) {
  return (
    <div className="product-list-container">
      <DynamicContentSection {...props} />
      <StylishProductDisplay />
    </div>
  );
}

export default ProductSection;
