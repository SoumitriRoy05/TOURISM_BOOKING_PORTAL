// import Navbar from "../components/Navbar/Navbar";
// import Hero from "../components/Hero/Hero";
// import Destinations from "../components/Destinations/Destinations";
//
// function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Destinations />
//     </>
//   );
// }
//
// export default Home;

// import Navbar from "../components/Navbar/Navbar";
// import Hero from "../components/Hero/Hero";
// import Destinations from "../components/Destinations/Destinations";
// import Footer from "../components/Footer/Footer";
//
// function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Destinations />
//       <Footer />
//     </>
//   );
// }
//
// export default Home;

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import TravelServices from "../components/TravelServices/TravelServices";
import Destinations from "../components/Destinations/Destinations";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div className="home-page-wrapper">
      <Navbar />
      <Hero />
      <TravelServices />
      <Destinations />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default Home;


