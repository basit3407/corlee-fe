import CompanyInfoSection from "./CompanyInfoSection";
import "./style.css";

function ContinueWithGoogleComponent() {
  return (
    <div
      style={{
        display: "inline-block",
        width: "100%",
        background: "whitesmoke",
      }}
      className="googlepage"
      data-ignore="used only for top most containter width"
    >
      <div className="company-details-container">
        <div className="company-details-container1">
          <CompanyInfoSection />
        </div>
      </div>
    </div>
  );
}

export default ContinueWithGoogleComponent;
