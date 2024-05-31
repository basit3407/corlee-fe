import ProductTableHeaderView from "../ProductTableHeaderView";
import RenderProductTableRows from "../RenderProductTableRows";
import "./style.css";

function ProductTableRenderer({ productTableRowsData }) {
  return (
    <table className="product-details-table">
      <ProductTableHeaderView />
      <RenderProductTableRows productTableRowsData={productTableRowsData} />
    </table>
  );
}

export default ProductTableRenderer;
