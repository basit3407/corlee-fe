import DynamicContentSection from "../DynamicContentSection";
import StylishProductDisplay from "../StylishProductDisplay";
import "./style.css";

function ProductSection() {
  return (
    <div className="product-list-container">
      <DynamicContentSection />
      <StylishProductDisplay />
    </div>
  );
}

export default ProductSection;
