import NestedContentBlock from "../NestedContentBlock";
import "./style.css";
import messages from "./messages.json";

function PersonalProfileSection() {
  return (
    <div className="profile-card">
      <div className="personal-details-section1">
        <NestedContentBlock />
        <div className="personal-details-section2">
          <div className="flex-container-with-items">
            <div className="profile-card">
              <p className="personal-details-heading">
                {messages["personal_details"]}
              </p>
              <p className="personal-details-text">
                {messages["ms_drew_homenick"]}
              </p>
              <p className="personal-details-text">{messages["corwin_llc"]}</p>
            </div>
            <p className="personal-details-link">{messages["change"]}</p>
          </div>
          <div className="contact-info-container">
            <div className="profile-card">
              <p className="personal-details-heading">
                {messages["contact_detail"]}
              </p>
              <p className="personal-details-text">+123456789</p>
              <p className="personal-details-text">
                {messages["myemailgmailcom"]}
              </p>
            </div>
            <p className="personal-details-link">{messages["change_1"]}</p>
          </div>
        </div>
      </div>
      <div className="shipping-details-container">
        <div className="address-container">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4890_234c66.svg"
            alt=""
            className="image-wrapper"
          />
          <div className="address-block">
            <p className="personal-details-heading">{messages["shipping"]}</p>
            <p className="shipping-address-info">
              {messages["792_cole_wall_new_york_1001_usa"]}
            </p>
          </div>
        </div>
        <p className="personal-details-link">{messages["change_2"]}</p>
      </div>
    </div>
  );
}

export default PersonalProfileSection;
