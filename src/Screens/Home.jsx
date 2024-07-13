import FabricInfoLayout from "../components/App/HomeScreen/FabricInfoLayout";
import BottomBar from "../components/App/BottomBar";
import { mockData } from "../util";

function Home() {
  return (
    <>
      <div
        style={{
          background: "white",
        }}
        data-ignore="used only for top most containter width"
      >
        <FabricInfoLayout fabricInfoOptions={mockData.fabricInfoOptions} />
      </div>
      <BottomBar home={true} />
    </>
  );
}

export default Home;
