import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import SvgIcon2 from "../FabricInfoDisplay1/icons/SvgIcon2";
import SvgIcon3 from "../FabricInfoDisplay1/icons/SvgIcon3";
import { api } from "../../../../config/api";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FabricExplorer() {
  const [categs, setCategs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentcount, setCurrentCount] = useState(0);
  const navigate = useNavigate();
  const getCategories = async () => {
    try {
      setLoading(true);
      const response = await api.get("/categories/");
      if (response.status === 200) {
        setCategs(response.data.results);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  };

  const handleClick = () => {
    const elements = document.getElementsByClassName("mainwrapperofmaterial");
    const totalElements = elements.length;

    if (totalElements === 0) return; // No elements to scroll

    const nextIndex = currentcount === totalElements - 1 ? 0 : currentcount + 1;
    const NextElement = elements[nextIndex];
    const scrollLeft =
      NextElement.offsetLeft -
      window.innerWidth / 2 +
      NextElement.offsetWidth / 2;
    document.getElementsByClassName("material-container")[0].scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
    // NextElement.scrollIntoView({ behavior: "smooth" });
    setCurrentCount(nextIndex);
  };

  const handleClick2 = () => {
    const elements = document.getElementsByClassName("mainwrapperofmaterial");
    const totalElements = elements.length;

    if (totalElements === 0) return;

    const prevIndex = currentcount === 0 ? totalElements - 1 : currentcount - 1;
    const NextElement = elements[prevIndex];
    const scrollLeft =
      NextElement.offsetLeft -
      window.innerWidth / 2 +
      NextElement.offsetWidth / 2;
    document.getElementsByClassName("material-container")[0].scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
    // NextElement.scrollIntoView({ behavior: "smooth" });
    setCurrentCount(prevIndex);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <div className="fabric-range-section">
        <div className="fabric-types-section">
          <p className="fabric-type-heading">Range of fabric types we offer!</p>
          <p className="fabric-type-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            assumenda .
          </p>
        </div>
        <div className="fabric-type-range-container">
          <div className="center-box-with-svg">
            <SvgIcon2 className="svg-container4" />
          </div>
          <div className="black-rounded-box-with-text">
            <SvgIcon3 className="svg-container4" />
          </div>
        </div>
      </div>
      <div className="material-container">
        <div className="arrowdiv1" onClick={handleClick2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
              fill="#111"
            />
          </svg>
        </div>
        <div className="arrowdiv2" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
              fill="#111"
            />
          </svg>
        </div>
        {categs?.map((e, i) => (
          <div className="mainwrapperofmaterial" key={i}>
            <div className="material-button-container">
              <p className="material-heading">{e.name}</p>

              {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
              <button
                className="material-button2"
                onClick={() => {
                  navigate(
                    `/products/${categs[currentcount]?.name}/${categs[currentcount].description}`
                  );

                  window.scrollTo(0, 0);
                }}
                style={{
                  cursor: "pointer",
                }}
                disabled={loading}
              >
                Explore more
                <SvgIcon1 className="svg-container5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FabricExplorer;
