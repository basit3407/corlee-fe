import PersonalContactSection from "../PersonalContactSection";
import "./style.css";
import messages from "./messages.json";

function TicketInfoSection(props) {
  let text = "(by meter)";
  return (
    <div className="ticket-details-container">
      <div className="ticket-details-container1">
        <p className="ticket-number-text-style">{messages["ticket_number"]}</p>
        <p className="ticket-number-style">{messages["ab9825"]}</p>
        <div className="ticket-info-container">
          <div className="emptydiv"></div>
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="button-general-inquiry-style">
            {messages["general_inquiry"]}
          </button>
          <p className="date-label">{messages["sat_nov_23_2023"]}</p>
        </div>
      </div>
      <div className="ticket-details-section">
        <div className="content-wrapper">
          <p className="main-heading-text-style">
            {messages["placeat_voluptas_eius_non_iusto_vitae"]}
          </p>
          <p className="content-block">
            <span>
              {messages["labore_ut_molestias_asperiores_nihil_reiciendis_de"]}
            </span>
            <span className="text-block">{messages["ltbr_gt"]}</span>
            <span>
              {messages["labore_ut_molestias_asperiores_nihil_reiciendis_de"]}
            </span>
            <span className="text-block">{messages["ltbr_gt_1"]}</span>
            <span>
              {messages["labore_ut_molestias_asperiores_nihil_reiciendis_de_1"]}
            </span>
          </p>
          {props.product ? (
            <div className="productinquiryproductsection">
              <p>Product Details</p>

              <div className="productinquiryproductdiv">
                <div className="productsimageandtextdiv">
                  <div className="imagesoftheproducts"></div>
                  <div className="imagestext">
                    {" "}
                    <p>AB10476</p>
                    <p>Functional</p>
                  </div>
                </div>
                <div className="productdetailsdiv">
                  <div className="colordiv">
                    <p className="color">Color </p>
                    <div className="colorcircle"></div>
                  </div>
                  <p className="quantityofproduct">
                    Quantity <span>{text}</span>
                  </p>
                  <p className="priceofproduct">100</p>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <PersonalContactSection />
      </div>
    </div>
  );
}

export default TicketInfoSection;
