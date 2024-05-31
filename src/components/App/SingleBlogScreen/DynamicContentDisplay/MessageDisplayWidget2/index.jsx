import "./style.css";
import messages from "./messages.json";

function MessageDisplayWidget2() {
  return (
    <div className="content-container1">
      <p className="highlighted-text-block">{messages["rem_commodi_est_beatae_quam_nam_itaque_voluptatem"]}</p>
      <p className="narrative-text-style">
        <span>{messages["lrem_ipsum_angar_epirar_relig_stenofna_bedr_reagt_"]}</span>
        <span className="hierarchical-text-block">{messages["ltbr_gt_3"]}</span>
        <span>{messages["trabelt_decick_fr_polyfiering_hil_ven_om_min_ladov"]}</span>
        <span className="hierarchical-text-block">{messages["ltbr_gt_4"]}</span>
        <span>{messages["nevis_hyposktiga_inte_replanade_vipoholing_stenore"]}</span>
      </p>
    </div>
  );
}

export default MessageDisplayWidget2;
