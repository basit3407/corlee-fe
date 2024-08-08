import "./style.css";
import messages from "./messages.json";

function ProductCardWidget() {
  return (
    <div className="ticket-details-container">
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="product-inquiry-button-his">
        {messages["products_request_1"]}
      </button>
      <div className="product-grid-container">
        <div className="card-container">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2669_6a18cf.webp"
            className="image-container-with-text"
          />
          <div className="info-card">
            <p className="unique-text-block">{messages["a12rf_2"]}</p>
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
            <p className="unique-text-block">{messages["bn2rf_1"]}</p>
            <div className="circular-text-container">
              <p className="italic-black-text">100m</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2681_7d2b81.webp"
            className="image-container-with-text"
          />
          <div className="info-card">
            <p className="unique-text-block">{messages["pl12o_1"]}</p>
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
            <p className="unique-text-block">{messages["r45ty_1"]}</p>
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
            <p className="unique-text-block">{messages["puq2t_1"]}</p>
            <div className="circular-text-container">
              <p className="italic-black-text">100m</p>
            </div>
          </div>
        </div>
        <div className="flex-column-centered">
          <p className="large-text-with-background">+1</p>
        </div>
      </div>
      <p className="ticket-info-text-style">{messages["sat_nov_23_2023_2"]}</p>
    </div>
  );
}

export default ProductCardWidget;
