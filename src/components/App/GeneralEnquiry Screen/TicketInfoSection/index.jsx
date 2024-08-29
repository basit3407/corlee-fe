import PersonalContactSection from "../PersonalContactSection";
import "./style.css";
import messages from "./messages.json";
import { useEffect, useState } from "react";
import { api } from "../../../../config/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

function TicketInfoSection(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const text = "(By yards)";

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = days[date.getUTCDay()];
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    return `${dayOfWeek} ${month} ${day} ${year}`;
  }
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/contact-requests/${props.id}/`);
      console.log(res);
      if (res.status === 200) {
        setData(res.data);
        setLoading(false);
      } else {
        toast.error("Something went wrong");
        setLoading(false);
        navigate("/");
      }
    } catch (e) {
      toast.error("Something went wrong");
      setLoading(false);
      navigate("/");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="ticket-details-container">
      {loading ? (
        <div
          className="spinner"
          style={{
            margin: "30px auto",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TailSpin
            visible={true}
            height="60"
            width="60"
            color="#000"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <>
          <div className="ticket-details-container1">
            <p className="ticket-number-text-style">
              {messages["ticket_number"]}
            </p>
            <p className="ticket-number-style">
              {data.contact_request?.request_number}
            </p>
            <div className="ticket-info-container">
              <div className="emptydiv"></div>
              {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
              <button className="button-general-inquiry-style">
                {props.product
                  ? "Product Inquiry"
                  : props.request
                  ? "Products Request"
                  : "General Inquiry"}
              </button>
              <p className="date-label">
                {formatDate(data.contact_request?.created_at)}
              </p>
            </div>
          </div>
          <div className="ticket-details-section">
            <div className="content-wrapper">
              {props.request ? (
                <>
                  {data?.contact_request?.related_order?.items?.map((e, i) => (
                    <>
                      <div
                        className="productinquiryproductsection"
                        key={i}
                        style={{
                          marginBottom: "20px",
                        }}
                      >
                        <p
                          style={
                            i === 0 ? { display: "block" } : { display: "none" }
                          }
                        >
                          Product Details
                        </p>

                        <div className="productinquiryproductdiv">
                          <div className="productsimageandtextdiv">
                            <div
                              className="imagesoftheproducts"
                              style={{
                                backgroundImage: `url(${
                                  e?.fabric?.color_images?.filter(
                                    (item) => item.color === e.color
                                  )[0]?.primary_image_url
                                })`,
                                backgroundSize: "cover",
                              }}
                            ></div>
                            <div className="imagestext">
                              {" "}
                              <p>{e.fabric.item_code}</p>
                              <p>{e.fabric.product_category_name}</p>
                            </div>
                          </div>
                          <div className="productdetailsdiv">
                            <div className="colordiv">
                              <p className="color">Color </p>

                              <div
                                className="colorcircle"
                                key={i}
                                style={{ backgroundColor: e.color }}
                              ></div>
                            </div>
                            <p className="quantityofproduct">
                              Quantity <span>{text}</span>
                            </p>
                            <p className="priceofproduct">{e.quantity}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </>
              ) : (
                <>
                  <p className="main-heading-text-style">
                    {data.contact_request?.subject}
                  </p>
                  <p className="content-block">
                    {data.contact_request?.message}
                  </p>
                  {props.product ? (
                    <div className="productinquiryproductsection">
                      <p>Product Details</p>

                      <div className="productinquiryproductdiv">
                        <div className="productsimageandtextdiv">
                          <div
                            className="imagesoftheproducts"
                            style={{
                              backgroundImage: `url(${data?.contact_request?.related_fabric?.color_images[0].primary_image_url})`,
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <div className="imagestext">
                            {" "}
                            <p>
                              {data?.contact_request?.related_fabric?.item_code}
                            </p>
                            <p>
                              {
                                data?.contact_request?.related_fabric
                                  ?.product_category_name
                              }
                            </p>
                          </div>
                        </div>
                        <div className="productdetailsdiv">
                          <div className="colordiv">
                            <p className="color">Color </p>
                            {data?.contact_request?.related_fabric?.color_images.map(
                              (e, i) => (
                                <div
                                  className="colorcircle"
                                  key={i}
                                  style={{ backgroundColor: e.color }}
                                ></div>
                              )
                            )}
                          </div>
                          <p className="quantityofproduct">
                            Quantity <span>{text}</span>
                          </p>
                          <p className="priceofproduct">2</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </div>
            {data.user ? <PersonalContactSection user={data.user} /> : <></>}
          </div>
        </>
      )}
    </div>
  );
}

export default TicketInfoSection;
