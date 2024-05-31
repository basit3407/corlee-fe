import "./style.css";
import messages from "./messages.json";

function ProductTableHeaderView() {
  return (
    <thead>
      <tr className="product-details-table-row">
        <td className="product-info-card">
          <p className="product-details-title">{messages["product_details"]}</p>
        </td>
        <td className="product-info-card">
          <p className="product-details-title">{messages["quantity"]}</p>
        </td>
        <td className="product-info-card">
          <p className="product-details-title">{messages["color"]}</p>
        </td>
      </tr>
    </thead>
  );
}

export default ProductTableHeaderView;
