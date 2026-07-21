// import { useState } from "react";
//
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
// import HotelCard from "../components/HotelCard/HotelCard";
//
// import hotels from "../data/hotels";
//
// import "./Hotels.css";
//
// function Hotels() {
//
//   const [search, setSearch] = useState("");
//
//   const filteredHotels = hotels.filter((hotel) =>
//     hotel.name.toLowerCase().includes(search.toLowerCase()) ||
//     hotel.city.toLowerCase().includes(search.toLowerCase())
//   );
//
//   return (
//     <>
//       <Navbar />
//
//       <section className="hotels-page">
//
//         <div className="hotel-hero">
//           <h1>Luxury Hotels Across India</h1>
//           <p>Find your perfect stay for every journey.</p>
//
//           <input
//             type="text"
//             placeholder="Search hotels or city..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>
//
//         <div className="hotel-chips">
//           <button>Luxury</button>
//           <button>Beach</button>
//           <button>Mountain</button>
//           <button>Resort</button>
//           <button>Heritage</button>
//         </div>
//
//         <HotelCard hotels={filteredHotels} />
//
//       </section>
//
//       <Footer />
//     </>
//   );
// }
//
// export default Hotels;

// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
//
// import HotelHero from "../components/HotelHero/HotelHero";
// import HotelSearch from "../components/HotelSearch/HotelSearch";
// import FeaturedHotels from "../components/FeaturedHotels/FeaturedHotels";
//
// import hotels from "../data/hotels";
//
// import HotelFilters from "../components/HotelFilters/HotelFilters";
//
// import HotelGrid from "../components/HotelGrid/HotelGrid";
// function Hotels(){
//
// return(
//
// <>
//
// <Navbar/>
//
// <HotelHero/>
//
// <HotelSearch/>
//
// <FeaturedHotels/>
//
//
//
// <Footer/>
//
// </>
//
// );
//
// }
//
// export default Hotels;

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import HotelHero from "../components/HotelHero/HotelHero";
import HotelSearch from "../components/HotelSearch/HotelSearch";

import hotels from "../data/hotels";

import HotelFilters from "../components/HotelFilters/HotelFilters";
import HotelGrid from "../components/HotelGrid/HotelGrid";

import "./Hotels.css";

function Hotels() {
  return (
    <>
      <Navbar />

      <HotelHero />

      <HotelSearch />

      <section className="hotel-main">

        <HotelFilters />

        <HotelGrid hotels={hotels} />

      </section>

      <Footer />
    </>
  );
}

export default Hotels;