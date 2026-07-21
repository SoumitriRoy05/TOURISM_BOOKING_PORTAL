import "./FlightFilters.css";

function FlightFilters() {

  return (

    <aside className="flight-filters">

      <h2>Filters</h2>

      <div className="filter-group">

        <h4>Stops</h4>

        <label><input type="checkbox"/> Non Stop</label>

        <label><input type="checkbox"/> 1 Stop</label>

        <label><input type="checkbox"/> 2 Stops</label>

      </div>

      <div className="filter-group">

        <h4>Airlines</h4>

        <label><input type="checkbox"/> IndiGo</label>

        <label><input type="checkbox"/> Air India</label>

        <label><input type="checkbox"/> Vistara</label>

        <label><input type="checkbox"/> Akasa Air</label>

      </div>

      <div className="filter-group">

        <h4>Price</h4>

        <input
          type="range"
          min="2000"
          max="10000"
        />
      </div>

    </aside>

  );

}

export default FlightFilters;