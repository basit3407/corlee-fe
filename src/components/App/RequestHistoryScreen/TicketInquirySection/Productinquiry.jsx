import React from "react";
import { useNavigate } from "react-router-dom";

const Productinquiry = (props) => {
  const navigate = useNavigate();
  const item = props.item;
  return (
    <div
      className="productinquiry"
      style={{ cursor: "pointer" }}
      onClick={() => {
        navigate(`/user/productenquiry/${item.id}`);
      }}
    >
      <div className="infotext">
        <p className="ticket">Ticket Number : {item.request_number}</p>
        <p className="inqtext">Product Inquiry</p>
      </div>
      <div className="otherdata">
        <div className="imgdiv">
          <div
            className="image"
            style={{
              backgroundImage: `url(${item?.related_fabric?.color_images[0]?.primary_image_url})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="textunderimg">
            <p className="number">{item.related_fabric.item_code}</p>
            <div className="length">2yd</div>
          </div>
        </div>
        <div className="productinqtextdiv">
          <div className="headingofproduct">{item.subject}</div>
          <p className="productdesc">{item.message}</p>
        </div>
      </div>{" "}
      <div className="datediv">
        <p className="datep">{props.date}</p>
      </div>
    </div>
  );
};

export default Productinquiry;
