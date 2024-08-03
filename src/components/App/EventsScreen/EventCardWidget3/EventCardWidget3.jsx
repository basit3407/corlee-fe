import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import messages from "./messages.json";
import { useState } from "react";

export function EventCardWidget3({
  imgContent9,
  eventDescription7,
  dynamicContentWithShowMoreButton7,
  event,
}) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="event-card-container">
      <div className="eventimage">
        <img className="event-image-display-style" src={imgContent9} />
      </div>
      <div className="event-description-container">
        <p className="event-description-text-styler">{eventDescription7}</p>
        <p className="event-description-text-snippet">
          <span
            style={showMore ? { height: "auto", WebkitLineClamp: "none" } : {}}
          >
            {dynamicContentWithShowMoreButton7}
            {showMore ? "" : "... "}{" "}
          </span>
          {showMore ? (
            <span
              className="text-link-style"
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              show Less
            </span>
          ) : (
            <span
              className="text-link-style"
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              show more
            </span>
          )}
        </p>
        <div className="event-details-container1">
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="button-with-icon">
            <SvgIcon1 className="svg-container1" />
            {event.location}
          </button>
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="button-with-icon">
            <SvgIcon2 className="svg-container1" />
            {event.phone}
          </button>
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="button-with-icon">
            <SvgIcon3 className="svg-container1" />
            {event.email}
          </button>
        </div>
      </div>
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="primary-cta-button">{messages["book_now_1"]}</button>
    </div>
  );
}
