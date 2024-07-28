import { useEffect, useState } from "react";
import { api } from "../../../config/api";
import Container from "../../UI/Container";
import DynamicContentDisplay from "./DynamicContentDisplay";
import ImageComponent from "./ImageComponent/Index";
import TechInfoBox from "./TechInfoBox";
import { TailSpin } from "react-loader-spinner";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function SingleBlogComponent(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const loadblog = async () => {
    try {
      const response = await api.get(`/blogs/${props.id}`);
      setLoading(false);
      if (response.status === 200) {
        setData(response.data);
        setLoading(false);
      } else {
        toast.error("Something went wrong");
        setLoading(false);
        navigate("/");
      }
    } catch (e) {
      setLoading(false);
      toast.error("Something went wrong");
      setLoading(false);
      navigate("/");
    }
  };
  useEffect(() => {
    loadblog();
  }, []);
  return (
    <Container>
      {loading ? (
        <div
          className="spinner"
          style={{
            margin: "30px auto",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TailSpin
            visible={true}
            height="60"
            width="60"
            color="#000"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="main-content-container-sb">
          <div className="vertical-centered-column-layout-sb">
            <TechInfoBox {...data} />
            <ImageComponent {...data} />
            <DynamicContentDisplay {...data} />
          </div>
        </div>
      )}
    </Container>
  );
}

export default SingleBlogComponent;
