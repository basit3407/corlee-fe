import "./style.css";
import messages from "./messages.json";

function MessageDisplayWidget1() {
  return (
    <div className="content-container1">
      <p className="highlighted-text-block">{messages["accusantium_et_aliquam"]}</p>
      <p className="narrative-text-style">
        <span>{messages["lrem_ipsum_tabelt_epirolig_traras_terar_och_vinigt"]}</span>
        <span className="hierarchical-text-block">{messages["ltbr_gt_1"]}</span>
        <span>{messages["kur_dofusa_dunat_kror_tiska_i_dianat_vigt_vironade"]}</span>
      </p>
    </div>
  );
}

export default MessageDisplayWidget1;
