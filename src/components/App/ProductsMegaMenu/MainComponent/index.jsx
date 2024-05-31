import ProductCardSelector from "../ProductCardSelector";
import OutdoorGearSection from "../OutdoorGearSection";
import "./style.css";

function ProductsMegaMenuMainComp({ productCardViewArguments }) {
  return (
    <div className="product-highlight-section3">
      <div className="product-highlights-section">
        <ProductCardSelector
          productCardViewArguments={productCardViewArguments}
        />
        <div className="vertical-divider-styles" />
        <OutdoorGearSection />
      </div>
    </div>
  );
}

export default ProductsMegaMenuMainComp;
