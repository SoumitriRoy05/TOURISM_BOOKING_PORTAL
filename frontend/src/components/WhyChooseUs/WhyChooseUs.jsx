import "./WhyChooseUs.css";
import { FaShieldAlt, FaStar, FaAward, FaUserCheck, FaHeadset } from "react-icons/fa";

function WhyChooseUs() {
  const stats = [
    { value: "100K+", label: "Happy Travelers" },
    { value: "500+", label: "5-Star Resorts & Palaces" },
    { value: "1,200+", label: "Daily Flight Routes" },
    { value: "4.9 ★", label: "Customer Satisfaction" }
  ];

  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        
        <div className="why-left-content">
          <span className="why-badge">🛡️ TRUSTED TRAVEL PORTAL</span>
          <h2>Why Thousands Choose <span className="neon-text">BharatYatra</span></h2>
          <p>
            We curate authentic Indian experiences with transparent pricing, zero hidden fees, AI-powered itinerary recommendations, and 24/7 dedicated traveler support.
          </p>

          <div className="why-features-list">
            <div className="why-feature-item">
              <div className="why-icon-box">
                <FaAward />
              </div>
              <div>
                <h4>Best Rate Guarantee</h4>
                <p>Unlock exclusive insider prices and handpicked luxury perks for top heritage stays.</p>
              </div>
            </div>

            <div className="why-feature-item">
              <div className="why-icon-box">
                <FaShieldAlt />
              </div>
              <div>
                <h4>100% Safe & Verified Bookings</h4>
                <p>Instant booking confirmation with secure payment protection and hassle-free cancellation options.</p>
              </div>
            </div>

            <div className="why-feature-item">
              <div className="why-icon-box">
                <FaHeadset />
              </div>
              <div>
                <h4>24/7 Personal Concierge</h4>
                <p>Round-the-clock live travel assistance throughout your trip across any destination in India.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="why-right-stats">
          <div className="stats-glass-grid">
            {stats.map((stat, idx) => (
              <div className="stat-glass-card" key={idx}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
