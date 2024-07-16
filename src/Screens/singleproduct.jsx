import React, { useEffect } from "react";
import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import Productcomponent from "../components/App/ProductScreen";
import StylishProductDisplay from "../components/App/ProductScreen/StylishProductDisplay";

const singleproduct = () => {
  let text = "(by meter)";
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Navbar />
      <div className="productdetailsdiv2">
        <div className="imagesinproductdiv">
          <div className="verticalimagesinproduct">
            <div className="image1inproductdivverticalimages"></div>
            <div className="image2inproductdivverticalimages"></div>
            <div className="image3inproductdivverticalimages"></div>
          </div>
          <div className="bigimage"></div>
        </div>
        <div className="productdetailsdic">
          <button className="heartbutton">
            <svg
              width="29"
              height="26"
              viewBox="0 0 29 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6375 21.4115L14.5 21.549L14.3488 21.4115C7.8175 15.4853 3.5 11.5665 3.5 7.59277C3.5 4.84277 5.5625 2.78027 8.3125 2.78027C10.43 2.78027 12.4925 4.15527 13.2212 6.02527H15.7788C16.5075 4.15527 18.57 2.78027 20.6875 2.78027C23.4375 2.78027 25.5 4.84277 25.5 7.59277C25.5 11.5665 21.1825 15.4853 14.6375 21.4115ZM20.6875 0.0302734C18.295 0.0302734 15.9987 1.14402 14.5 2.89027C13.0013 1.14402 10.705 0.0302734 8.3125 0.0302734C4.0775 0.0302734 0.75 3.34402 0.75 7.59277C0.75 12.7765 5.425 17.0253 12.5063 23.4465L14.5 25.2615L16.4937 23.4465C23.575 17.0253 28.25 12.7765 28.25 7.59277C28.25 3.34402 24.9225 0.0302734 20.6875 0.0302734Z"
                fill="black"
              />
            </svg>
          </button>
          <h1>AB13FC</h1>
          <p className="functionaltext">Functional</p>
          <p className="functionaltext2">
            Lörem ipsum tis kvasiposade: poment vätirade ding, eftersom galna
            chips-sjukan tegen, numun, jykalig. Tektiga mobilmissbruk i euroktig
            att metrocentrism astrotopi
          </p>
          <p className="colorsinproduct">Colors</p>
          <div className="colorsinproduct">
            <div className="color1inproduct"></div>
            <div className="color2inproduct"></div>
            <div className="color3inproduct"></div>
            <div className="color4inproduct"></div>
          </div>
          <p className="quantitydivinproduct">
            Quantity <span>{text}</span>{" "}
          </p>
          <div className="quantitydiv inproduct">
            <button>-</button>
            100
            <button>+</button>
          </div>
          <div className="buttonsinproduct">
            <button className="primbutton">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.2778 5.80085H18.2589C18.1416 4.29694 17.484 2.89401 16.417 1.87111C15.3499 0.848205 13.9516 0.280273 12.5 0.280273C11.0484 0.280273 9.65007 0.848205 8.58301 1.87111C7.51595 2.89401 6.85839 4.29694 6.74111 5.80085H2.72222C2.13285 5.80085 1.56762 6.04422 1.15087 6.47741C0.734126 6.91061 0.5 7.49815 0.5 8.11078V21.9703C0.5 22.583 0.734126 23.1705 1.15087 23.6037C1.56762 24.0369 2.13285 24.2803 2.72222 24.2803H22.2778C22.8671 24.2803 23.4324 24.0369 23.8491 23.6037C24.2659 23.1705 24.5 22.583 24.5 21.9703V8.11078C24.5 7.49815 24.2659 6.91061 23.8491 6.47741C23.4324 6.04422 22.8671 5.80085 22.2778 5.80085ZM12.5 3.02894C13.2481 3.02901 13.971 3.30926 14.5365 3.81834C15.102 4.32742 15.472 5.03124 15.5789 5.80085H9.42111C9.52798 5.03124 9.89804 4.32742 10.4635 3.81834C11.029 3.30926 11.7519 3.02901 12.5 3.02894ZM21.8333 21.5084H3.16667V8.57276H6.72222V9.95872C6.72222 10.3263 6.8627 10.6788 7.11275 10.9387C7.36279 11.1987 7.70193 11.3447 8.05556 11.3447C8.40918 11.3447 8.74832 11.1987 8.99836 10.9387C9.24841 10.6788 9.38889 10.3263 9.38889 9.95872V8.57276H15.6111V9.95872C15.6111 10.3263 15.7516 10.6788 16.0016 10.9387C16.2517 11.1987 16.5908 11.3447 16.9444 11.3447C17.2981 11.3447 17.6372 11.1987 17.8873 10.9387C18.1373 10.6788 18.2778 10.3263 18.2778 9.95872V8.57276H21.8333V21.5084Z"
                  fill="white"
                />
              </svg>
              Add to Bag
            </button>
            <button className="secbutton">Check out</button>
          </div>
        </div>
      </div>
      <div className="horizontaldiv">
        <div className="onedivofproduct">
          <p className="mainkeytext">Item Code</p>
          <div className="maintextans">CB-258</div>
        </div>
        <div className="lineinproducts"></div>
        <div className="onedivofproduct">
          <p className="mainkeytext">Composition</p>
          <div className="maintextans">Lorem Ipsum</div>
        </div>
        <div className="lineinproducts"></div>
        <div className="onedivofproduct">
          <p className="mainkeytext">Weight</p>
          <div className="maintextans">500g</div>
        </div>
        <div className="lineinproducts"></div>
        <div className="onedivofproduct">
          <p className="mainkeytext">Finish</p>
          <div className="maintextans">Cotton</div>
        </div>
        <div className="lineinproducts"></div>
        <div className="onedivofproduct last">
          <div className="maintextans">Need Support</div>
        </div>
      </div>

      <StylishProductDisplay product={true} />
      <BottomBar />
    </div>
  );
};

export default singleproduct;
