import RequestHistorySection from "../RequestHistorySection";
import TicketInquiryDashboard from "../TicketInquiryDashboard";
import "./style.css";
import React, { useState, useEffect } from "react";

function TicketInquirySection({ ticketInquiriesData }) {
  const [counter, setCounter] = useState(0);
  let [imagesnum, setImagesNum] = useState(5);

  const updateCounter = () => {
    const width = window.innerWidth;

    if (width < 438) {
      setCounter(5);
    } else if (width < 644) {
      setCounter(4);
    } else if (width < 870) {
      setCounter(3);
    } else if (width < 1100) {
      setCounter(2);
    } else if (width < 1320) {
      setCounter(1);
    } else {
      setCounter(0);
    }
  };

  useEffect(() => {
    updateCounter();
    window.addEventListener("resize", updateCounter);

    return () => window.removeEventListener("resize", updateCounter);
  }, []);

  return (
    <div className="request-history-container2">
      <RequestHistorySection />
      <div className="resultspage">
        <div className="resultsfound">
          <p onClick={() => console.log(counter)}>32 Results found</p>
        </div>
        <div className="productinquiry">
          <div className="infotext">
            <p className="ticket">Ticket Number : AB9825</p>
            <p className="inqtext">Products Inquiry</p>
          </div>
          <div className="otherdata">
            <div className="imgdiv">
              <div className="image"></div>
              <div className="textunderimg">
                <p className="number">A21RF</p>
                <div className="length">100m</div>
              </div>
            </div>
            <div className="productinqtextdiv">
              <div className="headingofproduct">
                Labore ut molestias asperiores nihil reiciendis debitis
              </div>
              <p className="productdesc">
                Labore ut molestias asperiores nihil reiciendis debitis qui
                distinctio modi. Ea ab beatae nisi unde molestias. Distinctio
                omnis non et officiis deserunt possimus aspernatur. Sit
                molestiae deleniti culpa nemo placeat nesciunt. Ipsum esse quia.
                Ut deserunt consequatur at.Voluptatem nostrum non ea voluptatem
                repellat.
              </p>
            </div>
          </div>{" "}
          <div className="datediv">
            <p className="datep">Sat Nov 23 2023</p>
          </div>
        </div>
        <div className="productinquiry">
          <div className="infotext">
            <p className="ticket">Ticket Number : AB9825</p>
            <p className="inqtext">Products Request</p>
          </div>
          <div className="otherdata2">
            <div className="productimages">
              <div className="productimagediv">
                <div className="imageofproduct">
                  <p className="imagetext">+{imagesnum + counter} </p>
                </div>
                <div className="imagedetailsdiv">
                  <p className="ticketnumber">A12RF</p>{" "}
                  <p className="lengthofimagediv">100m</p>{" "}
                </div>
              </div>
              <div className="productimagediv">
                <div className="imageofproduct">
                  <p className="imagetext">+{imagesnum + counter} </p>
                </div>
                <div className="imagedetailsdiv">
                  <p className="ticketnumber">A12RF</p>{" "}
                  <p className="lengthofimagediv">100m</p>{" "}
                </div>
              </div>
              <div className="productimagediv">
                <div className="imageofproduct">
                  <p className="imagetext">+{imagesnum + counter} </p>
                </div>
                <div className="imagedetailsdiv">
                  <p className="ticketnumber">A12RF</p>{" "}
                  <p className="lengthofimagediv">100m</p>{" "}
                </div>
              </div>
              <div className="productimagediv">
                <div className="imageofproduct">
                  <p className="imagetext">+{imagesnum + counter} </p>
                </div>
                <div className="imagedetailsdiv">
                  <p className="ticketnumber">A12RF</p>{" "}
                  <p className="lengthofimagediv">100m</p>{" "}
                </div>
              </div>
              <div className="productimagediv">
                <div className="imageofproduct">
                  <p className="imagetext">+{imagesnum + counter} </p>
                </div>
                <div className="imagedetailsdiv">
                  <p className="ticketnumber">A12RF</p>{" "}
                  <p className="lengthofimagediv">100m</p>{" "}
                </div>
              </div>
              <div className="productimagediv">
                <div className="imageofproduct">
                  <p className="imagetext">+{imagesnum + counter} </p>
                </div>
                <div className="imagedetailsdiv">
                  <p className="ticketnumber">A12RF</p>{" "}
                  <p className="lengthofimagediv">100m</p>{" "}
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="datediv">
            <p className="datep">Sat Nov 23 2023</p>
          </div>
        </div>
        <div className="productinquiry generalinquiry">
          <div className="infotext">
            <p className="ticket">Ticket Number : AB9825</p>
            <p className="inqtext">General Inquiry</p>
          </div>
          <div className="otherdata">
            <div className="productinqtextdiv">
              <div className="headingofproduct">
                Labore ut molestias asperiores nihil reiciendis debitis
              </div>
              <p className="productdesc">
                Labore ut molestias asperiores nihil reiciendis debitis qui
                distinctio modi. Ea ab beatae nisi unde molestias. Distinctio
                omnis non et officiis deserunt possimus aspernatur. Sit
                molestiae deleniti culpa nemo placeat nesciunt. Ipsum esse quia.
                Ut deserunt consequatur at.Voluptatem nostrum non ea voluptatem
                repellat. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ducimus autem eos sed excepturi ea magnam nulla nobis.
                Repellat rem atque aperiam tempore, optio illo natus commodi
                iure facere similique laudantium esse autem aliquid, accusantium
                eius ipsa excepturi id corporis saepe? Provident veniam modi
                voluptatum quam velit quis quos quasi assumenda praesentium
                asperiores. Cupiditate laboriosam eum natus exercitationem ut,
                obcaecati dolores provident. Laudantium quae eum repudiandae
                labore saepe.
              </p>
            </div>
          </div>{" "}
          <div className="datediv">
            <p className="datep">Sat Nov 23 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketInquirySection;
