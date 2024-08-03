import EventDetailsRenderer from "../EventDetailsRenderer";
import EventCardWidget3 from "../EventCardWidget3";
import "./style.css";

function EventDisplayWidget2({
  event,
  imgContent9,
  eventDate5,
  eventYear5,
  eventDescription7,
  dynamicContentWithShowMoreButton7,
}) {
  return (
    <div className="event-card1 event-card">
      <EventDetailsRenderer eventDate5={eventDate5} eventYear5={eventYear5} />
      <EventCardWidget3
        imgContent9={imgContent9}
        eventDescription7={eventDescription7}
        dynamicContentWithShowMoreButton7={dynamicContentWithShowMoreButton7}
        event={event}
      />
    </div>
  );
}

export default EventDisplayWidget2;
