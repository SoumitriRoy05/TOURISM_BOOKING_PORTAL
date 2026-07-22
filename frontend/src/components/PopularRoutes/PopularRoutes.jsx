import "./PopularRoutes.css";
import { FaPlaneDeparture, FaArrowRight, FaTicketAlt } from "react-icons/fa";

const routes = [
  { origin: "Delhi", dest: "Goa", price: "₹4,299", time: "2h 35m", carrier: "IndiGo" },
  { origin: "Mumbai", dest: "Leh Ladakh", price: "₹6,499", time: "3h 20m", carrier: "Air India" },
  { origin: "Bangalore", dest: "Kochi", price: "₹3,899", time: "1h 15m", carrier: "Vistara" },
  { origin: "Kolkata", dest: "Bagdogra", price: "₹3,299", time: "1h 10m", carrier: "SpiceJet" },
  { origin: "Chennai", dest: "Port Blair", price: "₹7,899", time: "2h 30m", carrier: "Air India" },
  { origin: "Hyderabad", dest: "Goa", price: "₹4,150", time: "1h 20m", carrier: "Vistara" }
];

function PopularRoutes() {
  return (
    <section className="popular-routes-section">
      <div className="section-header">
        <span>TOP DOMESTIC FLIGHTS</span>
        <h2>Popular Flight Routes</h2>
        <p>Explore trending flight routes across India with daily direct flights and special discounts.</p>
      </div>

      <div className="routes-grid">
        {routes.map((route, idx) => (
          <div className="route-card-glass" key={idx}>
            <div className="route-top-row">
              <div className="route-city-block">
                <span className="city-name">{route.origin}</span>
              </div>
              <div className="route-arrow-wrap">
                <FaArrowRight className="route-arrow-icon" />
                <span className="route-duration">{route.time}</span>
              </div>
              <div className="route-city-block text-right">
                <span className="city-name">{route.dest}</span>
              </div>
            </div>

            <div className="route-bottom-row">
              <div className="route-carrier-info">
                <FaPlaneDeparture className="carrier-icon" />
                <span>{route.carrier}</span>
              </div>

              <div className="route-price-block">
                <span className="starts-from">From</span>
                <span className="route-price">{route.price}</span>
              </div>
            </div>

            <button className="book-route-btn">
              <FaTicketAlt />
              <span>Book Flight</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularRoutes;