import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import FlightHero from "../components/FlightHero/FlightHero";
import FlightSearch from "../components/FlightSearch/FlightSearch";
import AirlineLogos from "../components/AirlineLogos/AirlineLogos";
import PopularRoutes from "../components/PopularRoutes/PopularRoutes";
import FlightFilters from "../components/FlightFilters/FlightFilters";
import FlightDeals from "../components/FlightDeals/FlightDeals";

import initialFlights from "../data/flights";
import "./Flights.css";

function Flights() {
  const [selectedStops, setSelectedStops] = useState([]);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [searchCriteria, setSearchCriteria] = useState(null);

  // Filter flights based on search input and sidebar filters
  const filteredFlights = initialFlights.filter((flight) => {
    // Filter by stops
    if (selectedStops.length > 0 && !selectedStops.includes(flight.stops)) {
      return false;
    }
    // Filter by airlines
    if (selectedAirlines.length > 0 && !selectedAirlines.includes(flight.airline)) {
      return false;
    }
    // Filter by price
    if (flight.price > maxPrice) {
      return false;
    }
    // Filter by origin/destination from FlightSearch
    if (searchCriteria) {
      if (searchCriteria.fromCity) {
        const fromMatch = flight.from.toLowerCase().includes(searchCriteria.fromCity.toLowerCase().replace(/\s*\([a-z]+\)/i, ''));
        if (!fromMatch) return false;
      }
      if (searchCriteria.toCity) {
        const toMatch = flight.to.toLowerCase().includes(searchCriteria.toCity.toLowerCase().replace(/\s*\([a-z]+\)/i, ''));
        if (!toMatch) return false;
      }
    }
    return true;
  });

  return (
    <div className="flights-page-wrapper">
      <Navbar />

      {/* Hero Section */}
      <FlightHero />

      {/* Search Widget */}
      <FlightSearch onSearch={(criteria) => setSearchCriteria(criteria)} />

      {/* Partner Airlines */}
      <AirlineLogos />

      {/* Popular Routes */}
      <PopularRoutes />

      {/* Flight Results Grid */}
      <section className="flight-results-layout">

        {/* Left Sidebar Filters */}
        <FlightFilters
          selectedStops={selectedStops}
          setSelectedStops={setSelectedStops}
          selectedAirlines={selectedAirlines}
          setSelectedAirlines={setSelectedAirlines}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

        {/* Right Flight Deals List */}
        <FlightDeals flightsList={filteredFlights} />

      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Flights;