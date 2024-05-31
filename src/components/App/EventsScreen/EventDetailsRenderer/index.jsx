import "./style.css";

function EventDetailsRenderer({ eventDate5, eventYear5 }) {
  return (
    <div className="event-details-container">
      <p className="event-date-style">{eventDate5}</p>
      <p className="event-year-label">{eventYear5}</p>
    </div>
  );
}

export default EventDetailsRenderer;
