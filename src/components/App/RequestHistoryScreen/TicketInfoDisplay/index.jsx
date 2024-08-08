import "./style.css";
import messages from "./messages.json";

function TicketInfoDisplay() {
  return (
    <div className="ticket-details-container">
      <div className="ticket-info-container">
        <p className="ticket-info-paragraph">
          {messages["ticket_number__ab9825_3"]}
        </p>
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className="product-inquiry-button">
          {messages["product_inquiry"]}
        </button>
      </div>
      <div className="product-details-container">
        <div className="card-container">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2726_56df37.webp"
            className="image-container-with-text"
          />
          <div className="info-card">
            <p className="unique-text-block">{messages["a12rf_3"]}</p>
            <div className="circular-text-container">
              <p className="italic-black-text">100m</p>
            </div>
          </div>
        </div>
        <div className="narrative-box">
          <p className="headline-text-style">
            {messages["placeat_voluptas_eius_non_iusto_vitae_2"]}
          </p>
          <p className="narrative-text-block">
            {messages["labore_ut_molestias_asperiores_nihil_reiciendis_de_2"]}
          </p>
        </div>
      </div>
      <p className="ticket-info-text-style">{messages["sat_nov_23_2023_4"]}</p>
    </div>
  );
}

export default TicketInfoDisplay;
