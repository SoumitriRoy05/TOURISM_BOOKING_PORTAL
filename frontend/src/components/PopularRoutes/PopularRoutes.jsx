import "./PopularRoutes.css";

const routes=[

["Delhi","Goa","₹4,299"],

["Mumbai","Kochi","₹3,999"],

["Bangalore","Leh","₹6,499"],

["Kolkata","Shillong","₹3,799"]

];

function PopularRoutes(){

return(

<section className="routes">

<h2>

Popular Routes

</h2>

<div className="route-grid">

{routes.map((route,index)=>(

<div className="route-card" key={index}>

<h3>

{route[0]}

→

{route[1]}

</h3>

<h1>

{route[2]}

</h1>

<button>

Book Now

</button>

</div>

))}

</div>

</section>

);

}

export default PopularRoutes;