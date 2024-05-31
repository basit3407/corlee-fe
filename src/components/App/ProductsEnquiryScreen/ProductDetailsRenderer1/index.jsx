import ProductDisplayComponent from "../ProductDisplayComponent";
import PersonalInfoDisplay from "../PersonalInfoDisplay";
import "./style.css";
import messages from "./messages.json";

function ProductDetailsRenderer1({ productDetailsRendererArgsList }) {
  return (
    <div className="ticket-details-container">
      <div className="ticket-details-section">
        <p className="ticket-number-title">{messages["ticket_number"]}</p>
        <p className="ticket-number-style">{messages["ab9825"]}</p>
        <div className="ticket-info-section">
          <div className="product-inquiry-section">
            {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
            <button className="product-inquiry-button">{messages["products_inquiry"]}</button>
            {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
            <button className="product-inquiry-button1">{messages["100_meter_request"]}</button>
          </div>
          <p className="product-inquiry-date-text-style">{messages["sat_nov_23_2023"]}</p>
        </div>
      </div>
      <div className="customer-details-section">
        <div className="content-wrapper">
          <p className="main-heading-text-style">{messages["placeat_voluptas_eius_non_iusto_vitae"]}</p>
          <p className="product-details-section-styles">
            <span>{messages["labore_ut_molestias_asperiores_nihil_reiciendis_de"]}</span>
            <span className="text-block">{messages["ltbr_gt"]}</span>
            <span>{messages["labore_ut_molestias_asperiores_nihil_reiciendis_de"]}</span>
            <span className="text-block">{messages["ltbr_gt_1"]}</span>
            <span>{messages["labore_ut_molestias_asperiores_nihil_reiciendis_de_1"]}</span>
          </p>
          <ProductDisplayComponent productDetailsRendererArgsList={productDetailsRendererArgsList} />
        </div>
        <PersonalInfoDisplay />
      </div>
    </div>
  );
}

export default ProductDetailsRenderer1;
