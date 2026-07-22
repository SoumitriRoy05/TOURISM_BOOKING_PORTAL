import "./FlightHero.css";
import { FaPlane, FaShieldAlt, FaBolt, FaTag } from "react-icons/fa";

function FlightHero() {
  return (
    <section className="flight-hero-aurora">
      {/* Background Video of Flight Taking Off & Landing */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="flight-bg-video"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-airplane-flying-over-clouds-during-sunset-3053-large.mp4" type="video/mp4" />
        <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-an-airplane-landing-on-the-runway-41564-large.mp4" type="video/mp4" />
      </video>

      {/* Dark Mesh & Glow Overlay */}
      <div className="flight-hero-glow"></div>
      <div className="flight-video-overlay"></div>

      <div className="flight-hero-container">
        
        <div className="flight-hero-badge">
          <FaPlane className="badge-plane-icon" />
          <span>FLY ACROSS INCREDIBLE INDIA</span>
        </div>

        <h1 className="flight-hero-title">
          BOOK <span className="title-highlight">FLIGHTS</span>
          <br />
          <span className="title-stroke">AT BEST PRICES</span>
        </h1>

        <p className="flight-hero-subtitle">
          Compare leading domestic airlines, unlock exclusive flight deals, and fly seamlessly to India's top dream destinations.
        </p>

        <div className="flight-perks-row">
          <div className="perk-item">
            <FaBolt className="perk-icon" />
            <span>Instant E-Tickets</span>
          </div>
          <div className="perk-item">
            <FaShieldAlt className="perk-icon" />
            <span>Zero Convenience Fee Options</span>
          </div>
          <div className="perk-item">
            <FaTag className="perk-icon" />
            <span>Best Price Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FlightHero;
