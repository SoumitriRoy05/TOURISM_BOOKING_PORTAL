import "./AirlineLogos.css";
import { FaPlane, FaStar } from "react-icons/fa";

function AirlineLogos() {
  const airlinesList = [
    { name: "IndiGo", tag: "Most Popular", rating: "4.8" },
    { name: "Air India", tag: "National Carrier", rating: "4.7" },
    { name: "Vistara", tag: "Full Service Luxury", rating: "4.9" },
    { name: "Akasa Air", tag: "Ultra Low Cost", rating: "4.6" },
    { name: "SpiceJet", tag: "Budget Saver", rating: "4.5" },
    { name: "Alliance Air", tag: "Regional Express", rating: "4.4" }
  ];

  return (
    <section className="airlines-section">
      <div className="section-header">
        <span>PARTNER AIRLINES</span>
        <h2>Fly with Top Domestic Carriers</h2>
        <p>Book direct flights with India's leading airlines at guaranteed best prices.</p>
      </div>

      <div className="airline-grid">
        {airlinesList.map((airline, idx) => (
          <div className="airline-card" key={idx}>
            <div className="airline-icon-wrap">
              <FaPlane className="air-plane-icon" />
            </div>
            <h3>{airline.name}</h3>
            <span className="airline-tag">{airline.tag}</span>
            <div className="airline-rating">
              <FaStar className="star-icon" /> {airline.rating}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AirlineLogos;