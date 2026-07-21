import "./FlightHero.css";
import hero from "../../assets/images/hero6.jpg";

function FlightHero() {
  return (
    <section
      className="flight-hero"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="flight-overlay">

        <span>✈ Fly Across Incredible India</span>

        <h1>
          Book Flights
          <br />
          At Best Prices
        </h1>

        <p>
          Compare airlines and discover affordable flights
          across India.
        </p>

      </div>
    </section>
  );
}

export default FlightHero;