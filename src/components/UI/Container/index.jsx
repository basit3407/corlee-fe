import "./style.css";

export default function Container({ style, children }) {
  return (
    <div
      className="uicontainer"
      style={style}
      data-ignore="used only for top most containter width"
    >
      {children}
    </div>
  );
}
