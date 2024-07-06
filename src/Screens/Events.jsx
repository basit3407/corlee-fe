import EventsComponent from "../components/App/EventsScreen";
import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import StylishImage from "../components/App/EventsScreen/StylishImage";
import { mockData } from "../util";

function Events() {
  return (
    <>
      <Navbar />
      <EventsComponent
        eventDisplayWidgetArgs={mockData.eventDisplayWidgetArgs}
      />
      <BottomBar />
    </>
  );
}

export default Events;
