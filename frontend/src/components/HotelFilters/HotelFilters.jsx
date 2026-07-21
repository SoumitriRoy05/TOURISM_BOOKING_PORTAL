import "./HotelFilters.css";

function HotelFilters(){

return(

<div className="hotel-filters">

<h2>Filters</h2>

<div className="filter-box">

<h4>Price</h4>

<input
type="range"
min="1000"
max="25000"
/>

</div>

<div className="filter-box">

<h4>Rating</h4>

<label><input type="checkbox"/> ⭐⭐⭐⭐⭐</label>

<label><input type="checkbox"/> ⭐⭐⭐⭐+</label>

<label><input type="checkbox"/> ⭐⭐⭐+</label>

</div>

<div className="filter-box">

<h4>Amenities</h4>

<label><input type="checkbox"/> Free WiFi</label>

<label><input type="checkbox"/> Swimming Pool</label>

<label><input type="checkbox"/> Breakfast</label>

<label><input type="checkbox"/> Spa</label>

<label><input type="checkbox"/> Parking</label>

</div>

</div>

);

}

export default HotelFilters;