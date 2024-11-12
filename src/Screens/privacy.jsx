import React from "react";
import Navbar from "../components/App/Navbar";
import BottomBar from "../components/App/BottomBar";

const terms = () => {
  return (
    <div>
      <Navbar />
      <div className="containerTerms">
        <h1>Privacy Policy</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit magni
          magnam obcaecati provident laudantium ipsum doloribus eum quo dolorem
          molestias reprehenderit deleniti corrupti quos nobis eveniet, natus
          fugit ullam vitae officia dignissimos ea ab. Quidem omnis distinctio
          mollitia impedit, repellendus quae enim rem praesentium quisquam
          quaerat iste ullam aperiam doloremque eius minima possimus molestias?
          Beatae, sed accusantium perferendis aperiam illum ab molestias sint
          veniam. Architecto veritatis accusantium officia beatae aliquid
          necessitatibus doloribus ullam culpa animi aliquam illo, ratione ipsam
          nihil eveniet laboriosam sit doloremque deserunt corporis temporibus
          rem autem. Cupiditate architecto voluptates, soluta cum molestiae
          neque doloremque sunt optio dolor.
        </p>
      </div>
      <BottomBar />
    </div>
  );
};

export default terms;
