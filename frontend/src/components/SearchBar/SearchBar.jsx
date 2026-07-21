import "./SearchBar.css";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaSearch,
} from "react-icons/fa";

function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-card">

        {/* Destination */}
        <div className="search-item">
          <FaMapMarkerAlt className="search-icon" />

          <div className="field">
            <label>Destination</label>
            <input
              type="text"
              placeholder="Where do you want to go?"
            />
          </div>
        </div>

        <div className="divider"></div>

        {/* Check In */}
        <div className="search-item">
          <FaCalendarAlt className="search-icon" />

          <div className="field">
            <label>Check In</label>
            <input type="date" />
          </div>
        </div>

        <div className="divider"></div>

        {/* Check Out */}
        <div className="search-item">
          <FaCalendarAlt className="search-icon" />

          <div className="field">
            <label>Check Out</label>
            <input type="date" />
          </div>
        </div>

        <div className="divider"></div>

        {/* Travellers */}
        <div className="search-item">
          <FaUsers className="search-icon" />

          <div className="field">
            <label>Travellers</label>

            <select>
              <option>1 Traveller</option>
              <option>2 Travellers</option>
              <option>3 Travellers</option>
              <option>4 Travellers</option>
              <option>Family</option>
              <option>Group</option>
            </select>
          </div>
        </div>

        {/* Search Button */}

        <button className="search-btn">
          <FaSearch />
          Search Trips
        </button>

      </div>
    </div>
  );
}

export default SearchBar;