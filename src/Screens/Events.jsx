import EventsComponent from "../components/App/EventsScreen";
import NavBarBlack from "../components/App/EventsScreen/NavBarBlack";
import BottomBar from "../components/App/BottomBar";
import { mockData } from "../util";
import StylishImage from "../components/App/EventsScreen/StylishImage";

function Events() {
  return (
    <>
      <NavBarBlack />
      <EventsComponent
        eventDisplayWidgetArgs={mockData.eventDisplayWidgetArgs}
      />
      <BottomBar />
      <StylishImage />
    </>
  );
}

export default Events;
