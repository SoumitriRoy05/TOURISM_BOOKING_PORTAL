import "./Navbar.css";
import { FaGlobe, FaSearch, FaUser, FaCompass } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const changeNavbar = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", changeNavbar);
    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/packages?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav className={scroll ? "navbar active-nav" : "navbar"}>
      {/* Logo */}
      <Link to="/" className="logo-container">
        <div className="logo-badge">
          <FaGlobe className="logo-icon" />
        </div>
        <div className="logo-text">
          <h2>BHARAT<span className="accent-text">YATRA</span></h2>
        </div>
      </Link>

      {/* Nav Links */}
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/packages" className={location.pathname === "/packages" ? "active" : ""}>
            Destination
          </Link>
        </li>
        <li>
          <Link to="/hotels" className={location.pathname === "/hotels" ? "active" : ""}>
            Hotels
          </Link>
        </li>
        <li>
          <Link to="/flights" className={location.pathname === "/flights" ? "active" : ""}>
            Flights
          </Link>
        </li>
      </ul>


      {/* Right Navbar Section (Search Pill + Login / Sign Up) */}
      <div className="right-menu">
        <form onSubmit={handleSearchSubmit} className="nav-search-box">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-icon-btn">
            <FaSearch />
          </button>
        </form>

        <div className="auth-buttons">
          <Link to="/login">
            <button className="neon-btn login-btn">
              <FaUser className="btn-icon" />
              <span>Log In</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;