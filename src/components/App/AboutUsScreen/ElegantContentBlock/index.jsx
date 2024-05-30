import "./style.css";
import messages from "./messages.json";

function ElegantContentBlock() {
  return (
    <div className="text-container-flex-box">
      <p className="central-text-styler">{messages["lrem_ipsum_pojs_tiling_att_sper_nr_bagt_rotede_eme"]}</p>
      <div className="content-wrapper">
        <img
          src="/assets/img_1091_3662_efbf6c.svg"
          alt=""
          className="image-container1"
        />
      </div>
    </div>
  );
}

export default ElegantContentBlock;
