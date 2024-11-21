import "./date.css";

const Dates = () => {
  const currentDate = new Date();

  // Get the day, date, and time
  const dayOfWeek = currentDate.toLocaleDateString("en-GB", { weekday: "long" }); // "Thursday"
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }); // "21 November 2024"
  const formattedTime = currentDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Ensures 12-hour format
  });

  return (
    <div className="date-container">
      <p className="date-text">
        {dayOfWeek} | {formattedDate} | {formattedTime} <p><i className="ri-map-pin-line"></i> Haridwar, India</p>
      </p>
    </div>
  );
};

export default Dates;