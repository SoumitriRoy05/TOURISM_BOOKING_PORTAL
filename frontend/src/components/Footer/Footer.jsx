import "./Footer.css";
import { FaGlobe, FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-aurora">
      <div className="footer-glow-line"></div>
      <div className="footer-container">
        
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-badge">
              <FaGlobe className="logo-icon" />
            </div>
            <h2>BHARAT<span className="accent-text">YATRA</span></h2>
          </div>
          <p className="brand-tagline">
            Experience India's magic with AI-powered travel planning, luxury hotel bookings, and curated tour packages.
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/packages">Destinations</Link></li>
              <li><Link to="/hotels">Luxury Hotels</Link></li>
              <li><Link to="/flights">Flight Deals</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/planner">AI Trip Planner</Link></li>
              <li><Link to="/packages">Custom Packages</Link></li>
              <li><Link to="/login">User Account</Link></li>

            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <div className="footer-socials">
              <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
              <a href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
              <a href="#youtube" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 BharatYatra. Built with <FaHeart className="heart-icon" /> for Incredible India.</p>
      </div>
    </footer>
  );
}

export default Footer;