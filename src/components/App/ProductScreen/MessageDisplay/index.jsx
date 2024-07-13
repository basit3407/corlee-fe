import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function MessageDisplay(props) {
  return (
    <div className="material-section">
      <p className="material-heading-text-style">
        {props.fav ? "Favourites" : messages["material"]}
      </p>
      <p className="material-description-text-style">
        {messages["lrem_ipsum_tis_kvasiposade_poment_vtirade_ding_eft"]}
      </p>
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="material-button">
        <SvgIcon1 className="svg-container4" />
        {messages["filter"]}
      </button>
    </div>
  );
}

export default MessageDisplay;
