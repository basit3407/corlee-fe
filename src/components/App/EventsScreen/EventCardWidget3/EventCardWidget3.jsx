import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import messages from "./messages.json";
import { useRef, useState, useEffect } from "react";

export function EventCardWidget3({
  imgContent9,
  eventDescription7,
  dynamicContentWithShowMoreButton7,
  event,
}) {
  const [showMore, setShowMore] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef(null);
  console.log(event);

  useEffect(() => {
    if (textRef.current) {
      setIsTruncated(
        textRef.current.offsetHeight < textRef.current.scrollHeight
      );
    }
  }, []);
  function generateICSFile() {
    // Combine date and time into a single string and convert to ISO format
    const eventDateTime = new Date(`${event.date}T${event.time}`).toISOString();

    // Start date (in UTC format)
    const startDate = eventDateTime.replace(/[-:]/g, "").split(".")[0] + "Z";

    // End date (1 hour after start date, in UTC format)
    const endDate =
      new Date(
        new Date(`${event.date}T${event.time}`).getTime() + 60 * 60 * 1000
      )
        .toISOString()
        .replace(/[-:]/g, "")
        .split(".")[0] + "Z";

    // Ensure ICS content follows correct format
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Organization//NONSGML v1.0//EN
BEGIN:VEVENT
UID:${new Date().getTime()}@yourdomain.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"}
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${escapeICSString(event.title)}
DESCRIPTION:${escapeICSString(event.description || "")}
LOCATION:${escapeICSString(event.location || "")}
END:VEVENT
END:VCALENDAR
  `.trim();

    // Create the ICS file and trigger download
    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${event.title.replace(/\s+/g, "_")}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Helper function to escape special characters in ICS strings
  function escapeICSString(str) {
    return str.replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n");
  }

  return (
    <div className="event-card-container">
      <div
        className="eventimage"
        onClick={() => {
          console.log(showMore, isTruncated);
        }}
      >
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
            {!showMore && isTruncated ? "... " : ""}
          </span>
          {isTruncated ? (
            showMore ? (
              <span
                className="text-link-style"
                onClick={() => setShowMore(false)}
              >
                show Less
              </span>
            ) : (
              <span
                className="text-link-style"
                onClick={() => setShowMore(true)}
              >
                show more
              </span>
            )
          ) : null}
        </p>
        <div className="event-details-container1">
          <button
            className="button-with-icon eventbuttonwithicon"
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
          <button
            className="button-with-icon eventbuttonwithicon"
            onClick={() => {
              window.location.href = `tel:${event.phone}`;
            }}
          >
            <SvgIcon2 className="svg-container1" />
            {event.phone}
          </button>
          <button
            className="button-with-icon eventbuttonwithicon"
            onClick={() => {
              window.location.href = `mailto:${event.email}`;
            }}
          >
            <SvgIcon3 className="svg-container1" />
            {event.email}
          </button>
        </div>
      </div>
      <button
        className="primary-cta-button"
        onClick={() => {
          window.open(event.url, "_blank");
        }}
      >
        {messages["book_now_1"]}
      </button>
    </div>
  );
}
