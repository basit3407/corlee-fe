import { mockData } from "../../../util";
import MainComp from "./CallUsModalMainComp";

function CallUsModal() {
  return (
    <div
      style={{ display: "inline-block", width: "636px" }}
      data-ignore="used only for top most containter width"
    >
      <MainComp contactOptionsArray={mockData.contactOptionsArray} />
    </div>
  );
}

export default CallUsModal;
