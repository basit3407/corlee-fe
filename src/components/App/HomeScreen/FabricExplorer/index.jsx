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
          <SvgIcon2 className="svg-container4" />
        </div>
        <div className="arrowdiv2" onClick={handleClick}>
          <SvgIcon2 className="svg-container4" />
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
