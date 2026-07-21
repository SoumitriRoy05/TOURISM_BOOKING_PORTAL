import "./AIHero.css";
import hero from "../../assets/images/hero4.jpg";

function AIHero() {
  return (
    <section
      className="ai-hero"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="ai-overlay">

        <span>🤖 BharatYatra AI</span>

        <h1>
          Plan Your Dream Trip
          <br />
          With Artificial Intelligence
        </h1>

        <p>
          Tell us your budget and preferences.
          Our AI creates the perfect itinerary in seconds.
        </p>

      </div>
    </section>
  );
}

export default AIHero;