import FabricInfoDisplay1 from "../FabricInfoDisplay1";
import Navbar from "../../Navbar";
import "./style.css";

function FabricInfoLayout({ fabricInfoOptions }) {
  return (
    <div className="global-fashion-hub-layout">
      <Navbar />
      <FabricInfoDisplay1 fabricInfoOptions={fabricInfoOptions} />
    </div>
  );
}

export default FabricInfoLayout;
