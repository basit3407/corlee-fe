import "./style.css";
import messages from "./messages.json";

function TechInfoBox(data) {
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = days[date.getUTCDay()];
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    return `${dayOfWeek} ${month} ${day} ${year}`;
  }
  return (
    <div className="technology-card">
      <div className="technology-card2">
        <p className="tech-title-bold">{data.category_name}</p>
        <p className="tech-lauda-bold">{data.title}</p>
        <div className="technology-card1">
          <img
            src={
              data.author_photo_url ||
              "https://cdn-icons-png.flaticon.com/512/9203/9203764.png"
            }
            className="profile-image-container"
          />
          <div className="fisher-info-container">
            <p className="ice-fisher-paragraph">{data.author_name}</p>
            <img
              src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_9036_2d85b9.svg"
              alt=""
              className="ice-fisher-style"
            />
          </div>
          <p className="event-date-text-style">{formatDate(data.created_at)}</p>
        </div>
      </div>
    </div>
  );
}

export default TechInfoBox;
