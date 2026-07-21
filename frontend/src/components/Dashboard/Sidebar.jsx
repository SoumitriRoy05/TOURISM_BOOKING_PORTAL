import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaRobot,
  FaHotel,
  FaPlane,
  FaSuitcaseRolling,
  FaHeart,
  FaClipboardList,
  FaSignOutAlt,
  FaCompass,
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

function Sidebar() {

  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">

        <FaCompass />

        <div>

          <h2>BharatYatra</h2>

          <span>Explore India</span>

        </div>

      </div>

      <nav>

        <Link to="/dashboard" className="menu-item">

          <FaHome />

          Dashboard

        </Link>

        <Link to="/planner" className="menu-item">

          <FaRobot />

          AI Planner

        </Link>

        <Link to="/hotels" className="menu-item">

          <FaHotel />

          Hotels

        </Link>

        <Link to="/flights" className="menu-item">

          <FaPlane />

          Flights

        </Link>

        <Link to="/packages" className="menu-item">

          <FaSuitcaseRolling />

          Packages

        </Link>

        <div className="menu-item">

          <FaHeart />

          Wishlist

        </div>

        <div className="menu-item">

          <FaClipboardList />

          My Bookings

        </div>

      </nav>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >

        <FaSignOutAlt />

        Logout

      </button>

    </aside>
  );
}

export default Sidebar;