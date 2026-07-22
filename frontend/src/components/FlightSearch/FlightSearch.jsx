import "./FlightSearch.css";
import { useState } from "react";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaExchangeAlt,
  FaSearch,
  FaCalendarAlt,
  FaUser,
  FaSuitcase
} from "react-icons/fa";

function FlightSearch({ onSearch }) {
  const [tripType, setTripType] = useState("One Way");
  const [fromCity, setFromCity] = useState("Delhi (DEL)");
  const [toCity, setToCity] = useState("Goa (GOI)");
  const [departDate, setDepartDate] = useState("2026-08-01");
  const [passengers, setPassengers] = useState("1 Traveller");
  const [cabinClass, setCabinClass] = useState("Economy");

  const handleSwap = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ tripType, fromCity, toCity, departDate, passengers, cabinClass });
    }
  };

  return (
    <section className="flight-search-section">
      
      {/* Trip Type Selector */}
      <div className="trip-type-bar">
        {["One Way", "Round Trip", "Multi City"].map((type) => (
          <button
            key={type}
            className={`trip-type-btn ${tripType === type ? "active-trip" : ""}`}
            onClick={() => setTripType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Search Card Container */}
      <form onSubmit={handleSearchSubmit} className="flight-search-card">
        
        {/* From City */}
        <div className="flight-field-group">
          <label><FaPlaneDeparture className="field-icon" /> From</label>
          <input
            type="text"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            placeholder="Enter Origin City"
          />
        </div>

        {/* Swap Button */}
        <button type="button" className="swap-btn" onClick={handleSwap} title="Swap Cities">
          <FaExchangeAlt />
        </button>

        {/* To City */}
        <div className="flight-field-group">
          <label><FaPlaneArrival className="field-icon" /> To</label>
          <input
            type="text"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            placeholder="Enter Destination City"
          />
        </div>

        {/* Departure Date */}
        <div className="flight-field-group">
          <label><FaCalendarAlt className="field-icon" /> Departure</label>
          <input
            type="date"
            value={departDate}
            onChange={(e) => setDepartDate(e.target.value)}
          />
        </div>

        {/* Passengers */}
        <div className="flight-field-group">
          <label><FaUser className="field-icon" /> Travellers</label>
          <select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
            <option>1 Traveller</option>
            <option>2 Travellers</option>
            <option>3 Travellers</option>
            <option>Family (4+)</option>
          </select>
        </div>

        {/* Cabin Class */}
        <div className="flight-field-group">
          <label><FaSuitcase className="field-icon" /> Cabin Class</label>
          <select value={cabinClass} onChange={(e) => setCabinClass(e.target.value)}>
            <option>Economy</option>
            <option>Premium Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
        </div>

        {/* Search Submit Button */}
        <button type="submit" className="search-flight-btn">
          <FaSearch />
          <span>Search Flights</span>
        </button>

      </form>

    </section>
  );
}

export default FlightSearch;