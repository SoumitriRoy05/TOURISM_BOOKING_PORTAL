import "./RecommendedHotels.css";

import taj from "../../assets/hotels/taj-lake-palace.jpg";
import oberoi from "../../assets/hotels/oberoi-udaivilas.jpg";
import mayfair from "../../assets/hotels/mayfair-shillong.jpg";

const hotels = [
  {
    name: "Taj Lake Palace",
    city: "Udaipur",
    image: taj,
    price: "₹18,999",
    rating: "⭐ 4.9"
  },
  {
    name: "The Oberoi Udaivilas",
    city: "Udaipur",
    image: oberoi,
    price: "₹22,999",
    rating: "⭐ 5.0"
  },
  {
    name: "Mayfair Shillong",
    city: "Shillong",
    image: mayfair,
    price: "₹11,499",
    rating: "⭐ 4.8"
  }
];

function RecommendedHotels() {

  return (

    <section className="recommended-hotels">

      <div className="section-header">

        <h2>🏨 Recommended Hotels</h2>

        <button>View All</button>

      </div>

      <div className="hotel-list">

        {hotels.map((hotel,index)=>(

          <div className="hotel-card-small" key={index}>

            <img src={hotel.image} alt="" />

            <div>

              <h3>{hotel.name}</h3>

              <p>{hotel.city}</p>

              <span>{hotel.rating}</span>

            </div>

            <h4>{hotel.price}</h4>

          </div>

        ))}

      </div>

    </section>

  );

}

export default RecommendedHotels;