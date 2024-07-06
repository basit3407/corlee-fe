import RenderEventDisplayWidgets from "./RenderEventDisplayWidgets";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";
import Container from "../../UI/Container";

function EventsComponent({ eventDisplayWidgetArgs }) {
  return (
    <Container>
      <div className="event-list-container">
        <div className="event-card-list">
          <div className="mainpageevents">
            <div className="leftsidecontent">
              <h1>Want to Book an Appointment with us?</h1>
              <p>Let’s go & discuss it</p>
              <p className="content-text-area">
                {messages["lrem_ipsum_tis_kvasiposade_poment_vtirade_ding_eft"]}
              </p>
              {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
              <button className="event-card-button">
                {messages["book_now"]}
                <SvgIcon1 className="svg-container" />
              </button>
            </div>

            <img
              src="/assets/img_1091_8731_66f01e.jpeg"
              className="mainimage"
            />
          </div>
          <p className="upcoming-events-heading">
            {messages["upcoming_events"]}
          </p>
          <RenderEventDisplayWidgets
            eventDisplayWidgetArgs={eventDisplayWidgetArgs}
          />
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="btn-load-more">{messages["load_more"]}</button>
        </div>
      </div>
    </Container>
  );
}

export default EventsComponent;
