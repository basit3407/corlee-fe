import { useEffect } from "react";
import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import SingleBlogComponent from "../components/App/SingleBlogScreen";
import { useParams } from "react-router-dom";

function SingleBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { id } = useParams();
  return (
    <>
      <Navbar />
      <SingleBlogComponent id={id} />;
      <BottomBar />
    </>
  );
}

export default SingleBlog;
