import FabricInfoLayout from "../components/App/HomeScreen/FabricInfoLayout";
import { mockData } from "../util";
import BottomBar from "../components/App/BottomBar";

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
      <BottomBar />
    </>
  );
}

export default Home;
