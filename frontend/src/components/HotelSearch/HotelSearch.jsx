import "./HotelSearch.css";

import {
FaMapMarkerAlt,
FaCalendarAlt,
FaUsers,
FaSearch
} from "react-icons/fa";

function HotelSearch(){

return(

<div className="hotel-search">

<div className="hotel-search-card">

<div className="hotel-field">

<FaMapMarkerAlt/>

<input
placeholder="Destination"
/>

</div>

<div className="hotel-divider"></div>

<div className="hotel-field">

<FaCalendarAlt/>

<input type="date"/>

</div>

<div className="hotel-divider"></div>

<div className="hotel-field">

<FaCalendarAlt/>

<input type="date"/>

</div>

<div className="hotel-divider"></div>

<div className="hotel-field">

<FaUsers/>

<select>

<option>2 Guests</option>

<option>4 Guests</option>

<option>Family</option>

</select>

</div>

<button>

<FaSearch/>

Search Hotels

</button>

</div>

</div>

);

}

export default HotelSearch;