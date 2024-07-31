import { useEffect } from "react";
import BlogsComponent from "../components/App/BlogsScreen";
import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import { mockData } from "../util";

function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
