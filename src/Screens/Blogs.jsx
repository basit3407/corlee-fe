import BlogsComponent from "../components/App/BlogsScreen";
import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import { mockData } from "../util";

function Blogs() {
  return (
    <>
      <Navbar />
      <BlogsComponent
        generateContentDisplayWidgetArgs={
          mockData.generateContentDisplayWidgetArgs
        }
      />
      <BottomBar />
    </>
  );
}

export default Blogs;
