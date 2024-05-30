import StoryDisplay from "../StoryDisplay";
import SectionRenderer from "../SectionRenderer";
import ImageContainer from "../ImageContainer";
import "./style.css";
import messages from "./messages.json";

function ContentDisplayWidget({ possibleSectionTitles }) {
  return (
    <div className="vertical-centered-container">
      <div className="vertical-flex-container">
        <div className="hero-section">
          <div className="story-section-container">
            <StoryDisplay />
            <p className="narrative-text-style">
              {messages["lrem_ipsum_tis_kvasiposade_poment_vtirade_ding_eft"]}
            </p>
            <div className="statistic-cards-group">
              <div className="statistic-card">
                <p className="standout-text">27+</p>
                <p className="info-card-text-style">
                  {messages["production_experience"]}
                </p>
              </div>
              <div className="statistic-card">
                <p className="standout-text">600+</p>
                <p className="info-card-text-style">
                  {messages["clients_worldwide"]}
                </p>
              </div>
              <div className="statistic-card">
                <p className="standout-text">4.9</p>
                <p className="info-card-text-style">
                  {messages["stars_rating"]}
                </p>
              </div>
            </div>
          </div>
          <div className="vertical-section-container">
            <SectionRenderer possibleSectionTitles={possibleSectionTitles} />
            <ImageContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentDisplayWidget;
