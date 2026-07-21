import "./TrendingDestinations.css";

import kashmir from "../../assets/images/hero2.jpg";
import goa from "../../assets/images/hero4.jpg";
import kerala from "../../assets/images/hero3.jpg";
import meghalaya from "../../assets/images/hero1.jpg";

const places = [
  {
    name: "Kashmir",
    image: kashmir,
  },
  {
    name: "Goa",
    image: goa,
  },
  {
    name: "Kerala",
    image: kerala,
  },
  {
    name: "Meghalaya",
    image: meghalaya,
  },
];

function TrendingDestinations() {

  return (

    <section className="trending">

      <div className="section-header">

        <h2>🔥 Trending Destinations</h2>

      </div>

      <div className="trending-grid">

        {places.map((place,index)=>(

          <div className="destination-card" key={index}>

            <img src={place.image} alt="" />

            <div className="overlay">

              <h3>{place.name}</h3>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default TrendingDestinations;