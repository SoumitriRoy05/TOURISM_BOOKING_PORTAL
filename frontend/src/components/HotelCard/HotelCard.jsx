import "./HotelCard.css";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function HotelCard({ hotels }) {
  return (
    <div className="hotel-grid">
      {hotels.map((hotel) => (

        hotel.loginCard ? (

          <div className="login-hotel-card" key={hotel.id}>

            <div className="login-icon">
              🔒
            </div>

            <h2>Unlock More Hotels</h2>

            <p>
              Login to explore hundreds of premium hotels,
              exclusive deals and member discounts.
            </p>

            <Link to="/login">
              <button>Login Now</button>
            </Link>

          </div>

        ) : (

          <div className="hotel-card" key={hotel.id}>

            {/* Existing hotel card code */}

          </div>

        )

      ))}
    </div>
  );
}

export default HotelCard;