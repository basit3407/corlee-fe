import "./style.css";

function ImageComponent(data) {
  return (
    <>
      <img src={data.photo_url} className="image-container-sb" />
    </>
  );
}

export default ImageComponent;
