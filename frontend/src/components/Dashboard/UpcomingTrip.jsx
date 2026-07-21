import "./UpcomingTrip.css";

import { FaMapMarkerAlt, FaCalendarAlt, FaCloudSun } from "react-icons/fa";

import kashmir from "../../assets/destinations/kashmir.jpg";

function UpcomingTrip() {

  return (

    <section className="trip-container">

      <div className="trip-image">

        <img src={kashmir} alt="Kashmir" />

      </div>

      <div className="trip-details">

        <span className="trip-tag">
          Upcoming Journey
        </span>

        <h2>Kashmir Escape</h2>

        <p>
          Experience the beauty of Dal Lake,
          Gulmarg and Sonmarg in one unforgettable trip.
        </p>

        <div className="trip-info">

          <div>

            <FaCalendarAlt />

            <span>15 Sept - 21 Sept</span>

          </div>

          <div>

            <FaMapMarkerAlt />

            <span>Srinagar, Kashmir</span>

          </div>

          <div>

            <FaCloudSun />

            <span>18°C Sunny</span>

          </div>

        </div>

        <div className="progress-box">

          <div className="progress-text">

            <span>Trip Planning</span>

            <span>80%</span>

          </div>

          <div className="progress-bar">

            <div className="progress-fill"></div>

          </div>

        </div>

        <div className="trip-footer">

          <h3>12 Days Left</h3>

          <button>Continue Planning</button>

        </div>

      </div>

    </section>

  );

}

export default UpcomingTrip;