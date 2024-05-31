import "./style.css";
import messages from "./messages.json";

function MessageDisplayWidget() {
  return (
    <div className="content-container1">
      <p className="highlighted-text-block">{messages["pariatur_autem_cum_nesciunt_magnam_est_nostrum"]}</p>
      <p className="narrative-text-style">{messages["lrem_ipsum_deligen_gits_soras_eller_ridiv_tekora_k"]}</p>
    </div>
  );
}

export default MessageDisplayWidget;
