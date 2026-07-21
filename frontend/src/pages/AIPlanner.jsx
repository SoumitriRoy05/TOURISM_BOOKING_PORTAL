// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
//
// import AIHero from "../components/AIHero/AIHero";
// import PlannerForm from "../components/PlannerForm/PlannerForm";
// import SampleTrips from "../components/SampleTrips/SampleTrips";
// import AIFeatures from "../components/AIFeatures/AIFeatures";
//
// function AIPlanner() {
//   return (
//     <>
//       <Navbar />
//
//       <AIHero />
//
//       <PlannerForm />
//
//       <SampleTrips />
//
//       <AIFeatures />
//
//       <Footer />
//     </>
//   );
// }
//
// export default AIPlanner;

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AIChat from "../components/AIChat/AIChat";

import "./AIPlanner.css";

function AIPlanner() {
  return (
    <>
      <Navbar />

      <section className="planner-hero">

        <div className="planner-overlay">

          <span className="planner-tag">
            🤖 BharatYatra AI Assistant
          </span>

          <h1>
            Plan Your Perfect
            <br />
            Indian Adventure
          </h1>

          <p>
            Chat with BharatYatra AI and generate
            personalized itineraries, hotel suggestions,
            flights and budget plans in seconds.
          </p>

        </div>

      </section>

      <AIChat />

      <Footer />
    </>
  );
}

export default AIPlanner;