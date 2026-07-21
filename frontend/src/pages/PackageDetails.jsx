import "./PackageDetails.css";

import { useParams } from "react-router-dom";

import destinations from "../data/destinations";

import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";

function PackageDetails(){

const {id}=useParams();

const item=destinations.find((p)=>p.id===Number(id));

return(

<>

<Navbar/>

<section className="details">

<div className="details-left">

<img src={item.image} alt={item.name}/>

</div>

<div className="details-right">

<h1>{item.name}</h1>

<h2>{item.price}</h2>

<p>{item.duration}</p>

<p>

⭐⭐⭐⭐⭐ {item.rating}

</p>

<button>

Book Now

</button>

</div>

</section>

<Footer/>

</>

);

}

export default PackageDetails;