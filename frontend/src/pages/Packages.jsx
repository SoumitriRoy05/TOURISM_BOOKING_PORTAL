// import Navbar from "../components/Navbar/Navbar";
// import Destinations from "../components/Destinations/Destinations";
// import Footer from "../components/Footer/Footer";
//
// function Packages() {
//   return (
//     <>
//       <Navbar />
//
//       <div style={{ paddingTop: "140px" }}>
//         <Destinations />
//       </div>
//
//       <Footer />
//     </>
//   );
// }
//
// export default Packages;

// import Navbar from "../components/Navbar/Navbar";
// import Destinations from "../components/Destinations/Destinations";
// import Footer from "../components/Footer/Footer";
//
// function Packages() {
//   return (
//     <>
//       <Navbar />
//
//       <main style={{ paddingTop: "120px" }}>
//         <Destinations />
//       </main>
//
//       <Footer />
//     </>
//   );
// }
//
// export default Packages;

// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
// import PackageCard from "../components/PackageCard/PackageCard";
//
// import "./Packages.css";
//
// function Packages() {
//   return (
//     <>
//       <Navbar />
//
//       <section className="packages-page">
//
//         <div className="packages-header">
//
//           <h1>Explore India Tour Packages</h1>
//
//           <p>
//             Handpicked holiday packages across Incredible India
//           </p>
//
//           <input
//             type="text"
//             placeholder="Search destination..."
//           />
//
//         </div>
//
//         <PackageCard />
//
//       </section>
//
//       <Footer />
//
//     </>
//   );
// }
//
// export default Packages;

// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
//
// function Packages() {
//   return (
//     <>
//       <Navbar />
//
//       <div
//         style={{
//           marginTop: "140px",
//           textAlign: "center",
//           minHeight: "70vh",
//         }}
//       >
//         <h1>🎉 Packages Page is Working!</h1>
//       </div>
//
//       <Footer />
//     </>
//   );
// }
//
// export default Packages;

// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
// import PackageCard from "../components/PackageCard/PackageCard";
//
// import "./Packages.css";
//
// function Packages() {
//   return (
//     <>
//       <Navbar />
//
//       <section className="packages-page">
//
//         <div className="packages-header">
//
//             <h1>Explore India Tour Packages</h1>
//
//             <p>
//                 Find your perfect holiday package across India
//             </p>
//
//         </div>
//
//         <div className="filter-bar">
//
//             <input
//                 type="text"
//                 placeholder="🔍 Search destination..."
//             />
//
//             <select>
//
//                 <option>All States</option>
//
//                 <option>Kashmir</option>
//
//                 <option>Goa</option>
//
//                 <option>Kerala</option>
//
//                 <option>Meghalaya</option>
//
//                 <option>Jaipur</option>
//
//                 <option>Ladakh</option>
//
//                 <option>Varanasi</option>
//
//                 <option>Andaman</option>
//
//             </select>
//
//             <select>
//
//                 <option>Sort By</option>
//
//                 <option>Price Low → High</option>
//
//                 <option>Price High → Low</option>
//
//                 <option>Highest Rating</option>
//
//                 <option>Popular</option>
//
//             </select>
//
//         </div>
//
//         <PackageCard />
//
//       </section>
//
//       <Footer />
//     </>
//   );
// }
//
// export default Packages;

import { useState, useEffect } from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PackageCard from "../components/PackageCard/PackageCard";

import destinationsData from "../data/destinations";

// Destination background images of India
import kashmirImg from "../assets/destinations/kashmir.jpg";
import meghalayaImg from "../assets/destinations/meghalaya.jpg";
import goaImg from "../assets/destinations/goa.jpg";
import keralaImg from "../assets/destinations/kerala.jpg";
import jaipurImg from "../assets/destinations/jaipur.jpg";
import ladakhImg from "../assets/destinations/ladakh.jpg";
import varanasiImg from "../assets/destinations/varanasi.jpg";
import andamanImg from "../assets/destinations/andaman.jpg";

import "./Packages.css";

function Packages() {
  const [search, setSearch] = useState("");
  const [state, setState] = useState("All");
  const [sort, setSort] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  const destSlides = [
    { name: "Kashmir Paradise", location: "Jammu & Kashmir", image: kashmirImg, badge: "Snow Peaks & Houseboats" },
    { name: "Meghalaya Wonders", location: "Northeast India", image: meghalayaImg, badge: "Living Root Bridges & Waterfalls" },
    { name: "Goa Beach Haven", location: "West Coast", image: goaImg, badge: "Sun & Golden Sands" },
    { name: "Kerala Backwaters", location: "South India", image: keralaImg, badge: "Tranquil Lagoons & Houseboats" },
    { name: "Jaipur Pink City", location: "Rajasthan", image: jaipurImg, badge: "Royal Palaces & Forts" },
    { name: "Ladakh Monasteries", location: "Trans-Himalayas", image: ladakhImg, badge: "High Altitude Passes" },
    { name: "Varanasi Heritage", location: "Uttar Pradesh", image: varanasiImg, badge: "Sacred Ganges Ghats" },
    { name: "Andaman Islands", location: "Bay of Bengal", image: andamanImg, badge: "Crystal Reefs & Coral Beaches" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % destSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [destSlides.length]);

  let filtered = [...destinationsData];

  // Search
  if (search.trim()) {
    filtered = filtered.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // State Filter
  if (state !== "All") {
    filtered = filtered.filter((item) => item.name === state);
  }

  // Sorting
  if (sort === "low") {
    filtered.sort(
      (a, b) =>
        parseInt(a.price.replace(/[₹,]/g, "")) -
        parseInt(b.price.replace(/[₹,]/g, ""))
    );
  }

  if (sort === "high") {
    filtered.sort(
      (a, b) =>
        parseInt(b.price.replace(/[₹,]/g, "")) -
        parseInt(a.price.replace(/[₹,]/g, ""))
    );
  }

  if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="packages-page-wrapper">
      <Navbar />

      {/* Hero Section with Destination Background Slideshow */}
      <section className="dest-hero-section">
        <div className="dest-slideshow-container">
          {destSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`dest-slide ${idx === activeSlide ? "slide-active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
        </div>

        <div className="dest-hero-glow"></div>
        <div className="dest-mesh-overlay"></div>

        <div className="dest-hero-content">
          <span className="dest-hero-badge">🌄 EXPLORE INCREDIBLE DESTINATIONS</span>
          <h1 className="dest-hero-title">
            DREAM <span className="stroke-text">DESTINATIONS</span>
          </h1>
          <p className="dest-hero-subtitle">
            Handpicked holiday packages, scenic landscapes, and cultural journeys across India.
          </p>

          {/* Location Badge */}
          <div className="dest-caption-badge">
            <div>
              <strong>📍 {destSlides[activeSlide].name}</strong>
              <span> ({destSlides[activeSlide].location}) — <em>{destSlides[activeSlide].badge}</em></span>
            </div>
            <div className="slide-dots-row">
              {destSlides.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot-pill ${idx === activeSlide ? "dot-pill-active" : ""}`}
                  onClick={() => setActiveSlide(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Listing Content */}
      <section className="packages-page">
        <div className="chips">
          <button onClick={() => setState("All")}>✨ All Places</button>
          <button onClick={() => setState("Kashmir")}>🏔 Kashmir</button>
          <button onClick={() => setState("Goa")}>🏖 Goa</button>
          <button onClick={() => setState("Kerala")}>🌿 Kerala</button>
          <button onClick={() => setState("Jaipur")}>🏛 Jaipur</button>
          <button onClick={() => setState("Ladakh")}>❄ Ladakh</button>
          <button onClick={() => setState("Meghalaya")}>🌊 Meghalaya</button>
        </div>

        <div className="filter-bar">
          <input
            type="text"
            placeholder="🔍 Search Destination..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="All">All Destinations</option>
            <option value="Kashmir">Kashmir</option>
            <option value="Goa">Goa</option>
            <option value="Kerala">Kerala</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Varanasi">Varanasi</option>
            <option value="Andaman">Andaman</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="low">Price Low → High</option>
            <option value="high">Price High → Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <PackageCard data={filtered} />
      </section>

      <Footer />
    </div>
  );
}

export default Packages;