import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const Thankyou = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [myState, setMystate] = useState(0);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(id);
    toast.success("Copied to clipboard");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    setMystate((prev) => prev + 1);
  }, []);
  return (
    <div className="thankyou">
      <div className="thankyoucontainer">
        <div className="svgcontainerinthankyou">
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
              d="M26.3633 40.1584L34.0299 47.8251L49.3633 31.3965"
              stroke="white"
              stroke-width="3.28571"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h1>Thank You</h1>
        <h3>Your request has been submitted successfuly.</h3>
        <p className="request">Request number</p>
        <div className="copydiv">
          <div className="codediv">
            <p>#{id}</p>
          </div>
          <div className="copybuttondiv" onClick={() => copyToClipboard(id)}>
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 1.125H1V12.5"
                stroke="white"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.5 4.625H15V15.125C15 15.5891 14.8156 16.0342 14.4874 16.3624C14.1592 16.6906 13.7141 16.875 13.25 16.875H6.25C5.78587 16.875 5.34075 16.6906 5.01256 16.3624C4.68437 16.0342 4.5 15.5891 4.5 15.125V4.625Z"
                stroke="white"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Copy
          </div>
        </div>
        <p>
          We have recieved your email. We are looking into yor request and will
          get back to you as soon as possible.
        </p>
        <button onClick={() => navigate("/")}>Great</button>
      </div>
    </div>
  );
};

export default Thankyou;
