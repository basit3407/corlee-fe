import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import messages from "./messages.json";
import { useRef, useState } from "react";

export function EventCardWidget3({
  imgContent9,
  eventDescription7,
  dynamicContentWithShowMoreButton7,
  event,
}) {
  const [showMore, setShowMore] = useState(false);
  const textRef = useRef(null);

  const isTruncated =
    textRef.current &&
    textRef.current.offsetHeight < textRef.current.scrollHeight;
  return (
    <div className="event-card-container">
      <div className="eventimage">
        <img className="event-image-display-style" src={imgContent9} />
      </div>
      <div className="event-description-container">
        <p className="event-description-text-styler">{eventDescription7}</p>
        <p className="event-description-text-snippet">
          <span
            style={
              showMore
                ? {
                    height: `${textRef.current.scrollHeight}px`,
                    WebkitLineClamp: "none",
                    overflow: "visible",
                  }
                : {}
            }
            ref={textRef}
          >
            {dynamicContentWithShowMoreButton7}
            {isTruncated && "... "}{" "}
          </span>
          {isTruncated ? (
            showMore ? (
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
            )
          ) : null}
        </p>
        <div className="event-details-container1">
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button
            className="button-with-icon"
            onClick={() => {
              window.open(
                `https://www.google.com/maps/search/${event.location}`,
                "_blank"
              );
            }}
          >
            <SvgIcon1 className="svg-container1" />
            {event.location}
          </button>
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button
            className="button-with-icon"
            onClick={() => {
              window.location.href = `tel:${event.phone}`;
            }}
          >
            <SvgIcon2 className="svg-container1" />
            {event.phone}
          </button>
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button
            className="button-with-icon"
            onClick={() => {
              window.location.href = `mailto:${event.email}`;
            }}
          >
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
