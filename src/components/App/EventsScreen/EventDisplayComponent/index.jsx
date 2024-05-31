import EventDetailsRenderer from "../EventDetailsRenderer";
import EventCardWidget2 from "../EventCardWidget2";
import "./style.css";

function EventDisplayComponent({ imgContent9, eventDate5, eventYear5, eventDescription7, dynamicContentWithShowMoreButton7 }) {
  return (
    <div className="event-card1 event-card">
      <EventDetailsRenderer eventDate5={eventDate5} eventYear5={eventYear5} />
      <EventCardWidget2 imgContent9={imgContent9} eventDescription7={eventDescription7} dynamicContentWithShowMoreButton7={dynamicContentWithShowMoreButton7} />
    </div>
  );
}

export default EventDisplayComponent;
