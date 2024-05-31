import "./style.css";
import SvgIcon1 from "./icons/SvgIcon1";

function ProductCardView({ renderSvgOrText, productHighlightText, brProductDescriptionComponentTitle, dynamicIconEmoji, selectedClassName_productCardViewArguments, handleClickFunction }) {
  return (
    <div onClick={handleClickFunction} className={`${selectedClassName_productCardViewArguments} product-highlight-section`}>
      <div className="product-highlight-section1">
        <p className="product-highlight-text-style">{productHighlightText}</p>
        <p className="product-description-title-style">{brProductDescriptionComponentTitle}</p>
      </div>
      {renderSvgOrText ? <SvgIcon1 className="svg-container" renderSvgOrText={renderSvgOrText} /> : <p className="art-nova-heading">{dynamicIconEmoji}</p>}
    </div>
  );
}

export default ProductCardView;
