import ContentRenderer from "../ContentRenderer";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import SvgIcon5 from "./icons/SvgIcon5";
import "./style.css";
import messages from "./messages.json";
import { useEffect, useState } from "react";
import { api } from "../../../../config/api";

function ContentDisplayWidgetGenerator() {
  const [blogs, setBlogs] = useState([]);
  const loadBlogs = async () => {
    try {
      let response = await api.get("/blogs/");
      console.log(response);
    } catch (e) {}
  };
  useEffect(() => {
    loadBlogs();
  });
  return (
    <div className="blog-post-container-blogs">
      <p className="hero-title-text-style-blogs">{messages["blogs"]}</p>
      <p className="blog-post-content-text-style-blogs">
        {messages["lrem_ipsum_tis_kvasiposade_poment_vtirade_ding_eft"]}
      </p>
      <div className="blog-post-card-container-blogs">
        <div className="horizontal-button-group-blogs">
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="button-with-icon2-blogs">
            {messages["newest"]}
            <SvgIcon1 className="svg-container4-blogs" />
          </button>
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="button-with-icon-blogs">
            {messages["black"]}
            <SvgIcon2 className="svg-container4-blogs" />
          </button>
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="button-with-icon1-blogs">
            {messages["red"]}
            <SvgIcon3 className="svg-container4-blogs" />
          </button>
        </div>
        <div className="horizontal-layout-container-blogs">
          <div className="flexible-container-blogs">
            {/* Input Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
            <div className="rounded-header-container-blogs">
              <SvgIcon4 className="svg-container5-blogs" />
              <input
                placeholder="search here..."
                type="text"
                className="input-with-icon-blogs input-style-f62-blogs::placeholder"
              />
            </div>
          </div>
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="button-with-icon3-blogs">
            <SvgIcon5 className="svg-container6-blogs" />
            {messages["filter"]}
          </button>
        </div>
      </div>
      <ContentRenderer blogs={blogs} />
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="blog-load-more-button-style-blogs">
        {messages["load_more"]}
      </button>
    </div>
  );
}

export default ContentDisplayWidgetGenerator;
