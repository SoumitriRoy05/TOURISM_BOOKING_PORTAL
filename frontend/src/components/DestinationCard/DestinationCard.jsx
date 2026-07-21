import "./DestinationCard.css";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

function DestinationCard({ destination }) {
  return (
    <div
      className="destination-card"
      style={{ backgroundImage: `url(${destination.image})` }}
    >
      <div className="card-overlay">

        <span className="price-badge">
          {destination.price}
        </span>

        <div className="bottom-content">

          <p className="location">
            <FaMapMarkerAlt /> {destination.name}
          </p>

          <div className="rating">
            <FaStar /> {destination.rating}
          </div>

          <p>{destination.duration}</p>

          <button>
            Explore →
          </button>

        </div>

      </div>
    </div>
  );
}

export default DestinationCard;