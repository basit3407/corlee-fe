import { useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";

function StylishProductDisplay(props) {
  const navigate = useNavigate();
  const arrow = "->";

  // Initialize states with default values
  const [noProducts, setNoProducts] = useState(props.noProducts ?? false);
  const [products, setProducts] = useState(props.products ?? []);

  // Function to remove duplicates from the products array
  function removeDuplicates(productsArray) {
    if (productsArray.length === 0) {
      setNoProducts(true);
    } else {
      const uniqueIds = new Set();
      setProducts(
        productsArray.filter((item) => {
          if (!uniqueIds.has(item.id)) {
            uniqueIds.add(item.id);
            return true;
          }
          return false;
        })
      );
      setNoProducts(false);
    }
  }

  // Effect to handle props updates and duplicate removal
  useEffect(() => {
    if (props.products) {
      removeDuplicates(props.products);
    } else {
      setNoProducts(true);
    }
  }, [props.products]);

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
      {props.loading ? (
        <h1
          style={{
            textAlign: "center",
            fontWeight: "500",
            width: "100%",
          }}
        >
          Loading...
        </h1>
      ) : noProducts ? (
        <h1
          style={{
            textAlign: "center",
            fontWeight: "500",
            width: "100%",
          }}
        >
          No Related Products
        </h1>
      ) : (
        <div className="products">
          {products.slice(0, 8).map((prod, index) => (
            <div
              className="product"
              onClick={() => navigate(`/product/${prod.id}`)}
              style={{ cursor: "pointer" }}
              key={prod.id} // Changed from index to prod.id for better key uniqueness
            >
              <div
                className="imagediv"
                style={{
                  backgroundImage: `url(${
                    prod.photo_url || "default-image-url"
                  })`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="textdiv">
                <h2>{prod.item_code}</h2>
                <p>
                  {prod.product_category} {arrow}{" "}
                  {prod.finish ?? "No Finish Info"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StylishProductDisplay;
