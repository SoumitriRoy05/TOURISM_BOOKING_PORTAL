import "./Hero.css";
import hero from "../../assets/images/hero2.jpg";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="overlay">

        <div className="hero-content">

          <h4> Discover Incredible India</h4>

          <h1>
            Explore India
            <br />
            Like Never Before
          </h1>

          <p>
            From the Himalayas to the Beaches,
            discover India's hidden gems,
            culture and adventures.
          </p>

          <div className="hero-buttons">

              <Link to="/packages">
                <button className="explore-btn">
                  Explore Destinations →
                </button>
              </Link>

              <button className="planner-btn">
                  AI Trip Planner
              </button>

          </div>
{/*           <SearchBar/> */}
        </div>

      </div>
      <div className="airplane">
          ✈️
      </div>
      <div className="scroll-indicator">

          <span>Scroll Down</span>

          <div className="mouse">

              <div className="wheel"></div>

          </div>

      </div>
    </section>
  );
}

export default Hero;