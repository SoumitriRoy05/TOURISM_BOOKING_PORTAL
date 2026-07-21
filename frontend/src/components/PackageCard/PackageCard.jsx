// import "./PackageCard.css";
// import destinations from "../../data/destinations";
// import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
//
// function PackageCard() {
//   return (
//     <div className="package-grid">
//       {destinations.map((place) => (
//         <div className="package-card" key={place.id}>
//           <img src={place.image} alt={place.name} />
//
//           <div className="package-overlay">
//
//             <span className="price-tag">
//               {place.price}
//             </span>
//
//             <div className="package-content">
//
//               <h2>
//                 <FaMapMarkerAlt />
//                 {place.name}
//               </h2>
//
//               <p>{place.duration}</p>
//
//               <span className="rating">
//                 <FaStar />
//                 {place.rating}
//               </span>
//
//               <button>
//                 View Package →
//               </button>
//
//             </div>
//
//           </div>
//
//         </div>
//       ))}
//     </div>
//   );
// }
//
// export default PackageCard;

import "./PackageCard.css";

// import destinations from "../../data/destinations";
//
// import {
//   FaMapMarkerAlt,
//   FaStar,
//   FaHeart,
//   FaHotel,
//   FaPlane,
//   FaCoffee,
//   FaCar,
// } from "react-icons/fa";
//
// function PackageCard() {

  import "./PackageCard.css";

  import {
    FaHeart,
    FaHotel,
    FaPlane,
    FaCoffee,
    FaCar,
    FaStar,
    FaMapMarkerAlt,
  } from "react-icons/fa";
import { Link } from "react-router-dom";
  function PackageCard({ data }) {
  return (
    <div className="package-grid">
      {data.map((item) => (
        <div className="package-card" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="package-overlay">

            <div className="top-row">

              <span className="discount">
                🔥 {item.discount}
              </span>

              <button className="wishlist">
                <FaHeart />
              </button>

            </div>

            <div className="package-info">

              <div className="price">
                {item.price}
              </div>

              <h2>

                <FaMapMarkerAlt />

                {item.name}

              </h2>

              <div className="rating">

                <FaStar />

                {item.rating}

                <span>

                  ({item.reviews} Reviews)

                </span>

              </div>

              <p>{item.duration}</p>

              <div className="features">

                {item.hotel && <span><FaHotel /> Hotel</span>}

                {item.flight && <span><FaPlane /> Flight</span>}

                {item.breakfast && <span><FaCoffee /> Breakfast</span>}

                {item.transfer && <span><FaCar /> Transfer</span>}

              </div>

              <div className="bottom">

                <span className="left-seat">

                  Only {item.seats} seats left

                </span>

                    <Link to={`/packages/${item.id}`}>

                    <button>

                    View Package →

                    </button>

                    </Link>

              </div>

            </div>

          </div>

        </div>
      ))}
    </div>
  );
}

export default PackageCard;