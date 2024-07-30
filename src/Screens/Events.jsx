import EventsComponent from "../components/App/EventsScreen";
import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import StylishImage from "../components/App/EventsScreen/StylishImage";
import { mockData } from "../util";
import { useEffect } from "react";

function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar events={true} />
      <EventsComponent
        eventDisplayWidgetArgs={mockData.eventDisplayWidgetArgs}
      />
      <BottomBar />
    </>
  );
}

export default Events;
