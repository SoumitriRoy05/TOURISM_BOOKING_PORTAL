import "./TravelServices.css";
import { Link } from "react-router-dom";
import { FaPlane, FaHotel, FaRobot, FaSuitcaseRolling, FaHeadset, FaShieldAlt, FaArrowRight } from "react-icons/fa";

function TravelServices() {
  const services = [
    {
      id: 1,
      icon: <FaPlane className="service-icon-svg" />,
      title: "Flight Bookings",
      desc: "Compare leading domestic airlines with zero hidden fees and instant e-ticket generation.",
      link: "/flights",
      badge: "Best Fares"
    },
    {
      id: 2,
      icon: <FaHotel className="service-icon-svg" />,
      title: "Luxury Hotels & Resorts",
      desc: "Handpicked 5-star heritage palaces, beachfront resorts, and mountain retreats across India.",
      link: "/hotels",
      badge: "Exclusive Perks"
    },
    {
      id: 3,
      icon: <FaRobot className="service-icon-svg" />,
      title: "Smart AI Trip Planner",
      desc: "Instant AI-generated day-by-day itineraries tailored to your budget and travel vibe.",
      link: "#ai-planner",
      badge: "AI Powered"
    },
    {
      id: 4,
      icon: <FaSuitcaseRolling className="service-icon-svg" />,
      title: "Curated Tour Packages",
      desc: "All-inclusive holiday packages for Kashmir, Kerala, Goa, Rajasthan, Meghalaya & Ladakh.",
      link: "/packages",
      badge: "Trending"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        
        <div className="services-header">
          <span className="services-badge">✨ WORLD-CLASS SERVICES</span>
          <h2>Everything You Need For Your <span className="neon-text">Dream Vacation</span></h2>
          <p>Seamlessly plan, book, and enjoy your journeys across Incredible India with our all-in-one portal.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card-glass" key={service.id}>
              <div className="service-card-top">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <span className="service-tag">{service.badge}</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.desc}</p>

              <Link to={service.link} className="service-link-btn">
                <span>Explore Service</span>
                <FaArrowRight className="arrow-icon" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TravelServices;
