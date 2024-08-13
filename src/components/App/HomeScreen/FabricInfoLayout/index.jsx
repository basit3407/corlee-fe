import FabricInfoDisplay1 from "../FabricInfoDisplay1";
import Navbar from "../../Navbar";
import "./style.css";
import { useEffect, useState } from "react";

function FabricInfoLayout({ fabricInfoOptions }) {
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    setRefresh((prev) => prev + 1);
  }, []);
  return (
    <div className="global-fashion-hub-layout">
      <Navbar refresh={refresh} />
      <FabricInfoDisplay1 fabricInfoOptions={fabricInfoOptions} />
    </div>
  );
}

export default FabricInfoLayout;
