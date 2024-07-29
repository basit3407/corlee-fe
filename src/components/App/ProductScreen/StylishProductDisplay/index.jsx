import { useNavigate } from "react-router-dom";
import "./style.css";

function StylishProductDisplay(props) {
  const navigate = useNavigate();
  const arrow = "->";
  console.log(props);
  return (
    <div
      className={
        props.product
          ? "product-related-container productrelatddiv"
          : "product-related-container"
      }
    >
      <div className="relatedproducts">
        <p>Related Products</p>
      </div>
      <div className="products">
        {props.products?.map((prod, index) => (
          <div
            className="product"
            onClick={() => navigate(`/product/${prod.id}`)}
            style={{ cursor: "pointer" }}
            key={index}
          >
            <div
              className="imagediv"
              style={{
                backgroundImage: `url(${prod.photo_url})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="textdiv">
              <h2>{prod.item_code}</h2>
              <p>
                {prod.product_category} {arrow} {prod.finish}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StylishProductDisplay;
