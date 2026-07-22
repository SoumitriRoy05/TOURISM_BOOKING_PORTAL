import "./FlightFilters.css";
import { FaFilter, FaSlidersH } from "react-icons/fa";

function FlightFilters({
  selectedStops,
  setSelectedStops,
  selectedAirlines,
  setSelectedAirlines,
  maxPrice,
  setMaxPrice
}) {
  const toggleStop = (stopVal) => {
    if (selectedStops.includes(stopVal)) {
      setSelectedStops(selectedStops.filter((s) => s !== stopVal));
    } else {
      setSelectedStops([...selectedStops, stopVal]);
    }
  };

  const toggleAirline = (airlineVal) => {
    if (selectedAirlines.includes(airlineVal)) {
      setSelectedAirlines(selectedAirlines.filter((a) => a !== airlineVal));
    } else {
      setSelectedAirlines([...selectedAirlines, airlineVal]);
    }
  };

  return (
    <aside className="flight-filters-panel">
      <div className="filter-panel-header">
        <h3><FaSlidersH className="filter-title-icon" /> Filter Flights</h3>
      </div>

      <div className="filter-group">
        <h4>Stops</h4>
        {["Non Stop", "1 Stop", "2 Stops"].map((stop) => (
          <label key={stop} className="checkbox-row">
            <input
              type="checkbox"
              checked={selectedStops.includes(stop)}
              onChange={() => toggleStop(stop)}
            />
            <span>{stop}</span>
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h4>Airlines</h4>
        {["IndiGo", "Air India", "Vistara", "Akasa Air", "SpiceJet"].map((airline) => (
          <label key={airline} className="checkbox-row">
            <input
              type="checkbox"
              checked={selectedAirlines.includes(airline)}
              onChange={() => toggleAirline(airline)}
            />
            <span>{airline}</span>
          </label>
        ))}
      </div>

      <div className="filter-group">
        <div className="price-header">
          <h4>Max Price</h4>
          <span className="price-value-display">₹{maxPrice.toLocaleString()}</span>
        </div>
        <input
          type="range"
          min="3000"
          max="10000"
          step="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="neon-range-input"
        />
      </div>
    </aside>
  );
}

export default FlightFilters;