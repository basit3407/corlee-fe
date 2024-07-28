import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import "./style.css";
import messages from "./messages.json";

function EventCardWidget1({
  imgContent9,
  eventDescription7,
  dynamicContentWithShowMoreButton7,
}) {
  return (
    <div className="event-card-container">
      <img className="event-image-display-style" src={imgContent9} />
      <div className="event-description-container">
        <p className="event-description-text-styler">{eventDescription7}</p>
        <p
          className="event-description-text-snippet"
          dangerouslySetInnerHTML={{
            __html: dynamicContentWithShowMoreButton7,
          }}
        />
        <div className="event-details-container1">
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="button-with-icon1">
            <SvgIcon1 className="svg-container1" />
            {messages["suite_574_2"]}
          </button>
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="button-with-icon">
            <SvgIcon2 className="svg-container1" />
            {messages["9886997885_2"]}
          </button>
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="button-with-icon-and-text">
            <SvgIcon3 className="svg-container1" />
            {messages["oralhowe21yahoocom_2"]}
          </button>
        </div>
      </div>
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="primary-cta-button">{messages["book_now_3"]}</button>
    </div>
  );
}

export default EventCardWidget1;
