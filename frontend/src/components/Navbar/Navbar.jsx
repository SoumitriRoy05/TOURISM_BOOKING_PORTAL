import "./Navbar.css";
import {
  FaSearch,
  FaUserCircle,
  FaCompass,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const changeNavbar = () => {
      setScroll(window.scrollY > 60);
    };

    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  return (
    <nav className={scroll ? "navbar active-nav" : "navbar"}>

      {/* Logo */}
      <div className="logo">
        <FaCompass className="logo-icon" />

        <div>
          <h2>BharatYatra</h2>
          <span>Explore • Experience • Discover</span>
        </div>
      </div>

      {/* Navigation */}
      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/packages">Packages</Link>
        </li>

        <li>
          <Link to="/hotels">Hotels</Link>
        </li>

        <li>
          <Link to="/flights">Flights</Link>
        </li>

        <li>
          <Link to="/planner">AI Planner</Link>
        </li>

{/*         <li> */}
{/*           <Link to="/reviews">Reviews</Link> */}
{/*         </li> */}

{/*         <li> */}
{/*           <Link to="/contact">Contact</Link> */}
{/*         </li> */}

      </ul>

      {/* Right Menu */}
      <div className="right-menu">

        <FaSearch className="icon" />

        <Link to="/login">

          <button>

            Login

          </button>

        </Link>

        <FaUserCircle className="profile" />

      </div>

    </nav>
  );
}

export default Navbar;