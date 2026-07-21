import "./FlightDeals.css";

import flights from "../../data/flights";

function FlightDeals(){

return(

<section className="results">

{flights.map((flight)=>(

<div
className="result-card"
key={flight.id}
>

<div>

<h2>

{flight.airline}

</h2>

<p>

{flight.from}

→

{flight.to}

</p>

</div>

<div>

<h3>

{flight.departure}

</h3>

<p>

{flight.duration}

</p>

<h3>

{flight.arrival}

</h3>

</div>

<div>

<span>

{flight.stops}

</span>

</div>

<div>

<h2>

{flight.price}

</h2>

<p className="badge">

{flight.badge}

</p>

</div>

<button>

Book Flight

</button>

</div>

))}

</section>

);

}

export default FlightDeals;