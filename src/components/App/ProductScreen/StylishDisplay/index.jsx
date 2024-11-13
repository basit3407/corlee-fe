import { useNavigate } from "react-router-dom";
import TrendyDisplay from "../TrendyDisplay";
import "./style.css";
import { api } from "../../../../config/api";
import { toast } from "sonner";
import { TailSpin } from "react-loader-spinner";
import { useState } from "react";

function StylishDisplay(props) {
  const navigate = useNavigate(props);
  const [loading, setLoading] = useState(false);
  const [showLoginPopup, setshowLoginPopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    props.color_images[0].color
  );
  const [selectedImage, setSelectedImage] = useState(
    props.color_images[0].primary_image_url
  );
  const addToCart = async (e) => {
    try {
      e.stopPropagation();
      if (!localStorage.getItem("token")) {
        setshowLoginPopup(true);
        return;
      }
      setLoading(true);

      const response = await api.post("/cart-items/", {
        fabric_id: props.id,
        color: selectedColor,
        quantity: "1",
      });
      if (response.status === 200) {
        toast.success("Item added to bag");
        setLoading(false);
      } else if (response.status === 201) {
        toast.success("Item added to bag");
        props.setRefresh(Date.now());
        setLoading(false);
      }
    } catch (err) {
      console.log("error:", err);
      setLoading(false);
    }
  };

  return (
    <div
      className="product-card-container3"
      onClick={() => {
        navigate(`/product/${props.id}`);
      }}
      style={{
        backgroundImage: `url(${selectedImage})`,
        cursor: "pointer",
      }}
    >
      <TrendyDisplay {...props} setshowLoginPopup={setshowLoginPopup} />

      <div className="product-gallery-row">
        <div
          className="circles"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {props.color_images.map((e, i) => (
            <div
              className="circle1"
              key={i}
              style={
                selectedColor === e.color
                  ? {
                      border: "2px solid rgb(255,255,255)",
                      backgroundColor: e.color,
                      cursor: "pointer",
                    }
                  : {
                      border: "2px solid transparent",
                      backgroundColor: e.color,
                      cursor: "pointer",
                    }
              }
              onClick={(ev) => {
                ev.stopPropagation();
                setSelectedColor(e.color);
                setSelectedImage(e.primary_image_url);
              }}
            ></div>
          ))}
        </div>
        <div
          className="adddiv"
          onClick={(e) => {
            !loading && addToCart(e);
          }}
        >
          {!loading ? (
            <span>+</span>
          ) : (
            <TailSpin
              visible={true}
              height="25"
              width="25"
              color="#000"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
        </div>
      </div>
      {showLoginPopup && (
        <div
          className="loginpopup"
          onClick={(e) => {
            e.stopPropagation();
            setshowLoginPopup(false);
          }}
        >
          <div
            className="loginpopuswrapper"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div
              className="closeicondiv"
              onClick={(e) => {
                e.stopPropagation();
                setshowLoginPopup(false);
              }}
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.15993"
                  y="1.15993"
                  width="25.976"
                  height="25.976"
                  rx="12.988"
                  stroke="#666666"
                  stroke-width="2.31986"
                />
                <path
                  d="M19.5203 8.78451C19.4414 8.70546 19.3477 8.64275 19.2446 8.59996C19.1414 8.55717 19.0308 8.53514 18.9192 8.53514C18.8075 8.53514 18.6969 8.55717 18.5938 8.59996C18.4906 8.64275 18.3969 8.70546 18.318 8.78451L14.1483 12.9457L9.97865 8.77598C9.89971 8.69704 9.80599 8.63442 9.70284 8.59169C9.59969 8.54897 9.48914 8.52698 9.3775 8.52698C9.26586 8.52698 9.1553 8.54897 9.05216 8.59169C8.94901 8.63442 8.85529 8.69704 8.77635 8.77598C8.6974 8.85493 8.63478 8.94865 8.59206 9.05179C8.54933 9.15494 8.52734 9.26549 8.52734 9.37713C8.52734 9.48878 8.54933 9.59933 8.59206 9.70247C8.63478 9.80562 8.6974 9.89934 8.77635 9.97828L12.946 14.148L8.77635 18.3176C8.6974 18.3966 8.63478 18.4903 8.59206 18.5935C8.54933 18.6966 8.52734 18.8072 8.52734 18.9188C8.52734 19.0304 8.54933 19.141 8.59206 19.2441C8.63478 19.3473 8.6974 19.441 8.77635 19.5199C8.85529 19.5989 8.94901 19.6615 9.05216 19.7042C9.1553 19.747 9.26586 19.769 9.3775 19.769C9.48914 19.769 9.59969 19.747 9.70284 19.7042C9.80599 19.6615 9.89971 19.5989 9.97865 19.5199L14.1483 15.3503L18.318 19.5199C18.397 19.5989 18.4907 19.6615 18.5938 19.7042C18.697 19.747 18.8075 19.769 18.9192 19.769C19.0308 19.769 19.1414 19.747 19.2445 19.7042C19.3477 19.6615 19.4414 19.5989 19.5203 19.5199C19.5993 19.441 19.6619 19.3473 19.7046 19.2441C19.7473 19.141 19.7693 19.0304 19.7693 18.9188C19.7693 18.8072 19.7473 18.6966 19.7046 18.5935C19.6619 18.4903 19.5993 18.3966 19.5203 18.3176L15.3506 14.148L19.5203 9.97828C19.8443 9.65426 19.8443 9.10853 19.5203 8.78451Z"
                  fill="#666666"
                />
              </svg>
            </div>

            <div className="loginpopupsvgdiv">
              <svg
                width="76"
                height="80"
                viewBox="0 0 76 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M71.8542 48.0208C73.4515 48.9236 74.4845 50.2691 74.9532 52.0573C75.422 53.8455 75.2049 55.5382 74.3022 57.1354L70.9688 62.8646C70.066 64.4618 68.7206 65.4948 66.9324 65.9635C65.1442 66.4323 63.4515 66.2153 61.8542 65.3125L48.0001 57.3438V73.3333C48.0001 75.1389 47.3404 76.7014 46.0209 78.0208C44.7015 79.3403 43.139 80 41.3334 80H34.6667C32.8612 80 31.2987 79.3403 29.9792 78.0208C28.6598 76.7014 28.0001 75.1389 28.0001 73.3333V57.3438L14.1459 65.3125C12.5487 66.2153 10.856 66.4323 9.06778 65.9635C7.27959 65.4948 5.9341 64.4618 5.03132 62.8646L1.69799 57.1354C0.795213 55.5382 0.578199 53.8455 1.04695 52.0573C1.5157 50.2691 2.54869 48.9236 4.14591 48.0208L18.0001 40L4.14591 31.9792C2.54869 31.0764 1.5157 29.7309 1.04695 27.9427C0.578199 26.1545 0.795213 24.4618 1.69799 22.8646L5.03132 17.1354C5.9341 15.5382 7.27959 14.5052 9.06778 14.0365C10.856 13.5677 12.5487 13.7847 14.1459 14.6875L28.0001 22.6562V6.66667C28.0001 4.86111 28.6598 3.29861 29.9792 1.97917C31.2987 0.659722 32.8612 0 34.6667 0H41.3334C43.139 0 44.7015 0.659722 46.0209 1.97917C47.3404 3.29861 48.0001 4.86111 48.0001 6.66667V22.6562L61.8542 14.6875C63.4515 13.7847 65.1442 13.5677 66.9324 14.0365C68.7206 14.5052 70.066 15.5382 70.9688 17.1354L74.3022 22.8646C75.2049 24.4618 75.422 26.1545 74.9532 27.9427C74.4845 29.7309 73.4515 31.0764 71.8542 31.9792L58.0001 40L71.8542 48.0208Z"
                  fill="black"
                />
                <path
                  d="M36.125 47.5859L35.6328 23H39.8984L39.4062 47.5859H36.125ZM35.7734 56.4688C35.2578 55.9531 35 55.3203 35 54.5703C35 53.8203 35.2578 53.1875 35.7734 52.6719C36.3047 52.1406 36.9766 51.875 37.7891 51.875C38.6016 51.875 39.2656 52.1406 39.7812 52.6719C40.2969 53.1875 40.5547 53.8203 40.5547 54.5703C40.5547 55.3203 40.2969 55.9531 39.7812 56.4688C39.2656 56.9844 38.6016 57.2422 37.7891 57.2422C36.9766 57.2422 36.3047 56.9844 35.7734 56.4688Z"
                  fill="white"
                />
              </svg>
            </div>
            <h1>Login Required</h1>
            <p>This action requires login.</p>
            <div className="buttonsinloginpopup">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/login");
                }}
              >
                Login
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setshowLoginPopup(false);
                }}
              >
                No, I'm cool
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StylishDisplay;
