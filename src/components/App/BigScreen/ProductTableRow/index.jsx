import ProductDisplayCard from "../ProductDisplayCard";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function ProductTableRow({ htmlContent4, htmlContent7, htmlContent1, imgContent1, imgContent, metricValueIdentifier1, productIdentifier1, productFunctionalityDescription1 }) {
  return (
    <tr className="product-details-table-row">
      <td className="product-info-card1">
        <img className="image-container" src={imgContent1} />
      </td>
      <td className="product-card-details">
        <div className="product-card-view">
          <ProductDisplayCard
            htmlContent4={htmlContent4}
            htmlContent7={htmlContent7}
            metricValueIdentifier1={metricValueIdentifier1}
            productIdentifier1={productIdentifier1}
            productFunctionalityDescription1={productFunctionalityDescription1}
          />
          <div className="product-highlight-card">
            <SvgIcon1 className="svg-container6" htmlContent1={htmlContent1} />
          </div>
        </div>
      </td>
      <td className="product-details-card">
        <img alt="" className="image-container1" src={imgContent} />
      </td>
    </tr>
  );
}

export default ProductTableRow;
