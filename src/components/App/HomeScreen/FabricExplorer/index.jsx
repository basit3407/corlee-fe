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
  const [currentCount, setCurrentCount] = useState(0);
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
          <div
            className="center-box-with-svg"
            onClick={() => {
              if (currentCount === 0) {
                setCurrentCount(categs.length - 1);
              } else {
                setCurrentCount((prev) => prev - 1);
              }
            }}
          >
            <SvgIcon2 className="svg-container4" />
          </div>
          <div
            className="black-rounded-box-with-text"
            onClick={() => {
              if (currentCount === categs.length - 1) {
                setCurrentCount(0);
              } else {
                setCurrentCount((prev) => prev + 1);
              }
            }}
          >
            <SvgIcon3 className="svg-container4" />
          </div>
        </div>
      </div>
      <div className="material-container">
        <div className="material-button-container">
          {loading ? (
            <p className="material-heading">Loading...</p>
          ) : (
            <p className="material-heading">{categs[currentCount]?.name}</p>
          )}

          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button
            className="material-button2"
            onClick={() => {
              navigate(
                `/products/${categs[currentCount]?.name}/${categs[currentCount].description}`
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
    </>
  );
}

export default FabricExplorer;
