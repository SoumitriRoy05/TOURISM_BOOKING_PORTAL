import "./StatsCards.css";
import {
  FaPlane,
  FaHotel,
  FaHeart,
  FaRobot,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaPlane />,
    title: "Trips Planned",
    value: "12",
    color: "#4F46E5",
  },
  {
    icon: <FaHotel />,
    title: "Hotels Booked",
    value: "8",
    color: "#10B981",
  },
  {
    icon: <FaHeart />,
    title: "Wishlist",
    value: "15",
    color: "#EF4444",
  },
  {
    icon: <FaRobot />,
    title: "AI Itineraries",
    value: "21",
    color: "#F97316",
  },
];

function StatsCards() {
  return (
    <section className="stats-grid">
      {stats.map((item, index) => (
        <div className="stat-card" key={index}>
          <div
            className="stat-icon"
            style={{ background: item.color }}
          >
            {item.icon}
          </div>

          <div>
            <h2>{item.value}</h2>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default StatsCards;