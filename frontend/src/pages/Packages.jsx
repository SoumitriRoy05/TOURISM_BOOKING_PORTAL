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

import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PackageCard from "../components/PackageCard/PackageCard";

import destinations from "../data/destinations";

import "./Packages.css";

function Packages() {

  const [search, setSearch] = useState("");
  const [state, setState] = useState("All");
  const [sort, setSort] = useState("");

  let filtered = [...destinations];

  // Search
  filtered = filtered.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

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
    <>
      <Navbar />

      <section className="packages-page">

        <div className="packages-header">

          <h1>Explore India Tour Packages</h1>

          <p>
            Find your dream vacation across Incredible India
          </p>

        </div>
        <div className="chips">

          <button>🏔 Mountains</button>

          <button>🏖 Beaches</button>

          <button>🌿 Nature</button>

          <button>🏛 Heritage</button>

          <button>🙏 Spiritual</button>

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
            <option>Kashmir</option>
            <option>Goa</option>
            <option>Kerala</option>
            <option>Meghalaya</option>
            <option>Jaipur</option>
            <option>Ladakh</option>
            <option>Varanasi</option>
            <option>Andaman</option>
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
    </>
  );
}

export default Packages;