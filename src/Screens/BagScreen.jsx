import { useState } from "react";
import BagScreenMainComp from "../components/App/BigScreen";
import Navbar from "../components/App/Navbar";
import { mockData } from "../util";

function BagScreen() {
  const [refresh, setRefresh] = useState(0);
  return (
    <>
      <Navbar refresh={refresh} />
      <BagScreenMainComp
        setRefresh={setRefresh}
        productTableRowsData={mockData.productTableRowsData}
      />
    </>
  );
}

export default BagScreen;
