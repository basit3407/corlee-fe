import "./style.css";
import messages from "./messages.json";

function ProductInfoDisplay() {
  return (
    <div className="newsletter-container">
      <p className="hero-text-block">{messages["first_know_about_product_releases__all_things_corl"]}</p>
      <p className="corlee-text-snippet">{messages["lrem_ipsum_suledes_plankning_till_heterossade_tosn"]}</p>
    </div>
  );
}

export default ProductInfoDisplay;
