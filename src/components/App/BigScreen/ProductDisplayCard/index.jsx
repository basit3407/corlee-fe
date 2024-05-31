import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import "./style.css";

function ProductDisplayCard({ htmlContent4, htmlContent7, metricValueIdentifier1, productIdentifier1, productFunctionalityDescription1 }) {
  return (
    <div className="product-card-view">
      <div className="product-info-container">
        <p className="product-identifier-style">{productIdentifier1}</p>
        <div className="product-metric-container">
          <SvgIcon1 className="svg-container4" htmlContent4={htmlContent4} />
          <p className="metric-value-display-style">{metricValueIdentifier1}</p>
          <SvgIcon2 className="svg-container5" htmlContent7={htmlContent7} />
        </div>
      </div>
      <p className="product-description-text-style">{productFunctionalityDescription1}</p>
    </div>
  );
}

export default ProductDisplayCard;
