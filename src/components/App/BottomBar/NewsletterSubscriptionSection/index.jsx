import ProductInfoDisplay from "../ProductInfoDisplay";
import "./style.css";
import messages from "./messages.json";
import { useState } from "react";
import { toast } from "sonner";
import { api } from "../../../../config/api";

function NewsletterSubscriptionSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    try {
      if (email === "") {
        toast.error("Email is required");
      } else {
        setLoading(true);
        const res = await api.post("/subscribe/", {
          email,
        });
        console.log(res);
        if (res.status === 201) {
          setLoading(false);
          toast.success("Subscribed successfully");
        } else {
          toast.error("Email already subscribed");
          setLoading(false);
        }
      }
    } catch (e) {
      setLoading(false);
      toast.error(e.response.data.email[0] || "Something went wrong");
    }
  };

  return (
    <div className="newsletter-section1">
      <div className="newsletter-subscription-section">
        <ProductInfoDisplay />
        <div className="subscribe-section">
          <input
            className="email-subscription-text"
            placeholder="Email here"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="subscribe-button-style" onClick={handleClick}>
            {loading ? "loading..." : messages["subscribe"]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSubscriptionSection;
