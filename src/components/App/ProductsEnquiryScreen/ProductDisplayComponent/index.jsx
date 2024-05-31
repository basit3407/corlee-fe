import ProductRequestForm from "../ProductRequestForm";
import RenderProductDetailsList from "../RenderProductDetailsList";
import "./style.css";

function ProductDisplayComponent({ productDetailsRendererArgsList }) {
  return (
    <div className="product-details-container6">
      <ProductRequestForm />
      <RenderProductDetailsList productDetailsRendererArgsList={productDetailsRendererArgsList} />
    </div>
  );
}

export default ProductDisplayComponent;
