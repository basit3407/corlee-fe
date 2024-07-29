import React from "react";
import { useNavigate } from "react-router-dom";

const GeneralInquiry = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="productinquiry generalinquiry"
      style={{ cursor: "pointer" }}
      onClick={() => {
        navigate(`/user/generalenquiry/${props.item.id}`);
      }}
    >
      <div className="infotext">
        <p className="ticket">Ticket Number : {props.item.request_number}</p>
        <p className="inqtext">General Inquiry</p>
      </div>
      <div className="otherdata">
        <div className="productinqtextdiv">
          <div className="headingofproduct">{props.item.subject}</div>
          <p className="productdesc">{props.item.message}</p>
        </div>
      </div>{" "}
      <div className="datediv">
        <p className="datep">{props.date}</p>
      </div>
    </div>
  );
};

export default GeneralInquiry;
