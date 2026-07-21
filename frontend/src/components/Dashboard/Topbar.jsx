import "./Topbar.css";

import {
  FaBell,
  FaSearch,
  FaUserCircle
} from "react-icons/fa";

function Topbar() {

  return (

    <header className="topbar">

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search destinations..."
        />

      </div>

      <div className="topbar-right">

        <FaBell className="top-icon"/>

        <FaUserCircle className="profile"/>

      </div>

    </header>

  );

}

export default Topbar;