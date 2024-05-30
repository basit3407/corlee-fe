import "./style.css";

function FabricInfoDisplay({ fabricDesignCategory, fabricCraftingDescription, layoutAlignmentPreference, textAlignmentStyle }) {
  return (
    <div className="fabric-design-description-container">
      <p className="art-noova-heading" style={{ textAlign: textAlignmentStyle }}>
        {fabricDesignCategory}
      </p>
      <p className="fabric-crafting-description-style" style={{ alignSelf: layoutAlignmentPreference }}>
        {fabricCraftingDescription}
      </p>
    </div>
  );
}

export default FabricInfoDisplay;
