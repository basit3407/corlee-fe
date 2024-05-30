import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function ProductDisplayWidget({ htmlContent1, imgContent, imgContent1, productCode }) {
  return (
    <div className="product-card-container product-display-container">
      <div className="product-info-container1">
        <p className="product-code-label">{productCode}</p>
        <div className="product-code-container">
          <SvgIcon1 className="svg-container5" htmlContent1={htmlContent1} />
        </div>
      </div>
      <div className="product-details-container">
        <img alt="" className="text-image-container" src={imgContent} />
        <img alt="" className="image-container-with-margin" src={imgContent1} />
      </div>
    </div>
  );
}

export default ProductDisplayWidget;
