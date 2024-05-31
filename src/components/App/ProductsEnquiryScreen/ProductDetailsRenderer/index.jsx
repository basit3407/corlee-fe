import "./style.css";

function ProductDetailsRenderer({
  imgContent1,
  imgContent,
  renderProductDetailsSection,
  renderProductDetailsWidget,
  renderType,
  productQuantityWidget,
  renderProductDetailsWidget1,
  lengthUnitDescription,
}) {
  return (
    <div className="product-details-container4 product-details-layout">
      <div className="product-details-container2">
        <img className="product-image-container1" src={imgContent1} />
        <div className="product-details-container1">
          <p className="product-details-title-style">{renderProductDetailsWidget}</p>
          <p className="product-type-description-text-style">{renderType}</p>
        </div>
      </div>
      <div className="product-details-container3">
        <div className="product-details-section-widget-container">
          <p className="product-details-section-text-style">{renderProductDetailsSection}</p>
          <img alt="" className="product-image-container" src={imgContent} />
        </div>
        <div className="product-details-container">
          <div className="product-details-section-widget-container">
            <p className="product-details-section-text-style">{renderProductDetailsWidget1}</p>
            <p className="product-length-description-text-style">{lengthUnitDescription}</p>
          </div>
          <p className="product-quantity-heading-text-style">{productQuantityWidget}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsRenderer;
