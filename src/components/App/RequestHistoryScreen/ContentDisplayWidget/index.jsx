import "./style.css";
import messages from "./messages.json";

function ContentDisplayWidget() {
  return (
    <div className="inquiry-section">
      <p className="headline-text-style">{messages["placeat_voluptas_eius_non_iusto_vitae_1"]}</p>
      <p className="description-snippet">{messages["labore_ut_molestias_asperiores_nihil_reiciendis_de_1"]}</p>
    </div>
  );
}

export default ContentDisplayWidget;
