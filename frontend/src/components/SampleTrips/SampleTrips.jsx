import "./SampleTrips.css";

const trips = [
  "🏔 Adventure",
  "🏝 Beach Holiday",
  "💑 Honeymoon",
  "👨‍👩‍👧 Family Tour",
  "🎒 Backpacking",
  "🛕 Spiritual Journey",
];

function SampleTrips() {
  return (
    <section className="sample-trips">

      <h2>Popular AI Trip Templates</h2>

      <div className="trip-grid">

        {trips.map((trip, index) => (
          <button key={index}>{trip}</button>
        ))}

      </div>

    </section>
  );
}

export default SampleTrips;