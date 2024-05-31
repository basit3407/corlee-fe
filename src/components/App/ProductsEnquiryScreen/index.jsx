import Container from "../../UI/Container";
import ProductDetailsRenderer1 from "./ProductDetailsRenderer1";
import "./style.css";

function ProductsEnquiryComponent({ productDetailsRendererArgsList }) {
  return (
    <Container>
      <div className="main-content-container">
        <div className="product-details-section">
          <ProductDetailsRenderer1
            productDetailsRendererArgsList={productDetailsRendererArgsList}
          />
        </div>
      </div>
    </Container>
  );
}

export default ProductsEnquiryComponent;
