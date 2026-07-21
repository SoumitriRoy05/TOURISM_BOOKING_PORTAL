import "./FeaturedHotels.css";
import hotels from "../../data/hotels";

import {
  FaHeart,
  FaMapMarkerAlt,
  FaStar,
  FaWifi,
  FaSwimmingPool,
} from "react-icons/fa";

import { MdFreeBreakfast } from "react-icons/md";

function FeaturedHotels() {
  return (
    <section className="featured-hotels">

      <div className="hotel-title">

        <span>LUXURY STAYS</span>

        <h2>Featured Hotels</h2>

        <p>
          Stay at India's finest luxury hotels and resorts.
        </p>

      </div>

      <div className="featured-grid">

        {hotels.map((hotel) => (

          <div className="featured-card" key={hotel.id}>

            <div className="featured-image">

              <img
                src={hotel.image}
                alt={hotel.name}
              />

              <button className="heart-btn">
                <FaHeart />
              </button>

              <span className="hotel-price">
                {hotel.price}/night
              </span>

            </div>

            <div className="featured-content">

              <div className="hotel-rating">

                <FaStar />

                {hotel.rating}

              </div>

              <h3>{hotel.name}</h3>

              <p>

                <FaMapMarkerAlt />

                {hotel.city}

              </p>

              <div className="amenities">

                <span>
                  <FaWifi />
                  WiFi
                </span>

                <span>
                  <FaSwimmingPool />
                  Pool
                </span>

                <span>
                  <MdFreeBreakfast />
                  Breakfast
                </span>

              </div>

              <button className="book-btn">

                Book Now →

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedHotels;