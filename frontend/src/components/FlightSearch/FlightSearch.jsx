import "./FlightSearch.css";

import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaExchangeAlt,
  FaSearch
} from "react-icons/fa";

function FlightSearch() {

  return (

    <section className="flight-search">

      <div className="trip-type">

        <button className="active">
          One Way
        </button>

        <button>
          Round Trip
        </button>

        <button>
          Multi City
        </button>

      </div>

      <div className="flight-search-card">

        <div className="flight-field">

          <label>From</label>

          <input placeholder="Delhi"/>

        </div>

        <button className="swap">

          <FaExchangeAlt/>

        </button>

        <div className="flight-field">

          <label>To</label>

          <input placeholder="Goa"/>

        </div>

        <div className="flight-field">

          <label>Departure</label>

          <input type="date"/>

        </div>

        <div className="flight-field">

          <label>Travellers</label>

          <select>

            <option>1 Traveller</option>

            <option>2 Travellers</option>

            <option>Family</option>

          </select>

        </div>

        <div className="flight-field">

          <label>Class</label>

          <select>

            <option>Economy</option>

            <option>Premium Economy</option>

            <option>Business</option>

            <option>First Class</option>

          </select>

        </div>

        <button className="search-flight">

          <FaSearch/>

          Search Flights

        </button>

      </div>

    </section>

  );

}

export default FlightSearch;