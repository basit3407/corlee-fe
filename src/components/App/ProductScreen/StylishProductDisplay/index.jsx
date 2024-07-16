import { useNavigate } from "react-router-dom";
import "./style.css";

function StylishProductDisplay(props) {
  const navigate = useNavigate();
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
        <div
          className="product"
          onClick={() => navigate("/product")}
          style={{ cursor: "pointer" }}
        >
          <div className="imagediv"></div>
          <div className="textdiv">
            <h2>12S396</h2>
            <p>Woven -> Plain</p>
          </div>
        </div>
        <div
          className="product"
          onClick={() => navigate("/product")}
          style={{ cursor: "pointer" }}
        >
          <div className="imagediv"></div>
          <div className="textdiv">
            <h2>12S396</h2>
            <p>Woven -> Plain</p>
          </div>
        </div>
        <div
          className="product"
          onClick={() => navigate("/product")}
          style={{ cursor: "pointer" }}
        >
          <div className="imagediv"></div>
          <div className="textdiv">
            <h2>12S396</h2>
            <p>Woven -> Plain</p>
          </div>
        </div>
        <div
          className="product"
          onClick={() => navigate("/product")}
          style={{ cursor: "pointer" }}
        >
          <div className="imagediv"></div>
          <div className="textdiv">
            <h2>12S396</h2>
            <p>Woven -> Plain</p>
          </div>
        </div>
        <div
          className="product"
          onClick={() => navigate("/product")}
          style={{ cursor: "pointer" }}
        >
          <div className="imagediv"></div>
          <div className="textdiv">
            <h2>12S396</h2>
            <p>Woven -> Plain</p>
          </div>
        </div>
        <div
          className="product"
          onClick={() => navigate("/product")}
          style={{ cursor: "pointer" }}
        >
          <div className="imagediv"></div>
          <div className="textdiv">
            <h2>12S396</h2>
            <p>Woven -> Plain</p>
          </div>
        </div>
        <div className="product">
          <div className="imagediv"></div>
          <div className="textdiv">
            <h2>12S396</h2>
            <p>Woven -> Plain</p>
          </div>
        </div>
        <div
          className="product"
          onClick={() => navigate("/product")}
          style={{ cursor: "pointer" }}
        >
          <div className="imagediv"></div>
          <div className="textdiv">
            <h2>12S396</h2>
            <p>Woven -> Plain</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StylishProductDisplay;
