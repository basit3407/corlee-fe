import { useEffect } from "react";
import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import SingleBlogComponent from "../components/App/SingleBlogScreen";

function SingleBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <SingleBlogComponent />;
      <BottomBar />
    </>
  );
}

export default SingleBlog;
