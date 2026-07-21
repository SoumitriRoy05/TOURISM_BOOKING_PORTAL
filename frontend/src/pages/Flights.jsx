import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import FlightHero from "../components/FlightHero/FlightHero";
import FlightSearch from "../components/FlightSearch/FlightSearch";
import AirlineLogos from "../components/AirlineLogos/AirlineLogos";
import PopularRoutes from "../components/PopularRoutes/PopularRoutes";
import FlightFilters from "../components/FlightFilters/FlightFilters";
import FlightDeals from "../components/FlightDeals/FlightDeals";

import "./Flights.css";

function Flights() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <FlightHero />

      {/* Search Section */}
      <FlightSearch />

      {/* Popular Airlines */}
      <AirlineLogos />

      {/* Popular Routes */}
      <PopularRoutes />

      {/* Flight Results */}
      <section className="flight-results">

        {/* Left Sidebar */}
        <FlightFilters />

        {/* Right Flight Cards */}
        <FlightDeals />

      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Flights;