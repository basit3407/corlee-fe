import ProductDetailsRenderer from "../ProductDetailsRenderer";
import "./style.css";

function RenderProductDetailsList({ productDetailsRendererArgsList }) {
  return (
    <div className="product-details-container5">
      {productDetailsRendererArgsList.map((data, index) => {
        return <ProductDetailsRenderer {...data} key={index} />;
      })}
    </div>
  );
}

export default RenderProductDetailsList;
