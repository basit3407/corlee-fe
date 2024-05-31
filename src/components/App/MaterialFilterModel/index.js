import { mockData } from "../../../util";
import ColorfulFilterWidget from "./ColorfulFilterWidget";

function MaterialFilterModal() {
  return (
    <div
      style={{ display: "inline-block", width: "396px" }}
      data-ignore="used only for top most containter width"
    >
      <ColorfulFilterWidget imageOptionsList={mockData.imageOptionsList} />
    </div>
  );
}

export default MaterialFilterModal;
