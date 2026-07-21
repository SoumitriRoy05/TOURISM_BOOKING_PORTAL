import "./Destinations.css";

import destinations from "../../data/destinations";

import DestinationCard from "../DestinationCard/DestinationCard";

function Destinations() {
  return (
    <section className="destinations">

      <div className="heading">

        <span>Explore India</span>

        <h2>Popular Destinations</h2>

        <p>
          Discover India's most loved destinations.
        </p>

      </div>

      <div className="destination-grid">

        {destinations.map((item) => (
          <DestinationCard
            key={item.id}
            destination={item}
          />
        ))}

      </div>

    </section>
  );
}

export default Destinations;