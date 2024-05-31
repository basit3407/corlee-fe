import EventDisplayWidget2 from "../EventDisplayWidget2";
import EventDisplayWidget from "../EventDisplayWidget";
import "./style.css";

function RenderEventDisplayWidgets({ eventDisplayWidgetArgs }) {
  return (
    <div className="event-card-container1">
      {eventDisplayWidgetArgs.map((data, index) => {
        return <EventDisplayWidget2 {...data} key={index} />;
      })}
    </div>
  );
}

export default RenderEventDisplayWidgets;
