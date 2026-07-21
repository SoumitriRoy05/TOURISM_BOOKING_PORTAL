import "./DashboardGrid.css";

import RecommendedHotels from "./RecommendedHotels";
import WeatherWidget from "./WeatherWidget";

function DashboardGrid(){

return(

<div className="dashboard-grid">

<div>

<RecommendedHotels/>

</div>

<div>

<WeatherWidget/>

</div>

</div>

);

}

export default DashboardGrid;