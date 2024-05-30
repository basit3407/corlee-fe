import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import SingleBlogComponent from "../components/App/SingleBlogScreen";

function SingleBlog() {
  return (
    <>
      <Navbar />
      <SingleBlogComponent />;
      <BottomBar />
    </>
  );
}

export default SingleBlog;
