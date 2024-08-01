import React, { useState } from "react";

const Imagesinproduct = ({ currentImages, setCurrentImages }) => {
  return (
    <div className="imagesinproductdiv">
      <div className="verticalimagesinproduct">
        <div
          onClick={() => {
            const curr = currentImages.primary_image_url;
            const previous = currentImages.aux_image1_url;
            setCurrentImages((prev) => {
              return {
                ...prev,
                primary_image_url: previous,
                aux_image1_url: curr,
              };
            });
          }}
          className="image1inproductdivverticalimages"
          style={{
            backgroundImage: `url(${currentImages.aux_image1_url})`,
            backgroundSize: "cover",
            cursor: "pointer",
          }}
        ></div>
        <div
          className="image2inproductdivverticalimages"
          style={{
            backgroundImage: `url(${currentImages.aux_image2_url})`,
            backgroundSize: "cover",
            cursor: "pointer",
          }}
          onClick={() => {
            const curr = currentImages.primary_image_url;
            const previous = currentImages.aux_image2_url;
            setCurrentImages((prev) => {
              return {
                ...prev,
                primary_image_url: previous,
                aux_image2_url: curr,
              };
            });
          }}
        ></div>
        <div
          className="image3inproductdivverticalimages"
          style={{
            backgroundImage: `url(${currentImages.aux_image3_url})`,
            backgroundSize: "cover",
            cursor: "pointer",
          }}
          onClick={() => {
            const curr = currentImages.primary_image_url;
            const previous = currentImages.aux_image3_url;
            setCurrentImages((prev) => {
              return {
                ...prev,
                primary_image_url: previous,
                aux_image3_url: curr,
              };
            });
          }}
        ></div>
      </div>
      <div
        className="bigimage"
        style={{
          backgroundImage: `url(${currentImages.primary_image_url})`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default Imagesinproduct;
