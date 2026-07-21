import "./HotelHero.css";
import hotelHero from "../../assets/images/hero4.jpg";

function HotelHero() {
  return (
    <section
      className="hotel-hero"
      style={{
        backgroundImage: `url(${hotelHero})`,
      }}
    >
      <div className="hotel-overlay">

        <span className="hero-badge">
          🏨 Premium Stays Across India
        </span>

        <h1>
          Find Your Perfect
          <br />
          Luxury Stay
        </h1>

        <p>
          Discover handpicked luxury hotels,
          heritage palaces, beach resorts,
          mountain retreats and unforgettable stays.
        </p>

      </div>
    </section>
  );
}

export default HotelHero;