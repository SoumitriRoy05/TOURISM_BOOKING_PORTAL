import "./QuickActions.css";
import { Link } from "react-router-dom";

import {
  FaRobot,
  FaHotel,
  FaPlane,
  FaSuitcaseRolling,
} from "react-icons/fa";

const actions = [
  {
    title: "AI Planner",
    desc: "Create smart travel itineraries",
    icon: <FaRobot />,
    color: "#4F46E5",
    link: "/planner",
  },
  {
    title: "Hotels",
    desc: "Book premium hotels",
    icon: <FaHotel />,
    color: "#10B981",
    link: "/hotels",
  },
  {
    title: "Flights",
    desc: "Find affordable flights",
    icon: <FaPlane />,
    color: "#F97316",
    link: "/flights",
  },
  {
    title: "Packages",
    desc: "Explore holiday packages",
    icon: <FaSuitcaseRolling />,
    color: "#EF4444",
    link: "/packages",
  },
];

function QuickActions() {
  return (
    <>
      <h2 className="section-title">Quick Actions</h2>

      <div className="quick-grid">
        {actions.map((item, index) => (
          <Link
            to={item.link}
            className="quick-card"
            key={index}
          >
            <div
              className="quick-icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default QuickActions;