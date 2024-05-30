import ProductInfoDisplay from "../ProductInfoDisplay";
import "./style.css";
import messages from "./messages.json";

function NewsletterSubscriptionSection() {
  return (
    <div className="newsletter-section1">
      <div className="newsletter-subscription-section">
        <ProductInfoDisplay />
        <div className="subscribe-section">
          <p className="email-subscription-text">{messages["email_here"]}</p>
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="subscribe-button-style">{messages["subscribe"]}</button>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSubscriptionSection;
