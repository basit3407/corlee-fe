import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function ProductDisplayWidget({
  htmlContent1,
  imgContent,
  imgContent1,
  productCode,
}) {
  return (
    <div className="product-card-container-fav product-display-container-fav">
      <div className="product-info-container1-fav">
        <p className="product-code-label-fav">{productCode}</p>
        <div className="product-code-container-fav">
          <SvgIcon1
            className="svg-container5-fav"
            htmlContent1={htmlContent1}
          />
        </div>
      </div>
      <div className="product-details-container-fav">
        <img alt="" className="text-image-container-fav" src={imgContent} />
        <img
          alt=""
          className="image-container-with-margin-fav"
          src={imgContent1}
        />
      </div>
    </div>
  );
}

export default ProductDisplayWidget;
