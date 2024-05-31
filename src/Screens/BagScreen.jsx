import BagScreenMainComp from "../components/App/BigScreen";
import Navbar from "../components/App/Navbar";
import { mockData } from "../util";

function BagScreen() {
  return (
    <>
      <Navbar />
      <BagScreenMainComp productTableRowsData={mockData.productTableRowsData} />
    </>
  );
}

export default BagScreen;
