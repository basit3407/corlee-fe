import React, { useState } from "react";

const Imagesinproduct = (props) => {
  const [images, setimages] = useState(props.images);
  return (
    <div className="imagesinproductdiv">
      <div className="verticalimagesinproduct">
        <div
          className="image1inproductdivverticalimages"
          style={{
            backgroundImage: `url(${images.image2})`,
            backgroundSize: "cover",
            cursor: "pointer",
          }}
          onClick={() => {
            const url = images.image2;
            const image1url = images.image1;
            setimages({
              ...images,
              image1: url,
              image2: image1url,
            });
          }}
        ></div>
        <div
          className="image2inproductdivverticalimages"
          style={{
            backgroundImage: `url(${images.image3})`,
            backgroundSize: "cover",
            cursor: "pointer",
          }}
          onClick={() => {
            const url = images.image3;
            const image1url = images.image1;
            setimages({
              ...images,
              image1: url,
              image3: image1url,
            });
          }}
        ></div>
        <div
          onClick={() => {
            const url = images.image4;
            const image1url = images.image1;
            setimages({
              ...images,
              image1: url,
              image4: image1url,
            });
          }}
          className="image3inproductdivverticalimages"
          style={{
            backgroundImage: `url(${images.image4})`,
            backgroundSize: "cover",
            cursor: "pointer",
          }}
        ></div>
      </div>
      <div
        className="bigimage"
        style={{
          backgroundImage: `url(${images.image1})`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default Imagesinproduct;
