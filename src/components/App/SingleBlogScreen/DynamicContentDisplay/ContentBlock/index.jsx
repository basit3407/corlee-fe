import "./style.css";
import messages from "./messages.json";

function ContentBlock() {
  return (
    <div className="content-container1">
      <p className="highlighted-text-block">{messages["aut_voluptate_neque_sint_voluptatibus_tenetur_numq"]}</p>
      <p className="narrative-text-style">
        <span>{messages["lrem_ipsum_anel_triage_men_suprasam_monotnde_dons_"]}</span>
        <span className="hierarchical-text-block">{messages["ltbr_gt_2"]}</span>
        <span>{messages["var_multilig_treng_som_ultrasam_syligt_pengen_sask"]}</span>
      </p>
    </div>
  );
}

export default ContentBlock;
