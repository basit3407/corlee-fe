import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import RequestHistoryComponent from "../components/App/RequestHistoryScreen";
import { mockData } from "../util";

function RequestHistory() {
  return (
    <>
      <Navbar />
      <RequestHistoryComponent
        ticketInquiriesData={mockData.ticketInquiriesData}
      />
      <BottomBar history={true} />
    </>
  );
}

export default RequestHistory;
