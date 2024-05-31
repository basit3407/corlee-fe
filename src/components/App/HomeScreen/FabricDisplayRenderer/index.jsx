import { theme } from "../../../../util";
import FabricInfoDisplay from "../FabricInfoDisplay";
import "./style.css";

function FabricDisplayRenderer({ fabricInfoOptions }) {
  const fabricDisplayRendererStyles = [
    { layoutAlignmentPreference: theme.others.ALIGN_SELF_8FD4E705 },
    {
      textAlignmentStyle: theme.others.TEXT_ALIGN_AEB2CC55,
      layoutAlignmentPreference: theme.others.ALIGN_SELF_AEB2CC55,
    },
    { layoutAlignmentPreference: theme.others.ALIGN_SELF_8FD4E705 },
  ];
  return (
    <div className="fabric-design-description-list">
      {fabricInfoOptions.map((data, index) => {
        return (
          <FabricInfoDisplay
            {...data}
            key={index}
            {...fabricDisplayRendererStyles[index]}
          />
        );
      })}
    </div>
  );
}

export default FabricDisplayRenderer;
