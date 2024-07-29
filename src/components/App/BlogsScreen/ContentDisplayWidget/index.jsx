import TechCardDisplay from "../TechCardDisplay";
import ContentCard1 from "../ContentCard1";
import ContentCard from "../ContentCard";
import "./style.css";
import { useNavigate } from "react-router-dom";

function ContentDisplayWidget(blog) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card-container-blogs"
        onClick={() => {
          navigate(`/blog/${blog.id}`);
        }}
        style={{ cursor: "pointer" }}
      >
        <img className="card-container1-blogs" src={blog.photo_url} />
        <TechCardDisplay {...blog} />
      </div>
    </>
  );
}

export default ContentDisplayWidget;
