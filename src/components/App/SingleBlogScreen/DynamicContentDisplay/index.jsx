import MessageDisplayWidget1 from "./MessageDisplayWidget1";
import ContentBlock from "./ContentBlock";
import MessageDisplayWidget from "./MessageDisplayWidget";
import MessageDisplayWidget2 from "./MessageDisplayWidget2";
import "./style.css";
import messages from "./messages.json";

function DynamicContentDisplay() {
  return (
    <div className="content-container">
      <p className="hiero-text-block">
        <span>
          {messages["lrem_ipsum_tabelt_epirolig_traras_terar_och_vinigt"]}
        </span>
        <span className="hierarchical-text-block">{messages["ltbr_gt"]}</span>
        <span>
          {messages["kur_dofusa_dunat_kror_tiska_i_dianat_vigt_vironade"]}
        </span>
      </p>
      <MessageDisplayWidget1 />
      <ContentBlock />
      <MessageDisplayWidget />
      <MessageDisplayWidget2 />
    </div>
  );
}

export default DynamicContentDisplay;
