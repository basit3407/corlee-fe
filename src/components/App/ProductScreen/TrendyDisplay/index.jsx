import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";
import { useState } from "react";
import { api } from "../../../../config/api";
import { useNavigate } from "react-router-dom";

function TrendyDisplay(props) {
  const [isFavourite, setIsFavourite] = useState(props.is_favorite);

  const toggleFav = async (event) => {
    event.stopPropagation();
    if (localStorage.getItem("token")) {
      setIsFavourite(!isFavourite);
      await api.post("/toggle_favorite/", { fabric_id: props.id });
      props.setRefresh(Date.now());
    } else {
      props.setshowLoginPopup(true);
    }
  };

  return (
    <div className="product-card">
      <div className="product-card-container1">
        <p className="unique-header-text-style">{props.item_code}</p>
        <div
          className="card-with-code-snippet"
          onClick={(e) => {
            e.stopPropagation();
            toggleFav(e);
          }}
        >
          <SvgIcon1 className="svg-container2" isFavourite={isFavourite} />
        </div>
      </div>
      <div
        className="hot-selling-container"
        style={!props.is_hot_selling ? { display: "none" } : {}}
      >
        <p className="hot-selling-text-emoji">🔥</p>
        <p className="hot-selling-text-style">{messages["hot_selling"]}</p>
      </div>
    </div>
  );
}

export default TrendyDisplay;
