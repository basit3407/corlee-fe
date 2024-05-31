import InputBox from "../InputBox";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function SortItemsView() {
  return (
    <div className="container-sort-options">
      <div className="sort-container-with-icon">
        <p className="sort-title-text-style">{messages["sort"]}</p>
        <div className="sort-container">
          <span className="highlighted-text-badge">1</span>
          <SvgIcon1 className="svg-container" />
        </div>
      </div>
      <InputBox />
      <p className="oldest-title-with-style">{messages["oldest"]}</p>
      <p className="most-requested-text-style">{messages["most_requested"]}</p>
    </div>
  );
}

export default SortItemsView;
