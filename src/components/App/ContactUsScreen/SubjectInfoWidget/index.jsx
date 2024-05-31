import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function SubjectInfoWidget() {
  return (
    <div className="container-with-label">
      {/* Select with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <div className="form-field-container">
        <label className="name-label-style">{messages["subject"]}</label>
        <div className="subject-container">
          <p className="product-description-text-style">{messages["ie_want_buy_woven"]}</p>
          <SvgIcon1 className="svg-container3" />
        </div>
      </div>
    </div>
  );
}

export default SubjectInfoWidget;
