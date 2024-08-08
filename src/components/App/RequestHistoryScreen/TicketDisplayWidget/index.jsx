import "./style.css";
import messages from "./messages.json";

function TicketDisplayWidget() {
  return (
    <div className="ticket-details-container">
      <div className="ticket-info-container">
        <p className="ticket-info-paragraph">
          {messages["ticket_number__ab9825_1"]}
        </p>
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className="product-inquiry-button">
          {messages["products_request"]}
        </button>
      </div>
      <div className="product-grid-container">
        <div className="card-container">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2681_7d2b81.webp"
            className="image-container-with-text"
          />
          <div className="info-card">
            <p className="unique-text-block">{messages["a12rf_1"]}</p>
            <div className="circular-text-container">
              <p className="italic-black-text">100m</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2693_7a6075.webp"
            className="image-container-with-text"
          />
          <div className="info-card">
            <p className="unique-text-block">{messages["bn2rf"]}</p>
            <div className="circular-text-container">
              <p className="italic-black-text">100m</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2726_56df37.webp"
            className="image-container-with-text"
          />
          <div className="info-card">
            <p className="unique-text-block">{messages["pl12o"]}</p>
            <div className="circular-text-container">
              <p className="italic-black-text">100m</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2675_9587d5.webp"
            className="image-container-with-text"
          />
          <div className="info-card">
            <p className="unique-text-block">{messages["r45ty"]}</p>
            <div className="circular-text-container">
              <p className="italic-black-text">100m</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2687_d744cc.webp"
            className="image-container-with-text"
          />
          <div className="info-card">
            <p className="unique-text-block">{messages["puq2t"]}</p>
            <div className="circular-text-container">
              <p className="italic-black-text">100m</p>
            </div>
          </div>
        </div>
        <div className="center-content-box">
          <p className="large-text-with-background">+2</p>
        </div>
      </div>
      <p className="ticket-info-text-style">{messages["sat_nov_23_2023_1"]}</p>
    </div>
  );
}

export default TicketDisplayWidget;
