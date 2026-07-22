import "./FlightDeals.css";
import { useState } from "react";
import { FaPlane, FaLongArrowAltRight, FaLuggageCart, FaClock, FaCheckCircle } from "react-icons/fa";

function FlightDeals({ flightsList = [] }) {
  const [bookedFlight, setBookedFlight] = useState(null);

  const handleBook = (flight) => {
    setBookedFlight(flight);
    setTimeout(() => {
      setBookedFlight(null);
    }, 4000);
  };

  return (
    <section className="flight-results-container">
      
      {/* Booking Toast Alert */}
      {bookedFlight && (
        <div className="booking-toast-alert">
          <FaCheckCircle className="toast-icon" />
          <div>
            <strong>Flight Booking Confirmed!</strong>
            <p>{bookedFlight.airline} ({bookedFlight.code}) • {bookedFlight.from} → {bookedFlight.to} for {bookedFlight.formattedPrice}</p>
          </div>
        </div>
      )}

      <div className="results-count-bar">
        <span>Available Flight Deals ({flightsList.length})</span>
      </div>

      {flightsList.length === 0 ? (
        <div className="no-flights-box">
          <FaPlane className="no-flights-icon" />
          <h3>No Flights Match Your Selected Filters</h3>
          <p>Try adjusting your price range or airline selections.</p>
        </div>
      ) : (
        <div className="flight-deals-list">
          {flightsList.map((flight) => (
            <div className="flight-deal-card" key={flight.id}>
              
              {/* Airline Badge */}
              <div className="deal-airline-block">
                <div className="airline-icon-circle">
                  <FaPlane className="plane-mini" />
                </div>
                <div>
                  <h4>{flight.airline}</h4>
                  <span className="flight-code">{flight.code}</span>
                </div>
              </div>

              {/* Timing & Route */}
              <div className="deal-route-block">
                <div className="time-col text-right">
                  <span className="flight-time">{flight.departure}</span>
                  <span className="city-code">{flight.from}</span>
                </div>

                <div className="duration-col">
                  <span className="duration-text"><FaClock className="clock-icon" /> {flight.duration}</span>
                  <div className="flight-line-accent">
                    <span className="line-dot left"></span>
                    <FaLongArrowAltRight className="line-arrow" />
                    <span className="line-dot right"></span>
                  </div>
                  <span className="stop-badge">{flight.stops}</span>
                </div>

                <div className="time-col">
                  <span className="flight-time">{flight.arrival}</span>
                  <span className="city-code">{flight.to}</span>
                </div>
              </div>

              {/* Price & Features */}
              <div className="deal-price-block">
                <span className="deal-badge">{flight.badge}</span>
                <h3 className="price-tag">{flight.formattedPrice}</h3>
                <span className="seats-left-tag">{flight.seatsLeft} seats left</span>
              </div>

              {/* CTA Action */}
              <div className="deal-action-block">
                <button className="book-flight-btn" onClick={() => handleBook(flight)}>
                  Book Flight
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

    </section>
  );
}

export default FlightDeals;