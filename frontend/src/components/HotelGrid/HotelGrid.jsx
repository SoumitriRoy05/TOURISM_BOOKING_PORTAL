import "./HotelGrid.css";

import HotelCard from "../HotelCard/HotelCard";

function HotelGrid({hotels}){

return(

<div className="hotel-grid-wrapper">

<HotelCard hotels={hotels}/>

</div>

);

}

export default HotelGrid;